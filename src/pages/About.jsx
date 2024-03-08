import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <section>
      {/* Header Navbar */}
      <header>
        <Header />
      </header>
      {/* main content  */}
      <main>
        {/* banner section  */}
        <Banner />
      </main>
      {/* Footer section  */}
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default About;
