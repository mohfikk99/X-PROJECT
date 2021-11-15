import Tour from "../models/Tour.js";

export const getTours = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.json(tours);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getTourById = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        res.json(tour);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const saveTour = async (req, res) => {
    const tour = new Tour(req.body);
    try {
        const saveTour = await tour.save();
        res.status(201).json(saveTour);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateTour = async (req, res) => {
    const checkId = await Tour.findById(req.params.id);
    if (!checkId) return res.status(404).json({ message: "Data not found" });
    try {
        const updateTour = await Tour.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateTour);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteTour = async (req, res) => {
    const checkId = await Tour.findById(req.params.id);
    if (!checkId) return res.status(404).json({ message: "Data not found" });
    try {
        const deletedTour = await Tour.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedTour);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}