import  express from "express";
import Routes from "./routes/router";
import ErrorHandler from "./middleware/ErrorHandler";

const app = express();

app.use(ErrorHandler)
app.use(express.json())
app.use(Routes);

export default app;