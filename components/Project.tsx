import Link from "next/link";
import React from "react";

export default function Project() {
  return (
    <div className="mt-5">
      <p className="text-2xl text-blue-700 font-bold">Personal Projects</p>
      <hr className="h-[3px] border-0 bg-blue-700 mb-3" />

      <div>
        <p>
          Please Visit my Portfolio’s work section:{" "}
          <Link
            className="text-blue-600"
            href={"https://ibnshayed.github.io/#works"}
            target="_blank"
          >
            https://ibnshayed.github.io/#works
          </Link>
        </p>
      </div>
    </div>
  );
}
