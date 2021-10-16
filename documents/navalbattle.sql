-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 16 oct. 2021 à 12:28
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `navalbattle`
--

-- --------------------------------------------------------

--
-- Structure de la table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `idPlayer` int(11) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `history`
--

INSERT INTO `history` (`id`, `date`, `idPlayer`, `score`) VALUES
(1, '0000-00-00 00:00:00', 3, 40),
(2, '0000-00-00 00:00:00', 4, 40),
(3, '0000-00-00 00:00:00', 5, 40),
(4, '0000-00-00 00:00:00', 6, 19),
(5, '0000-00-00 00:00:00', 7, 19);

-- --------------------------------------------------------

--
-- Structure de la table `player`
--

CREATE TABLE `player` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `player`
--

INSERT INTO `player` (`id`, `pseudo`, `mail`, `date`) VALUES
(1, 'jesuisbeau', 'alex.schmidt59@icloud.com', '0000-00-00 00:00:00'),
(2, 'jesuisbeau', 'alex.schmidt59@icloud.com', '0000-00-00 00:00:00'),
(3, 'jesuisbeau', 'alex.schmidt59@icloud.com', '0000-00-00 00:00:00'),
(4, 'jesuisbeau', 'alex.schmidt59@icloud.com', '0000-00-00 00:00:00'),
(5, 'jesuisbeau', 'alex.schmidt59@icloud.com', '0000-00-00 00:00:00'),
(6, 'Alexandre', 'aschmidt@myges.fr', '0000-00-00 00:00:00'),
(7, 'Alexandre', 'aschmidt@myges.fr', '0000-00-00 00:00:00');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `player`
--
ALTER TABLE `player`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
