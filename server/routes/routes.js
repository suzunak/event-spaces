import express from 'express'
import { getAllEvents, getEventById } from '../controllers/events.js'
import { getAllLocations, getLocationById, getEventsByLocationId } from '../controllers/locations.js'

const router = express.Router();

router.get('/events', getAllEvents);
router.get('/events/:id', getEventById);

router.get('/locations', getAllLocations);
router.get('/locations/:id', getLocationById);
router.get('/locations/:id/events', getEventsByLocationId);

export default router;