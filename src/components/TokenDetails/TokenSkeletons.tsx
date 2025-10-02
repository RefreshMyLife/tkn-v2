
export const TokenSkeletons = () => {
  return (
    <div className="space-y-4 animate-pulse">
        <div className="w-full h-[200px] bg-gray-200 rounded mb-4" /> 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-200 rounded" />
        </div>
        <div className="h-24 bg-gray-200 rounded" />
        <div className="h-10 bg-gray-200 rounded" />
    </div>
  )
}
