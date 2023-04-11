import Head from "next/head";
import React from "react";
import Header from "./header/Header";

export default function Layout({ title, children }) {
  return (
    <>
        <Head>
          <title>{title ? title + ' - Editorial Renanteck' : 'Editorial Renanteck'}</title>
          <meta
            name="description"
            content="Editorial Renanteck. Tienda de libros y servicios para escritores"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <div>
        
        <Header></Header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}
