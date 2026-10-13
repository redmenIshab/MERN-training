import { Router } from "express";
import { getCorruptController ,createCorruptController, updateCorruptController, deleteCorruptController} from "../controllers/corruptsController.js";

const corruptsRoutes = Router();

corruptsRoutes.get("/", getCorruptController);
corruptsRoutes.post("/", createCorruptController);
corruptsRoutes.put("/:id", updateCorruptController);
corruptsRoutes.delete("/:id", deleteCorruptController);

export default corruptsRoutes;
