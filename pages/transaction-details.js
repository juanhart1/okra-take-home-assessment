import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useAccountDetailsContext } from '../src/components/AccountDetailContext/AccountDetailContext';

const Label = styled.p`
  color: #737A91;
  margin-bottom: 4px;
`;
const Content = styled.p`
  margin: 0;
`;
const BankInfo = styled.p`
  color: #737A91;
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;
`;

const BaseTransactionDetail = ({ label, content, bank, time, ...rest }) => {
  return (
    <div {...rest}>
      <Label> {label} </Label>
      <Content> {content} </Content>
      {bank && <BankInfo> {bank} </BankInfo>}
    </div>
  )
};

const TransactionDetail = styled(BaseTransactionDetail)`
  margin: 32px 0px;
`;

const DownloadButton = styled.button`
  margin: 0 auto;
  display: block;
  background-color: #5C2682;
  border-radius: 8px;
  color: white;
  width: 327px;
`;

const Wrapper = styled.div`
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
`;

const Header2 = styled.div`
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
  background: #E6F6EB;
  border-radius: 6px;
  color: #12B75C;
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

const BackButton = styled.button``;

export default function TransactionDetails({ ...rest }) {
  const router = useRouter();
  const {
    query: { id },
  } = router
  const { transactionHistory } = useAccountDetailsContext();

  const selectedTransaction = transactionHistory.find(transaction => transaction.referenceNumber === id);
  console.log({ id, transactionHistory, selectedTransaction });
  const { amount, bank, date, description, time, user, referenceNumber, type } = selectedTransaction;
  console.log({ amount, bank, date, description, time, user, referenceNumber, type });

  const onDownload = (e) => {
    e.preventDefault();
    alert('Downloading...');
  };

  return (
    <Wrapper {...rest}>
      <Header>
        <BackButton type="button" onClick={() => router.push('/account-overview')}>
          Click me
        </BackButton>
        <TransactionDetailText>Transaction Details</TransactionDetailText>
      </Header>
      <Header2>
        <TransactionAmount> ₦{amount} </TransactionAmount>
        <TypeBadge>
          <TypeText>
          {type} 
          </TypeText>
        </TypeBadge>
      </Header2>
        <DateText> {date} {time} </DateText>
      <TransactionDetail label='Transfer from' content={user} bank={bank} time={time} />
      <TransactionDetail label='Reference Number' content={referenceNumber} />
      <TransactionDetail label='Description' content={description} />
      <DownloadButton onClick={onDownload}>
        <p> Download Receipt </p>
      </DownloadButton>
    </Wrapper>
  );
}
