export interface Section {
    title: string;
    content: string;
  }
  
  export interface BlogContent {
    intro: string;
    sections: Section[];
  }
  
  export interface Blog {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
    content: BlogContent;
  }
  
  const blogs: Blog[] = [
    {
      title: "From De Anza to Cal Poly",
      date: "August 23, 2024",
      excerpt: "My journey from community college to a renowned university was a pivotal chapter in my pursuit of a software engineering career...",
      slug: "from-deanza-to-cal-poly",
      content: {
        intro: "My journey from community college to a renowned university was a pivotal chapter in my pursuit of a software engineering career. Here's how my time at De Anza College paved the way for my acceptance into California Polytechnic State University, San Luis Obispo (Cal Poly SLO).",
        sections: [
          {
            title: "Building a Strong Foundation at De Anza",
            content: "At De Anza, I immersed myself in a demanding computer science curriculum. Courses like C++, Java, Data Structures, and Discrete Mathematics provided a solid technical base and honed my problem-solving skills."
          },
          {
            title: "Balancing Passions: Coaching and Coding",
            content: "While pursuing my studies, I continued my passion for sports as a Track and Field Assistant Coach. Juggling coaching with academics enhanced my time management and leadership abilities. I also applied my growing technical skills in a Warehouse Logistics Specialist role, developing Python scripts to automate inventory management tasks."
          },
          {
            title: "Overcoming Challenges, Achieving Success",
            content: "My academic journey wasn't without its hurdles. Calculus and physics presented significant challenges, leading to a brief pause in my studies. However, this setback fueled my determination. I returned with renewed focus, tackling advanced calculus and ultimately excelling in my coursework, consistently earning a place on the dean's list."
          },
          {
            title: "Gaining Practical Experience",
            content: "My time at De Anza included valuable professional experiences. As a Junior Quality Assurance Analyst at Milestone Technologies and a Freelance Data Analyst, I applied my skills in Python, SQL, and data visualization tools. I led teams in Agile environments, automated testing processes, and developed data-driven solutions. These roles enriched my technical expertise and emphasized the importance of collaboration and continuous learning."
          },
          {
            title: "Reaching for Cal Poly SLO",
            content: "With a strong academic record and diverse professional experiences, I set my sights on Cal Poly SLO's highly competitive Computer Science program. My dedication paid off, and I was thrilled to gain acceptance."
          },
          {
            title: "Embracing Cal Poly's \"Learn by Doing\" Philosophy",
            content: "Cal Poly's emphasis on hands-on learning aligns perfectly with my approach. Engaging in complex projects, like developing scalable backend systems and cross-platform applications, has further strengthened my technical skills and prepared me for the demands of the tech industry."
          },
          {
            title: "Looking Ahead",
            content: "As I continue my studies at Cal Poly SLO, I'm excited about the future. My journey from De Anza has equipped me with a unique combination of academic knowledge and practical experience. I'm eager to leverage these skills in internships and future roles, with the goal of becoming a leader in software engineering."
          }
        ]
      }
    },
    {
      title: "My Transition into Tech",
      date: "April 7, 2023",
      excerpt: "My journey into tech wasn't a straight line. It started on the athletic track and ultimately led me to software engineering...",
      slug: "my-transition-into-tech",
      content: {
        intro: "My journey into tech wasn't a straight line. It started on the athletic track and ultimately led me to software engineering. Here's how I made the leap.",
        sections: [
          {
            title: "From Athlete to Coach: Building a Foundation",
            content: "Early in my career, I was immersed in the world of sports, first as an athlete and then as a track and field coach. Coaching, particularly in jumps, instilled in me the importance of discipline, leadership, and teamwork --- skills that have proven invaluable in the tech world."
          },
          {
            title: "A New Direction: Logistics and the Spark of Optimization",
            content: "Seeking a more sustainable career path, I transitioned to a Warehouse Logistics Specialist role at Milestone Technologies. This experience exposed me to the critical role of precision and efficiency in inventory management, sparking my interest in process optimization through technology."
          },
          {
            title: "Discovering the Power of Code",
            content: "To streamline my work in logistics, I began exploring Python scripting to automate repetitive tasks. This reduced manual effort and freed me to focus on leading my team more effectively. This hands-on experience ignited a passion for software development and problem-solving."
          },
          {
            title: "Rising to the Challenge: Quality Assurance and Automation",
            content: "My initiative in automation led to a promotion to Junior Quality Assurance Analyst at Milestone Technologies. Here, I gained a deeper understanding of the software development lifecycle, collaborating with cross-functional teams to ensure product quality. I leveraged tools like PyTest and Selenium to automate testing processes, significantly enhancing efficiency and product reliability."
          },
          {
            title: "The Pandemic Pivot: Embracing My Passion",
            content: "When the COVID-19 pandemic forced our office to close, I found myself at a crossroads. This period of uncertainty clarified my true calling: coding and technology. Determined to pursue this path, I enrolled at De Anza College to formally study Computer Science. Overcoming the challenges of rigorous coursework solidified my commitment and resilience."
          },
          {
            title: "Reaching New Heights: Academic Excellence and Beyond",
            content: "My dedication paid off. I excelled at De Anza, earning a place on the dean's list and acceptance into California Polytechnic State University, San Luis Obispo's competitive computer science program. This achievement cemented my path to becoming a software engineer."
          },
          {
            title: "The Journey Continues",
            content: "Now, as a Computer Scientist at Cal Poly SLO, I'm eager to contribute to innovative projects and collaborate with talented teams. My diverse background allows me to approach challenges with a unique perspective. I'm excited to see where this journey leads in the ever-evolving world of technology."
          }
        ]
      }
    }
  ];
  
  export default blogs;