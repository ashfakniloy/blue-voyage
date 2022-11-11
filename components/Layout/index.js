import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Blue Voyage</title>
        <meta name="description" content="blue voyage" />
        <meta name="keywords" content="blue voyage" />
      </Head>

      <div className="overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
