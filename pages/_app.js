import '../styles/globals.css';
import AccountDetailsContext from '../src/components/AccountDetailContext/AccountDetailContext';
import mockAccountDetails from '../src/__fixtures__/mockAccountDetails.json';

function MyApp({ Component, pageProps }) {
  return (
    <AccountDetailsContext value={mockAccountDetails}>
      <Component {...pageProps} />
    </AccountDetailsContext>
  )
}

export default MyApp
