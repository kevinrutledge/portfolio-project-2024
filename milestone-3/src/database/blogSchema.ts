import mongoose, { Schema } from "mongoose";

interface IComment {
    user: string;
    comment: string;
    time: Date;
  }

interface ISection {
    title: string;
    content: string;
}

interface IBlogContent {
    intro: string;
    sections: ISection[];
}

type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  comments: IComment[];
};

const sectionSchema = new Schema<ISection>({
    title: { type: String, required: true },
    content: { type: String, required: true }
});

const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, default: Date.now }
  });

const blogContentSchema = new Schema<IBlogContent>({
    intro: { type: String, required: true },
    sections: [sectionSchema]
});

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  content: blogContentSchema,
  comments: [commentSchema],
});

// Define the model using the 'blogs' collection
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export type { IComment, ISection, IBlogContent };
export default Blog;