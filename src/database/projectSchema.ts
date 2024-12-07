import mongoose, { Schema } from "mongoose";

interface ILink {
  url: string;
  label: string;
}

interface ITechnology {
  name: string;
  category: string;
}

type Project = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  technologies: ITechnology[];
  links: ILink[];
};

const linkSchema = new Schema<ILink>({
  url: { type: String, required: true },
  label: { type: String, required: true },
});

const technologySchema = new Schema<ITechnology>({
  name: { type: String, required: true },
  category: { type: String, required: true },
});

const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  content: { type: String, required: true },
  technologies: [technologySchema],
  links: [linkSchema],
});

const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export type { ITechnology, ILink, Project };
export default Project;
