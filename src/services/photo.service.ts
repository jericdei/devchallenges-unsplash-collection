import axios from "@/lib/axios"
import { AxiosError } from "axios"

export async function searchPhotos(
  query: string,
): Promise<SearchPhotosResponse | undefined> {
  try {
    const { data } = await axios.get("/search/photos", {
      params: {
        query,
        per_page: 30,
      },
    })

    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data)
    } else {
      console.error("Unexpected error", error)
    }
  }
}

export interface SearchPhotosResponse {
  total: number
  total_pages: number
  results: Photo[]
}

export interface Photo {
  id: string
  created_at: Date
  width: number
  height: number
  color: string
  blur_hash: string
  likes: number
  liked_by_user: boolean
  description: string
  user: User
  current_user_collections: any[]
  urls: Url
  links: ResultLinks
}

export interface ResultLinks {
  self: string
  html: string
  download: string
}

export interface Url {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

export interface User {
  id: string
  username: string
  name: string
  first_name: string
  last_name: string
  instagram_username: string
  twitter_username: string
  portfolio_url: string
  profile_image: ProfileImage
  links: UserLinks
}

export interface UserLinks {
  self: string
  html: string
  photos: string
  likes: string
}

export interface ProfileImage {
  small: string
  medium: string
  large: string
}
