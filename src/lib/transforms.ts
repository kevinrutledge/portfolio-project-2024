import type {
  MongoBlog,
  Blog,
  MongoComment,
  Comment,
} from "@/database/blogSchema";

export function transformComment(comment: MongoComment): Comment {
  return {
    id: comment._id.toString(),
    user: comment.user,
    comment: comment.comment,
    time: new Date(comment.time).toISOString(),
  };
}

export function transformBlog(mongoBlog: MongoBlog): Blog {
  return {
    id: mongoBlog._id.toString(),
    title: mongoBlog.title,
    slug: mongoBlog.slug,
    date: new Date(mongoBlog.date).toISOString(),
    description: mongoBlog.description,
    content: mongoBlog.content,
    comments: mongoBlog.comments.map(transformComment),
  };
}
