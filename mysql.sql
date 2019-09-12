CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NULL, 
price INT(10) NOT NULL,
stock_quantity INT(10) NOT NULL,
PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
	("Tooth Brush", "Oral Care", 5, 1000),
    ("Pringles", "Food", 2, 1000),
    ("Iphone 20", "Electronics", 20000, 50000),
    ("Macbook", "Electronics", 1000, 500),
    ("Nike Socks", "Clothing", 10, 250),
    ("Sunflower", "Floral", 15, 300),
    ("Hair Ties", "Personal Accessories", 1, 350),
    ("Lamborghini Aventador", "Automobile", 20000, 1),
    ("Gucci Sunglasses", "Personal Accessories", 800, 100),
    ("Yeezy's", "Shoes", 1000, 35);
    
    SELECT* FROM products;