# bamazon
This app has two components, one for customers and another for managers. The customer app will allow users to view what items are in stock and how many items the users would like to buy. The manager app will allow users to view products, view low inventory, add to inventory, and add new product. Both are built using Node.js and Mysql. 

The bamazon app is organized into 3 main files: bamazonCustomer.js, bamazonManager.js, and mysql.sql. Both the js files are linked to the mysql database in order to populate and store product data.

How to Use Bamazon: In order to use this app, users will need to use node.js in association with their computer's command line.

bamazonCustomer.js: Once users run this application, users will be displayed a list of the items currently available to buy. Each item has a specific ID. Users will be asked to input the ID of the item they choose to purchase. Next, users will input how many units of the selected product they want to buy. If there is not enough stock available, users will receive a message notifying them of unavailability. If in stock, users will be shown the stock quantity of the product, in addition to the total cost of their purchase.

bamazonManager.js: Once users run this application, they will be prompted with 4 choices... "View Producucts for Sale, View Low Inventory, Add to Inventory, and Add New Product". View Products for Sale allows users to see a list of items that are available to buy. View Low Inventory allows users to see which items have a stock quantity less than 5. Add to Inventory allows users to add any amount of stock to the products available to buy, they just have to input the id of the target item, and the additional stock in the form of a number. It will then display the updated stock quantity. Lastly, the Add New Product option allows users to add a new product to the list of items available to buy (will insert into the mysql database). They will be prompted to input the name of the new product, the price, and the stock quantity. 


Technologies Used: Javascript, Node.js, NPM, MySQL 
Created by: Sam Pai. For any questions or for further information, please email me at SamuelPai16@gmail.com
