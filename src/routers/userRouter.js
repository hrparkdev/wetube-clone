import express from "express";
import { logout, getEdit, postEdit, see, startGithubLogin, finishGithubLogin } from "../controllers/userController.js";
import { protectorMiddleWare, publicOnlyMiddleware } from "../middleware";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleWare, logout);
userRouter.route("/edit").all(protectorMiddleWare).get(getEdit).post(postEdit);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get("/:id", see);

export default userRouter;