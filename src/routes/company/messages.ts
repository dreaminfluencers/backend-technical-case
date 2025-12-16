import { Router, Response } from "express";
const router = Router();
import authMiddleware, { AuthenticatedRequest } from "../../middlewares/auth";

//Get list of conversations with newest message from each conversation
router.get("/", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
	res.json({
		conversations: []
	});
});

//Get everything in a conversation
router.get("/:id", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
	res.json({
		messages: []
	});
});

//Create a new message in a conversation
router.post("/:id", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
	res.json({
		success: false
	});
});

export default router;
