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
