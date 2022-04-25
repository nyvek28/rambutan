import { Text } from 'components'

export const Timeline = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <div key={`1`} className="mb-10 flex flex-col">
          <Text variant="lg">{item.company}</Text>
          <Text italic className="mb-3">{item.title} / {item.period}</Text>
          {item?.description && (
            <Text>{item.description}</Text>
          )}
        </div>
      ))}
    </div>
  )
}