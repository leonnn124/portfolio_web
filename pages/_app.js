import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
