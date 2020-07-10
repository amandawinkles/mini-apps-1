-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'accounts'
--
-- ---

DROP TABLE IF EXISTS `accounts`;

CREATE TABLE `accounts` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  `email` VARCHAR(255),
  `password` VARCHAR(255),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'contactInfo'
--
-- ---

DROP TABLE IF EXISTS `contactInfo`;

CREATE TABLE `contactInfo` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `address1` VARCHAR(255),
  `address2` VARCHAR(255),
  `city` VARCHAR(255),
  `state` VARCHAR(2),
  `zip` INTEGER(5),
  `phone` INTEGER(10),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'cardInfo'
--
-- ---

DROP TABLE IF EXISTS `cardInfo`;

CREATE TABLE `cardInfo` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `cardNumber` BIGINT,
  `expiration` VARCHAR(9)L,
  `cvv` INTEGER,
  `zip` INTEGER(5),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'orders'
--
-- ---

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `accountId` INTEGER,
  `contactId` INTEGER,
  `cardId` INTEGER,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `orders` ADD FOREIGN KEY (accountId) REFERENCES `accounts` (`id`);
ALTER TABLE `cardInfo` ADD FOREIGN KEY (accountId) REFERENCES `accounts` (`id`);
ALTER TABLE `contactInfo` ADD FOREIGN KEY (accountId) REFERENCES `accounts` (`id`);
ALTER TABLE `orders` ADD FOREIGN KEY (contactId) REFERENCES `contactInfo` (`id`);
ALTER TABLE `orders` ADD FOREIGN KEY (cardId) REFERENCES `cardInfo` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `accounts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `contactInfo` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `cardInfo` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `orders` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `accounts` (`id`,`name`,`email`,`password`) VALUES
-- ('','','','');
-- INSERT INTO `contactInfo` (`id`,`address1`,`address2`,`city`,`state`,`zip`) VALUES
-- ('','','','','','');
-- INSERT INTO `cardInfo` (`id`,`cardNumber`,`expiration`,`cvv`,`zip`) VALUES
-- ('','','','','');
-- INSERT INTO `orders` (`id`) VALUES
-- ('');