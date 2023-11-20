import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center mx-10">
      <div>
        <p className="text-4xl text-blue-700 font-bold">Md. Al - Emran</p>
        <p className="text-xl font-bold text-gray-600">
          Senior Software Engineer
        </p>
        <p>
          Mobile:{" "}
          <Link className="text-blue-600" href={"tel:+8801685-966035"}>
            +880 1685-966035
          </Link>
        </p>
        <p>
          Email:{" "}
          <Link className="text-blue-600" href={"mailto:ibnshayed@gmail.com"}>
            ibnshayed@gmail.com
          </Link>
        </p>
        <p>
          Portfolio:{" "}
          <Link
            className="text-blue-600"
            href={"https://ibnshayed.github.io/"}
            target="_blank"
          >
            https://ibnshayed.github.io/
          </Link>
        </p>
        <p>
          Linkedin:{" "}
          <Link
            className="text-blue-600"
            href={"https://linkedin.com/in/ibnshayed/"}
            target="_blank"
          >
            @ibnshayed
          </Link>
        </p>
        <p>
          Github:{" "}
          <Link
            className="text-blue-600"
            href={"https://www.github.com/ibnshayed"}
            target="_blank"
          >
            @ibnshayed
          </Link>
        </p>
        <p>
          Address: <span className="italic">Banani, Dhaka, Bangladesh.</span>
        </p>
      </div>
      <div>
        <Image src={"/my-pic.jpg"} width={150} height={150} alt="my-pic" />
      </div>
    </div>
  );
}
