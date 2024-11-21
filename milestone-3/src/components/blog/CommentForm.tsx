"use client";
import { useState } from "react";

type CommentFormProps = {
  blogSlug: string;
};

export default function CommentForm({ blogSlug }: CommentFormProps) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/blogs/${blogSlug}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, comment }),
      });

      if (!res.ok) throw new Error("Failed to submit comment");

      setUser("");
      setComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="user" className="block font-crimson font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full p-2 border border-border rounded font-crimson"
          required
        />
      </div>

      <div>
        <label htmlFor="comment" className="block font-crimson font-bold mb-2">
          Comment:
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border border-border rounded font-crimson min-h-[100px]"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded font-crimson hover:bg-secondary transition-colors"
      >
        Add Comment
      </button>
    </form>
  );
}
