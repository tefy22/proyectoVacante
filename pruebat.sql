-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-09-2017 a las 05:51:56
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pruebat`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `actualizarUser` (IN `ced` INT(10), IN `nom` VARCHAR(50), IN `ape` VARCHAR(50), IN `em` VARCHAR(50), IN `tel` INT(10))  begin
	update usuario set nombres=nom, apellidos=ape, correo=em, telefono=tel where cedula=ced and id=id;
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `guardarUser` (IN `nombres` VARCHAR(50), IN `apellidos` VARCHAR(50), IN `cedula` INT(10), IN `correo` VARCHAR(30), IN `telefono` INT(10))  BEGIN
 	INSERT into usuario VALUES (id, nombres, apellidos, cedula, correo, telefono);
 	end$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(5) NOT NULL,
  `nombres` varchar(50) NOT NULL DEFAULT '0',
  `apellidos` varchar(50) NOT NULL DEFAULT '0',
  `cedula` int(10) NOT NULL DEFAULT '0',
  `correo` varchar(30) NOT NULL DEFAULT '0',
  `telefono` int(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombres`, `apellidos`, `cedula`, `correo`, `telefono`) VALUES
(1, 'stefania', 'Afanador Ortega', 1094267608, 'sa.ortega19@gmail.com', 2768542),
(2, 'enrique', 'garcia', 1090456638, 'enrique1@gmail.com', 2768542),
(3, 'Edilberto ', 'Gil', 3989665, 'edorv@outlook.es', 5677654),
(4, 'Maria', 'Mendoza', 22312446, 'mendoza23@gmail.com', 567444),
(5, 'Nilson', 'Rodriguez', 3828334, 'nrodriguez@gmail.com', 234321),
(6, 'Jesus', 'Rueda', 1090654909, 'rueda40@hotmail.com', 2789903),
(7, 'Kevin', 'Parra', 9898776, 'parra1@gmail.com', 12121212),
(8, 'Edinson', 'Carranza', 77886778, 'careta@gmail.com', 3342321);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
