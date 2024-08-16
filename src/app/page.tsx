import SearchInput from "@/components/search-input"

export default function Home() {
  return (
    <main className="grid w-full flex-1 place-items-center bg-[url('/hero-image.png')] bg-contain bg-no-repeat">
      <div className="w-3/4 space-y-4 text-center lg:w-1/2 2xl:w-1/3">
        <h1 className="title">Search</h1>
        <p>Search high-resolution images from Unsplash</p>
        <SearchInput />
      </div>
    </main>
  )
}
