import { TwoColumn, Text } from 'components'

const renderListItems = items => items.map(i => (
  <div key={`1`} className="mb-4">
    <Text>
      {i}
    </Text>
  </div>
))

export const List = ({ items }) => {
  const half = Math.ceil(items.length / 2)
  const firstHalf = items.slice(0, half)
  const secondHalf = items.slice(-half)
  return (
    <TwoColumn>
      <div>
        {renderListItems(firstHalf)}
      </div>
      <div>
        {renderListItems(secondHalf)}
      </div>
    </TwoColumn>
  )
}