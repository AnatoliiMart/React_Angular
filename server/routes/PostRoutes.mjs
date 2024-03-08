import express from "express";
import {
  CreatePost,
  DeletePost,
  GetAllPosts,
  GetPostById,
  UpdatePost,
} from "../controllers/PostController.mjs";

const router = express.Router();

router.get("/", GetAllPosts);
router.post("/", CreatePost);
router.get("/:id", GetPostById);
router.put("/:id", UpdatePost);
router.delete("/:id", DeletePost);

export default router;
