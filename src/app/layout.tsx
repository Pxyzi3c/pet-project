import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./globals.css";

import 'primereact/resources/themes/lara-dark-teal/theme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const inter = Inter({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"]  });

export const metadata: Metadata = {
    title: "Forum App",
    description: "Generated by create next app",
    icons: {
        icon: '@public/logo.svg',
    },
};

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ApolloProvider client={client}>
            <ClerkProvider
                appearance={{
                    layout: {
                        logoImageUrl: '/images/logo.svg',
                        socialButtonsVariant: 'iconButton',
                    },
                    variables: {
                        colorText: '#FFFFFF',
                        colorPrimary: '#5EEAD4',
                        colorBackground: '#1C1F2E',
                        colorInputBackground: '#252A41',
                        colorInputText: '#FFFFFF',
                    }
                }}
            >
                <html lang="en">
                    <body className={`${inter.className} bg-dark-2`}>{children}</body>
                </html>
            </ClerkProvider>
        </ApolloProvider>
    );
}
