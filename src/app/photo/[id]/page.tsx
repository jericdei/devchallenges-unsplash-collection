import Button from "@/components/button"
import CollectionList from "@/components/collection/collection-list"
import PhotoActions from "@/components/photo-actions"
import UserAvatar from "@/components/user/user-avatar"
import { findPhotoById } from "@/services/photo.service"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"

export default async function ImageDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const photo = await findPhotoById(params.id)

  if (!photo) {
    return (
      <div className="grid h-96 place-items-center text-center">
        <div className="space-y-8">
          <p>Photo not found.</p>

          <Link href="/" className="mt-8 block">
            <Button>Back to Homepage</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="p-16">
      <div className="flex gap-8">
        <div className="w-1/2">
          <Image
            className="h-auto w-full rounded-md"
            src={photo.urls.full}
            alt={photo.description || photo.id}
            width={800}
            height={800}
            priority
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <UserAvatar user={photo.user} />

            <small className="small">
              Published on {moment(photo.created_at).format("MMMM D, YYYY")}
            </small>

            <PhotoActions photo={photo} />
            <CollectionList collections={photo.current_user_collections} />
          </div>
        </div>
      </div>
    </div>
  )
}
