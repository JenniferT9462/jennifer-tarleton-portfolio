import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex items-center justify-center text-center px-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/path-to-your-image.jpg')",
        }}
      ></div>

      <div className="relative z-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white">
          Hi, I'm <span className="text-yellow-400">Jennifer</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mt-4">
          Full-Stack Developer | Graphic Designer | Innovator
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:text-gray-900 transition-all"
          >
            Contact Me
          </a>
        </div>

       {/* Social Media Links */}
        
        <div className="flex justify-center mt-8 space-x-6">
          <a href="https://github.com/JenniferT9462" target="_blank" className="text-white hover:text-yellow-400">
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/jennifer-tarleton-11290350/" target="_blank" className="text-white hover:text-yellow-400">
            <FaLinkedin size={32} />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8">
          <a href="#about" className="text-white animate-bounce">
            ↓ Scroll Down
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

  
  