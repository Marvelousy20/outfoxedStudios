import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-transparent h-[110px] px-24 text-lg text-white z-10 relative">
      <ul className="flex items-center space-x-12 h-full bg-background">
        <li>
          <Image src="/images/logo.png" alt="logo" width="156" height="62" />
        </li>
        <li className="grow"></li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Works</Link>
        </li>
        <li>
          <Link href="/">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
