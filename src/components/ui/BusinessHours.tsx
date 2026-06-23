interface BusinessHoursProps {
  title: string
  weekdayHours: string
  weekendHours: string
}

export default function BusinessHours({
  title,
  weekdayHours,
  weekendHours,
}: BusinessHoursProps) {
  return (
    <div className="rounded-xl border border-primary-100 bg-primary-50/80 p-6">
      <h3 className="text-lg font-semibold text-primary-900">{title}</h3>
      <div className="mt-3 space-y-1 text-sm text-gray-600">
        <p>{weekdayHours}</p>
        <p>{weekendHours}</p>
      </div>
    </div>
  )
}
