import styled from 'styled-components';

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

const TransactionDetail = ({ label, content, bank, accountNumber, ...rest }) => {
  return (
    <div {...rest}>
      <Label> {label} </Label>
      <Content> {content} </Content>
      {bank && <BankInfo> {bank} - {accountNumber} </BankInfo>}
    </div>
  )
};

export default TransactionDetail;