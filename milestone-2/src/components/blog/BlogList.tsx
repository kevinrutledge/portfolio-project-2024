import blogs from '@/app/blogData'
import BlogPreview from './BlogPreview'

export default function BlogList() {
  return (
    <div className="space-y-8">
      {blogs.map((blog) => (
        <BlogPreview key={blog.slug} blog={blog} />
      ))}
    </div>
  )
}