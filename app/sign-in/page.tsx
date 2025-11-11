"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { Login } from "../components/siwf";
import { SignInWithBase } from "../components/siwb/swib";

export default function SignIn() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.topButtons}>
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
            <div className={styles.hodlerButtonWrapper}>
              <SignInWithBase />
            </div>
            <div className={styles.hodlerButtonWrapper}>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

