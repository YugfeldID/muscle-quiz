import { GluestackUIProvider } from '@gluestack-ui/themed';
import React from 'react';
import { AppNavigation } from './src/components/Navigation';
import { config } from '@gluestack-ui/config';

export default function App() {

    return (
        <GluestackUIProvider config={config}>
            <AppNavigation/>
        </GluestackUIProvider>
    );
}
