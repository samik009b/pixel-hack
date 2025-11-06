import express, { urlencoded } from "express";
import cors from "cors";

const app = express();
app.use(urlencoded({ extended: true }));

app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
	})
);
app.use(express.json());

app.post("/", (req, res) => {
	console.log("hey its backed", req.body);
	res.json({messsage: "good"});
});

app.listen(1337, () => console.log("server running on http://localhost:1337"));
