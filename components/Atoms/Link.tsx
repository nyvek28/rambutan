import NextLink from 'next/link'
import { Text } from 'components'

export const Link = ({ children, to, variant = 'base', className = '' }) => {
  return (
    <NextLink href={to} passHref>
      <Text variant={variant} className={`${className} cursor-pointer`}>
        {children}
      </Text>
    </NextLink>
  )
}