import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  type?: MessageType
}

export enum MessageType {
  Error,
  Success,
  Message
}

export const Message: FunctionComponent<Props> = ({
  children,
  className,
  type = MessageType.Message
}) => (
  <div
    className={twMerge(
      'flex items-center text-black font-medium rounded-xl p-3',
      type === MessageType.Error
        ? 'bg-rose-100'
        : type === MessageType.Success
        ? 'bg-emerald-100'
        : 'bg-sky-100',
      className
    )}>
    <div className="flex-1">{children}</div>
  </div>
)
