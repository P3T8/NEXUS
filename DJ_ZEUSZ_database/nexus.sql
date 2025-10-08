-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Okt 08. 15:12
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `nexus`
--
CREATE DATABASE IF NOT EXISTS `nexus` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE `nexus`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `spaceships`
--

CREATE TABLE `spaceships` (
  `id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL,
  `style_neve` varchar(100) DEFAULT NULL,
  `evek` int(11) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `spaceships`
--

INSERT INTO `spaceships` (`id`, `nev`, `style_neve`, `evek`, `type_id`) VALUES
(1, 'Yamato', 'Military', 2199, 1),
(2, 'Arcadia', 'Pirate', 2977, 2),
(3, 'White Base', 'Carrier', 79, 2),
(4, 'Outlaw Star', 'Gunship', 156, 2),
(5, 'Swordfish II', 'Interceptor', 2071, 3),
(6, 'Hammerhead', 'Police', 2071, 3),
(7, 'Cathedral Terra', 'Capital Ship', 2199, 1),
(8, 'Gekko-Go', 'Dropship', 2005, 4),
(9, 'Musashi', 'Battleship', 2005, NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `spaceship_neve` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `type`
--

INSERT INTO `type` (`id`, `spaceship_neve`) VALUES
(1, 'Battleship'),
(2, 'Cruiser'),
(3, 'Fighter'),
(4, 'Transport');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `spaceships`
--
ALTER TABLE `spaceships`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_type` (`type_id`);

--
-- A tábla indexei `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `spaceships`
--
ALTER TABLE `spaceships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `spaceships`
--
ALTER TABLE `spaceships`
  ADD CONSTRAINT `fk_type` FOREIGN KEY (`type_id`) REFERENCES `type` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
