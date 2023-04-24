-- Active: 1682028343344@@127.0.0.1@3306

-- CREATE TABLE users (
--     id TEXT PRIMARY KEY NOT NULL UNIQUE,
--     email TEXT NOT NULL UNIQUE,
--     password TEXT NOT NULL 
-- );

-- SELECT *FROM users;

-- INSERT INTO users (id,email,password)
-- VALUES
-- ('alice',"alice@email.com","senha3"),
-- ('bigode',"bigode@email.com","senha4"),
-- ('mainha',"mainha@email.com","senha5");

-- CREATE TABLE products(
--   id TEXT PRIMARY KEY NOT NULL UNIQUE,
--   name TEXT NOT NULL,
--   price REAL NOT NULL,
--   category TEXT NOT NULL
-- );

-- SELECT*FROM products;

-- INSERT INTO products(id, name, price, category)
-- VALUES
-- (3, "guitar strings", 50, "accessories"),
-- (4, "guitar strap", 40, "accessories"),
-- (5, "bass strap", 40, "accessories"),
-- (6, "bass pick", 10, "accessories"),
-- (7, "guitar pick", 10, "accessories");

-- --aprofundamento

-- SELECT*FROM users;


-- SELECT*FROM products;

-- SELECT*FROM products
-- WHERE name LIKE "%guitar";

-- INSERT INTO users 
-- VALUES
-- ('ruth',"ruth@email.com","senha8");

-- INSERT INTO products
-- VALUES
-- (8, "distorcion pedal", 50, "accessories");

-- SELECT*FROM products
-- WHERE id LIKE "%8";

-- DELETE FROM products
-- WHERE id = "8";

-- DELETE FROM users
-- WHERE id = "ruth";

-- UPDATE users
-- SET 
-- password="novasenha"
-- WHERE id="mainha";


-- UPDATE products
-- SET 
-- name= "guitar picks"
-- WHERE id="7";


-- SELECT*FROM users 
-- ORDER BY email ASC;

-- SELECT*FROM products 
-- ORDER BY price ASC
-- LIMIT 20;

-- SELECT*FROM products 
-- WHERE price BETWEEN 10 AND 40
-- ORDER BY price ASC;

-- -- RELAÇÃO sql --

-- CREATE TABLE purchases (
--     id TEXT PRIMARY KEY NOT NULL UNIQUE,
--     total_price REAL NOT NULL,
--     paid INTEGER NOT NULL,
--     created_at TEXT ,
--     buyer_id TEXT NOT NULL, Foreign Key (buyer_id) REFERENCES users(id)
-- );

-- SELECT*FROM purchases;

-- INSERT INTO purchases ( id , total_price, paid , created_at , buyer_id)
-- VALUES
-- ("1", 10, 1, 0, "alice"),
-- ("2", 10, 1, 0, "alice"),
-- ("3", 10, 1, 0, "bigode"),
-- ("4", 10, 1, 0, "mainha");

-- UPDATE purchases
-- SET 
-- created_at= datetime('now','localtime'),
-- paid= 1
-- WHERE id = "4";

-- SELECT * FROM purchases
-- INNER JOIN users
-- ON purchases.buyer_id = users.id;

-- SELECT * FROM purchases;

-- --relacoes-sql-ii--

CREATE TABLE purchases_products(
    purchases_id TEXT NOT NULL,
    products_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchases_id)
    REFERENCES purchases (id),
    FOREIGN KEY (products_id) 
    REFERENCES products (id)
);



-- SELECT purchases_products, purchases ON purchases_products.purchases_id = purchases.id, products
-- *
-- FROM purchases_products
-- LEFT JOIN purchases ON purchases_products.purchases_id = purchases.id
-- LEFT JOIN products ON purchases_products.products_id = products.id;


CREATE TABLE purchases_products(
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchase_id)
    REFERENCES purchases (id),
    FOREIGN KEY (product_id) 
    REFERENCES products (id)
);
-- INSERT INTO purchases_products(purchase_id, product_id, quantity )
-- VALUES
-- ("C001","03", 1),
-- ("C002","04", 1);


