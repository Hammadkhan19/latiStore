const Blog = require("../models/blogs");

// Controller for adding a blog
const post_addblog = async (req, res) => {
  const { title, author, content } = req.body;
  const user_id = req.user.id;
  
  try {
    const blog = new Blog({ title, author, content,user_id });
    await blog.save();
    res.status(201).json({ message: "Blog added successfully", blog });
  } catch (error) {
    res.status(400).json({ error: "Error adding blog" });
  }
};

// Controller for fetching all blogs
const get_blogs = async (req, res) => {
  const user_id = req.user.id;
  try {
    const blogs = await Blog.find({user_id});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: "Error fetching blogs" });
  }
};

// Controller for fetching a blog's details by id
const get_blogdetails = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: "Error fetching blog details" });
  }
};
// Controller for deleting a blog by id
const delete_blog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Error deleting blog" });
  }
};

module.exports = {
  post_addblog,
  get_blogs,
  get_blogdetails,
  delete_blog,
};
