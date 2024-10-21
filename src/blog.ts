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
      description: "My journey from community college to a renowned university...",
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