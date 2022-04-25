import { Link, Section } from 'components'

const items = [
  { label: 'Skills', value: '/#skills' },
  { label: 'Experience', value: '/#experience' },
  { label: 'Education', value: '/#education' },
]

const renderNavItems = navItems => navItems.map(({ label, value }) => {
  return (
    <Link to={value} key={label + value} className="mr-2">{label}</Link>
  )
}) 

export const Nav = () => {
  const containerClass = "flex items-center"
  return (
    <Section className="flex justify-between">
      <div className={containerClass}>
        {renderNavItems(items)}
      </div>  
      <div>
        <Link to="/" variant="lg">
          Kevyn Quirós
        </Link>
      </div>
      <div className={containerClass}>
        <Link to="/contact">
          Contact
        </Link>
      </div>
    </Section>
  )
}