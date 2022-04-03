import { FunctionComponent } from 'react'

type Props = {
  className?: string
  loading?: boolean

  onSubmit: () => void
}

export const Form: FunctionComponent<Props> = ({
  children,
  className,
  loading,
  onSubmit
}) => {
  return (
    <form
      className={className}
      onInvalid={(event) => event.preventDefault()}
      onSubmit={(event) => {
        event.preventDefault()

        if (loading) {
          return
        }

        onSubmit()
      }}>
      {children}
    </form>
  )
}
