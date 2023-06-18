CREATE DATABASE IF NOT EXISTS chicken;
USE chicken;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS chicken (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    birthday DATE,
    weight FLOAT NOT NULL,
    steps INT DEFAULT 0,
    isRunning TINYINT DEFAULT 0
);