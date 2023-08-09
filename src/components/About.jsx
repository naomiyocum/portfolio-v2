import React from "react";

function About() {
  return (
    <div className="about md:grid md:grid-cols-2 flex flex-col gap-10 py-5">
      <div className="pl-5">
        <h2 className="text-2xl">Naomi Yocum</h2>
        <h3 className="text-4xl pt-2">Full Stack Developer</h3>
      </div>
      <div className="px-12 text-lg">
        <p>
          Thanks for checking out my page! A little about me:
          <br />
          <br /> I'm a passionate and empathetic software developer with a
          background in sales and customer service. Wanting to continue helping
          people and tap into my creative side, I decided to dive head first
          into the world of software development. I love learning - my dream job
          is to get paid to learn so I couldn't be in a better industry!
          <br />
          <br /> I'm currently a Technical Support Engineer at{" "}
          <a
            href="https://www.cdata.com/"
            className="about-link hover:underline font-bold text-rose-200"
            target="_blank"
          >
            CData
          </a>{" "}
          - working hard at answering customer queries and extensively
          researching through documentation and Google. Outside of work, you can
          find me contributing to{" "}
          <a
            href="https://github.com/rubyforgood"
            className="about-link hover:underline font-bold text-rose-200"
            target="_blank"
          >
            Ruby For Good's
          </a>{" "}
          Open Source projects and collaborating on a freelancing project for a
          client based in Denver - goal is to become a full time Software
          Engineer!
          <br />
          <br /> When I'm not at my desk, I'm typically catching up on One
          Piece, cooking delicious meals, or exploring with my partner and dog,
          Zuko (yes, his name is from Avatar...or Grease, depending on your age
          😂). We moved to the triangle area in NC recently and would appreciate
          any hiking/paddle boarding/
          <span className="font-bold">food</span> recs!
        </p>
      </div>
    </div>
  );
}

export default About;
