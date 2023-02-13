import Head from "next/head";
import React, { useEffect } from "react";
import ContextProvider from "lib/context";
import "styles.css";
import "assets/css/client.css"
import 'bootstrap/dist/css/bootstrap.css';

// if (typeof window !== "undefined") {
//   require("lazysizes/plugins/attrchange/ls.attrchange.js");
//   require("lazysizes/plugins/respimg/ls.respimg.js");
//   require("lazysizes");
// }
const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  
  return <>
    < Head >
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </Head >
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  </>
}

export default MyApp;
