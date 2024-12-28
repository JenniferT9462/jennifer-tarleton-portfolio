// src/components/AboutMe.jsx

"use client";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 text-teal-600">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        
        {/* Introduction */}
        <p className="text-lg mb-6">
          Hi! I'm Jennifer, a passionate full-stack developer with a background in graphic design. I am driven by the challenge of creating intuitive, user-friendly applications and continuously learning new technologies to improve my craft.
        </p>

        {/* Skills */}
        <div className="skills-section mb-8">
          <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
          <ul className="flex flex-wrap justify-center gap-4">
            <li className="bg-blue-500 text-white px-4 py-2 rounded-full">JavaScript</li>
            <li className="bg-blue-500 text-white px-4 py-2 rounded-full">React</li>
            <li className="bg-blue-500 text-white px-4 py-2 rounded-full">Next.js</li>
            <li className="bg-blue-500 text-white px-4 py-2 rounded-full">Node.js</li>
            <li className="bg-blue-500 text-white px-4 py-2 rounded-full">Tailwind CSS</li>
            <li className="bg-blue-500 text-white px-4 py-2 rounded-full">MongoDB</li>
          </ul>
        </div>

        {/* Background */}
        <div className="background-section mb-8">
          <h3 className="text-xl font-semibold mb-4">Background</h3>
          <p className="text-lg">
            I began my career in graphic design, where I developed a keen eye for user-centered design. After transitioning into software development, I found my true passion in building full-stack applications. I'm currently working on improving my backend skills and learning new frameworks to expand my toolkit.
          </p>
        </div>

        {/* Goals */}
        <div className="goals-section mb-8">
          <h3 className="text-xl font-semibold mb-4">My Goals</h3>
          <p className="text-lg">
            As I continue to develop my skills, I'm eager to take on more complex projects and contribute to innovative, impactful products. I'm always looking for opportunities to collaborate and grow in the tech community.
          </p>
        </div>

        {/* Optional Fun Facts */}
        <div className="fun-facts-section">
          <h3 className="text-xl font-semibold mb-4">Fun Facts</h3>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies, experimenting with graphic design, or enjoying a cup of coffee at a local café. I also love traveling and discovering new cultures!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
