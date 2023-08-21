import Image from "next/image";
import NamePanel from "./namepanel";

export default function Introduction({ portfolio, fullname, introduction }) {
  return (
    <div className="md:flex  container flex-row-reverse min-h-screen items-center">
      {portfolio && (
        <div className="md:w-1/2">
          <Image
            src={portfolio.src}
            width={portfolio.width}
            height={portfolio.height}
            alt="portfolio"
            priority
          />
        </div>
      )}

      <NamePanel
        fullname={fullname}
        introduction={introduction}
        className="md:w-1/2"
      />
    </div>
  );
}
