-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS papers;

-- Switch to the downloaded database
USE papers;

-- Create the 'papers' table
CREATE TABLE IF NOT EXISTS papers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    abstract TEXT,
    article TEXT,
    section_names TEXT
);

-- Create an index for faster searches
CREATE INDEX idx_abstract ON papers (abstract);
CREATE INDEX idx_article ON papers (article);
CREATE INDEX idx_section_names ON papers (section_names);
