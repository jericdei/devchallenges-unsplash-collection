import Link from "next/link"
import Logo from "./vector/logo"

export default function Header() {
  return (
    <header className="w-full border-b border-primary-400 px-8 py-6">
      <div className="flex justify-center lg:justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <Navigation />
      </div>
    </header>
  )
}

function Navigation() {
  return (
    <nav className="hidden lg:block">
      <ul className="text-description flex gap-16 font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/collections">Collections</Link>
        </li>
      </ul>
    </nav>
  )
}
