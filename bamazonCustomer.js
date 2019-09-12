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
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    readProducts();
  });

  function readProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        var products = [];
       
        if (err) throw err;
    for (var i = 0; i < res.length; i++) {
        products.push("Item ID: " + res[i].item_id + ", Item Name: " + res[i].product_name + ", Price: " + res[i].price );
        }

        for (var x = 0; x < products.length; x++) {
            console.log(products[x]);
        }

        inquirer
        .prompt([
            // Here we create a basic text prompt.
            {
              type: "input",
              message: "What is the ID of the product you want to buy?",
              name: "productId"
            },
            {
              type: "input",
              message: "How many units of the product do you want to buy?",
              name: "quantity"
            }
            
          ]).then(function(inquirerResponse) {
              console.log('inqRes', inquirerResponse)
              connection.query("SELECT * FROM products WHERE ?", {
                  item_id: inquirerResponse.productId,
              }, function(err, res) {
                  console.log('res', res);
                  const stockQuantity = res[0].stock_quantity - inquirerResponse.quantity;
                  console.log('stockQ', stockQuantity);
                  if (err) throw err;
                    
                  connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                      {
                        stock_quantity: stockQuantity
                      },
                      {
                        item_id: inquirerResponse.productId
                      }
                    ],
                    function(error, result) {
                      if (error) throw err;
                      console.log("Bid placed successfully!");
                        connection.end();
                    }
                  );
              });
              
            })

  })

}


    