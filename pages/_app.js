import '../styles/globals.css';
import AccountDetailsContext from '../src/components/AccountDetailContext/AccountDetailContext';
import testAccountDetails from '../src/__fixtures__/testAccountDetails.json';

function MyApp({ Component, pageProps }) {
  return (
    <AccountDetailsContext value={testAccountDetails}>
      <Component {...pageProps} />
    </AccountDetailsContext>
  )
}

export default MyApp
