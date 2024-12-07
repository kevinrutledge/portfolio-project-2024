import mongoose, { Schema } from "mongoose";

// MongoDB/Database types
export interface MongoComment {
  _id: mongoose.Types.ObjectId;
  user: string;
  comment: string;
  time: Date;
}

export interface MongoBlog {
  _id: mongoose.Types.ObjectId;
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  comments: MongoComment[];
  __v: number;
}

// API/Frontend types
export interface Comment {
  id: string;
  user: string;
  comment: string;
  time: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  date: string;
  description: string;
  content: string;
  comments: Comment[];
}

const commentSchema = new Schema<MongoComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

const blogSchema = new Schema<MongoBlog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  content: { type: String, required: true },
  comments: [commentSchema],
});

const BlogModel =
  mongoose.models.blogs || mongoose.model<MongoBlog>("blogs", blogSchema);

export default BlogModel;
