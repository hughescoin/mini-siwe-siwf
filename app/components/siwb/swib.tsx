"use client";
import React from 'react';
import { createBaseAccountSDK} from '@base-org/account';
import { SignInWithBaseButton } from '@base-org/account-ui/react';

export const sdk = createBaseAccountSDK({
    appName: 'Siwe Mini',
});

const handleSignIn = async () => {
    try {
        const nonce =  window.crypto.randomUUID().replace(/-/g, '');
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
export const SignInWithBase = () => {
    return <SignInWithBaseButton onClick={handleSignIn} />;
};