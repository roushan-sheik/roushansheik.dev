import React from "react";
import AllProjects from "../components/AllProjects";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Projects = () => {
  return (
    <section>
      {/* Header Navbar */}
      <header>
        <Header />
      </header>
      {/* main content  */}
      <main>
        <div>
          <AllProjects />
        </div>
      </main>
      {/* Footer section  */}
      <Footer />
    </section>
  );
};

export default Projects;
