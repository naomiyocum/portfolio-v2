import React from "react";
import nomi from "../assets/images/nomi.jpg";

function About() {
  return (
    <div className="about lg:flex lg:flex-row flex flex-col gap-10 pt-3 px-2 md:pl-8">
      <div className="md:pl-5 pl-0">
        <h2 className="text-2xl">Naomi Yocum</h2>
        <h3 className="text-4xl pt-2 pb-6">Full Stack Developer</h3>
        <img className="profile-img rounded-2xl max-w-sm" src={nomi} />
      </div>
      <div className="pr-10 text-lg lg:pt-24">
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
            className="about-link hover:underline text-rose-200"
            target="_blank"
          >
            CData
          </a>{" "}
          - working hard at answering customer queries and extensively
          researching through documentation and Google. Outside of work, you can
          find me contributing to{" "}
          <a
            href="https://github.com/rubyforgood"
            className="about-link hover:underline text-rose-200"
            target="_blank"
          >
            Ruby For Good's
          </a>{" "}
          Open Source projects and collaborating on a freelancing project for a
          client based in Denver - goal is to become a full time Software
          Engineer!
          <br />
          <br /> When I'm not at my desk, I'm typically catching up on{" "}
          <span className="one-piece text-rose-200">One Piece</span>, cooking
          delicious meals, or exploring with my partner and dog, Zuko (yes, his
          name is from Avatar...or Grease, depending on your age 😂). We moved
          to the triangle area in NC recently and would appreciate any
          hiking/paddle boarding/
          <span className="font-bold">food</span> recs!
        </p>
      </div>
    </div>
  );
}

export default About;
