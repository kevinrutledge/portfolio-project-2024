"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

interface CommentFormProps {
  blogSlug: string;
}

export default function CommentForm({ blogSlug }: CommentFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const isLoading = isSaving || isPending;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSaving(true);
    setError("");

    try {
      const res = await fetch(`/api/Blogs/${blogSlug}/comments`, {
        method: "POST",
        body: JSON.stringify({
          user: formData.get("user"),
          comment: formData.get("comment"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to submit comment");

      form.reset();
      startTransition(() => {
        router.refresh();
      });
    } catch (err) {
      setError("Failed to post comment. Please try again.");
      console.error("Error posting comment:", err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div>
        <label htmlFor="user" className="block font-crimson font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="user"
          name="user"
          required
          disabled={isLoading}
          className="w-full p-2 border border-border rounded font-crimson 
                   focus:outline-none focus:border-primary disabled:opacity-50"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="comment" className="block font-crimson font-bold mb-2">
          Comment
        </label>
        <textarea
          id="comment"
          name="comment"
          required
          disabled={isLoading}
          rows={4}
          className="w-full p-2 border border-border rounded font-crimson
                   focus:outline-none focus:border-primary disabled:opacity-50
                   resize-vertical min-h-[100px]"
          placeholder="Write your comment..."
        />
      </div>

      {error && <p className="text-red-500 font-crimson">{error}</p>}

      <button
        type="submit"
        disabled={isLoading}
        className="bg-primary text-white px-4 py-2 rounded font-crimson
                 hover:bg-secondary transition-colors disabled:opacity-50
                 disabled:cursor-not-allowed"
      >
        {isLoading ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
}
