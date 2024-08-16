import Link from "next/link"
import Logo from "@/components/vector/logo"
import NavigationList from "./navigation-list"

export default function Header() {
  return (
    <header className="w-full border-b border-primary-400 px-8 py-6">
      <div className="flex items-center justify-center lg:justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <NavigationList />
      </div>
    </header>
  )
}
