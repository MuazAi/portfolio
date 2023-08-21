"use client";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function NamePanel({ fullname, introduction }) {
  const [end, setEnd] = useState(false);
  const flip_end = function () {
    setEnd(true);
    console.log(end);
  };
  return (
    <article className=" flex flex-col w-full">
      <h1 className="text-4xl">Front End Developer</h1>
      <h2>
        <TypeAnimation
          sequence={[
            "Muaz",
            1000,
            "Abboud",
            1000,
            "Muaz Abboud",
            1000,
            flip_end,
          ]}
          cursor={false}
          speed={50}
          repeat={2}
          className="text-2xl"
        />
      </h2>
      {end && (
        <TypeAnimation
          sequence={[introduction, 1000]}
          speed={50}
          wrapper="p"
          cursor={false}
          className="w-full md:w-1/2"
        />
      )}
    </article>
  );
}
