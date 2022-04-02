import { FunctionComponent, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  inputClassName?: string
  label?: string
  placeholder: string
  required?: boolean
  type: InputHTMLAttributes<HTMLInputElement>['type']
  value?: string

  onChange: (value: string) => void
}

export const Input: FunctionComponent<Props> = ({
  className,
  label,
  onChange,
  placeholder,
  required,
  type,
  value
}) => (
  <label className={twMerge('block', className)}>
    <div className="font-medium text-neutral-600">{label ?? placeholder}</div>

    <input
      className="w-full p-3 mt-2 rounded-lg bg-neutral-200 placeholder:text-neutral-400"
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
    />
  </label>
)
