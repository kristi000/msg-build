import { DetailedHTMLProps, forwardRef, ButtonHTMLAttributes } from "react"
export const Button = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>(({ className, children, ...rest }, ref) => {
  return (
    <button
      className={`border-2 border-gray-400 bg-blue-600 rounded p-2 w-full font-bold text-white hover:bg-blue-400 focus:bg-blue-500 
      transition-colors disabled:bg-gray-500 ${className}`}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  )
})
