"use client"

import { GetPhotoByIdResponse } from "@/services/photo.service"
import Button from "./button"
import Download from "./vector/download"
import Plus from "./vector/plus"

interface PhotoProps {
  photo: GetPhotoByIdResponse
}

export default function PhotoActions({ photo }: PhotoProps) {
  const handleAddToCollection = () => {
    console.log("add to collection", photo)
  }

  const handleDownload = () => {
    console.log("download", photo)
  }

  return (
    <div className="flex gap-2">
      <Button leftComponent={<Plus />} onClick={handleAddToCollection}>
        Add to Collection
      </Button>
      <Button leftComponent={<Download />} onClick={handleDownload}>
        Download
      </Button>
    </div>
  )
}
