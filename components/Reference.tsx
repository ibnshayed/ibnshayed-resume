import Link from "next/link";
import React from "react";

export default function Reference() {
  return (
    <div className="mt-5">
      <p className="text-2xl text-blue-700 font-bold">References</p>
      <hr className="h-[3px] border-0 bg-blue-700 mb-3" />
      <div className="flex justify-around">
        <div>
          <p className="text-blue-900">● Md. Monirul Hasan</p>
          <p className="indent-4">Senior Lecturer, Southeast University</p>
          <p className="indent-4">
            Linkedin:{" "}
            <Link
              className="text-blue-600"
              href={"https://www.linkedin.com/in/monirul-hasan"}
              target="_blank"
            >
              @monirul-hasan
            </Link>{" "}
          </p>
        </div>
        <div>
          <p className="text-blue-900">● Habibur Rahman</p>
          <p className="indent-4">Sr. Manager, Technology at Jatri</p>
          <p className="indent-4">
            Linkedin:{" "}
            <Link
              className="text-blue-600"
              href={"https://www.linkedin.com/in/iamhabibur"}
              target="_blank"
            >
              @iamhabibur
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
