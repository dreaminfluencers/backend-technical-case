import { Router, Response } from "express";
import authMiddleware, { AuthenticatedRequest } from "../middlewares/auth";
import { query } from "../controllers/db";

interface UserDetails {
	id: number;
	email: string;
	name: string;
}
export default (router: Router, type: string) => {
	router.get("/me", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
		const dbTable = type === "company" ? "companies" : "influencers";
		const [user] = await query<UserDetails>(`SELECT id, email, name FROM ${dbTable} WHERE id = ?`, [req.user?.id]);
		res.json(user);
	});

	return router;
};
