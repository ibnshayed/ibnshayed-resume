/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

export default function Career() {
  return (
    <div className="mt-10">
      <p className="text-2xl text-blue-700 font-bold">
        Professional Experiences
      </p>
      <hr className="h-[3px] border-0 bg-blue-700 mb-3" />
      {/* Jatri */}
      <div className="mb-5">
        <p className="text-blue-900">
          <span className="text-2xl font-bold">Jatri,</span> Gulshan 2, Dhaka
        </p>
        <div className="flex justify-between">
          <p className="font-bold">Senior Software Engineer </p>
          <p className="text-blue-600">Jan, 2023 - Present</p>
        </div>
        <div className="flex justify-between">
          <p>Software Engineer </p>
          <p className="text-blue-600">Aug, 2021 - Dec, 2022</p>
        </div>
        <p className="indent-10 text-justify mt-4">
          Jatri is a public transport journey planner, digital ticketing, fleet
          management, and mobility marketplace, driving productivity by helping
          drivers to offer reliable transport to commuters through our
          state-of-the-art technology. Currently I am leading Jatri’s Water
          Transport Project’s Backend Team. Here my responsibility is to give a
          better back-end solution, give guidelines to the junior team members,
          code review, schema design etc. I also did some projects by React.js,
          Vue.js, and Nuxt.js. Visit the Jatri website:{" "}
          <Link
            className="text-blue-600"
            href={"https://www.jatri.co/"}
            target="_blank"
          >
            https://www.jatri.co/
          </Link>
        </p>
        <div className="flex justify-between mt-5">
          <div className="w-1/2">
            <p className="text-center font-bold text-blue-900">
              Backend Projects
            </p>
            <p>1. Water Transport - As Lead - ( Nest.js, MongoDB)</p>
            <p>2. Intercity New Panel (Nest.js, MongoDB)</p>
            <p>3. Intercity Old Panel (Express.js,MongoDB) </p>
          </div>
          <div className="w-1/2">
            <p className="text-center font-bold text-blue-900">
              Frontend Projects
            </p>
            <p>
              1. Jatri Rental - (React.js) -{" "}
              <Link
                className="text-blue-600"
                href={"https://rental.jatri.co/"}
                target="_blank"
              >
                https://rental.jatri.co/
              </Link>{" "}
            </p>
            <p>
              2. Jatri Ticket - (Nuxt.js) -{" "}
              <Link
                className="text-blue-600"
                href={"https://ticket.jatri.co/"}
                target="_blank"
              >
                https://ticket.jatri.co/
              </Link>{" "}
            </p>
            <p>
              3. Brtc Online Ticketing System( Govt. Project ) - (Nuxt.js) -{" "}
              <Link
                className="text-blue-600"
                href={"https://ticketing-brtc.gov.bd/"}
                target="_blank"
              >
                https://ticketing-brtc.gov.bd/
              </Link>
            </p>
            <p>4. Jatri Intercity Admin Panel - (Vue.js)</p>
          </div>
        </div>
      </div>

      {/* Bluebay IT */}
      <div className="mb-5">
        <p className="text-blue-900">
          <span className=" text-2xl font-bold">BlueBay IT Limited,</span> Sonir
          Akhra, Jatrabari, Dhaka
        </p>
        <div className="flex justify-between">
          <p className="font-bold">Junior Software Engineer </p>
          <p className="text-blue-600">June, 2021 - July, 2021</p>
        </div>
        <p className="indent-10 text-justify mt-4">
          Here, my responsibility is to build a fully dynamic multi-vendor
          E-Commerce solution from scratch. I have designed the database and
          developed the back-end with Python, Django, Django Rest Framework.
          Website:{" "}
          <Link
            className="text-blue-600"
            href={"http://bluebayit.com/"}
            target="_blank"
          >
            http://bluebayit.com/
          </Link>
        </p>
      </div>

      {/* Oshudsheba */}
      <div>
        <p className="text-blue-900">
          <span className="text-2xl font-bold">Oshud sheba,</span> Uttara, Dhaka
        </p>
        <div className="flex justify-between">
          <p className="font-bold">Frontend Engineer (Intern)</p>
          <p className="text-blue-600">July, 2020 - Oct, 2020</p>
        </div>
        <p className="indent-10 text-justify mt-4">
          I worked here for about 4 months as an intern. Mainly I worked with
          ReactJS based Oushod Sheba's Admin Portal Website, NextJS based
          e-commerce website, pure HTML, CSS, SCSS and JavaScript-based website.
          Website:{" "}
          <Link
            className="text-blue-600"
            href={"https://oushodsheba.com/"}
            target="_blank"
          >
            https://oushodsheba.com/
          </Link>
        </p>
      </div>
    </div>
  );
}
