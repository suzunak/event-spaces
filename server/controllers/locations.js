import { pool } from "../config/database.js"

const getAllLocations = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM locations;');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

const getLocationById = async (req, res) => {
    try {
        const locationId = req.params.id;
        const result = await pool.query('SELECT * FROM locations WHERE id = $1;', [locationId]);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

const getEventsByLocationId = async (req, res) => {
    try {
        const locationId = req.params.id;
        const result = await pool.query('SELECT * FROM events WHERE location_id = $1;', [locationId]);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

export { getAllLocations, getLocationById, getEventsByLocationId };