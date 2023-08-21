import Aboutme from "@/components/aboutme";
import Introduction from "@/components/introduction";
import image from "@/public/images/portfolio/1.jpg";

export default function Home() {
  return (
    <main className="min-h-screen   items-center ">
      <Introduction
        id="home"
        portfolio={{
          src: image,
          width: 450,
          height: 300,
        }}
        fullname={"Muaz Abboud"}
        introduction={
          '"Passionate Next.js developer with a strong foundation in React and front-end development. Equipped with a creative mindset and a keen eye for user-centric design. Excited to leverage cutting-edge technologies to build seamless and engaging web experiences."'
        }
      />
      <Aboutme />
    </main>
  );
}
