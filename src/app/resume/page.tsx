import ResumeSection from "@/components/resume/ResumeSection";
import ResumeEntry from "@/components/resume/ResumeEntry";

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="font-crimson text-2xl mb-4">
          408-656-5225 | San Jose, CA |
          <a
            href="mailto:kevin.rutledge.89@gmail.com"
            className="text-primary hover:text-secondary"
          >
            {" "}
            kevin.rutledge.89@gmail.com
          </a>{" "}
          |
          <a
            href="https://linkedin.com/in/kevinrutledge89"
            className="text-primary hover:text-secondary"
          >
            {" "}
            LinkedIn
          </a>{" "}
          |
          <a
            href="https://github.com/kevinrutledge"
            className="text-primary hover:text-secondary"
          >
            {" "}
            GitHub
          </a>
        </h1>
      </div>

      <ResumeSection title="Education">
        <ResumeEntry
          title="Bachelor of Science in Computer Science"
          organization="California Polytechnic State University, San Luis Obispo"
          date="Expected Graduation: June 2026"
        />
        <ResumeEntry
          title="Associate of Science in Computer Science"
          organization="De Anza College"
          date="Apr. 2023 - June 2024"
        />
      </ResumeSection>

      <ResumeSection title="Projects">
        <ResumeEntry
          title="Rey and Finn's Potion Shop"
          date="Sep. 2024 - Present"
        >
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Developed a RESTful API backend using Python and FastAPI for a
              role-playing potion shop simulation.
            </li>
            <li>
              Integrated PostgreSQL with SQLAlchemy and Supabase for robust data
              persistence and transaction management.
            </li>
            <li>
              Optimized database interactions and data modeling through
              Object-Relational Mapping techniques.
            </li>
            <li>
              Implemented error handling and input validation to ensure API
              reliability and compliance with specifications.
            </li>
            <li>
              Deployed the application on Render, managing environment
              variables, events and logging.
            </li>
          </ul>
        </ResumeEntry>

        <ResumeEntry
          title="Music Festival Application"
          date="Jan. 2024 - Mar. 2024"
        >
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Developed a backend system for a Music Festival Application using
              Java.
            </li>
            <li>
              Utilized Agile methodologies and GitHub for iterative development
              and team collaboration.
            </li>
            <li>
              Optimized data retrieval with BSTs, Heaps, and Hashtables to
              manage customer orders and event scheduling.
            </li>
            <li>
              Implemented role-based access control to secure user permissions
              for customers, employees, and managers.
            </li>
            <li>
              Established CI/CD pipelines to ensure smooth and reliable software
              releases.
            </li>
          </ul>
        </ResumeEntry>

        <ResumeEntry
          title="Bay Wheels Covid-19 Analysis"
          date="Sep. 2022 - Oct. 2022"
        >
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Analyzed 8 million records to study Covid-19 ridership patterns in
              the Bay Area using SQL and Tableau.
            </li>
            <li>
              Cleaned data with SQL to fix inconsistencies in station names,
              update IDs, and fill missing bike locations.
            </li>
            <li>
              Optimized SQL queries to enhance data retrieval speed for trip
              duration, distance, and regional analysis.
            </li>
            <li>
              Identified seasonal and YoY ridership changes, focusing on
              customer versus subscriber behaviors to inform stakeholders.
            </li>
            <li>
              Created a comprehensive Tableau dashboard to display key metrics
              for Covid-19 impact assessment.
            </li>
          </ul>
        </ResumeEntry>
      </ResumeSection>

      <ResumeSection title="Experience">
        <ResumeEntry
          title="Junior Quality Assurance Analyst"
          organization="Milestone Technologies"
          location="Mountain View, CA"
          date="Aug. 2018 - Sep. 2019"
        >
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Executed test plans with PyTest to identify and resolve software
              defects.
            </li>
            <li>
              Used Python for data analysis, diagnosing system performance
              issues and reducing response time.
            </li>
            <li>
              Tracked key test metrics such as pass/fail rates and defect
              density to drive process improvements.
            </li>
            <li>
              Collaborated with product and development teams to deliver
              high-quality feature releases with minimal defects.
            </li>
            <li>
              Automated regression and integration testing using Selenium,
              increasing testing efficiency by 30%.
            </li>
          </ul>
        </ResumeEntry>

        <ResumeEntry
          title="Lead Asset Management Technician"
          organization="Milestone Technologies"
          location="Mountain View, CA"
          date="Mar. 2014 - Aug. 2018"
        >
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Tracked inventory by receiving and verifying incoming goods with
              precise documentation to ensure 99% accuracy.
            </li>
            <li>
              Automated inventory checks and streamlined cycle counts using
              Python scripts, reducing manual data entry by 50%.
            </li>
            <li>
              Led efforts to improve inventory accuracy by integrating
              automation tools to detect stock discrepancies.
            </li>
          </ul>
        </ResumeEntry>
      </ResumeSection>

      <ResumeSection title="Technical Skills">
        <ul className="list-none pl-5 font-crimson text-lg space-y-2">
          <li>
            <strong>Languages:</strong> Java, C, C++, Python, SQL, JavaScript,
            HTML, CSS, LaTeX
          </li>
          <li>
            <strong>Frameworks & Libraries:</strong> React, FastAPI, Pytest,
            Selenium, JUnit, SQLAlchemy, Pandas, NumPy, Matplotlib, Seaborn
          </li>
          <li>
            <strong>Databases & Cloud:</strong> PostgreSQL, DynamoDB, Supabase,
            AWS, Google Cloud Platform, Render
          </li>
          <li>
            <strong>Tools:</strong> Git, GitHub, Docker, AWS, Render, Supabase,
            VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse
          </li>
          <li>
            <strong>Coursework:</strong> Database Systems, Systems Programming,
            Knowledge Discovery Data (Machine Learning), Dynamic Web Development
          </li>
        </ul>
      </ResumeSection>
    </div>
  );
}
