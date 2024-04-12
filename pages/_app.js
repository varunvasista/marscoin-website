import '../styles/globals.css'

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  connectorsForWallets
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
  uniswapWallet,
  phantomWallet,
  rabbyWallet,
  mewWallet
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  bsc
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [bsc],
  [
    publicProvider()
  ]
);

const projectId = '6c191cdc27e911bcf5506f798a2f6cec';


const { wallets } = getDefaultWallets({
  appName: 'Mars Coin',
  projectId: projectId,
  chains
});

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'More',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
      uniswapWallet({ projectId, chains }),
      phantomWallet({chains}),
      rabbyWallet({ projectId, chains }),
      mewWallet({ chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})
function MyApp({ Component, pageProps }) {
  return (
  
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider theme={darkTheme({
        accentColor: '#20851A',
        accentColorForeground: 'white',
      })} chains={chains}>

      <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}


export default MyApp
