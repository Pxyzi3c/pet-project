"use client";

import { ClerkProvider } from '@clerk/nextjs';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from 'react';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

export default function ApolloClerkProvider({ children }: { children: React.ReactNode }) {
    return (
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
            <ApolloProvider client={client}>
                {children}
            </ApolloProvider>
        </ClerkProvider>
    );
}