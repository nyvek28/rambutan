import { Section, Text } from 'components'

export const Hero = ({ className = '' }) => {
  const textVariant = "xl"
  return (
    <Section className={`${className} py-4 mt-64`}>
      <Text variant={textVariant}>
        I{'\''}m a <Text variant={textVariant} italic>Web Developer</Text> based in San José, Costa Rica
      </Text>
    </Section>
  )
}