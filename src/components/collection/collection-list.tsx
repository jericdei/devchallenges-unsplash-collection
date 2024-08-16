import { CurrentUserCollection } from "@/services/photo.service"

interface CollectionListProps {
  collections: CurrentUserCollection[]
}

export default function CollectionList({ collections }: CollectionListProps) {
  return (
    <div className="p-4">
      <pre>{JSON.stringify(collections, null, 2)}</pre>
    </div>
  )
}
