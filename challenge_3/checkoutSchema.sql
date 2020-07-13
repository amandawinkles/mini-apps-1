DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;

USE checkout;
-- ---
-- Table 'user'
--
-- ---

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  `email` VARCHAR(255),
  `password` VARCHAR(255),
  `address1` VARCHAR(255),
  `address2` VARCHAR(255),
  `city` VARCHAR(255),
  `state` VARCHAR(2),
  `zip` INTEGER(5),
  `phone` INTEGER(10),
  `cardNumber` BIGINT,
  `expiration` VARCHAR(9),
  `cvv` INTEGER,
  `billingzip` INTEGER(5),
  PRIMARY KEY (`id`)
);