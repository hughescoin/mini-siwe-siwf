"use client";
import React, { useState, useEffect } from 'react';
import { createBaseAccountSDK} from '@base-org/account';
import { SignInWithBaseButton } from '@base-org/account-ui/react';

let sdk: ReturnType<typeof createBaseAccountSDK> | null = null;

export const SignInWithBase = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Only create the SDK on the client side
        if (!sdk) {
            sdk = createBaseAccountSDK({
                appName: 'Siwe Mini',
            });
        }
        setMounted(true);
    }, []);

    const handleSignIn = async () => {
        if (!sdk) return;
        
        try {
            const nonce = window.crypto.randomUUID().replace(/-/g, '');
            await sdk.getProvider().request({
                method: 'wallet_connect',
                params: [{
                    version: "1",
                    capabilities: {
                        signInWithEthereum: {
                            nonce: nonce,
                            chainId: "0x2105",
                        }
                    }
                }]
            });
        } catch (error) {
            console.error('Error signing in with Base:', error);
        }
    };

    if (!mounted) {
        return null;
    }

    return <SignInWithBaseButton onClick={handleSignIn} />;
};