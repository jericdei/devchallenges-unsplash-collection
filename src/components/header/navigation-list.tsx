"use client"

import NavigationListItem from "./navigation-list-item"

export default function NavigationList() {
  return (
    <nav className="hidden lg:block">
      <ul className="text-description flex gap-4 font-medium">
        <NavigationListItem href="/">Home</NavigationListItem>
        <NavigationListItem href="/collections">Collections</NavigationListItem>
      </ul>
    </nav>
  )
}
