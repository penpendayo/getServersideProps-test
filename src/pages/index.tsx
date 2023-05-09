import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Link href="/aaa">Home</Link>
      <button onClick={()=>router.push("/aaa")}>Home</button>
<br />
      <Link href="/users/1">users/1</Link>
      <button onClick={()=>router.push("/users/1")}>users/1</button>

      <br />
      <Link href="/users/2">users/2</Link>
      </main>
    </>
  )
}
