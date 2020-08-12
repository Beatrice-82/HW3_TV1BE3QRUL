import Head from "next/head";
import Header from "./header";
import Navbar from "./navbar";


function Layout(props) {
  
  
  return (
    <div className="layout">
      <GlobalHeader />
      <Navbar></Navbar>
        <Header/>
    
          

      {props.children}
      </div>
      
    );
    
}
export default Layout;
function GlobalHeader() {
  return (
    <Head>
      <title>Trial</title>
      <link rel="stylesheet" href="/css/global.css" />
    </Head>
  );
}
