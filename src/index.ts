//Setup express js
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import influencerRoutes from "./routes/influencer";
import companyRoutes from "./routes/company";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/influencer", influencerRoutes);
app.use("/company", companyRoutes);

app.get("/", async (req: Request, res: Response) => {
	res.json({
		message: "Welcome!"
	});
});

//Listen to port 3000
app.listen(3000, () => {
	console.log("Example app listening on port 3000!");
});