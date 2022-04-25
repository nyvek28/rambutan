import { Children } from 'react'
import { Text } from 'components'

const renderChildren = children => children.map(child => (
  <div className="w-1/2" key={`1`}>
    {child}
  </div>
));

export const TwoColumn = ({ children }) => {
  const childrenElements = Children.toArray(children)
  
  const hasTwo = childrenElements.length === 2

  return hasTwo ? (
    <div className="flex flex-row">
      {renderChildren(childrenElements)}
    </div>
  ) : (
    <div>
      <Text>
        This component uses only 2 children
      </Text>
    </div>
  )
}