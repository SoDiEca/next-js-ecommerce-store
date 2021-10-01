import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { products } from '../../util/database';

export default function Items() {
  return (
    <Layout>
      <Head>
        <title>items</title>
      </Head>
      <h3>Items to buy</h3>;
      <ul>
        {products.map((product) => {
          return (
            <li key={`product-li-${product.id}`}>
              {product.name}:
              <Link href={`/items/${product.name}`}>
                <a>{product.name} product page</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
