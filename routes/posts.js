import express from "express";
import posts from "../data/index.js";

const router = express.Router();

const getAllPosts = (req, res) => {
  res.status(200).send({ message: "all Posts", posts: posts });
};

const getOnePost = (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === Number(id));
  if (!post) {
    res.status(404).send({ message: `Post with id ${id} not found` });
    return;
  }
  res.status(200).send({ message: `Post with id ${id}`, post: post });
};

const getOneComment = (req, res) => { 
  const { id, commentId } = req.params;
  const post = posts.find((post) => post.id === Number(id));
  if (!post) {
    res.status(404).send({ message: `Post with id ${id} not found` });
    return;
  }
  const comment = post.comments.find((comment) => comment.id === Number(commentId));
  if (!comment) {
    res.status(404).send({ message: `Comment with id ${commentId} not found` });
    return;
  }
  res.status(200).send({ message: `Comment with id ${commentId}`, comment: comment });
}

router.get("/", getAllPosts);
router.get("/:id", getOnePost);
router.get("/:id/comment/:commentId?", getOneComment);

export default router;
