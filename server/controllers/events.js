import { pool } from "../config/database.js"

const getAllEvents = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM events;');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

const getEventById = async (req, res) => {
    try {
        const eventId = req.params.id;
        const result = await pool.query('SELECT * FROM events WHERE id = $1;', [eventId]);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

export { getAllEvents, getEventById };