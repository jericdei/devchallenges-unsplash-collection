import Button from "@/components/button"
import PhotoActions from "@/components/photo-actions"
import UserAvatar from "@/components/user/user-avatar"
import Download from "@/components/vector/download"
import Plus from "@/components/vector/plus"
import { findPhotoById } from "@/services/photo.service"
import moment from "moment"
import Image from "next/image"

export default async function ImageDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const photo = await findPhotoById(params.id)

  if (!photo) {
    return <div>Photo not found.</div>
  }

  return (
    <div className="p-16">
      <div className="flex gap-8">
        <div className="w-1/3">
          <Image
            className="h-auto w-full rounded-md"
            src={photo.urls.full}
            alt={photo.description}
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
          </div>
        </div>
      </div>
    </div>
  )
}
