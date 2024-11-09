import Link from 'next/link'
import { Blog } from '@/app/blogData'

export default function BlogPreview({ blog }: { blog: Blog }) {
  return (
    <article className="border-b border-border pb-5 mb-8 last:border-b-0">
      <h2 className="post-title mb-2">
        <Link 
          href={`/blog/${blog.slug}`}
          className="font-crimson text-2xl text-text hover:text-secondary no-underline"
        >
          {blog.title}
        </Link>
      </h2>
      
      <p className="text-sm text-secondary mb-3 font-crimson">
        {blog.date}
      </p>
      
      <p className="font-crimson text-lg mb-4">
        {blog.excerpt}
      </p>
      
      <Link 
        href={`/blog/${blog.slug}`}
        className="font-crimson font-bold text-primary hover:text-secondary transition-colors"
      >
        Read More
      </Link>
    </article>
  )
}