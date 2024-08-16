import axios from "@/lib/axios"
import { AxiosError } from "axios"

export async function searchPhotos(
  query: string,
): Promise<SearchPhotosResponse | undefined> {
  try {
    const { data } = await axios.get<SearchPhotosResponse>("/search/photos", {
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

export async function findPhotoById(id: string) {
  try {
    const { data } = await axios.get<GetPhotoByIdResponse>(`/photos/${id}`)

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
  created_at: string
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

export interface GetPhotoByIdResponse {
  id: string
  created_at: string
  updated_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  downloads: number
  likes: number
  liked_by_user: boolean
  public_domain: boolean
  description: string
  exif: Exif
  location: Location
  tags: Tag[]
  current_user_collections: CurrentUserCollection[]
  urls: Urls
  links: GetPhotoByIDResponseLinks
  user: User
}

export interface CurrentUserCollection {
  id: number
  title: string
  published_at: string
  last_collected_at: string
  updated_at: string
  cover_photo: null
  user: null
}

export interface Exif {
  make: string
  model: string
  name: string
  exposure_time: string
  aperture: string
  focal_length: string
  iso: number
}

export interface GetPhotoByIDResponseLinks {
  self: string
  html: string
  download: string
  download_location: string
}

export interface Location {
  city: string
  country: string
  position: Position
}

export interface Position {
  latitude: number
  longitude: number
}

export interface Tag {
  title: string
}

export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

export interface User {
  id: string
  updated_at: string
  username: string
  name: string
  portfolio_url: string
  bio: string
  location: string
  total_likes: number
  total_photos: number
  total_collections: number
  links: UserLinks
}

export interface UserLinks {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
}
