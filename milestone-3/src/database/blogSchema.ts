import mongoose, { Schema } from "mongoose";

interface IComment {
    user: string;
    comment: string;
    time: Date;
  }

// TypeScript type for our blog posts
type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  comments: IComment[];
};

const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, default: Date.now }
  });

// Mongoose schema definition
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  content: { type: String, required: true },
  comments: [commentSchema],
});

// Define the model using the 'blogs' collection
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export type { IComment };
export default Blog;