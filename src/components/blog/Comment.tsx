"use client";

import { Comment as CommentType } from "@/database/blogSchema";

interface CommentProps {
  comment: CommentType;
}

function formatCommentTime(timestamp: string) {
  return new Date(timestamp).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className="border-b border-border pb-4 mb-4 last:border-b-0">
      <h4 className="font-crimson font-bold text-lg">{comment.user}</h4>
      <p className="font-crimson my-2 leading-relaxed whitespace-pre-wrap">
        {comment.comment}
      </p>
      <time dateTime={comment.time} className="text-secondary text-sm">
        {formatCommentTime(comment.time)}
      </time>
    </div>
  );
}
