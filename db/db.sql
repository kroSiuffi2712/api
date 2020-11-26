CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE employees(
id INT(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(45) DEFAULT NULL,
salary INT(11) DEFAULT NULL,
PRIMARY KEY(id)
);

DESCRIBE employees;

INSERT INTO employees value
(1,'test1 test', 2000),
(2,'test2 test', 2200),
(3,'test3 test', 5000),
(4,'test4 test', 3000);

SELECT * FROM employees