import React, {ReactNode} from "react";
import Header from "@/components/common/header/Header";
import Head from "next/head";
import GlobalStyle from "@/styles/GlobalStyle";

interface LayoutProps {
    title: string;
    children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({title, children}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            </Head>
            <Header />
            <GlobalStyle/>
            {children}
        </>
    )
}

export default Layout;