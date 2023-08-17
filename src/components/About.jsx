import React from "react";
import nomi from "../assets/images/nomi.jpg";

function About() {
  return (
    <>
      <div className="about lg:flex lg:flex-row flex flex-col gap-10 pt-3 px-2 md:pl-8">
        <div className="md:pl-5 pl-0">
          <h2 className="text-2xl">
            Naomi Yocum <span className="text-xs about-link">she/her</span>
          </h2>
          <h3 className="text-4xl pt-2 pb-6">Full Stack Developer</h3>
          <img className="profile-img rounded-2xl max-w-sm" src={nomi} />
        </div>
        <div className="text-lg px-4 lg:pt-24">
          <p>
            Thanks for checking out my page! A little about me:
            <br />
            <br /> I'm a passionate and empathetic software developer with a
            background in sales and customer service. Wanting to continue
            helping people and tap into my creative side, I decided to dive head
            first into the world of software development. I love learning - my
            dream job is to get paid to learn so I couldn't be in a better
            industry!
            <br />
            <br /> I'm currently a Technical Support Engineer at{" "}
            <a
              href="https://www.cdata.com/"
              className="about-link all-link hover:underline"
              target="_blank"
            >
              CData
            </a>{" "}
            - working hard at answering customer queries and extensively
            researching through documentation and Google. Outside of work, you
            can find me contributing to{" "}
            <a
              href="https://github.com/rubyforgood"
              className="about-link all-link hover:underline"
              target="_blank"
            >
              Ruby For Good's
            </a>{" "}
            Open Source projects and collaborating on a freelancing project for
            a client based in Denver - goal is to become a full time Software
            Engineer!
            <br />
            <br /> When I'm not at my desk, I'm typically catching up on{" "}
            <span className="one-piece about-link all-link">One Piece</span>,
            cooking delicious meals, or exploring with my partner and dog, Zuko.
            We moved to the triangle area in NC recently and would appreciate
            any hiking/paddle boarding/
            <span className="font-bold">food</span> recs!
          </p>
        </div>
      </div>
      <div className="all-skills my-5 px-4 lg:mt-5 md:flex md:flex-row md:justify-center md:gap-10">
        <h4 className="skills-main-title font-bold pl-2 md:mt-6">SKILLS</h4>
        <div className="skills-container grid grid-cols-2 pl-6 md:flex md:flex-row justify-center gap-10 my-6">
          <div>
            <h4 className="font-bold mb-2">LANGUAGES</h4>
            <ul>
              <li>Ruby</li>
              <li>RSpec</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript (ES6)</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">FRAMEWORKS</h4>
            <ul>
              <li>Rails</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">TOOLS</h4>
            <ul>
              <li>Postgres</li>
              <li>Postman</li>
              <li>Git & GitHub</li>
              <li>CI/CD</li>
              <li>Chrome Dev Tools</li>
              <li>Docker</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">MISC</h4>
            <ul>
              <li>
                <a
                  href="https://monkeytype.com/"
                  target="_blank"
                  className="about-link all-link"
                >
                  176 WPM
                </a>
              </li>
              <li>Eat 30+ nigiri in one sitting</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
