import express from "express";
import { getTours, getTourById, saveTour, updateTour, deleteTour } from "../controllers/TourController.js";

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getTours);
router.get('/:id', getTourById);
router.post('/', auth, saveTour);
router.patch('/:id', auth, updateTour);
router.delete('/:id', auth, deleteTour);

export default router;