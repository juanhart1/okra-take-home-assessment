import styled from 'styled-components';
import BaseAccountDetails from '../src/components/AccountDetails/AccountDetails';
import BaseTransactionHistory from '../src/components/TransactionHistory/TransactionHistory';

const AccountDetails = styled(BaseAccountDetails)`
  border: 1px solid blue;
`;
const TransactionHistory = styled(BaseTransactionHistory)`
  border: 1px solid red;
`;

export default function AccountOverview() {
  return (
    <div>
      <AccountDetails />
      <TransactionHistory />
    </div>
  )
}
