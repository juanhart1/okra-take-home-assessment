import styled from 'styled-components';

// Styled Components
const Wrapper = styled.div`
  padding: 24px;
`;

const Header = styled.div`
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
  font-size: 14px;
`;

const TransactionDetailsDate = styled.div`
  font-size: 12px;
  text-align: end;
  color: #737A91;
`;
// Styled Components

// UI Components
const DetailListItems = (transactions) => {
  return (
    <>
      <DetailListItem>
        <TransactionNameAndAmount>
          <p> Annanaya Nadeshmo </p>
          <p> ₦2,250.00 </p>
        </TransactionNameAndAmount>
        <TransactionDetailsDate>
          <p> 28 July, 2021 </p>
          <p> 02:26am </p>
        </TransactionDetailsDate>
      </DetailListItem>
      <DetailListItem>
        <TransactionNameAndAmount>
          <p> Annanaya Nadeshmo </p>
          <p> ₦2,250.00 </p>
        </TransactionNameAndAmount>
        <TransactionDetailsDate>
          <p> 28 July, 2021 </p>
          <p> 02:26am </p>
        </TransactionDetailsDate>
      </DetailListItem>
      <DetailListItem>
        <TransactionNameAndAmount>
          <p> Annanaya Nadeshmo </p>
          <p> ₦2,250.00 </p>
        </TransactionNameAndAmount>
        <TransactionDetailsDate>
          <p> 28 July, 2021 </p>
          <p> 02:26am </p>
        </TransactionDetailsDate>
      </DetailListItem>
    </>
  )
};
// UI Components

export default function TransactionHistory({ ...rest }) {
  return (
    <Wrapper {...rest}>
      <Header>
        <TransactionHistoryText> Transaction History </TransactionHistoryText>
        <ShowAllText> Show all </ShowAllText>
      </Header>
      <TransactionDetails>
        <DetailsList>
          <DetailListItems />
        </DetailsList>
      </TransactionDetails>
    </Wrapper>
  )
}