import React from 'react';
import '@farcaster/auth-kit/styles.css';
import { SignInButton } from '@farcaster/auth-kit';


export const siwfConfig = {
    rpcUrl: 'https://mainnet.optimism.io',
    domain: 'siwe-mini.vercel.app/',
    siweUri: 'https://siwe-mini.vercel.app/sign-in',
  };
  
  export const Login = () => {
    return <SignInButton />;
  };