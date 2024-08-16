import { searchPhotos } from "@/services/photo.service"
import Image from "next/image"
import { setTimeout } from "timers/promises"
import MasonryContainer from "./masonry-container"
import Link from "next/link"

export default async function PhotoGrid({ query }: { query: string }) {
  const photos = await searchPhotos(query)

  if (photos?.results.length === 0) {
    return (
      <div className="grid h-96 w-full place-items-center">
        <p>
          No photos found for <em>&quot;{query}&quot;</em>. Try a different
          query.
        </p>
      </div>
    )
  }

  return (
    <MasonryContainer>
      {photos?.results.map(photo => (
        <Link
          className="block h-auto rounded-lg"
          key={photo.id}
          href={`/photo/${photo.id}`}
        >
          <Image
            className="rounded-lg"
            src={photo.urls.thumb}
            alt={photo.description ?? photo.id}
            width={800}
            height={800}
            loading="eager"
          />
        </Link>
      ))}
    </MasonryContainer>
  )
}
