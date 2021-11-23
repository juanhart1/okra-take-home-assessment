import styled from 'styled-components';
import AccountDetails from '../src/components/AccountDetails/AccountDetails';
import TransactionHistory from '../src/components/TransactionHistory/TransactionHistory';
import AccountDetailsContext from '../src/components/AccountDetailContext/AccountDetailContext';
import testAccountDetails from '../src/__fixtures__/testAccountDetails.json';

export default function AccountOverview() {
  return (
    <AccountDetailsContext value={testAccountDetails}>
      <AccountDetails />
      <TransactionHistory />
    </AccountDetailsContext>
  )
}
