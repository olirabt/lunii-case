import Head from "next/head"
import Link from "next/link";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

export default function Shorturl() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Head>
          <title>Service de réduction d"URL</title>
        </Head>

        <main>
          <PageHeader header="URRL" />
        </main>
      </div>
    </Layout>
  )
}
