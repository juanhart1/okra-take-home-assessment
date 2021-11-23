import styled from 'styled-components';

// Styled Components
const DetailsAndThumbnailWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 24px 24px;
`;

const UserName = styled.p`
    font-size: 20px;
    font-weight: 600;
    line-height: 22px;
    margin-bottom: 4px;
`;
const UserAccountNumber = styled.p`
    margin: 0;
    font-size: 12px;
    line-height: 14px;
`;

const UserDetailsWrapper = styled.div``;

const StyledCard = styled.div`
    background-color: #5C2682;
    border-radius: 16px;
    color: white;
    padding: 32px;
    width: 327px;
    height: 180px;
    position: relative;
`;

const BalanceAndImageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
`;

const AvailableBalance = styled.p`
    margin: 32px 0px;
    font-size: 24px;
    font-weight: 600;
`;

const StyledThumbnail = styled.img`
    border-radius: 35%;
    height: 40px;
    width: 40px;
`;

const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
// Styled Components

// UI Components
const UserDetails = () => {
    return (
        <UserDetailsWrapper>
            <UserName> Hey, Dwyane 👋 </UserName>
            <UserAccountNumber> 0002176690 </UserAccountNumber>
        </UserDetailsWrapper>
    );
};
const UserThumbnail = () => {
    return (
        <>
            <StyledThumbnail src='https://i.pinimg.com/564x/b5/a2/53/b5a253e7f98c7a556fc8d493123bd049.jpg' />
        </>
    );
};
const CardWires = () => {
    return (
        <>
            <svg style={{ position: 'absolute' }} height='100%' width='100%' viewBox="0 0 326 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.6134 168C12.9381 151.504 56.9301 1.58492 154.496 72.4205C283.014 165.727 330.464 60.7763 325.673 0.614563" stroke="#7C46A3" stroke-width="1.5" />
            </svg>
            <svg style={{ position: 'absolute' }} height='100%' width='100%' viewBox="0 0 324 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 175C34.1673 72.628 48 77.5 158.159 81.5094C311.438 87.0883 323.673 36.5 323.673 0" stroke="#7C46A3" stroke-width="1.5" />
            </svg>
        </>
    );
};
const Card = () => {
    return (
        <StyledCard>
            <BalanceAndImageWrapper>
                <p> Available Balance </p>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_9_654)">
                        <path d="M25.8226 -1H3.17742C1.97486 -1 1 -0.0251362 1 1.17742V23.8226C1 25.0251 1.97486 26 3.17742 26H25.8226C27.0251 26 28 25.0251 28 23.8226V1.17742C28 -0.0251362 27.0251 -1 25.8226 -1Z" fill="#5C2682" />
                        <path d="M6.23001 9.88937V10.8851H8.43258V11.8022H6.23001V13.5895H5.21436V8.97333H8.72936V9.89002L6.23001 9.88937Z" fill="white" />
                        <path d="M13.2273 13.187C13.0979 13.2893 12.9575 13.3767 12.8086 13.4475C12.6499 13.522 12.4827 13.5768 12.3107 13.6108C12.1109 13.6501 11.9076 13.6689 11.704 13.667C11.3803 13.6698 11.0594 13.6069 10.7608 13.4819C10.4795 13.3648 10.2241 13.1934 10.009 12.9775C9.79579 12.761 9.62768 12.5043 9.51437 12.2224C9.39465 11.927 9.33414 11.611 9.33625 11.2923V11.2792C9.33383 10.9613 9.39437 10.6461 9.51437 10.3517C9.62917 10.0696 9.79708 9.8122 10.009 9.59347C10.2245 9.37265 10.4825 9.19765 10.7674 9.07895C11.0771 8.95128 11.4096 8.88797 11.7446 8.89289C11.9425 8.89141 12.1401 8.90906 12.3347 8.94558C12.5008 8.97738 12.6632 9.02601 12.8195 9.09071C12.9615 9.15058 13.0966 9.22579 13.2223 9.31498C13.3444 9.40218 13.4591 9.49926 13.5652 9.60523L12.9181 10.3503C12.7529 10.1984 12.5675 10.0699 12.3673 9.96843C12.1709 9.8741 11.9553 9.82676 11.7374 9.83016C11.5523 9.82844 11.3689 9.86669 11.1999 9.9423C11.038 10.0148 10.8931 10.1204 10.7745 10.2523C10.6544 10.3864 10.5605 10.5419 10.4976 10.7106C10.4307 10.8887 10.3972 11.0776 10.3985 11.2679V11.281C10.3974 11.4723 10.4309 11.6623 10.4976 11.8417C10.5595 12.0109 10.652 12.1674 10.7704 12.3033C10.8912 12.4399 11.04 12.5489 11.2067 12.6229C11.3734 12.6969 11.5541 12.734 11.7364 12.7319C11.9681 12.7391 12.198 12.6893 12.4059 12.5868C12.6038 12.4792 12.7868 12.3462 12.9502 12.1911L13.5965 12.8444C13.4823 12.9678 13.3589 13.0823 13.2273 13.187Z" fill="white" />
                        <path d="M18.0218 13.5893V10.5752L16.7224 12.5471H16.6951L15.409 10.5952V13.5892H14.4073V8.97302H15.5019L16.7154 10.9253L17.9289 8.97302H19.0237V13.5892L18.0218 13.5893Z" fill="white" />
                        <path d="M23.9272 12.8769C23.8456 13.0355 23.7259 13.1712 23.5788 13.272C23.413 13.3838 23.228 13.4644 23.0332 13.5097C22.8008 13.5647 22.5626 13.5912 22.3239 13.5888H20.132V8.97269H22.2716C22.7454 8.97269 23.1173 9.08043 23.3872 9.29592C23.5187 9.39877 23.624 9.53132 23.6944 9.68272C23.7649 9.83411 23.7984 10 23.7923 10.1669V10.1814C23.7942 10.2997 23.7775 10.4176 23.7429 10.5308C23.7122 10.6274 23.6683 10.7193 23.6122 10.8037C23.5588 10.8837 23.4946 10.9558 23.4213 11.0182C23.3499 11.0793 23.2719 11.1324 23.1888 11.1763C23.4294 11.2602 23.6458 11.4018 23.8191 11.5885C23.9826 11.7919 24.0644 12.0489 24.0488 12.3094V12.3224C24.0532 12.5143 24.0115 12.7045 23.9272 12.8769ZM22.7893 10.3378C22.7928 10.2693 22.779 10.2011 22.749 10.1394C22.719 10.0777 22.6739 10.0246 22.6179 9.98508C22.4695 9.89464 22.2968 9.85207 22.1233 9.86314H21.1207V10.839H22.057C22.2421 10.8479 22.4263 10.8081 22.5911 10.7235C22.6557 10.6862 22.7084 10.6314 22.7434 10.5655C22.7784 10.4997 22.7941 10.4253 22.789 10.3509L22.7893 10.3378ZM23.0465 12.1845C23.0489 12.1135 23.034 12.043 23.0029 11.9791C22.9719 11.9152 22.9257 11.8598 22.8684 11.8178C22.7497 11.7278 22.5587 11.6823 22.2956 11.6814H21.1228V12.6971H22.3297C22.5136 12.707 22.6965 12.6647 22.8573 12.5751C22.9202 12.5348 22.9711 12.4783 23.0047 12.4116C23.0383 12.3449 23.0533 12.2704 23.0483 12.1959L23.0465 12.1845Z" fill="white" />
                        <path d="M23.9728 16.5475V18.8081H5.11353V17.6188C5.1135 17.478 5.1412 17.3387 5.19504 17.2087C5.24888 17.0786 5.32782 16.9605 5.42733 16.861C5.52684 16.7615 5.64499 16.6825 5.77502 16.6287C5.90505 16.5748 6.04441 16.5471 6.18514 16.5472L23.9728 16.5475Z" fill="#FAB613" />
                        <path d="M5.11353 19.54H23.9727V21.8006H6.18514C6.04438 21.8007 5.90499 21.7729 5.77494 21.7191C5.64489 21.6652 5.52673 21.5863 5.42722 21.4867C5.3277 21.3872 5.24877 21.269 5.19494 21.1389C5.14112 21.0088 5.11345 20.8694 5.11353 20.7287V19.54Z" fill="#FAB613" />
                    </g>
                    <defs>
                        <clipPath id="clip0_9_654">
                            <rect width="27" height="27" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </BalanceAndImageWrapper>
            <AvailableBalance> ₦82,023.39  </AvailableBalance>
        </StyledCard>
    );
};
// UI Components


export default function AccountDetails({ ...rest }) {
    return (
        <div {...rest}>
            <DetailsAndThumbnailWrapper>
                <UserDetails />
                <UserThumbnail />
            </DetailsAndThumbnailWrapper>
            <CardWrapper>
                <Card />
            </CardWrapper>
        </div>
    )
}