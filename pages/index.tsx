import { Layout, Section, Hero, TwoColumn, Text, List, Timeline } from 'components'

const skills = [
  'Javascript / ES6+',
  'Typescript',
  'React / Redux / Hooks',
  'Node',
  'NextJS / Gatsby',
  'REST',
  'GraphQL',
  'CSS / SASS',
  'Responsive / Mobile First',
  'Golang'
]

const experience = [
  {
    title: 'Front-End Developer',
    period: '2019 - Present',
    company: 'Parsley Health',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Full-Stack Developer',
    period: '2019',
    company: 'Wondersauce',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Full-Stack Developer',
    period: '2018 - 2019',
    company: 'Avantica',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Front-End Developer',
    period: '2016 - 2018',
    company: 'First Factory',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

const education = [
  {
    title: 'Software Development',
    period: '2015 - 2018',
    company: 'Universidad Cenfotec',
  },
  {
    title: 'Full-Stack Bootcamp',
    period: '2017',
    company: 'Brainstation',
  }
]

export default function Home() {
  const sectionClassname = 'mb-20'
  return (
    <Layout pageTitle="Home" pageDescription="Homepage to Kevyn Quirós' personal website">
      <Hero className={sectionClassname} />
      <Section id="description" className={sectionClassname}>
        <TwoColumn>
          <Text variant="lg">About Me</Text>
          <Text variant="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
        </TwoColumn>
      </Section>
      <Section id="skills" className={sectionClassname}>
        <TwoColumn>
          <Text variant="lg">Skills</Text>
          <List items={skills} />
        </TwoColumn>
      </Section>
      <Section id="experience" className={sectionClassname}>
        <TwoColumn>
          <Text variant="lg">Experience</Text>
          <Timeline items={experience} />
        </TwoColumn>
      </Section>
      <Section id="education">
        <TwoColumn>
          <Text variant="lg">Education</Text>
          <Timeline items={education} />        
        </TwoColumn>
      </Section>
    </Layout>
  )
}
