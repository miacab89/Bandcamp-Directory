CREATE DATABASE band_db;

CREATE TABLE band_info(
    id SERIAL PRIMARY KEY, 
    artist VARCHAR(255),
    genre VARCHAR(255),
    location VARCHAR(255),
    label VARCHAR(255),
    lyrical_themes VARCHAR(255)
); 

