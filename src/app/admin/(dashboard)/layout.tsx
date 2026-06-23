import AdminSidebar from '@/components/admin/AdminSidebar'
import { isRtl } from '@/lib/i18n/config'
import { getLocale } from '@/lib/i18n/locale'

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const rtl = isRtl(locale)

  return (
    <div
      className={`flex min-h-screen bg-[#f4f6f9] ${rtl ? 'font-arabic' : ''}`}
      dir={rtl ? 'rtl' : 'ltr'}
    >
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto p-6 lg:p-10">{children}</main>
    </div>
  )
}
