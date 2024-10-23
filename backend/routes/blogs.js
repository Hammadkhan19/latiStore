const { Router } = require("express");
const blogsController = require("../controllers/blogsController");
const requireAuth = require("../middlewares/requireAuth");

const router = Router();

// middleware for protexting apis
router.use(requireAuth);

// Route for adding a blog (POST)
router.post("/addblog", blogsController.post_addblog);

// Route for getting all blogs (GET)
router.get("/blogs", blogsController.get_blogs);

// Route for getting blog details by id (GET)
router.get("/blogdetails/:id", blogsController.get_blogdetails);
// route for deleting blog
router.delete("/blogdetails/:id", blogsController.delete_blog);

module.exports = router;
