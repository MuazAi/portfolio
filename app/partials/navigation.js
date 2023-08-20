import Image from "next/image";
import Link from "next/link";

export default function Navigation({ Navlinks }) {
  return (
    <nav className="flex justify-around items-center">
      <Image
        src="./images/logo/logo-v.png"
        alt="Logo"
        width={200}
        height={100}
        className="w-20"
      />
      <ul className="flex w-1/4 justify-around">
        {Navlinks.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.href} scroll={true}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
