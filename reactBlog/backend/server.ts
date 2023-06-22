import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import  session, {Session} from "express-session";
import { userRouter } from './routes/userRouter';
import { postRouter } from './routes/postRouter';
import { adminRouter } from './routes/adminRouter';
dotenv.config();

const app: Express = express();
app.use(express.urlencoded({ extended: true }));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'static')));

const port = process.env.PORT;
app.use(cors());
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/admin", adminRouter);
app.get('/', (req: Request, res: Response) => {
  //res.send('Express + TypeScript Server!!!!');
  res.sendFile(path.join(__dirname+'/acasa.html'));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});