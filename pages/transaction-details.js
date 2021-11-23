import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useAccountDetailsContext } from '../src/components/AccountDetailContext/AccountDetailContext';

const BaseTransactionDetail = ({ label, content, bank, ...rest }) => {
  return (
    <div {...rest}>
      <p> {label} </p>
      <p> {content} </p>
      {bank && <p> {bank} </p>}
    </div>
  )
};

const TransactionDetail = styled(BaseTransactionDetail)`
  margin: 32px 0px;
  border: 1px solid red;
`;

const DownloadButton = styled.button`
  margin: 0 auto;
  display: block;
`;

const Wrapper = styled.div`
  padding: 24px;
`;

export default function TransactionDetails({ ...rest }) {
  const router = useRouter();
  const {
    query: { id },
  } = router
  const { transactionHistory } = useAccountDetailsContext();
  const selectedTransaction = transactionHistory.find(transaction => transaction.referenceNumber === id);
  const { amount, bank, date, description, time, user, referenceNumber, type } = selectedTransaction;

  const onDownload = (e) => {
    e.preventDefault();
    alert('Downloading...');
  };

  return (
    <Wrapper {...rest}>
      <button type="button" onClick={() => router.push('/account-overview')}>
        Click me
      </button>
      <div>Transaction Details</div>
      <span> ₦{amount} </span>
      <span> {type} </span>
      <p> {date} {time} </p>
      <TransactionDetail label='Transfer from' content={user} bank={bank} />
      <TransactionDetail label='Reference Number' content={referenceNumber} />
      <TransactionDetail label='Description' content={description} />
      <DownloadButton onClick={onDownload}>
        <p> Download Receipt </p>
      </DownloadButton>
    </Wrapper>
  )
}
