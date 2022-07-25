import express from "express";
import { getUsers } from "../controllers/usersController.js";


const router = express.Router();

router.get("/", getUsers);
// router.get("/:id", getUser);
// router.delete("/:id", deleteUser);
// router.patch("/:id", updateUser);

export default router;
