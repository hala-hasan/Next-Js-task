import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        <Link href="/general">
    <a>          Welcome to NextJs Hala's Task!!</a>

  </Link>
  </h1>
  <h1 className="title">
        <Link href="/skills">
    <a>          skills !!</a>

  </Link>
  </h1>
      </main>
      </div>
)
}