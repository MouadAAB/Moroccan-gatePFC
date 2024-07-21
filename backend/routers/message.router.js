import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
// import protectRouter from "../middleware/protectRouter.js";

const router = express.Router();

router.get("/:serverId", getMessages);
router.post("/send/:serverId/:senderId", sendMessage);

export default router;
