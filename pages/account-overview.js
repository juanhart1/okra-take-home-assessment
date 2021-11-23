import AccountDetails from '../src/components/AccountDetails/AccountDetails';
import TransactionHistory from '../src/components/TransactionHistory/TransactionHistory';

export default function AccountOverview({ ...rest }) {
  return (
    <div {...rest}>
      <AccountDetails />
      <TransactionHistory />
    </div>
  )
}
