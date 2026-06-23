export default function ProjectsLoading() {
  return (
    <div className="animate-pulse">
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 h-4 w-40 rounded bg-white/20" />
          <div className="h-10 w-56 max-w-full rounded bg-white/20" />
          <div className="mt-4 h-4 w-96 max-w-full rounded bg-white/20" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-10 w-24 rounded-md bg-gray-200" />
            ))}
          </div>
          <div className="h-10 w-full rounded-md bg-gray-200 lg:max-w-xs" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-card border border-gray-100 bg-white shadow-card"
            >
              <div className="aspect-[3/2] bg-gray-200" />
              <div className="space-y-3 p-5">
                <div className="h-5 w-3/4 rounded bg-gray-200" />
                <div className="h-3 w-full rounded bg-gray-200" />
                <div className="h-3 w-5/6 rounded bg-gray-200" />
                <div className="flex gap-2 pt-2">
                  <div className="h-6 w-20 rounded-tag bg-gray-200" />
                  <div className="h-6 w-16 rounded-tag bg-gray-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
