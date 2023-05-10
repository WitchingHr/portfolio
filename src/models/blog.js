import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  text: { type: String, required: true },
  tags: { type: Array, required: true },
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;
