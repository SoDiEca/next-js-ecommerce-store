import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Item() {
  const router = useRouter();
  const { item } = router.query;

  console.log(item);

  return (
    <Layout>
      <Head>
        <title>single item</title>
      </Head>
      <div>item{item}</div>
    </Layout>
  );
}
