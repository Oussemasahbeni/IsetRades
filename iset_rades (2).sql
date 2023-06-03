-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2023 at 12:44 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iset_rades`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `email`, `password`) VALUES
(1, 'yassine', 'khemiriyassine549@gmail.com', '$2y$10$3HL733Hv5VVk5JwhFZWPMOZDt7tl4wyH6QRzRGESkF9wr35a0bQza'),
(2, 'admin', 'admin@gmail.com', '$2y$10$.2u4yAR23RhyOShygr/qN.VAn0uxS7AA3slm1fVMJrrH1VQeFDXgW');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `department_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `head_of_department` varchar(255) NOT NULL,
  `established_date` date NOT NULL,
  `phone` varchar(11) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `event_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `organizer` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `contact_phone` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `event_category`
--

CREATE TABLE `event_category` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `event_holder`
--

CREATE TABLE `event_holder` (
  `event_holder_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  `contact_phone` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `iset`
--

CREATE TABLE `iset` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `location` varchar(255) NOT NULL,
  `established_date` date NOT NULL,
  `website` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `total_students` int(11) NOT NULL,
  `founded_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `participate`
--

CREATE TABLE `participate` (
  `participation_id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `feedback` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `participate_teacher`
--

CREATE TABLE `participate_teacher` (
  `id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `feedback` text NOT NULL,
  `id_teacher` int(11) NOT NULL,
  `id_project` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `participation_call`
--

CREATE TABLE `participation_call` (
  `participation_id` int(11) NOT NULL,
  `call_date` date NOT NULL,
  `call_deadine` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `project_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `code_cat` int(11) NOT NULL,
  `project_country` varchar(255) NOT NULL,
  `project_holder` varchar(255) NOT NULL,
  `image_url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`project_id`, `title`, `description`, `start_date`, `end_date`, `code_cat`, `project_country`, `project_holder`, `image_url`) VALUES
(17, 'Erasmus', 'Erasmus', '2023-05-28', '2023-05-30', 100, 'Belgium', 'Iset Rades', 'https://firebasestorage.googleapis.com/v0/b/isetrades-e6283.appspot.com/o/uploads%2F844ce4ea45f783e1d6bc663cefd67741fbfe1cb0.jpg?alt=media&token=7cde1818-eea0-4c98-b536-f7470dba2842'),
(18, 'Project', 'Project', '2023-05-30', '2023-05-30', 100, 'Bahrain', 'OUSSEMA', 'https://firebasestorage.googleapis.com/v0/b/isetrades-e6283.appspot.com/o/uploads%2Fdownload.png?alt=media&token=5c0f6db7-cb05-4ff3-a2fb-f748f5701ed1'),
(19, 'Project 2', 'Description', '2023-07-23', '2023-05-26', 100, 'Tunisia', 'Project', 'https://firebasestorage.googleapis.com/v0/b/isetrades-e6283.appspot.com/o/uploads%2F346112377_3592684671056403_5158335676928907677_n.png?alt=media&token=ceb7c3c8-2aa0-4223-86a7-789eac4c284f'),
(31, 'oussema', 'sahbeni', '2222-02-12', '3333-03-31', 100, 'Albania', 'AZA', 'https://firebasestorage.googleapis.com/v0/b/isetrades-e6283.appspot.com/o/uploads%2F80356353_3527647250643585_2730575043829432320_n.jpg?alt=media&amp;token=000d56bf-99b4-4399-bd0e-ba4d139edb62'),
(32, 'islem', 'teeab', '2023-06-16', '2023-07-20', 100, 'Bahamas (the)', 'aeaz', 'https://firebasestorage.googleapis.com/v0/b/isetrades-e6283.appspot.com/o/uploads%2Fimage1.jpg?alt=media&amp;token=a0dca804-1598-4ff7-966e-b9556f66ee22');

-- --------------------------------------------------------

--
-- Table structure for table `projects_category`
--

CREATE TABLE `projects_category` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects_category`
--

INSERT INTO `projects_category` (`category_id`, `name`, `description`) VALUES
(100, 'it', 'informatique'),
(102, 'gestion', 'projet de gestion');

-- --------------------------------------------------------

--
-- Table structure for table `projects_country`
--

CREATE TABLE `projects_country` (
  `code_country` int(11) NOT NULL,
  `name_country` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects_country`
--

INSERT INTO `projects_country` (`code_country`, `name_country`) VALUES
(220, 'france'),
(300, 'turkey');

-- --------------------------------------------------------

--
-- Table structure for table `projects_holder`
--

CREATE TABLE `projects_holder` (
  `oid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `contact_phone` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `registration_id` int(11) NOT NULL,
  `registration_date` date NOT NULL,
  `registration_result` enum('accepted','refused','','') NOT NULL,
  `result` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `register_teach`
--

CREATE TABLE `register_teach` (
  `id` int(11) NOT NULL,
  `registration_date` date NOT NULL,
  `registration_result` enum('accepted','refused') NOT NULL,
  `id_teach` int(11) NOT NULL,
  `id_participation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staff_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  `position` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`staff_id`, `name`, `email`, `phone`, `department_id`, `position`) VALUES
(1, 'Prof 1', 'oussemasahbeni300@gmail.com', '54750526', 1, 'prof 1'),
(2, 'Prof 2', 'yassine123@gmail.com', '5444444', 1, 'Prof 2'),
(3, 'Prof 3', 'islem133@gmail.com', '12345678', 1, 'Prof 3'),
(4, 'Prof 4', 'chedi123@gmail.com', '123455678', 1, 'Prof 4');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `student_id:` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `departmenet_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `teacher_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  `specialization` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `userscontact`
--

CREATE TABLE `userscontact` (
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userscontact`
--

INSERT INTO `userscontact` (`name`, `email`, `subject`, `phone`, `text`) VALUES
('0', 'a@gmail.com', '0', 'a', 'a'),
('0', 'a@gmail.com', '0', 'a', 'a'),
('0', 'a@gmail.com', '0', 'aa', 'a'),
('0', 'a@gmail.com', '0', '12', 'a'),
('0', 'oussemasahbeni300@gmail.com', '0', '54750526', 'aaa'),
('0', 'oussemasahbeni300@gmail.com', '0', '54750526', 'oussema'),
('aaa', 'aaa@gmail.com', 'aza', '5555555555', 'aaa'),
('yassine', 'oussemashbeni@gmail.com', 'aezazea', '54750526', 'yassine'),
('Oussema', 'oussemasahbeni@gmail.com', 'sujet', '27538358', 'Oussema');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `event_category`
--
ALTER TABLE `event_category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `event_holder`
--
ALTER TABLE `event_holder`
  ADD PRIMARY KEY (`event_holder_id`);

--
-- Indexes for table `iset`
--
ALTER TABLE `iset`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `participate`
--
ALTER TABLE `participate`
  ADD PRIMARY KEY (`participation_id`);

--
-- Indexes for table `participate_teacher`
--
ALTER TABLE `participate_teacher`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_teach` (`id_teacher`),
  ADD KEY `id_project` (`id_project`),
  ADD KEY `id_teacher` (`id_teacher`);

--
-- Indexes for table `participation_call`
--
ALTER TABLE `participation_call`
  ADD PRIMARY KEY (`participation_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`project_id`),
  ADD KEY `code_cat` (`code_cat`);

--
-- Indexes for table `projects_category`
--
ALTER TABLE `projects_category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `projects_country`
--
ALTER TABLE `projects_country`
  ADD PRIMARY KEY (`code_country`);

--
-- Indexes for table `projects_holder`
--
ALTER TABLE `projects_holder`
  ADD PRIMARY KEY (`oid`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`registration_id`);

--
-- Indexes for table `register_teach`
--
ALTER TABLE `register_teach`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_teach` (`id_teach`),
  ADD KEY `id_participation` (`id_participation`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`student_id:`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`teacher_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `staff_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `departments`
--
ALTER TABLE `departments`
  ADD CONSTRAINT `iset_constraint1` FOREIGN KEY (`department_id`) REFERENCES `iset` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
