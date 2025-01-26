import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    console.log();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success === true) {
        setResult("Thanks! You will be contacted soon.");
        setStatus("success");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setStatus("failed");
        setResult("Failed! Please try again.");
        (event.target as HTMLFormElement).reset();
      }

      setTimeout(() => {
        setStatus("");
        setResult("");
      }, 3000);
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              {/* <img
                src="/logo.png"
                alt="Dental Procs"
                className="2xl:w-[200px] 2xl:h-[200px] w-[170px] h-[170px] mb-6 mx-auto lg:mx-0"
              /> */}
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Monitor Your Dental Practice with{" "}
                <span className="text-6xl text-emerald-400 lg:display: block">
                  Dental Procs
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-400 mb-6">
                Track, analyze, and optimize your dental procedures with our
                specialized analytics platform designed for modern dental
                practices.
              </p>
              <p className="text-lg text-emerald-400 mb-12">
                Available as a web application and mobile app for iOS and
                Android
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto lg:mx-0">
                <a
                  href="https://dentalprocs.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:ring-1 hover:ring-emerald-500"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <span>Try a Demo</span>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=0X3PRdZceBo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:ring-1 hover:ring-red-500"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Watch Teaser</span>
                </a>
                <a
                  href="https://github.com/gabrielpenteado/dentalprocs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-700 hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:ring-1 hover:ring-gray-500"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Source Code</span>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img
                width={800}
                src="/dentalprocs.png"
                alt="Dental Procs Dashboard"
                className="justify-center flex items-center align-middle"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-800">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-16">
            Powerful Features for Dental Practices
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card">
              <svg
                className="w-12 h-12 text-emerald-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-3">Procedure Tracking</h3>
              <p className="text-gray-400">
                Create and monitor dental procedures with ease, organizing them
                by day of the week.
              </p>
            </div>
            <div className="feature-card">
              <svg
                className="w-12 h-12 text-emerald-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-3">
                Performance Analytics
              </h3>
              <p className="text-gray-400">
                Visualize procedure frequency and trends with comprehensive
                charts and analytics.
              </p>
            </div>
            <div className="feature-card">
              <svg
                className="w-12 h-12 text-emerald-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-3">Weekly Overview</h3>
              <p className="text-gray-400">
                Get a clear view of your practice's activity with daily and
                weekly procedure breakdowns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="bg-gray-900">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-16">
            Built with Modern Technology
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Vite", color: "text-purple-400" },
              { name: "React", color: "text-blue-300" },
              { name: "React Native", color: "text-blue-500" },
              { name: "TypeScript", color: "text-blue-400" },
              { name: "TailwindCSS", color: "text-teal-400" },
              { name: "RadixUI", color: "text-violet-400" },
              { name: "Node.js", color: "text-green-400" },
              { name: "MySQL", color: "text-orange-400" },
              { name: "Prisma", color: "text-indigo-400" },
              { name: "Zod", color: "text-pink-400" },
              { name: "Fastify", color: "text-red-400" },
              { name: "ApexCharts", color: "text-yellow-400" },
            ].map((tech) => (
              <div key={tech.name} className="tech-card">
                <span className={`font-medium ${tech.color}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-emerald-600">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              Boost your practice with Dental Procs
              <br />
              Join other professionals now!
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Your message"
                />
              </div>
              <div>
                <input
                  type="hidden"
                  name="subject"
                  value="New Message from Dental Procs website"
                />
              </div>
              <div>
                <input type="hidden" name="from_name" value="Dental Procs" />
              </div>
              <button
                type="submit"
                className={`w-full text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-emerald-700/25 ${
                  status === "success"
                    ? "border-2 border-emerald-300 hover:bg-emerald-600 duration-0"
                    : status === "failed"
                    ? "border-2 border-red-600 bg-red-500 hover:bg-red-700 duration-0"
                    : "bg-emerald-700 hover:bg-emerald-800"
                }`}
              >
                {result ? result : "Send"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
