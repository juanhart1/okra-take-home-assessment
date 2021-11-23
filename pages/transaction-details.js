import { useRouter } from 'next/router';

export default function TransactionDetails({...rest}) {
  const router = useRouter()

  const {
    query: { transactionId },
  } = router

  return (
    <div {...rest}>
      <div>Transaction Details: {transactionId}</div>
      <button type="button" onClick={() => router.push('/account-overview')}>
        Click me
      </button>
    </div>
  )
}
