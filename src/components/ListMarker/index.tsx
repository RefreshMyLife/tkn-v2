

type ListMarker = {
    number: string | number
}
export const ListMarker = ({number}:ListMarker) => {
  return (
    <div className=" hidden sm:block absolute left-0 top-0 -translate-x-1/2">
        <div className="w-[64px] h-[64px] text-[24px] bg-white rounded-sm flex items-center justify-center text-base sm:text-lg font-semibold">
            {number}
        </div>
    </div>
  )
}
