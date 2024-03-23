'use client'
import { ConnectWallet } from "@thirdweb-dev/react";


function WalletButton() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      <ConnectWallet />
    </div>
  );
}

export default WalletButton;