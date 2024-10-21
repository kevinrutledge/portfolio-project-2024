type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "From De Anza to Cal Poly",
    date: "2023-10-20",
    description:
      "My journey from community college to a renowned university...",
    image: "./images/deanza-to-calpoly.jpg",
    imageAlt: "De Anza to Cal Poly",
    slug: "from-deanza-to-calpoly",
  },
  {
    title: "My Transition into Tech",
    date: "2023-10-21",
    description: "My journey into tech wasn't a straight line...",
    image: "./images/transition-into-tech.jpg",
    imageAlt: "Transition into Tech",
    slug: "my-transition-into-tech",
  },
];

// Display blogs on page
function displayBlogs() {
  // Initialize container where blogs will be displayed
  const blogContainer = document.getElementById("blog-container");

  // Necessary check if container does not exist
  if (!blogContainer) {
    console.error("Blog container element not found.");
    return;
  }

  // Javascript loop to create blog and HTML elements
  blogs.forEach((currentBlog) => {
    // Create article element for blog post
    const blogArticle = document.createElement("article");
    blogArticle.className = "blog-post";

    // Set blog title
    const blogTitle = document.createElement("h2");
    blogTitle.className = "post-title";
    const blogTitleLink = document.createElement("a");
    blogTitleLink.href = `blogs/${currentBlog.slug}.html`;
    blogTitleLink.className = "blog-read-more-link";
    blogTitleLink.textContent = currentBlog.title;
    blogTitle.appendChild(blogTitleLink);
    blogArticle.appendChild(blogTitle);

    // Set blog date
    const blogDate = document.createElement("p");
    blogDate.className = "post-date";
    blogDate.textContent = currentBlog.date;
    blogArticle.appendChild(blogDate);

    // Set blog description
    const blogDescription = document.createElement("p");
    blogDescription.className = "post-excerpt";
    blogDescription.textContent = currentBlog.description;
    blogArticle.appendChild(blogDescription);

    // Set 'Read More' link
    const readMoreLink = document.createElement("a");
    readMoreLink.href = `blogs/${currentBlog.slug}.html`; // Individual blog page
    readMoreLink.className = "blog-read-more-link";
    readMoreLink.textContent = "Read More";
    blogArticle.appendChild(readMoreLink);

    // Add complete blog post
    blogContainer.appendChild(blogArticle);
  });
}

// Run displayBlogs function after page loads
document.addEventListener("DOMContentLoaded", displayBlogs);

export { blogs, Blog };
