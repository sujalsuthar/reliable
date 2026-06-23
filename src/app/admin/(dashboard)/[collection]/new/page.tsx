import { notFound } from 'next/navigation'

import CollectionForm from '@/components/admin/CollectionForm'
import { COLLECTION_CONFIGS } from '@/lib/cms/collections'
import { resolveCollectionPath } from '@/lib/cms/navigation'

interface NewCollectionPageProps {
  params: { collection: string }
}

export default function NewCollectionPage({ params }: NewCollectionPageProps) {
  const collectionKey = resolveCollectionPath(params.collection)
  const config = collectionKey ? COLLECTION_CONFIGS[collectionKey] : null

  if (!config || config.readOnly) {
    notFound()
  }

  return <CollectionForm config={config} pathKey={params.collection} />
}
