import styled from 'styled-components';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import { useAccountDetailsContext } from '../src/components/AccountDetailContext/AccountDetailContext';
import BaseTransactionDetail from '../src/components/TransactionDetail/TransactionDetail';

// Styled Components
const TransactionDetail = styled(BaseTransactionDetail)`
  margin: 32px 0px;
`;

const DownloadButton = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5C2682;
  border-radius: 8px;
  color: white;
  width: 327px;
`;

const Wrapper = styled.div`
  padding: 24px;
`;

const ButtonAndDetailWrapper = styled.div`
  display: flex;
`;

const AmountAndBadgeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  `;

const DateText = styled.p`
  color: #737A91;
  font-size: 14px;
  margin: 0;
`;

const TypeBadge = styled.div`
  background: ${({ type }) => type === 'credit' ? '#E6F6EB' : '#FFB2B2'};
  border-radius: 6px;
  color: ${({ type }) => type === 'credit' ? '#12B75C' : '#FF4040'};
  font-size: 12px;
  line-height: 14px;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 24px;
`;

const TypeText = styled.p`
  font-weight: 600;
`;

const TransactionDetailText = styled.p`
justify-self: end;
`;

const TransactionAmount = styled.span`
  font-size: 24px;
`

const BackButton = styled.button`
  margin-right: 25%;
`;

const StyledFaDownload = styled(FaDownload)`
  margin-right: 10px;
`;
// Styled Components


export default function TransactionDetails({ ...rest }) {
  const router = useRouter();
  const {
    query: { id },
  } = router
  const { transactionHistory } = useAccountDetailsContext();
  const selectedTransaction = transactionHistory.find(transaction => transaction.referenceNumber === id);
  const { accountNumber, amount, bank, date, description, time, user, referenceNumber, type } = selectedTransaction;

  const onDownload = (e) => {
    e.preventDefault();
    alert('Downloading...');
  };

  return (
    <Wrapper {...rest}>
      <ButtonAndDetailWrapper>
        <BackButton type="button" onClick={() => router.push('/account-overview')}>
          <FaArrowLeft />
        </BackButton>
        <TransactionDetailText> Transaction Details </TransactionDetailText>
      </ButtonAndDetailWrapper>
      <AmountAndBadgeWrapper>
        <TransactionAmount> ₦{amount} </TransactionAmount>
        <TypeBadge type={type}>
          <TypeText>
            {type}
          </TypeText>
        </TypeBadge>
      </AmountAndBadgeWrapper>
      <DateText> {date} {time} </DateText>
      <TransactionDetail label='Transfer from' content={user} bank={bank} accountNumber={accountNumber} />
      <TransactionDetail label='Reference Number' content={referenceNumber} />
      <TransactionDetail label='Description' content={description} />
      <DownloadButton onClick={onDownload}>
        <StyledFaDownload />
        <p> Download Receipt </p>
      </DownloadButton>
    </Wrapper>
  );
}
