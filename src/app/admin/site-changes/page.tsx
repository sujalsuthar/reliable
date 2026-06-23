import SiteEditor from '@/components/editor/SiteEditor'
import { getStore } from '@/lib/cms/store'

export const metadata = {
  title: 'Site Changes — Visual Editor',
}

export default async function SiteChangesPage() {
  const store = await getStore()
  return <SiteEditor initialStore={store} />
}
