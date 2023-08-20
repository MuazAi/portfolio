import Image from "next/image";
import Introduction from "./partials/introduction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <Introduction
          id="home"
          portfolio={{
            src: "./images/portfolio/1.jpg",
            width: 450,
            height: 300,
          }}
          fullname={"Muaz Abboud"}
          introduction={
            '"Passionate Next.js developer with a strong foundation in React and front-end development. Equipped with a creative mindset and a keen eye for user-centric design. Excited to leverage cutting-edge technologies to build seamless and engaging web experiences."'
          }
        />
      </section>
    </main>
  );
}
