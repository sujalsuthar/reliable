export default function ServicesLoading() {
  return (
    <div className="animate-pulse">
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 h-4 w-40 rounded bg-white/20" />
          <div className="h-10 w-72 max-w-full rounded bg-white/20" />
          <div className="mt-4 h-4 w-96 max-w-full rounded bg-white/20" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-card border border-gray-100 bg-white p-8 shadow-card"
            >
              <div className="mb-4 h-12 w-12 rounded-md bg-gray-200" />
              <div className="mb-2 h-5 w-3/4 rounded bg-gray-200" />
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-gray-200" />
                <div className="h-3 w-full rounded bg-gray-200" />
                <div className="h-3 w-4/5 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
