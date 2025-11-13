"use client";
import { sdk } from '@farcaster/miniapp-sdk';

interface CloseButtonProps {
  className?: string;
}

export const CloseButton = ({ className }: CloseButtonProps) => {
  const handleClose = async () => {
    try {
      await sdk.actions.close();
    } catch (error) {
      console.error('Error closing mini app:', error);
    }
  };

  return (
    <button 
      className={className} 
      type="button"
      onClick={handleClose}
    >
      ✕
    </button>
  );
};

