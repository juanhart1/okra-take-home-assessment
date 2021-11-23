import styled from 'styled-components';
import BaseAccountDetails from '../src/components/AccountDetails/AccountDetails';
import BaseTransactionHistory from '../src/components/TransactionHistory/TransactionHistory';
import AccountDetailsContext from '../src/components/AccountDetailContext/AccountDetailContext';

const AccountDetails = styled(BaseAccountDetails)``;
const TransactionHistory = styled(BaseTransactionHistory)``;

export default function AccountOverview() {
  return (
    <AccountDetailsContext value={{ testKey: 'poop'}}>
      <AccountDetails />
      <TransactionHistory />
    </AccountDetailsContext>
  )
}
