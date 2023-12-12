-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS scientific_papers;

-- Switch to the downloaded database
USE scientific_papers;

-- Create the 'papers' table
CREATE TABLE IF NOT EXISTS papers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    abstract LONGTEXT,
    article LONGTEXT,
    section_names LONGTEXT
);

-- select all
SELECT * FROM papers;

-- count lines
SELECT COUNT(*) FROM papers;

-- test example
SELECT * FROM papers
WHERE abstract LIKE '%machine learning%'
OR article LIKE '%machine learning%';
