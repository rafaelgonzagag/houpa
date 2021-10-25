-- MySQL dump 10.16  Distrib 10.2.15-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: houpa
-- ------------------------------------------------------
-- Server version	10.2.15-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hexagonalCode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'FFFFFF','#FFFFFF','2021-10-25 22:13:48','2021-10-25 22:13:48'),(2,'FEFDF9','#FEFDF9','2021-10-25 22:13:49','2021-10-25 22:13:49'),(3,'C8C8C8','#C8C8C8','2021-10-25 22:13:49','2021-10-25 22:13:49'),(4,'222222','#222222','2021-10-25 22:13:49','2021-10-25 22:13:49'),(5,'A79881','#A79881','2021-10-25 22:13:49','2021-10-25 22:13:49'),(6,'00BFCB','#00BFCB','2021-10-25 22:13:49','2021-10-25 22:13:49'),(7,'CDEEFC','#CDEEFC','2021-10-25 22:13:49','2021-10-25 22:13:49'),(8,'1637E6','#1637E6','2021-10-25 22:13:49','2021-10-25 22:13:49'),(9,'214090','#214090','2021-10-25 22:13:49','2021-10-25 22:13:49'),(10,'F8C4E3','#F8C4E3','2021-10-25 22:13:49','2021-10-25 22:13:49'),(11,'F23DF5','#F23DF5','2021-10-25 22:13:49','2021-10-25 22:13:49'),(12,'D8BCF8','#D8BCF8','2021-10-25 22:13:49','2021-10-25 22:13:49'),(13,'9905CC','#9905CC','2021-10-25 22:13:49','2021-10-25 22:13:49'),(14,'129731','#129731','2021-10-25 22:13:49','2021-10-25 22:13:49'),(15,'94EBA8','#94EBA8','2021-10-25 22:13:49','2021-10-25 22:13:49'),(16,'FFFD00','#FFFD00','2021-10-25 22:13:49','2021-10-25 22:13:49'),(17,'E2DECA','#E2DECA','2021-10-25 22:13:49','2021-10-25 22:13:49'),(18,'D8AF72','#D8AF72','2021-10-25 22:13:49','2021-10-25 22:13:49'),(19,'832619','#832619','2021-10-25 22:13:49','2021-10-25 22:13:49'),(20,'BC0000','#BC0000','2021-10-25 22:13:49','2021-10-25 22:13:49'),(21,'FF0606','#FF0606','2021-10-25 22:13:49','2021-10-25 22:13:49'),(22,'FF8A00','#FF8A00','2021-10-25 22:13:49','2021-10-25 22:13:49'),(23,'FFBDA8','#FFBDA8','2021-10-25 22:13:49','2021-10-25 22:13:49'),(24,'F7D6BE','#F7D6BE','2021-10-25 22:13:49','2021-10-25 22:13:49'),(25,'F9EFBB','#F9EFBB','2021-10-25 22:13:49','2021-10-25 22:13:49'),(26,'ADADAD','#ADADAD','2021-10-25 22:13:50','2021-10-25 22:13:50'),(27,'E16868','#E16868','2021-10-25 22:13:50','2021-10-25 22:13:50');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2021_10_15_220458_create_products_table',1),(6,'2021_10_16_210831_create_colors_table',1),(7,'2021_10_16_210900_create_sizes_table',1),(8,'2021_10_16_210925_create_product_photos_table',1),(9,'2021_10_16_210950_create_product_items_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\User',1,'appvitrinetoken','d59804785188cdc1ca8b07afc919f868bb9f50789d31ffa6ff2df34caac7a7d5','[\"*\"]','2021-10-25 22:24:43','2021-10-25 22:17:31','2021-10-25 22:24:43'),(2,'App\\Models\\User',1,'appvitrinetoken','8fd6bf910b530cd89aa8555c305aee7a6bda3590a3f679fe7b5ce26e3f072fa7','[\"*\"]','2021-10-25 22:30:25','2021-10-25 22:22:00','2021-10-25 22:30:25');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_items`
--

DROP TABLE IF EXISTS `product_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_items` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `productId` bigint(20) unsigned NOT NULL,
  `sizeId` bigint(20) unsigned NOT NULL,
  `colorId` bigint(20) unsigned NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_items_productid_foreign` (`productId`),
  KEY `product_items_sizeid_foreign` (`sizeId`),
  KEY `product_items_colorid_foreign` (`colorId`),
  CONSTRAINT `product_items_colorid_foreign` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`),
  CONSTRAINT `product_items_productid_foreign` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `product_items_sizeid_foreign` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_items`
--

LOCK TABLES `product_items` WRITE;
/*!40000 ALTER TABLE `product_items` DISABLE KEYS */;
INSERT INTO `product_items` VALUES (4,2,1,1,4,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(5,2,2,1,6,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(6,2,3,1,4,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(7,3,1,1,2,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(8,3,2,1,1,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(9,3,3,1,6,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(10,4,1,1,7,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(11,4,2,1,1,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(12,4,3,1,6,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(13,5,1,1,4,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(14,5,2,1,2,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(15,5,3,1,2,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(16,6,1,1,5,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(17,6,2,1,6,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(18,6,3,1,5,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(19,7,1,1,10,'2021-10-25 22:19:14','2021-10-25 22:19:14'),(20,7,2,1,2,'2021-10-25 22:19:14','2021-10-25 22:19:14'),(21,7,3,1,8,'2021-10-25 22:19:14','2021-10-25 22:19:14'),(22,7,1,2,0,'2021-10-25 22:19:15','2021-10-25 22:19:15'),(23,7,2,2,0,'2021-10-25 22:19:15','2021-10-25 22:19:15'),(24,7,3,2,0,'2021-10-25 22:19:15','2021-10-25 22:19:15');
/*!40000 ALTER TABLE `product_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_photos`
--

DROP TABLE IF EXISTS `product_photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_photos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `productId` bigint(20) unsigned NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_photos_productid_foreign` (`productId`),
  CONSTRAINT `product_photos_productid_foreign` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_photos`
