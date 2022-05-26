import express from "express";
import Hotel from "../models/hotel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {

    const newHotel = new Hotel(req.body)
    return next();

    try {

        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
        
    } catch (error) {

        res.status(500).json(error)
    
    }
})

router.put("/:id", async (req, res) => {

    const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body });

    try {

        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });       
        res.status(200).json(updateHotel);
        
    } catch (error) {

        res.status(500).json(error)
    
    }
})

router.delete("/:id", async (req, res) => {

    const newHotel = new Hotel(req.body)

    try {

        const deletedHotel = await Hotel.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("hotel has been deleted");
        
    } catch (error) {

        res.status(500).json(error)
    
    }
})

router.get("/:id", async (req, res) => {

    try {

        const hotel = await Hotel.findById(
            req.params.id
        );
        res.status(200).json(hotel);
        
    } catch (error) {

        res.status(500).json(error)
    
    }
})

router.get("/", async (req, res) => {

    try {

        const hotels = await Hotel.find();
        res.status(200).json(hotels);
        
    } catch (error) {

        res.status(500).json(error)
    
    }
})

router.get("/", async (req, res, next) => {

    // const failed = true;
    // const err = new Error();

    // err.status = 404;
    // err.message = "sorry not found!";

    // if (failed) return next(err);

    try {

        const hotels = await Hotel.findById();
        res.status(200).json(hotels);
        
    } catch (error) {

        next(error)
    
    }
})

export default router