-----------------knex intro----------

--Recriando users

CREATE Table users(
id TEXT PRIMARY KEY NOT NULL UNIQUE,
name TEXT NOT NULL,
email TEXT NOT NULL UNIQUE,
password TEXT NOT NULL,
createdAt TEXT NOT NULL DEFAULT (DATETIME())
);

INSERT INTO users (id,name,email,password,"createdAt")
VALUES
('Us001','alice',"alice@email.com","senha3",""),
('Us002','bigode',"bigode@email.com","senha4",""),
('Us003','mainha',"mainha@email.com","senha5","");

--Recriando Products
CREATE Table products(
id TEXT PRIMARY KEY NOT NULL UNIQUE,
name TEXT NOT NULL UNIQUE,
price REAL NOT NULL,
description TEXT NOT NULL,
imageUrl TEXT NOT NULL
);

INSERT INTO products(id, name, price, description, imageUrl)
VALUES
('Pr003', "guitar strings", 50, "accessories",""),
('Pr004', "guitar strap", 40, "accessories",""),
('Pr005', "bass strap", 40, "accessories",""),
('Pr006', "bass pick", 10, "accessories",""),
('Pr007', "guitar pick", 10, "accessories","");


-- --Recriando Purchases

CREATE TABLE purchases(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    buyer TEXT NOT NULL,
    totalPrice REAL NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT (datetime('now', 'localtime')),
    paid INTEGER NOT NULL,
    FOREIGN KEY (buyer) REFERENCES users(id)
);
INSERT INTO purchases ( id , buyer, totalPrice, createdAt, paid)
VALUES
('C001', 'Us001', 2.70, datetime('now', 'localtime'), 1),
('C002', 'Us002', 3.15, datetime('now', 'localtime'), 0),
('C003', 'Us003', 1.35, datetime('now', 'localtime'), 1),
('C004', 'Us002', 4.50, datetime('now', 'localtime'), 0),
('C005', 'Us003', 2.70, datetime('now', 'localtime'), 1);


CREATE TABLE purchases_products(
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL DEFAULT '1',
    FOREIGN KEY (purchase_id) 
    REFERENCES purchases(id),
    FOREIGN KEY (product_id) 
    REFERENCES products(id)
);
INSERT INTO purchases_products (purchase_id, product_id, quantity)
VALUES 
  ('C001', 'Pr003', 1),
  ('C002', 'Pr004', 1),
  ('C003', 'Pr005', 1),
  ('C002', 'Pr006', 1),
  ('C003', 'Pr007', 1);
  
SELECT 
  pp.purchase_id, 
  p.buyer, 
  pr.name, 
  pr.price, 
  pp.quantity, 
  pp.quantity * pr.price AS total_price
FROM purchases_products pp
JOIN purchases p ON p.id = pp.purchase_id
JOIN products pr ON pr.id = pp.product_id;








-- CREATE TABLE purchases(
--     id TEXT PRIMARY KEY UNIQUE NOT NULL,
--     buyer TEXT NOT NULL,
--     totalPrice REAL NOT NULL,
--     createdAt TIMESTAMP NOT NULL DEFAULT (datetime('now', 'localtime')),
--     paid INTEGER NOT NULL,
--     FOREIGN KEY (buyer) REFERENCES users(id));

-- CREATE TABLE purchases(
-- id TEXT PRIMARY KEY NOT NULL UNIQUE,
-- buyer_id TEXT NOT NULL,
-- --buyer_name TEXT UNIQUE,
-- totalPrice REAL NOT NULL,
-- createdAt DATE DEFAULT(DATETIME('now','localtime')),
-- paid INTEGER ,
-- Foreign Key (buyer_id) REFERENCES users(id)
-- --Foreign Key (buyer_name) REFERENCES users(name)
-- );

DROP Table products; 

DROP Table purchases;

DROP Table purchases_products;

DROP TABLE users;