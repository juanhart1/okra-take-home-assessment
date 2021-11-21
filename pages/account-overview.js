import styled from 'styled-components';
import BaseAccountDetails from '../src/components/AccountDetails/AccountDetails';
import BaseTransactionHistory from '../src/components/TransactionHistory/TransactionHistory';

const AccountDetails = styled(BaseAccountDetails)``;
const TransactionHistory = styled(BaseTransactionHistory)``;

export default function AccountOverview() {
  return (
    <div>
      <AccountDetails />
      <TransactionHistory />
    </div>
  )
}
