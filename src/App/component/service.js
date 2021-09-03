
import Onboard from 'bnc-onboard'
  
const networkId = 4
const rpcUrl = 'https://rinkeby.infura.io/v3/cea9deb6467748b0b81b920b005c10c1'
const dappId = '12153f55-f29e-4f11-aa07-90f10da5d778'
const apiUrl = process.env.REACT_APP_API_URL
const staging = process.env.REACT_APP_STAGING
export function initOnboard(subscriptions) {
  const onboard = Onboard
  return onboard({
    dappId,
    hideBranding: false,
    networkId,
    
    // darkMode: true,
    subscriptions,
    walletSelect: {
      wallets: [
        { walletName: 'metamask' },
      
        {
          walletName: 'ledger',
          rpcUrl
        },
        {
          walletName: 'walletConnect',
          infuraKey: 'cea9deb6467748b0b81b920b005c10c1'
        },
        
        
        { walletName: 'trust', rpcUrl },
        
        { walletName: 'tokenpocket', rpcUrl },
       
        { walletName: 'binance' },
        { walletName: 'tp' },
      ]
    },
    walletCheck: [
      { checkName: 'derivationPath' },
      { checkName: 'connect' },
      { checkName: 'accounts' },
      { checkName: 'network' },
      { checkName: 'balance', minimumBalance: '100000' }
    ]
  })
}

