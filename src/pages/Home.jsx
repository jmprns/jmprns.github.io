import Hero from "../components/Hero";
import Highlight from "../components/Highlight";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl border-gray-700 mx-auto pb-16">
      <Hero />

      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-white">
        Featured Projects
      </h3>


      <div className="flex gap-6 flex-col md:flex-row">
        <Highlight title="9Movies" gradient="from-[#D8B4FE] to-[#818CF8]" />
        <Highlight title="Automated Voting System" gradient="from-[#D8B4FE] to-[#818CF8]" />
        <Highlight title="Library Management System" gradient="from-[#D8B4FE] to-[#818CF8]" />
      </div>
      <a href="?" className="flex mt-8 text-gray-400 leading-7 rounded-lg hover:text-gray-200 transition-all h-6">
            Show all projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
    </div>
  );
};

export default Home;
