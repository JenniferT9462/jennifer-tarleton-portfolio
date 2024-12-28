const projects = [
  {
    title: "Anna's World",
    description:
      "A website about a kid YouTuber where you can shop for their merchandise, play mini-games, look at their projects and learn about the YouTuber and what they are up to.",
    github: "https://github.com/JenniferT9462/Annas-World",
    deployed: "https://jennifert9462.github.io/Annas-World/",
    tech: ["HTML", "CSS", "Javascript"],
    image: "/annasWorld.png", 
  },
  {
    title: "Knitting App",
    description: "A knitting app to manage knitting projects and get inspiration for future projects.",
    github: "https://github.com/JenniferT9462/The-Knitting-App",
    deployed: "https://jennifert9462.github.io/The-Knitting-App/",
    tech: ["HTML", "CSS", "Javascript"],
    image: "/knittingApp.png", 
  },
  {
    title: "Planner App",
    description: "This project is a Planner App that is similar to a Bullet Journal. Users can login and be able to add events to a calender, add TODOs to a task list, track progress on tasks, track habits or activities that will be visualized with a pie graph and a mood tracker with journal entries.",
    github: "https://github.com/JenniferT9462/Planner-App",
    deployed: "https://capstone-demo-ruddy.vercel.app/",
    tech: ["Next.js", "Node.js", "Upstash"],
    image: "/plannerApp.png", 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-teal-600">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold">Technologies:</p>
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <li
                        key={idx}
                        className="bg-yellow-600 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex space-x-2">
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 text-white hover:text-teal-400 bg-teal-700 p-2 rounded-md"
                    >
                    View Github Repo
                    </a>
                    <a
                    href={project.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 text-white hover:text-teal-400 bg-teal-700 p-2 rounded-md"
                    >
                    View Deployed Site
                    </a>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
