import { notFound } from 'next/navigation'

import CollectionForm from '@/components/admin/CollectionForm'
import { COLLECTION_CONFIGS } from '@/lib/cms/collections'
import { resolveCollectionPath } from '@/lib/cms/navigation'

interface EditCollectionPageProps {
  params: { collection: string; id: string }
}

export default function EditCollectionPage({ params }: EditCollectionPageProps) {
  const collectionKey = resolveCollectionPath(params.collection)
  const config = collectionKey ? COLLECTION_CONFIGS[collectionKey] : null

  if (!config) {
    notFound()
  }

  return (
    <CollectionForm
      config={config}
      pathKey={params.collection}
      itemId={params.id}
    />
  )
}
