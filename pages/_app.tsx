import "../styles/globals.css"
import type { AppProps } from "next/app"
import { WalletProvider } from "@cosmos-kit/react"
import { chains, assets } from "chain-registry"
import { wallets } from "@cosmos-kit/keplr"

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <WalletProvider wallets={wallets} chains={chains} assetLists={assets}>
    //   <Component {...pageProps} />
    // </WalletProvider>
    <Component {...pageProps} />
  )
}
