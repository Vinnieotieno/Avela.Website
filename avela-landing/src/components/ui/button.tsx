// components/ui/button.tsx
import { forwardRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'font-semibold rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 active:scale-95'
    
    const variants = {
      primary: 'bg-gradient-to-r from-[#0081cc] to-blue-600 hover:from-[#006bb3] hover:to-blue-700 text-white shadow-lg hover:shadow-xl',
      secondary: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm hover:shadow-md',
      ghost: 'text-gray-600 dark:text-gray-400 hover:text-[#0081cc] dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800',
      outline: 'border-2 border-[#0081cc] dark:border-blue-400 text-[#0081cc] dark:text-blue-400 hover:bg-[#0081cc] dark:hover:bg-blue-400 hover:text-white dark:hover:text-white'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }
    
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }