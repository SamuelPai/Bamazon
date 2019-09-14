var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "SamPai159$",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    readProducts();
});



function readProducts(products) {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        inquirer
            .prompt([
                // Here we create a basic text prompt.
                {
                    type: "list",
                    message: "What would you like to do?",
                    choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
                    name: "choices"
                }

            ]).then(function (val) {
                switch (val.choices) {
                    case "View Products for Sale":
                        var items = [];

                        if (err) throw err;
                        for (var i = 0; i < res.length; i++) {
                            items.push("Item ID: " + res[i].item_id + ", Item Name: " + res[i].product_name + ", Price: $" + res[i].price + ", Quantity: " + res[i].stock_quantity);
                        }

                        for (var x = 0; x < items.length; x++) {
                            console.log(items[x]);
                        }
                        connection.end();
                        

                    break;

                    case "View Low Inventory":
                    connection.query("SELECT * FROM products WHERE stock_quantity <= 5", function(err, res) {
                        if (err) throw err;
                        var lowStock = [];
                        for (var i = 0; i < res.length; i++) {
                            lowStock.push("Item ID: " + res[i].item_id + ", Item Name: " + res[i].product_name + ", Price: $" + res[i].price + ", Quantity: " + res[i].stock_quantity);
                        }
                        for (var x = 0; x < lowStock.length; x++) {
                            console.table (lowStock[x]);
                        }
                        
                        
                    })


                    connection.end();
                    break;
                    

                    case "Add to Inventory":
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "choice",
                            message: "What is the id of the item you would like to add stock to?"
                        },
                        {
                            type: "input",
                            name: "stock",
                            message: "How many units would you like to add?"
                        }
                        
                    ]).then(function(response) {
                       
                        connection.query(
                            "SELECT * FROM products WHERE ?", {
                                item_id: response.choice,
                            }, function(err, res) {
                                if (err) throw err;
                                const stockQuantity = parseInt(res[0].stock_quantity) + parseInt(response.stock);
                                connection.query(
                                    "UPDATE products SET ? WHERE ?",
                                    [
                                      {
                                        stock_quantity: stockQuantity
                                      },
                                      {
                                        item_id: response.choice
                                      }
                                    ]
                                    
                                  )
                                  console.log(stockQuantity);
                                  connection.end();
                            }
                            
                              
                              
                              
                              
                              
                            
                          );
                          
                          
                          
                    })
                    break;

                    case "Add New Product":
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "productName",
                            message: "What is name of the product you would like to add?"
                        },
                        {
                            type: "input",
                            name: "price",
                            message: "How much does the product cost?"
                        },
                        {
                            type: "input",
                            name: "quantity",
                            message: "What is the stock quantity of the product?"
                        }
                        
                    ]).then(function(res) {
                        connection.query(
                            "INSERT INTO products SET ?",
                            {
                                product_name: res.productName,
                                price: res.price,
                                stock_quantity: res.quantity
                            }, 
                            function(err) {
                                if (err) throw err;
                            }
                        )
                        connection.end();

                    })
                    break;

                } 
                

                

            }) 


    })
}

//add function here