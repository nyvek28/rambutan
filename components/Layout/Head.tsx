import NextHead from 'next/head'

export const Head = ({ title, description }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}