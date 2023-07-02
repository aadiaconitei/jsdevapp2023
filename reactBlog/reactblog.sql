-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 02, 2023 at 02:29 AM
-- Server version: 10.1.39-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactblog`
--
CREATE DATABASE IF NOT EXISTS `reactblog` DEFAULT CHARACTER SET ucs2 COLLATE ucs2_general_ci;
USE `reactblog`;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nume` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `nume`) VALUES
(1, 'General'),
(2, 'PHP'),
(3, 'HTML'),
(4, 'JavaScript'),
(5, 'Functions'),
(6, 'Variables'),
(7, 'Forms');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titlu` varchar(128) NOT NULL,
  `continut` text NOT NULL,
  `poza` varchar(64) DEFAULT NULL,
  `user_id` int(10) NOT NULL,
  `categorie_id` int(11) NOT NULL DEFAULT '1',
  `dataadaugare` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title_UNIQUE` (`titlu`),
  KEY `category` (`categorie_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `titlu`, `continut`, `poza`, `user_id`, `categorie_id`, `dataadaugare`) VALUES
(1, 'Learn JavaScript', '<h2><strong>About this course</strong></h2><p>This course is designed to teach you the fundamentals of the JavaScript programming language and to give you lots of practice along the way! We\'ll look at how to structure and group information in your app with data types, how to use programming logic so your app does what you want it to and how to write readable code so you can more easily modify, maintain, and share your apps.</p>', '1688158402801_2.jpeg', 8, 4, '2023-06-30 20:53:22'),
(2, 'Learn Node.js', '<p><strong style=\"color: rgb(0, 0, 0);\">This advanced Node.js course</strong><span style=\"color: rgb(0, 0, 0);\"> focuses on topics like Redis for caching, worker threads and clustering, and integrating image uploads using Node and S3! Students will also learn about event loop steps and how to use AWS S3 to implement scalable uploads.</span></p>', '1688243686410_6.png', 8, 4, '2023-07-01 20:34:46'),
(3, 'Node.js Developer Roadmap 2023', '<p>In this article, we will explore nodejs developer roadmap for 2023. A step-by-step guide to how to become nodejs developer or&nbsp;increase&nbsp;your knowledge.</p><p><strong>One of the most read articles of mine was the Nodejs developer roadmap in 2022.</strong> This article is a new version of the roadmap in 2023 with an extension to the old version :)</p><p><br></p>', '1688243996260_5.jpeg', 8, 4, '2023-07-01 20:39:56'),
(4, 'Vue JS Get Array Length ', '<p>Today, I will learn you how to get <strong style=\"color: rgb(230, 0, 0);\">array length or object length in vue</strong> js. we will show example of vue js get array length or object length. i will <strong>give example for vue js get object length. if you worked with javascript jquery</strong> then you know you can get array length by variable.length so same way you can get array length or object length in vue js application.</p><p><br></p><p>I give you bellow very simple example so you can understand how to getting array length or object length in vue js code.</p>', '1688248133787_3.jpg', 8, 5, '2023-07-01 21:48:53'),
(5, 'Bootstrap Grid system', '<h1>Grid system</h1><p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.</p><h2>How it works</h2><p>Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with&nbsp;<a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: transparent; color: rgb(0, 123, 255);\">flexbox</a>&nbsp;and is fully responsive. Below is an example and an in-depth look at how the grid comes together.</p>', '1688248465732_2.jpg', 8, 3, '2023-07-01 21:54:25'),
(6, 'How to Integrate Paytm Payment Gateway', '<p><strong>This tutorial is focused on how to integrate the Paytm payment gateway in PHP. you\'ll learn Paytm payment gateway integration in PHP. We will use Paytm payment gateway integration using PHP. if you have a question about how to integrate the Paytm payment gateway using PHP then I will give a simple example with a solution.</strong></p><p>Now, let\'s see the article on how to integrate the Paytm payment gateway using PHP. it\'s a simple example of Paytm payment gateway integration using PHP. you can understand the concept of Paytm payment gateway integration in PHP. if you have a question about how to integrate the Paytm payment gateway in PHP then I will give a simple example with a solution.</p>', '1688253936522_2.jpg', 8, 2, '2023-07-01 23:25:36');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(64) NOT NULL,
  `nume` varchar(64) NOT NULL,
  `prenume` varchar(64) NOT NULL,
  `parola` varchar(256) NOT NULL,
  `dataadaugare` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `nume`, `prenume`, `parola`, `dataadaugare`) VALUES
(8, 'demo@yahoo.com', 'Demo', 'Ion', '$2a$10$ZBAkb.Z2jBTFopxRYFkbp.LeXALQmguACW28lp8CqhbjhcOhC1kj6', '2023-06-19 21:29:07');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`categorie_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
