import clsx from 'clsx'

const getVariantClass = (variant: string) => {
  switch(variant) {
    case 'xl':
      return 'text-xl'
    case 'lg':
      return 'text-lg'
    case 'sm':
      return 'text-sm'
    default:
      return 'text-base'
  }
}

export const Text = ({ variant = 'base', children, italic = false, className = '' }) => {
  const textClassName = clsx(className, getVariantClass(variant), 'font-cormorant', 'inline-block', {
    'italic': italic
  })

  return (
    <p className={textClassName}>{children}</p>
  )
}