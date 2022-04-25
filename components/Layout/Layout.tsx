import { Header, Footer, Head } from 'components'
import clsx from 'clsx'

export interface LayoutProps {}

export const Layout = ({ children, pageTitle, pageDescription }) => {
  const darkMode = false
  const className = clsx('layout min-h-screen flex flex-col w-full bg-background', {
    dark: darkMode
  })

  return (
    <div className={className}>
      <Head title={pageTitle} description={pageDescription} />
      <Header />
      <main>
        {children}
      </main>
      <Footer className="mt-auto" />
    </div>
  )
}

