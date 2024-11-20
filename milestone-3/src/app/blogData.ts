export interface Blog {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
  }
  
  // Blog data array
  const blogs: Blog[] = [
    {
      title: "From De Anza to Cal Poly",
      date: "2023-10-20",
      excerpt:
        "I'm excited to share my journey of transferring from De Anza College to " +
        "the Computer Science program at California Polytechnic State University, " +
        "San Luis Obispo (Cal Poly SLO). This experience has been instrumental in " +
        "my pursuit of a software engineering career, and I hope my insights can " +
        "be helpful to others considering a similar path.",
      slug: "from-deanza-to-cal-poly",
    },
    {
      title: "My Transition into Tech",
      date: "2023-10-21",
      excerpt:
        "It's been quite a journey for me — one that started on the athletic " +
        "field and ultimately led to a passion for software engineering. While " +
        "the path may seem unconventional, the skills and experiences I gained " +
        "along the way have proven invaluable in my tech career.",
      slug: "my-transition-into-tech",
    },
  ];
  
  export default blogs;