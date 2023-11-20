"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "../Header";
import AboutMe from "../AboutMe";
import Education from "../Education";
import Career from "../Career";
import Skill from "../Skill";
import Project from "../Project";
import Language from "../Language";
import Reference from "../Reference";

export default function HomePage() {
  // const ref = useRef();
  const printDocument = () => {
    if (typeof window !== "undefined") {
      let divContents = window.document.getElementById("divToPrint")!.innerHTML;
      // window.open();
      // var is_chrome = Boolean(window.chrome);
      var is_chrome = false;
      window.document.write("<html>");
      window.document.write("<head>");
      window.document.write(
        "<script src='https://cdn.tailwindcss.com'></script>"
      );
      window.document.write("</head>");
      window.document.write("<body>");
      window.document.write("<style>");
      window.document.write("@page {margin-top: 0;margin-bottom: 0;}");
      window.document.write(
        "body{ padding-top: 2rem; padding-bottom: 2rem; -webkit-print-color-adjust: exact; }"
      );
      window.document.write("</style>");
      window.document.write(divContents);
      window.document.write("</body></html>");
      window.document.close();
      window.focus();
      if (is_chrome) {
        window.onload = function () {
          const chromeDelay = setTimeout(function () {
            // wait until all resources loaded
            window.print(); // change window to winPrint
            window.close(); // change window to winPrint
            window.location.reload();
            window.onunload = function () {
              //close print preview
              //successToast('List printed successfully!')
            };
            clearTimeout(chromeDelay);
          }, 200);
        };
      } else {
        window.print();
        window.close();
        window.location.reload();
        window.onunload = function () {
          //close print preview
          //successToast('List printed successfully!')
        };
      }
    }
  };

  return (
    <div className="sm:w-full lg:max-w-[800px] bg-white mx-auto my-10 p-6 rounded-lg">
      <div id="divToPrint">
        <Header />
        <AboutMe />
        <Education />
        <Career />
        <Skill />
        <Project />
        <Language />
        <Reference />
      </div>
      <div className="py-10">
        <button
          className="bg-blue-700 text-white block mx-auto px-6 py-3 rounded-full"
          onClick={printDocument}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}
