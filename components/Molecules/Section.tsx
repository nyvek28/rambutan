import { FC } from 'react'
import clsx from 'clsx'

export const Section= ({ children, className = '', fullWidth = false, id = '' }) => {
  const innerClass = clsx('w-100 mx-auto', {
    'max-w-body': !fullWidth,
    'px-[20px]': !fullWidth,
    [className]: className
  })
  return (
    <section className="w-100 py-2" id={id}>
      <div className={innerClass}>
        {children}
      </div>
    </section>
  )
}
