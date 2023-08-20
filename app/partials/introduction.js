import Image from "next/image";
import NamePanel from "./namepanel";

export default function Introduction({ portfolio, fullname, introduction }) {
  return (
    <div className="flex flex-row-reverse w-screen px-52">
      {portfolio && (
        <div className="w-1/2">
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
        className="w-1/2"
      />
    </div>
  );
}
