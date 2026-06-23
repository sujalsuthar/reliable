export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-[90vh] bg-gradient-to-br from-primary-900/80 to-primary-600/60" />

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="h-4 w-24 rounded bg-gray-200" />
          <div className="h-8 w-80 max-w-full rounded bg-gray-200" />
          <div className="h-4 w-96 max-w-full rounded bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-card border border-gray-100 bg-white p-6 shadow-card"
            >
              <div className="mb-4 h-12 w-12 rounded-md bg-gray-200" />
              <div className="mb-2 h-5 w-3/4 rounded bg-gray-200" />
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-gray-200" />
                <div className="h-3 w-5/6 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-48 rounded-card border border-gray-100 bg-white shadow-card"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
