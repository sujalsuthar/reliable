import { notFound } from 'next/navigation'

import CollectionList from '@/components/admin/CollectionList'
import { COLLECTION_CONFIGS } from '@/lib/cms/collections'
import { resolveCollectionPath } from '@/lib/cms/navigation'

interface CollectionPageProps {
  params: { collection: string }
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const collectionKey = resolveCollectionPath(params.collection)
  const config = collectionKey ? COLLECTION_CONFIGS[collectionKey] : null

  if (!config) {
    notFound()
  }

  return <CollectionList config={config} pathKey={params.collection} />
}
