import { User } from "@/services/photo.service"
import Image from "next/image"

interface UserAvatarProps {
  user: User
}

export default function UserAvatar({ user }: UserAvatarProps) {
  return (
    <div className="flex items-center gap-4">
      <Image
        className="w-12 rounded-full"
        src={user.profile_image.small}
        alt={user.name}
        width={32}
        height={32}
      />

      <p className="description">{user.name}</p>
    </div>
  )
}
