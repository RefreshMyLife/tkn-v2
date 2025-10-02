

type StakingHistoryProps = {
  title: string,
  date : string
}
export const StakingHistory = ({ title, date}: StakingHistoryProps) => {
  return (
    <div className="flex justify-between items-center  border-transparent rounded-sm py-4 px-6 bg-white">
              <div className="font-medium">{title}</div>
              <div className="text-sm text-gray-500">{date}</div>
    </div>
  )
}
