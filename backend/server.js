require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const reviewRoutes = require("./routes/reviews");
const productRoutes = require("./routes/products");
const categoryRoutes = require("./routes/category");
const blogRoutes = require("./routes/blogs");

require("./db/db");
const app = express();
const port = 3000;

// middlewares
app.use(cors());
app.use(express.json());
// Static folder for uploaded images
app.use("/uploads", express.static("uploads"));

// Routes
app.use(authRoutes);
app.use(reviewRoutes);
app.use(productRoutes);
app.use(categoryRoutes);
app.use(blogRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
