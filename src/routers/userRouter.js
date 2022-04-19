import express from "express";
import {
  logout,
  getEdit,
  postEdit,
  startGithubLogin,
  finishGithubLogin,
  getChangePassword,
  postChangePassword,
  see
} from "../controllers/userController.js";
import { protectorMiddleWare, publicOnlyMiddleware, videoUpload } from "../middlewares.js";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleWare, logout);
userRouter
  .route("/edit")
  .all(protectorMiddleWare)
  .get(getEdit)
  .post(videoUpload.single("avatar"), postEdit);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter
  .route("/change-password")
  .all(protectorMiddleWare)
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.get("/:id", see);

export default userRouter;