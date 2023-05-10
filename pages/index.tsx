import Head from "next/head"
import Link from "next/link";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Head>
          <title>Test lunii</title>
        </Head>

        <main>
          <PageHeader header="Etude de cas Lunii" />
          <p className="text-md my-4">
            <Link href="/shorturl" className="cursor-pointer border p-4 ">Accéder au service de réduction d&apos;url &rarr;</Link>
          </p>
        </main>
      </div>
    </Layout>
  )
}
