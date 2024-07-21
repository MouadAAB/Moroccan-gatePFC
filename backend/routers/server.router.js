import express from "express";
import { getServers, joinServer } from "../controllers/server.controller.js";
import protectRouter from "../middleware/protectRouter.js";

const router = express.Router();

router.get("/", getServers);
router.post("/join/:serverId/:userId", joinServer);

export default router;