--

LOCK TABLES `product_photos` WRITE;
/*!40000 ALTER TABLE `product_photos` DISABLE KEYS */;
INSERT INTO `product_photos` VALUES (1,7,'823531635189555.png','2021-10-25 22:19:15','2021-10-25 22:19:15'),(2,7,'750141635189555.png','2021-10-25 22:19:15','2021-10-25 22:19:15');
/*!40000 ALTER TABLE `product_photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'VESTIDO - RANDY KOVACEK','Mollitia repellat placeat nostrum distinctio aut quia. Consectetur repellendus harum impedit quae. Qui et ipsa consequatur similique. Incidunt magni blanditiis nihil itaque.',175.53,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(3,'Outro TOP CROPPED VISCOSE','TOP CROPPED VISCOSE é o cropped básico que combina com tudo!  Com elasticidade na medida certa, o cropped é feito em crepe de viscose.',150.00,'2021-10-25 22:13:50','2021-10-25 22:19:24'),(4,'VESTIDO - HERTHA MCKENZIE V','Delectus commodi tenetur sunt expedita voluptatem. Suscipit rerum suscipit et eos velit. Omnis similique repudiandae qui quia id.',153.22,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(5,'VESTIDO - ERNIE SPINKA','Recusandae in qui facere ea rerum nesciunt deleniti. Ipsum esse omnis exercitationem maiores consequatur autem. Et ipsam ipsa quae eos hic provident.',75.73,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(6,'VESTIDO - REESE SWIFT IV','Beatae deleniti nemo repellendus. Reiciendis aut nulla mollitia voluptatem et molestias. Inventore pariatur sit assumenda vel corporis iusto possimus.',110.90,'2021-10-25 22:13:50','2021-10-25 22:13:50'),(7,'VESTIDO BOLINHA  VISCOSE','TOP CROPPED VISCOSE é o cropped básico que combina com tudo!  Com elasticidade na medida certa, o cropped é feito em crepe de viscose.',69.60,'2021-10-25 22:19:14','2021-10-25 22:19:14'),(8,'NOVO PRODUTO TESTE','NOVO PRODUTO TESTE',180.00,'2021-10-25 22:22:19','2021-10-25 22:22:19');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sizes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'P','2021-10-25 22:13:48','2021-10-25 22:13:48'),(2,'M','2021-10-25 22:13:48','2021-10-25 22:13:48'),(3,'G','2021-10-25 22:13:48','2021-10-25 22:13:48'),(4,'PP','2021-10-25 22:13:48','2021-10-25 22:13:48'),(5,'EXG','2021-10-25 22:13:48','2021-10-25 22:13:48'),(6,'G1','2021-10-25 22:13:48','2021-10-25 22:13:48'),(7,'G2','2021-10-25 22:13:48','2021-10-25 22:13:48'),(8,'G3','2021-10-25 22:13:48','2021-10-25 22:13:48'),(9,'G4','2021-10-25 22:13:48','2021-10-25 22:13:48');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'AppVitrine','app-vitrine@houpa.com',NULL,'$2y$10$DYVgmViWt5WJ/Et1DUUMaeXJQldMGRH9E1Wtj.vcER3.EiXcnlqzS',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'houpa'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-25 16:31:50
