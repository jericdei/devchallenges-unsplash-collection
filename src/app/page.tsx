import SearchInput from "@/components/search-input";

export default function Home() {
  return (
    <main className="bg-[url('/hero-image.png')] bg-cover bg-no-repeat flex-1 w-full grid place-items-center">
      <div className="text-center space-y-4 w-3/4 lg:w-1/2 2xl:w-1/3">
        <h1 className="title">Search</h1>
        <p>Search high-resolution images from Unsplash</p>
        <SearchInput />
      </div>
    </main>
  );
}
