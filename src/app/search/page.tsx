import SearchInput from "@/components/search-input";

export default function Page({
  searchParams,
}: {
  searchParams: Record<string, string | string[]>;
}) {
  const { q } = searchParams;

  return (
    <main>
      <section className="h-24 bg-[url('/gradient.png')] bg-no-repeat relative">
        <SearchInput
          className="w-1/2 absolute left-1/2 -bottom-1/2 -translate-y-1/2 -translate-x-1/2"
          defaultValue={q}
        />
      </section>
    </main>
  );
}
