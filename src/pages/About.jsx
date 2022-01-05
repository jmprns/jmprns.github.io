const About = () => {
  const pls = ["HTML5", "CSS3", "Javascript", "PHP", "Python"];
  const fws = [
    "Node JS",
    "React JS",
    "Vue JS",
    "Alpine",
    "jQuery",
    "Laravel",
    "Codeigniter",
    "Django",
    "Wordpress",
  ];
  const tls = ["Git", "Docker", "Kubernetes", "Proxmox", "AWS"];
  const dbs = ["MySQL", "PostgreSQL", "Sqlite", "MongoDB", "Firebase"];

  return (
    <div className="flex flex-col max-w-2xl border-gray-700 mx-auto pb-16">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-white">
        Hi! I'm Jimwell
      </h3>

      <div className="mb-8 leading-6 text-gray-400">
        <p>
          ...or, you can call me Xijei (my IGN 🎮). I'm a Software Developer
          based in Baler, Aurora. Passionate about building web applications
          that are performant, accessible and have a great user experience. I
          love learning so I'm always keeping up to date by doing random side
          projects , watching conference talks, listening to podcasts and
          reading blog posts.
        </p>

        <p className="mt-5">
          My coding journey started unexpectedly in my second year of high
          school way back in 2013. I went to university and took Bachelor of
          Science in Computer Science. In our first year we had to build a basic
          website and I thought writing code was so cool. I was hooked so and
          continued my studies. I graduated in 2019 with an honour and starte
          working in the industry after my graduation.
        </p>

        <h4 className="text-white font bold text-xl mt-5">Tech Skills</h4>

        <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">

          <div className="flex flex-col space-y-4">
            <h5 className="text-lg mt-2">Markup / Laguages</h5>
            <ul>
              {pls.map((item, key) => {
                return <li className="mt-1">🔹{item}</li>;
              })}
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h5 className="text-lg mt-2">Library / Framework</h5>
            <ul>
              {fws.map((item, key) => {
                return <li className="mt-1">🔹{item}</li>;
              })}
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h5 className="text-lg mt-2">Database</h5>
            <ul>
              {dbs.map((item, key) => {
                return <li className="mt-1">🔹{item}</li>;
              })}
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h5 className="text-lg mt-2">Tools</h5>
            <ul>
              {tls.map((item, key) => {
                return <li className="mt-1">🔹{item}</li>;
              })}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
