import { pool } from './database.js'
import events from '../data/events.js'
import locations from '../data/locations.js'

const createTables = async () => {
    const query = `
        DROP TABLE IF EXISTS events;
        DROP TABLE IF EXISTS locations;

        CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            city VARCHAR(255) NOT NULL,
            state VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL,
            city VARCHAR(255) NOT NULL,
            state VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            location_id INT REFERENCES locations(id)
        );
    `

    try {
        await pool.query(query);
        console.log('Tables created');
    } catch (error) {
        console.error('Error creating tables: ', error);
    }
}

const seedEvents = async () => {
    await createTables();

    for (const location of locations) {
        try {
            await pool.query(
                'INSERT INTO locations (city, state, description, image) VALUES ($1, $2, $3, $4)',
                [location.city, location.state, location.description, location.image]
            );
            console.log('Location inserted: ', location.city);
        } catch (err) {
            console.error('Error inserting location: ', err);
        }
    }

    for (const event of events) {
        try {
            await pool.query(
                'INSERT INTO events (title, description, date, time, city, state, image, location_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
                [event.title, event.description, event.date, event.time, event.city, event.state, event.image, event.location_id]
            );
            console.log('Event inserted: ', event.title);
        } catch (err) {
            console.error('Error inserting event: ', err);
        }
    }
}

seedEvents();