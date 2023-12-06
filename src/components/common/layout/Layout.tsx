import React, {ReactNode} from "react";
import Header from "@/components/common/header/Header";
import Head from "next/head";
import GlobalStyle from "@/styles/GlobalStyle";

interface LayoutProps {
    title: string;
    children?: ReactNode;
    hasHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({title, children, hasHeader = true}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            </Head>
            {hasHeader && (<Header />)}
            <GlobalStyle/>
            {children}
        </>
    )
}

export default Layout;