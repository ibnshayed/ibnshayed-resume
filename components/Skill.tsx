import Link from "next/link";
import React from "react";

export default function Skill() {
  return (
    <div className="mt-5">
      <p className="text-2xl text-blue-700 font-bold">Technical Skills</p>
      <hr className="h-[3px] border-0 bg-blue-700 mb-3" />

      <p>
        <span className="font-bold">Programming Language:</span> JavaScript,
        TypeScript, Python
      </p>
      <p>
        <span className="font-bold">Backend Frameworks:</span> Node.js,
        Express.js, Nest.js
      </p>
      <p>
        <span className="font-bold">Front-end Frameworks:</span> React.js,
        Next.js, Vue.js, Nuxt.js, TailwindCss, Material UI, Bootstrap 5, HTML,
        CSS, SCSS
      </p>
      <p>
        <span className="font-bold">Databases:</span> MongoDB, MySQL
      </p>
      <p>
        <span className="font-bold">Other Technologies:</span> GraphQL, Redis,
        AWS (S3), Docker, Kubernetes, RabbitMQ, Socket.io, Django, DRF, FastAPI,
        Spring Boot, Java, C/C++
      </p>
      <p>
        <span className="font-bold">Problem solving:</span>&nbsp
        <Link
          className="text-blue-600"
          href={"https://www.stopstalk.com/user/profile/ibnshayed"}
          target="_blank"
        >
          https://www.stopstalk.com/user/profile/ibnshayed
        </Link>
      </p>
    </div>
  );
}
