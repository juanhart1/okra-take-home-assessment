import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useAccountDetailsContext } from '../AccountDetailContext/AccountDetailContext';

// Styled Components
const Wrapper = styled.div`
  padding: 24px;
`;

const ListLabels = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TransactionHistoryText = styled.p`
  margin: 0;
`;

const ShowAllText = styled.p`
  margin: 0;
  color: #5C2682;
`;

const TransactionDetails = styled.div``;

const DetailsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const DetailListItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 16px 0px;
  border-bottom: 1px solid #DEE6EF;

  p {
    margin: 4px;
  }
`;

const TransactionNameAndAmount = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-transform: capitalize;
`;

const TransactionDetailsDate = styled.div`
  font-size: 12px;
  text-align: end;
  color: #737A91;
`;

const AmountText = styled.span`
  display: flex;
  padding: 0px 4px;
  align-items: center;
  color: ${({ type }) => type === 'credit' ? '#12B75C' : '#FF4040'};
`;

const baseArrowStyles = css`
  height: 8px;
  width: 8px;
  margin-left: 2px;
`;
const StyledFaArrowUp = styled(FaArrowUp)`
  ${baseArrowStyles}
`;
const StyledFaArrowDown = styled(FaArrowDown)`
  ${baseArrowStyles}
`;
// Styled Components

// UI Components
const DetailListItems = () => {
  const router = useRouter();
  const { transactionHistory } = useAccountDetailsContext();

  return (
    transactionHistory.map((transaction) => {
      const { amount, date, time, user, referenceNumber, type } = transaction;

      return (
        <DetailListItem
          key={referenceNumber}
          onClick={() => router.push({ pathname: '/transaction-details', query: { id: referenceNumber } })}
        >
          <TransactionNameAndAmount>
            <p> {user} </p>
            <AmountText type={type}>
              ₦{amount} {type === 'credit' ? <StyledFaArrowUp /> : <StyledFaArrowDown />}
            </AmountText>
          </TransactionNameAndAmount>
          <TransactionDetailsDate>
            <p> {date} </p>
            <p> {time} </p>
          </TransactionDetailsDate>
        </DetailListItem>
      )
    })
  )
}
// UI Components

export default function TransactionHistory({ ...rest }) {
  return (
    <Wrapper {...rest}>
      <ListLabels>
        <TransactionHistoryText> Transaction History </TransactionHistoryText>
        <ShowAllText> Show all </ShowAllText>
      </ListLabels>
      <TransactionDetails>
        <DetailsList>
          <DetailListItems />
        </DetailsList>
      </TransactionDetails>
    </Wrapper>
  )
}