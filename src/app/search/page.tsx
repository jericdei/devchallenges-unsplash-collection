import MasonryContainer from "@/components/masonry-container";
import PhotoGrid from "@/components/photo-grid";
import SearchInput from "@/components/search-input";
import Skeleton from "@/components/skeleton";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const { q } = searchParams;

  return (
    <main>
      <section className="h-24 bg-[url('/gradient.png')] bg-no-repeat sticky top-0 z-10">
        <SearchInput
          className="w-4/5 md:w-3/4 lg:w-1/2 absolute left-1/2 -bottom-1/2 -translate-y-1/2 -translate-x-1/2"
          defaultValue={q}
        />
      </section>

      <Suspense key={q} fallback={<PhotoGridSkeleton />}>
        <PhotoGrid query={q} />
      </Suspense>
    </main>
  );
}

function PhotoGridSkeleton() {
  return (
    <MasonryContainer>
      {[...Array(30)].map((_, i) => (
        <Skeleton
          key={i}
          height={Math.floor(Math.random() * (15 - 5 + 1)) + 5 + "rem"}
          className="animate-pulse"
        />
      ))}
    </MasonryContainer>
  );
}
