CREATE TABLE USERS (
    user_id int auto_increment PRIMARY KEY,
    name varchar(100) not null,
    cpf varchar(11) unique not null,
    email varchar(100) unique not null,
    phone_number varchar(15) not null,
    password varchar(2000) not null,
    role enum('client', 'admin'),
    created_at datetime default current_timestamp,
    active int default 1 not null,
    UNIQUE (cpf, email)
);

CREATE TABLE CATEGORIES (
    category_id int auto_increment PRIMARY KEY,
    name varchar(100) not null
);

CREATE TABLE PAYMENTS (
    payment_id int auto_increment PRIMARY KEY,
    fk_order_id int not null,
    amount decimal(10, 2) not null,
    payment_method enum('cash', 'card', 'pix') default 'cash' not null,
    created_at datetime default current_timestamp
);

CREATE TABLE DELIVERY_ADDRESSES (
    delivery_address_id int auto_increment PRIMARY KEY,
    fk_user_id int not null,
    city varchar(100) not null,
    neighborhood varchar(100) not null,
    street varchar(100) not null,
    number int not null,
    cep varchar(8) not null,
    created_at datetime default current_timestamp
);

CREATE TABLE ORDERS (
    order_id int auto_increment PRIMARY KEY,
    fk_user_id int not null,
    total_amount decimal(10, 2) not null,
    status  enum('processing','shipped', 'delivered', 'canceled') default 'processing' not null,
    created_at datetime default current_timestamp
);

CREATE TABLE PRODUCTS (
    product_id int auto_increment PRIMARY KEY,
    fk_category_id int not null,
    name varchar(100) not null,
    unit int not null,
    price decimal(10, 2) not null,
    stock_quantity int not null,
    created_at datetime default current_timestamp,
    active int default 1 not null
);

CREATE TABLE ORDER_ITEMS (
    order_items_id int auto_increment PRIMARY KEY,
    fk_order_id int not null,
    fk_product_id int not null
);
 
ALTER TABLE PAYMENTS ADD CONSTRAINT fk_orders_payments
    FOREIGN KEY (fk_order_id)
    REFERENCES ORDERS (order_id);
 
ALTER TABLE DELIVERY_ADDRESSES ADD CONSTRAINT fk_users_delivery_addresses
    FOREIGN KEY (fk_user_id)
    REFERENCES USERS (user_id);
 
ALTER TABLE ORDERS ADD CONSTRAINT fk_users_orders
    FOREIGN KEY (fk_user_id)
    REFERENCES USERS (user_id);
 
ALTER TABLE PRODUCTS ADD CONSTRAINT fk_categories_products
    FOREIGN KEY (fk_category_id)
    REFERENCES CATEGORIES (category_id);
 
ALTER TABLE ORDER_ITEMS ADD CONSTRAINT fk_orders_order_items
    FOREIGN KEY (fk_order_id)
    REFERENCES ORDERS (order_id);
 
ALTER TABLE ORDER_ITEMS ADD CONSTRAINT fk_products_order_items
    FOREIGN KEY (fk_product_id)
    REFERENCES PRODUCTS (product_id);