import express from "express";
import { getUsers } from "../controllers/users.controller.js";
// import protectRouter from "../middleware/protectRouter.js";

const router = express.Router();

router.get("/", getUsers);

export default router;
