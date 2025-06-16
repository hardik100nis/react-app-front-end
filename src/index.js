import React from 'react';
import ReactDOM from 'react-dom/client';
import { createConfig, WagmiProvider } from "wagmi";
import { abstract, abstractTestnet } from "wagmi/chains";
import { getDefaultConfig, RainbowKitProvider, connectorsForWallets, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RefreshContextProvider } from './context/RefreshContext'
import { abstractWallet } from "@abstract-foundation/agw-react/connectors";
import { http } from "viem";

import App from './App';
import reportWebVitals from './reportWebVitals';

const connectors = connectorsForWallets(
  [
    {
      groupName: "Abstract",
      wallets: [abstractWallet],
    },
  ],
  {
    appName: "HashLordz Miner",
    projectId: "5a914e88ee2213cef7f49de9bec86f0e",
    appDescription: "",
    appIcon: "",
    appUrl: "",
  }
);

export const config = createConfig({
  connectors,
  chains: [abstractTestnet],
  transports: {
    [abstractTestnet.id]: http(),
  },
  ssr: true,
});

// const config = getDefaultConfig({
//   appName: "HashLordz Miner",
//   projectId: "5a914e88ee2213cef7f49de9bec86f0e",
//   chains: [
//     // sonic,
//     sonicBlazeTestnet,
//   ],
// });

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: '#7b3fe4',
            accentColorForeground: 'white',
            borderRadius: 'small',
            fontStack: 'system',
            overlayBlur: 'small',
          })}
        >
          <RefreshContextProvider>
            <App />
          </RefreshContextProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
reportWebVitals();
