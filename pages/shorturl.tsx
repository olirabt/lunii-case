import Head from "next/head"
import Form from '../components/Form';
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

export default function Shorturl() {

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-w-full min-h-screen ">
        <Head>
          <title>Service de réduction d&apos;URL</title>
        </Head>

        <main>
          <div className="container">
            <PageHeader header="URRL" />
            <Form />
          </div>
        </main>
      </div>
    </Layout>
  )
}
