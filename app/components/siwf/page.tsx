import '@farcaster/auth-kit/styles.css';
import { SignInButton } from '@farcaster/auth-kit';


export const siwfConfig = {
    rpcUrl: 'https://api.developer.coinbase.com/rpc/v1/base/Hw2Br1cKA86rZwhYSriJLdOtDtPWyBwl',
    domain: 'waitlist-qs.vercel.app/',
    siweUri: 'https://waitlist-qs.vercel.app/sign-in',
  };
  
  export const Login = () => {
    return <SignInButton />;
  };