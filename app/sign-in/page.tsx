"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { Login } from "../components/siwf";

export default function SignIn() {
  const router = useRouter();

  const handleSIWE = () => {
    // TODO: Implement SIWE (Sign-In with Ethereum) logic
    console.log("SIWE button clicked");
  };

  const handleSIFW = () => {
    // TODO: Implement SIFW (Sign-In with Farcaster/Wallet) logic
    console.log("SIFW button clicked");
  };

  return (
    <div className={styles.container}>
      <div className={styles.topButtons}>
        <Login />
        <button 
          className={styles.contextButton} 
          type="button"
          onClick={() => router.push("/")}
        >
          Home
        </button>
        <button className={styles.closeButton} type="button">
          ✕
        </button>
      </div>
      
      <div className={styles.content}>
        <div className={styles.signInForm}>
          <h1 className={styles.title}>SIGN IN</h1>
          
          <p className={styles.subtitle}>
            Choose your sign-in method
          </p>

          <div className={styles.buttonContainer}>
            <button 
              onClick={handleSIWE} 
              className={styles.hodlerButton}
              type="button"
            >
              SIWE
            </button>
            <button 
              onClick={handleSIFW} 
              className={styles.hodlerButton}
              type="button"
            >
              SIFW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

