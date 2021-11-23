import { useRouter } from 'next/router';
import AccountDetailsContext from '../src/components/AccountDetailContext/AccountDetailContext';
import testAccountDetails from '../src/__fixtures__/testAccountDetails.json';

export default function TransactionDetails() {
  const router = useRouter()

  const {
    query: { transactionId },
  } = router

  return (
    <AccountDetailsContext value={testAccountDetails}>
      <div>Transaction Details: {transactionId}</div>
      <button type="button" onClick={() => router.push('/account-overview')}>
        Click me
      </button>
    </AccountDetailsContext>
  )
}
