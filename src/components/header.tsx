import Link from "next/link";
import Logo from "./vector/logo";

export default function Header() {
  return (
    <header className="w-full px-8 py-6 border-b border-primary-400">
      <div className="flex justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <Navigation />
      </div>
    </header>
  );
}

function Navigation() {
  return (
    <nav>
      <ul className="flex gap-16 text-description font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/collections">Collections</Link>
        </li>
      </ul>
    </nav>
  );
}
