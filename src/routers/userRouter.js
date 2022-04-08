import express from "express";
import { logout, getEdit, postEdit, see, startGithubLogin, finishGithubLogin } from "../controllers/userController.js";
import { protectorMiddleWare } from "../middleware";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleWare, logout);
userRouter.route("/edit").all(protectorMiddleWare).get(getEdit).post(postEdit);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
userRouter.get("/:id", see);

export default userRouter;