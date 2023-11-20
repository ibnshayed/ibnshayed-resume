import React from "react";

export default function Education() {
  return (
    <div className="mt-5">
      <p className="text-2xl text-blue-700 font-bold">Academic Summary</p>
      <hr className="h-[3px] border-0 bg-blue-700 mb-3" />
      <div>
        <table className="table-fixed">
          <tbody>
            <tr>
              <td className="indent-10">●</td>
              <td className="indent-2 w-[50%]">Southeast University</td>
              <td className="w-[15%]">BSc in CSE</td>
              <td className="w-[15%]">3.74 / 4.00</td>
              <td className="w-[15%] text-right">2017 - 2020</td>
            </tr>
            <tr>
              <td className="indent-10">●</td>
              <td className="indent-2 w-[50%]">Dhaka Imperial College</td>
              <td className="w-[15%]">HSC</td>
              <td className="w-[15%]">5.00 / 5.00</td>
              <td className="w-[15%] text-right">2013 - 2015</td>
            </tr>
            <tr>
              <td className="indent-10">●</td>
              <td className="indent-2 w-[50%]">
                Siraj Mia Memorial Model School
              </td>
              <td className="w-[15%]">SSC</td>
              <td className="w-[15%]">4.94 / 5.00</td>
              <td className="w-[15%] text-right">2013</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
