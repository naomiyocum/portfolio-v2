import React from "react";

function Contact() {
  return (
    <div className="flex flex-col pt-20 gap-20 items-center align-center px-2 md:flex-row md:justify-around">
      <div className="contact-border flex flex-row justify-around border-2 p-4 w-40 md:flex-col md:gap-12 md:p-8 md:h-72 md:w-28 rounded-full">
        <div className="all-link">
          <a href="https://www.linkedin.com/in/naomiyocum/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-linkedin w-6 md:w-10"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
        </div>
        <div className="all-link">
          <a href="https://www.github.com/naomiyocum" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-github w-6 md:w-10"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
        <div className="all-link">
          <a href="../src/assets/Yocum Resume.pdf" target="_blank">
            <svg
              className="pl-0 w-6 md:w-10"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              fill="currentColor"
            >
              <path d="M30.13 51.31h20a1.75 1.75 0 0 0 1.75-1.75v-5.12a11.067 11.067 0 0 0-4.4-8.832 9.977 9.977 0 1 0-14.713 0 11.08 11.08 0 0 0-4.387 8.832v5.12a1.75 1.75 0 0 0 1.75 1.75zm10-28.894a6.477 6.477 0 1 1-6.477 6.477 6.485 6.485 0 0 1 6.473-6.476zM31.88 44.44a7.576 7.576 0 0 1 3.87-6.594 9.857 9.857 0 0 0 8.754 0 7.56 7.56 0 0 1 3.876 6.594v3.37h-16.5z" />
              <path d="M112.654 4.75H15.346A1.75 1.75 0 0 0 13.6 6.5v115a1.75 1.75 0 0 0 1.75 1.75h97.308a1.75 1.75 0 0 0 1.75-1.75V6.5a1.75 1.75 0 0 0-1.754-1.75zm-1.75 115H17.1V8.25h93.8z" />
              <path d="M26.346 65.75h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 80.194h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 109.083h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 94.639h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM64 22.417h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 36.861h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 51.306h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="contact-greeting">
        <div className="say-hello">
          <p>Say Hello</p>
          <p>
            ハイサイ
            <span className="all-link inline-block pl-6 md:pl-8 w-16 md:w-24 lg:w-28">
              <a href="mailto:naomiyocum24@gmail.com?Subject=ハイサイ">
                <svg
                  data-name="1-Email"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  width="95%"
                  height="95%"
                >
                  <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z" />
                </svg>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
