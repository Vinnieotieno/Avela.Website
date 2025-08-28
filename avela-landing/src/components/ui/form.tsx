// components/ui/form.tsx
import { forwardRef, useState } from "react"
import { cn } from "@/lib/utils"

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string
  error?: string
  helperText?: string
  required?: boolean
  multiline?: boolean
  rows?: number
}

const FormField = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  ({ className = '', label, error, helperText, required, multiline = false, rows = 4, id, ...props }, ref) => {
    const [focused, setFocused] = useState(false)
    const fieldId = id || `field-${Math.random().toString(36).substr(2, 9)}`
    const errorId = error ? `${fieldId}-error` : undefined
    const helperId = helperText ? `${fieldId}-helper` : undefined
    
    const inputClasses = cn(
      "w-full px-4 py-3 border rounded-xl transition-all duration-200",
      "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      error 
        ? "border-red-500 focus:ring-red-500" 
        : focused 
          ? "border-blue-500" 
          : "border-gray-300 dark:border-gray-600",
      "bg-white dark:bg-gray-700 text-gray-900 dark:text-white",
      "placeholder:text-gray-500 dark:placeholder:text-gray-400",
      className
    )

    const InputComponent = multiline ? 'textarea' : 'input'

    return (
      <div className="space-y-2">
        <label 
          htmlFor={fieldId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1" aria-label="required">*</span>
          )}
        </label>
        
        <InputComponent
          ref={ref as any}
          id={fieldId}
          className={inputClasses}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={cn(
            errorId && errorId,
            helperId && helperId
          ).trim() || undefined}
          required={required}
          rows={multiline ? rows : undefined}
          {...props}
        />
        
        {helperText && (
          <p 
            id={helperId}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            {helperText}
          </p>
        )}
        
        {error && (
          <p 
            id={errorId}
            className="text-sm text-red-600 dark:text-red-400"
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

FormField.displayName = "FormField"

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ className = '', children, onSubmit, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn("space-y-6", className)}
        onSubmit={onSubmit}
        noValidate
        {...props}
      >
        {children}
      </form>
    )
  }
)

Form.displayName = "Form"

// Select component with accessibility
interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label: string
  options: SelectOption[]
  error?: string
  helperText?: string
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', label, options, error, helperText, placeholder, required, id, ...props }, ref) => {
    const fieldId = id || `select-${Math.random().toString(36).substr(2, 9)}`
    const errorId = error ? `${fieldId}-error` : undefined
    const helperId = helperText ? `${fieldId}-helper` : undefined

    return (
      <div className="space-y-2">
        <label 
          htmlFor={fieldId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1" aria-label="required">*</span>
          )}
        </label>
        
        <select
          ref={ref}
          id={fieldId}
          className={cn(
            "w-full px-4 py-3 border rounded-xl transition-all duration-200",
            "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error 
              ? "border-red-500 focus:ring-red-500" 
              : "border-gray-300 dark:border-gray-600",
            "bg-white dark:bg-gray-700 text-gray-900 dark:text-white",
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={cn(
            errorId && errorId,
            helperId && helperId
          ).trim() || undefined}
          required={required}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        
        {helperText && (
          <p 
            id={helperId}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            {helperText}
          </p>
        )}
        
        {error && (
          <p 
            id={errorId}
            className="text-sm text-red-600 dark:text-red-400"
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = "Select"

export { Form, FormField, Select }
export type { FormFieldProps, SelectOption, SelectProps }
