import Layout from "../components/Layout";
import Head from 'next/head';
import ContentRoutesBody from "./page-body";

const ContentRoutes = () => {
  return (
    <>
      <Head>
        <title>Content Routes</title>
      </Head>
      <Layout>
        <ContentRoutesBody />
      </Layout>
    </>
  );
};

export default ContentRoutes
