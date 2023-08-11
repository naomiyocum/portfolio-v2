import React, { useState } from "react";

function DescriptiveProject(props) {
  const techs = props.technologies.map((tech) => {
    return <span>{tech}</span>;
  });

  return (
    <div className="relative">
      <div className="desc-proj-container lg:grid lg:grid-cols-2 lg:px-20">
        <div className="img-container max-w-2xl">
          <img
            class="desc-proj-img rounded-md"
            src={`./src/images/${props.image}`}
            alt={props.name}
          />
        </div>

        <div className="content-container lg:grid lg:content-center">
          <div className="lg:pl-5">
            <div className="text-3xl mb-2 flex lg:justify-end px-3">
              {props.name}
            </div>
            <p className="desc-proj-summary second-text text-base p-3 rounded-sm content-end lg:text-right">
              {props.summary}
            </p>
          </div>
          <div className="proj-techs flex flex-row lg:justify-end gap-3 py-2 px-3 text-xs lg:text-sm">
            {techs}
          </div>
          <div className="flex flex-row lg:justify-end align-text-bottom gap-3 py-2 px-3">
            <a href={props.github} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {props.live !== "" && (
              <a href={props.live} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptiveProject;
