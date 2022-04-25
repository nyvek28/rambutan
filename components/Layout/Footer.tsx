import { Text, Link } from 'components'
import clsx from 'clsx'

export const Footer = ({ className = '' }) => {
  const footerClassName = clsx('w-100', className)
  return (
    <footer className={footerClassName}>
      <div className="max-w-50 mx-auto my-10">
        <Text italic>Designed and impleneted by Kevyn Quirós. Source code can be found here.</Text>
      </div>
    </footer>
  )
}