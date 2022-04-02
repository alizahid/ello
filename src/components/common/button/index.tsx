import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  label: ReactNode
  type: ButtonHTMLAttributes<HTMLButtonElement>['type']

  onClick: () => void
}

export const Button: FunctionComponent<Props> = ({
  className,
  label,
  onClick,
  type = 'button'
}) => (
  <button
    className={twMerge(
      'px-3 py-2 font-semibold text-white rounded-lg hover:bg-primary-500 active:bg-primary-700 bg-primary-600',
      className
    )}
    onClick={onClick}
    type={type}>
    {label}
  </button>
)
