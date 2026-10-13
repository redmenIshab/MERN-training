
import Corrupt from '../models/Corrupt.js';

export const getCorruptController =async (req, res,next) => {
    console.log("Fetching corrupts data from database...");
    // get corrupts data from database -> Model (CRUD)
    try{
        const corrupts = await Corrupt.find()
        res.status(200).json({
            success: true,
            data: corrupts
        })

    } catch (error) {
        console.error("Error fetching corrupts:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching corrupts"
        });
    }
}

export const createCorruptController = async (req, res, next) => {
    console.log("Creating a new corrupt entry...", req.body);

    // create a new corrupt entry in the database -> Model (CRUD)
    try {
        const newCorrupt = new Corrupt(req.body);
        const savedCorrupt = await newCorrupt.save();

        res.status(201).json({
            success: true,
            data: savedCorrupt
        });
    } catch (error) {
        console.error("Error creating corrupt:", error);
        res.status(500).json({
            success: false,
            message: "Error creating corrupt"
        });
    }
}

export const updateCorruptController = async (req, res, next) => {
    console.log("Updating corrupt entry...", req.params.id, req.body);

    // update a corrupt entry in the database -> Model (CRUD)
    try {
        const updatedCorrupt = await Corrupt.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCorrupt) {
            return res.status(404).json({
                success: false,
                message: "Corrupt not found"
            });
        }

        // updatedCorrupt.set(req.body);
        // await updatedCorrupt.save();

        res.status(200).json({
            success: true,
            data: updatedCorrupt
        });
    } catch (error) {
        console.error("Error updating corrupt:", error);
        res.status(500).json({
            success: false,
            message: "Error updating corrupt"
        });
    }
}

export const deleteCorruptController = async (req, res, next) => {
    console.log("Deleting corrupt entry...", req.params.id);

    // delete a corrupt entry from the database -> Model (CRUD)
    try {
        const deletedCorrupt = await Corrupt.findByIdAndDelete(req.params.id);
        if (!deletedCorrupt) {
            return res.status(404).json({
                success: false,
                message: "Corrupt not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Corrupt deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting corrupt:", error);
        res.status(500).json({
            success: false,
            message: "Error deleting corrupt"
        });
    }
}