import { ReactNode } from "react"

type FullScreenCardProps = {
  children: ReactNode
}

export default function FullScreenCard({ children }: FullScreenCardProps) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">{children}</div>
    </div>
  )
}
FullScreenCard.Body = function FullScreenCardBody({
  children,
}: FullScreenCardProps) {
  return <div className="p-6 bg-white rounded-lg shadow">{children}</div>
}
FullScreenCard.BelowCard = function FullScreenCardBelowCard({
  children,
}: FullScreenCardProps) {
  return <div className="mt-2 justify-center flex gap-3">{children}</div>
}
