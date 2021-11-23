import styled from 'styled-components';

const SplashWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export default function SplashPage() {
  return (
    <SplashWrapper>
      <svg width="107" height="162" viewBox="0 0 107 162" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3_101)">
          <path d="M5.5342 47.8845C8.65153 48.452 11.7981 48.844 14.9592 49.0587C16.4367 49.0587 16.5386 48.7013 16.7933 48.0377C16.8957 47.7468 16.9014 47.4305 16.8095 47.1361C16.7177 46.8416 16.5333 46.5849 16.2838 46.4041C15.1182 43.6713 14.2141 40.8339 13.5837 37.9299C13.5442 37.7937 13.5531 37.648 13.6089 37.5177C13.6646 37.3874 13.7637 37.2805 13.8894 37.2152C14.0246 37.123 14.1843 37.0737 14.3479 37.0737C14.5114 37.0737 14.6712 37.123 14.8064 37.2152L21.1747 41.5033C21.7109 41.8558 22.3226 42.0765 22.96 42.1474C23.5973 42.2184 24.2424 42.1376 24.8428 41.9117C25.4395 41.7192 25.9751 41.3724 26.3955 40.9064C26.8159 40.4403 27.1062 39.8715 27.2373 39.2572L27.5429 37.7257C27.6055 37.5962 27.7032 37.487 27.8249 37.4106C27.9465 37.3342 28.0871 37.2937 28.2307 37.2937C28.3743 37.2937 28.5149 37.3342 28.6366 37.4106C28.7582 37.487 28.8559 37.5962 28.9185 37.7257L31.1092 40.3803C31.6476 41.072 32.4015 41.5633 33.2509 41.7761C34.1003 41.9889 34.9962 41.9108 35.7962 41.5544C36.5971 41.2639 37.2606 40.6839 37.6565 39.9282C38.0524 39.1726 38.1521 38.2959 37.9359 37.4704L34.115 22.1555C34.0877 22.012 34.102 21.8636 34.1562 21.7279C34.2103 21.5922 34.3021 21.4749 34.4207 21.3898C34.5616 21.3138 34.7191 21.2741 34.8792 21.2741C35.0392 21.2741 35.1967 21.3138 35.3377 21.3898L39.5153 24.4017C40.162 24.8153 40.9133 25.0351 41.6805 25.0351C42.4477 25.0351 43.199 24.8153 43.8457 24.4017C44.5021 24.0645 45.0339 23.5262 45.3638 22.8651C45.6937 22.204 45.8044 21.4547 45.6798 20.7262L43.8966 10.5162C43.8884 10.3888 43.912 10.2614 43.9654 10.1455C44.0187 10.0296 44.1002 9.9289 44.2023 9.85258C44.3107 9.78985 44.4337 9.75683 44.5589 9.75683C44.6841 9.75683 44.8071 9.78985 44.9156 9.85258L45.7307 10.2099C46.6346 10.5075 47.6151 10.4702 48.4939 10.1049C49.3726 9.73952 50.0915 9.07035 50.5196 8.21899L52.6594 3.52243C52.7206 3.39492 52.8138 3.28554 52.9299 3.205C53.046 3.12446 53.181 3.07552 53.3217 3.06298C53.4619 3.05098 53.6027 3.07799 53.7285 3.14104C53.8544 3.2041 53.9604 3.30074 54.0349 3.42033L56.8879 7.55535C57.4216 8.2835 58.1812 8.81379 59.0477 9.06319C59.9143 9.3126 60.8389 9.26706 61.6768 8.93369L62.492 8.57634C62.6187 8.51337 62.7581 8.4806 62.8996 8.4806C63.041 8.4806 63.1805 8.51337 63.3071 8.57634C63.3752 8.68305 63.4113 8.80705 63.4113 8.93369C63.4113 9.06033 63.3752 9.18432 63.3071 9.29104L61.0655 21.1345C60.9333 21.8766 61.0458 22.6415 61.3859 23.3138C61.7259 23.9861 62.2751 24.5293 62.9505 24.8612C63.6475 25.2375 64.4397 25.3994 65.2281 25.3268C66.0165 25.2542 66.766 24.9501 67.3828 24.4528L72.4774 20.522C72.5977 20.4178 72.7515 20.3604 72.9105 20.3604C73.0695 20.3604 73.2232 20.4178 73.3435 20.522C73.4919 20.5793 73.6147 20.6882 73.6895 20.8288C73.7644 20.9694 73.7862 21.1323 73.7511 21.2877L70.2358 36.6026C70.0653 37.439 70.2038 38.3091 70.6255 39.0509C71.0472 39.7927 71.7234 40.3558 72.5284 40.6355C73.3886 40.9941 74.3464 41.0426 75.2383 40.7726C76.1302 40.5026 76.901 39.931 77.4192 39.1551C77.508 39.0407 77.6256 38.952 77.7599 38.8982C77.8942 38.8443 78.0404 38.8273 78.1834 38.8488C78.3313 38.8602 78.4727 38.9146 78.5903 39.0053C78.708 39.0959 78.7967 39.2189 78.8457 39.3593C79.0207 39.9042 79.3255 40.3981 79.7338 40.7984C80.1422 41.1987 80.6417 41.4932 81.1892 41.6565C81.7371 41.8595 82.3233 41.9374 82.905 41.8844C83.4867 41.8314 84.0493 41.6489 84.5517 41.3502L92.703 36.8578C92.8347 36.7817 92.9841 36.7416 93.1361 36.7416C93.2881 36.7416 93.4375 36.7817 93.5691 36.8578C93.6928 36.9382 93.7886 37.0549 93.8433 37.1921C93.8981 37.3292 93.9091 37.4799 93.8748 37.6236L92.703 43.5964C92.5675 44.1583 92.5808 44.7459 92.7417 45.3011C92.9025 45.8562 93.2053 46.3596 93.6201 46.7615C94.0461 47.1823 94.5584 47.5053 95.1214 47.708C95.6844 47.9108 96.2847 47.9884 96.8806 47.9356L101.568 47.4762C101.937 47.4264 102.275 47.2433 102.519 46.9613C102.763 46.6793 102.896 46.3178 102.892 45.9447C102.818 45.5617 102.606 45.2196 102.295 44.9841C101.985 44.7486 101.599 44.6361 101.211 44.6684L96.524 45.1279C96.401 45.1469 96.2751 45.1334 96.1589 45.0886C96.0427 45.0438 95.9403 44.9694 95.8617 44.8726C95.8126 44.778 95.7869 44.673 95.7869 44.5663C95.7869 44.4597 95.8126 44.3546 95.8617 44.26L97.2373 38.2362C97.3925 37.5349 97.3235 36.8025 97.04 36.1428C96.7566 35.4831 96.273 34.9295 95.6579 34.5606C95.0205 34.173 94.2892 33.9681 93.5437 33.9681C92.7981 33.9681 92.0668 34.173 91.4294 34.5606L83.2271 39.3082C83.1237 39.358 83.0106 39.3838 82.8959 39.3838C82.7813 39.3838 82.6681 39.358 82.5648 39.3082C82.4554 39.2774 82.3559 39.219 82.2756 39.1386C82.1953 39.0581 82.137 38.9583 82.1063 38.8488C81.8593 38.1817 81.434 37.5955 80.8769 37.1543C80.3198 36.7132 79.6524 36.434 78.9476 36.3473C78.2395 36.2329 77.5137 36.3151 76.849 36.5851C76.1843 36.8552 75.6062 37.3026 75.1776 37.8788C75.041 37.9908 74.87 38.052 74.6936 38.052C74.5172 38.052 74.3461 37.9908 74.2096 37.8788C74.0408 37.8312 73.8978 37.7185 73.8119 37.5654C73.7259 37.4123 73.7041 37.2313 73.7511 37.062L77.2664 21.7471C77.4328 21.0024 77.342 20.2231 77.0088 19.5368C76.6757 18.8505 76.1198 18.2979 75.4323 17.9695C74.7442 17.5726 73.9521 17.3943 73.1607 17.4581C72.3694 17.5219 71.6159 17.8248 71 18.3268L65.9054 22.2576C65.7731 22.3571 65.6122 22.4108 65.4469 22.4108C65.2815 22.4108 65.1206 22.3571 64.9883 22.2576C64.8534 22.201 64.7432 22.0977 64.6777 21.9666C64.6123 21.8354 64.596 21.6851 64.6317 21.5429L66.8734 9.64838C66.9888 9.00119 66.9156 8.33438 66.6626 7.72778C66.4096 7.12118 65.9875 6.60049 65.4469 6.22806C64.8834 5.82896 64.2292 5.5778 63.5439 5.49753C62.8585 5.41727 62.1641 5.51047 61.524 5.76861L60.7089 6.07491C60.5439 6.15615 60.3552 6.17507 60.1774 6.12818C59.9996 6.0813 59.8446 5.97176 59.7409 5.81966L56.6332 1.68464C56.2438 1.10953 55.7074 0.64977 55.0801 0.353422C54.4527 0.0570739 53.7575 -0.0649845 53.067 4.24124e-06C52.3849 0.0448062 51.7274 0.2721 51.1629 0.658193C50.5983 1.04429 50.1475 1.57504 49.8573 2.19514L47.6667 6.8917C47.5926 7.03847 47.4733 7.15743 47.3265 7.23098C47.1797 7.30454 47.0131 7.32877 46.8515 7.3001L45.8835 6.9938C45.2547 6.80796 44.5914 6.77117 43.9459 6.88635C43.3005 7.00152 42.6906 7.26551 42.1645 7.65745C41.669 8.04043 41.2882 8.55251 41.0636 9.13771C40.839 9.72292 40.7792 10.3587 40.8908 10.9757L42.623 21.1856C42.6616 21.3349 42.6471 21.493 42.582 21.6327C42.5169 21.7724 42.4053 21.8851 42.2664 21.9513C42.1347 22.0275 41.9854 22.0676 41.8333 22.0676C41.6813 22.0676 41.5319 22.0275 41.4003 21.9513L37.2227 18.9394C36.565 18.5047 35.7944 18.273 35.0065 18.273C34.2186 18.273 33.4481 18.5047 32.7904 18.9394C32.1206 19.2944 31.5902 19.8657 31.285 20.5607C30.9799 21.2556 30.9179 22.0335 31.1092 22.7681L34.9301 38.083C34.9794 38.2456 34.9647 38.4209 34.8888 38.5728C34.813 38.7248 34.6819 38.8418 34.5226 38.8998C34.3795 38.9964 34.211 39.048 34.0386 39.048C33.8661 39.048 33.6976 38.9964 33.5546 38.8998L31.5677 35.7347C31.1024 35.1689 30.4885 34.7448 29.7952 34.5103C29.102 34.2757 28.3572 34.2401 27.6448 34.4075C26.9372 34.5269 26.2801 34.8518 25.7548 35.3418C25.2296 35.8318 24.8594 36.4654 24.6899 37.1641L24.3333 38.6956C24.3195 38.8237 24.2689 38.945 24.1874 39.0447C24.106 39.1445 23.9974 39.2183 23.8748 39.2572C23.7649 39.3153 23.6425 39.3457 23.5182 39.3457C23.3939 39.3457 23.2715 39.3153 23.1616 39.2572L16.2838 34.8669C15.6216 34.4444 14.8528 34.22 14.0677 34.22C13.2826 34.22 12.5138 34.4444 11.8515 34.8669C11.2125 35.2502 10.7138 35.8296 10.4294 36.5193C10.1449 37.209 10.0898 37.9721 10.2722 38.6956C11.2402 42.3201 11.9534 44.5663 12.5138 46.0468L6.09461 45.0768C5.7047 45.0137 5.30533 45.0992 4.97526 45.3165C4.64518 45.5339 4.40836 45.8673 4.31149 46.251C4.26702 46.6285 4.36917 47.0087 4.59679 47.3128C4.82442 47.6169 5.16006 47.8216 5.5342 47.8845Z" fill="#7CBD2D" />
          <path d="M75.9927 79.8416C75.9798 79.6537 75.93 79.4703 75.8461 79.3017C75.7622 79.1332 75.6459 78.983 75.5038 78.8596C75.3618 78.7363 75.1969 78.6423 75.0185 78.583C74.8401 78.5238 74.6518 78.5004 74.4643 78.5143C70.6945 78.8167 67.0241 79.8766 63.6718 81.6307C60.3195 83.3848 57.354 85.7972 54.952 88.7242V52.5301C54.952 52.151 54.8017 51.7874 54.5341 51.5193C54.2666 51.2513 53.9038 51.1007 53.5255 51.1007C53.3362 51.0935 53.1475 51.1256 52.9712 51.1949C52.7949 51.2642 52.6348 51.3692 52.5009 51.5034C52.367 51.6376 52.2621 51.798 52.193 51.9747C52.1238 52.1514 52.0918 52.3404 52.099 52.5301V88.52C49.7851 85.7614 46.9015 83.5387 43.6471 82.0052C40.3927 80.4716 36.8451 79.6638 33.2489 79.6374C32.8751 79.6884 32.5349 79.8807 32.2981 80.175C32.0613 80.4692 31.9458 80.8431 31.9752 81.2199C32.0371 81.5894 32.2321 81.9233 32.5231 82.1585C32.8141 82.3937 33.1811 82.5138 33.5546 82.4962C33.9112 82.4962 42.8268 81.7815 52.099 92.7061V105.469C52.0918 105.658 52.1238 105.847 52.193 106.024C52.2621 106.201 52.367 106.361 52.5009 106.495C52.6348 106.629 52.7949 106.734 52.9712 106.804C53.1475 106.873 53.3362 106.905 53.5255 106.898C53.9038 106.898 54.2666 106.747 54.5341 106.479C54.8017 106.211 54.952 105.848 54.952 105.469V92.9103L55.5633 92.2467C57.7513 89.1472 60.5919 86.5668 63.8842 84.688C67.1766 82.8091 70.8405 81.6775 74.6172 81.3731C74.8091 81.3667 74.9977 81.3216 75.1718 81.2404C75.3458 81.1593 75.5018 81.0437 75.6302 80.9007C75.7587 80.7577 75.857 80.5902 75.9193 80.4082C75.9815 80.2262 76.0065 80.0335 75.9927 79.8416Z" fill="#7CBD2D" />
          <path d="M74.8209 69.3764C74.6502 69.4529 74.4968 69.5633 74.3701 69.7012C74.2434 69.839 74.1461 70.0013 74.0841 70.178C74.0221 70.3548 73.9968 70.5424 74.0096 70.7293C74.0224 70.9163 74.0731 71.0986 74.1586 71.2653C74.2401 71.4381 74.3554 71.5928 74.4976 71.7202C74.6398 71.8476 74.8061 71.9452 74.9866 72.007C75.1671 72.0689 75.3582 72.0939 75.5485 72.0805C75.7388 72.067 75.9245 72.0155 76.0946 71.9289C78.4277 70.4188 80.418 68.4341 81.9364 66.1035C83.4547 63.773 84.4673 61.1487 84.9082 58.4008C85.0259 57.8543 84.9946 57.2862 84.8177 56.7561C84.6407 56.226 84.3246 55.7533 83.9025 55.3878C83.4804 55.0223 82.9679 54.7774 82.4187 54.6787C81.8696 54.5801 81.3041 54.6314 80.7816 54.8273C76.4468 56.6092 72.7028 59.5822 69.981 63.4036L69.4716 62.791C69.1947 62.4308 68.8401 62.138 68.4342 61.9346C68.0283 61.7313 67.5818 61.6226 67.128 61.6169C66.6901 61.5942 66.2525 61.6694 65.8472 61.8372C65.4418 62.0049 65.0788 62.261 64.7845 62.5868C60.3013 67.6918 59.1295 80.0458 59.0785 80.6074C59.0575 80.7925 59.0741 80.98 59.1273 81.1585C59.1806 81.337 59.2694 81.5029 59.3885 81.6461C59.5075 81.7892 59.6543 81.9067 59.82 81.9914C59.9856 82.0761 60.1667 82.1262 60.3522 82.1388C60.7024 82.1301 61.038 81.9969 61.2993 81.7632C61.5606 81.5294 61.7305 81.2102 61.7787 80.8626C62.2157 75.084 63.9577 69.4805 66.8733 64.4757L67.3828 65.0883C67.6832 65.4604 68.0639 65.7594 68.4963 65.9627C68.9287 66.1661 69.4015 66.2686 69.8791 66.2624C70.353 66.2585 70.8197 66.1461 71.2435 65.9338C71.6674 65.7214 72.0371 65.4147 72.3245 65.0372C74.7308 61.6617 78.0305 59.0272 81.8515 57.4308H82.1062C82.1286 57.4696 82.1403 57.5136 82.1403 57.5584C82.1403 57.6032 82.1286 57.6473 82.1062 57.6861C81.7558 60.0308 80.9283 62.2783 79.6751 64.2893C78.4219 66.3003 76.7696 68.0318 74.8209 69.3764Z" fill="#7CBD2D" />
          <path d="M105.847 69.7848C105.685 69.1528 105.326 68.5891 104.822 68.1758C104.318 67.7626 103.695 67.5215 103.045 67.4876L97.9505 67.2324L98.3071 64.3225C98.3893 63.7968 98.3286 63.2586 98.1314 62.7645C97.9341 62.2704 97.6076 61.8387 97.1863 61.5148C96.779 61.1825 96.2932 60.961 95.7756 60.8716C95.258 60.7821 94.7262 60.8279 94.2314 61.0043C90.2063 62.5661 86.5085 64.869 83.3289 67.7939C83.1934 67.927 83.0857 68.0858 83.0121 68.2612C82.9386 68.4365 82.9008 68.6247 82.9008 68.8149C82.9008 69.0051 82.9386 69.1933 83.0121 69.3686C83.0857 69.5439 83.1934 69.7028 83.3289 69.8359C83.4573 69.9702 83.6115 70.0772 83.7823 70.1502C83.953 70.2232 84.1367 70.2609 84.3224 70.2609C84.508 70.2609 84.6917 70.2232 84.8625 70.1502C85.0332 70.0772 85.1874 69.9702 85.3158 69.8359C88.2234 67.1866 91.5904 65.0931 95.2503 63.6589L94.8937 66.6198C94.8446 67.0393 94.8825 67.4645 95.0053 67.8686C95.128 68.2728 95.3329 68.6471 95.6069 68.968C95.875 69.2926 96.209 69.5561 96.5868 69.741C96.9646 69.9259 97.3774 70.0278 97.7976 70.0401H102.892L99.326 72.3884C98.6396 72.8375 98.1582 73.5401 97.9864 74.3433C97.8146 75.1464 97.9665 75.9851 98.409 76.6765L100.702 80.199C100.721 80.2829 100.721 80.3703 100.702 80.4542C95.9757 82.0965 90.8036 81.8775 86.2328 79.8416C85.8931 79.6765 85.5033 79.648 85.1432 79.7619C84.7832 79.8759 84.4804 80.1236 84.2969 80.4542C84.1321 80.7946 84.1037 81.1853 84.2174 81.546C84.3311 81.9068 84.5783 82.2102 84.9082 82.3941C87.631 83.7426 90.6341 84.425 93.671 84.385C96.3285 84.3678 98.9701 83.9724 101.517 83.2109C101.985 83.0857 102.415 82.8491 102.772 82.5212C103.129 82.1933 103.402 81.7839 103.567 81.3277C103.732 80.8715 103.785 80.3821 103.721 79.9012C103.656 79.4202 103.477 78.962 103.198 78.5654L100.905 74.9919C100.905 74.9919 100.905 74.9919 100.905 74.6856L104.472 72.3373C104.904 72.0696 105.258 71.693 105.499 71.2451C105.741 70.7972 105.861 70.2937 105.847 69.7848Z" fill="#7CBD2D" />
          <path d="M76.8079 81.3221C76.4435 81.2455 76.0636 81.3148 75.7495 81.5151C75.4354 81.7155 75.2119 82.0309 75.1267 82.3941C75.0818 82.5753 75.0741 82.7638 75.1041 82.9481C75.1341 83.1324 75.2012 83.3087 75.3012 83.4662C75.4013 83.6238 75.5322 83.7593 75.6861 83.8646C75.84 83.9699 76.0137 84.0427 76.1966 84.0787C82.0309 85.9799 87.1955 89.5245 91.0728 94.2887C91.1001 94.3716 91.1001 94.461 91.0728 94.5439C86.7037 94.7608 82.3524 93.8466 78.4382 91.8893C77.9766 91.6391 77.4601 91.5081 76.9353 91.5081C76.4105 91.5081 75.894 91.6391 75.4324 91.8893C74.9993 92.1845 74.6436 92.5798 74.3953 93.0419C74.147 93.504 74.0134 94.0192 74.0059 94.5439V94.9013C70.4929 93.9943 67.3986 91.9033 65.2431 88.9795C64.9864 88.6952 64.6275 88.5247 64.2453 88.5055C63.8632 88.4864 63.489 88.6202 63.2053 88.8774C62.9216 89.1346 62.7514 89.4943 62.7323 89.8772C62.7132 90.2602 62.8467 90.6351 63.1034 90.9194C65.7047 94.3633 69.4421 96.7695 73.6493 97.709H74.0059C74.7511 97.6872 75.4679 97.4178 76.0437 96.9432C76.365 96.6426 76.6212 96.279 76.7965 95.8751C76.9718 95.4712 77.0623 95.0354 77.0627 94.595V94.2376C81.3745 96.3823 86.1629 97.3841 90.9709 97.1474C91.5419 97.1028 92.0901 96.9035 92.5567 96.5708C93.0234 96.2381 93.3909 95.7845 93.6202 95.2586C93.8397 94.7276 93.9083 94.1461 93.8184 93.5785C93.7285 93.0109 93.4835 92.4792 93.1107 92.0425C88.8629 86.9222 83.1862 83.1893 76.8079 81.3221Z" fill="#7CBD2D" />
          <path d="M32.0272 69.3764C32.1979 69.4529 32.3513 69.5633 32.478 69.7012C32.6047 69.839 32.702 70.0013 32.764 70.178C32.826 70.3548 32.8514 70.5424 32.8385 70.7293C32.8257 70.9163 32.775 71.0986 32.6895 71.2653C32.608 71.4381 32.4927 71.5928 32.3505 71.7202C32.2083 71.8476 32.042 71.9452 31.8615 72.007C31.681 72.0689 31.4899 72.0939 31.2996 72.0805C31.1093 72.067 30.9236 72.0155 30.7536 71.9289C28.4204 70.4188 26.4301 68.4341 24.9117 66.1035C23.3934 63.773 22.3809 61.1487 21.9399 58.4008C21.8222 57.8543 21.8535 57.2862 22.0305 56.7561C22.2074 56.226 22.5235 55.7533 22.9456 55.3878C23.3677 55.0223 23.8802 54.7774 24.4294 54.6787C24.9785 54.5801 25.544 54.6314 26.0665 54.8273C30.4013 56.6092 34.1453 59.5822 36.8671 63.4036L37.3766 62.791C37.6534 62.4308 38.0081 62.138 38.4139 61.9346C38.8198 61.7313 39.2663 61.6226 39.7201 61.6169C40.1581 61.5942 40.5956 61.6694 41.0009 61.8372C41.4063 62.0049 41.7693 62.261 42.0636 62.5868C46.5469 67.6918 47.7186 80.0458 47.7696 80.6074C47.7907 80.7925 47.7741 80.98 47.7208 81.1585C47.6675 81.337 47.5787 81.5029 47.4596 81.6461C47.3406 81.7892 47.1938 81.9067 47.0281 81.9914C46.8625 82.0761 46.6815 82.1262 46.4959 82.1388C46.1458 82.1301 45.8101 81.9969 45.5488 81.7632C45.2875 81.5294 45.1176 81.2102 45.0694 80.8626C44.6325 75.084 42.8904 69.4805 39.9748 64.4757L39.4653 65.0883C39.1649 65.4604 38.7842 65.7594 38.3518 65.9627C37.9194 66.1661 37.4466 66.2686 36.969 66.2624C36.4951 66.2585 36.0284 66.1461 35.6046 65.9338C35.1808 65.7214 34.811 65.4147 34.5236 65.0372C32.1173 61.6617 28.8176 59.0272 24.9966 57.4308H24.7419C24.7196 57.4696 24.7078 57.5136 24.7078 57.5584C24.7078 57.6032 24.7196 57.6473 24.7419 57.6861C25.0923 60.0308 25.9198 62.2783 27.173 64.2893C28.4263 66.3003 30.0785 68.0318 32.0272 69.3764Z" fill="#7CBD2D" />
          <path d="M1.00097 69.7848C1.1629 69.1528 1.52205 68.5891 2.02608 68.1758C2.53011 67.7626 3.15265 67.5215 3.80301 67.4876L8.89762 67.2324L8.541 64.3225C8.45878 63.7968 8.51948 63.2586 8.71672 62.7645C8.91395 62.2704 9.24044 61.8387 9.66182 61.5148C10.0691 61.1825 10.5549 60.961 11.0725 60.8716C11.5901 60.7821 12.1219 60.8279 12.6167 61.0043C16.6418 62.5661 20.3396 64.869 23.5192 67.7939C23.6547 67.927 23.7624 68.0858 23.8359 68.2612C23.9095 68.4365 23.9473 68.6247 23.9473 68.8149C23.9473 69.0051 23.9095 69.1933 23.8359 69.3686C23.7624 69.5439 23.6547 69.7028 23.5192 69.8359C23.3908 69.9702 23.2366 70.0772 23.0658 70.1502C22.8951 70.2232 22.7114 70.2609 22.5257 70.2609C22.3401 70.2609 22.1564 70.2232 21.9856 70.1502C21.8149 70.0772 21.6607 69.9702 21.5323 69.8359C18.6247 67.1866 15.2577 65.0931 11.5978 63.6589L11.9544 66.6198C12.0035 67.0393 11.9655 67.4645 11.8428 67.8686C11.72 68.2728 11.5152 68.6471 11.2411 68.968C10.9731 69.2926 10.6391 69.5561 10.2613 69.741C9.88351 69.9259 9.47071 70.0278 9.05046 70.0401H3.95585L7.52208 72.3884C8.20844 72.8375 8.68993 73.5401 8.86169 74.3433C9.03344 75.1464 8.88155 75.9851 8.43911 76.6765L6.14653 80.199C6.12698 80.2829 6.12698 80.3703 6.14653 80.4542C10.8724 82.0965 16.0445 81.8775 20.6152 79.8416C20.9549 79.6765 21.3448 79.648 21.7048 79.7619C22.0649 79.8759 22.3677 80.1236 22.5512 80.4542C22.7159 80.7946 22.7444 81.1853 22.6307 81.546C22.517 81.9068 22.2698 82.2102 21.9398 82.3941C19.2171 83.7426 16.214 84.425 13.1771 84.385C10.5196 84.3678 7.87798 83.9724 5.3314 83.2109C4.86353 83.0857 4.43276 82.8491 4.07578 82.5212C3.71879 82.1933 3.44615 81.7839 3.28106 81.3277C3.11596 80.8715 3.06331 80.3821 3.12757 79.9012C3.19184 79.4202 3.37113 78.962 3.65018 78.5654L5.94275 74.9919C5.94275 74.9919 5.94275 74.9919 5.94275 74.6856L2.37652 72.3373C1.94447 72.0696 1.59006 71.693 1.34868 71.2451C1.10731 70.7972 0.987417 70.2937 1.00097 69.7848Z" fill="#7CBD2D" />
          <path d="M30.0402 81.3221C30.4046 81.2455 30.7845 81.3148 31.0986 81.5151C31.4127 81.7155 31.6362 82.0309 31.7214 82.3941C31.7663 82.5753 31.774 82.7638 31.744 82.9481C31.714 83.1324 31.647 83.3087 31.5469 83.4662C31.4468 83.6238 31.3159 83.7593 31.162 83.8646C31.0081 83.9699 30.8344 84.0427 30.6515 84.0787C24.8172 85.9799 19.6527 89.5245 15.7753 94.2887C15.7481 94.3716 15.7481 94.461 15.7753 94.5439C20.1444 94.7608 24.4957 93.8466 28.4099 91.8893C28.8715 91.6391 29.388 91.5081 29.9128 91.5081C30.4376 91.5081 30.9542 91.6391 31.4157 91.8893C31.8488 92.1845 32.2045 92.5798 32.4528 93.0419C32.7011 93.504 32.8347 94.0192 32.8422 94.5439V94.9013C36.3552 93.9943 39.4495 91.9033 41.605 88.9795C41.8617 88.6952 42.2206 88.5247 42.6028 88.5055C42.985 88.4864 43.3591 88.6202 43.6428 88.8774C43.9266 89.1346 44.0967 89.4943 44.1158 89.8772C44.1349 90.2602 44.0014 90.6351 43.7447 90.9194C41.1434 94.3633 37.406 96.7695 33.1989 97.709H32.8422C32.097 97.6872 31.3802 97.4178 30.8044 96.9432C30.4831 96.6426 30.2269 96.279 30.0516 95.8751C29.8764 95.4712 29.7858 95.0354 29.7855 94.595V94.2376C25.4736 96.3823 20.6852 97.3841 15.8772 97.1474C15.3062 97.1028 14.758 96.9035 14.2914 96.5708C13.8248 96.2381 13.4572 95.7845 13.228 95.2586C13.0084 94.7276 12.9398 94.1461 13.0297 93.5785C13.1197 93.0109 13.3646 92.4792 13.7374 92.0425C17.9853 86.9222 23.6619 83.1893 30.0402 81.3221Z" fill="#7CBD2D" />
        </g>
        <path d="M2.34038 132.6V155H6.56438V146.808H11.5564C15.6844 146.808 18.7244 143.992 18.7244 139.704C18.7244 135.416 15.7804 132.6 11.5564 132.6H2.34038ZM6.56438 136.44H11.1404C13.1564 136.44 14.5004 137.72 14.5004 139.704C14.5004 141.688 13.1564 142.968 11.1404 142.968H6.56438V136.44ZM19.9206 142.776L23.1846 144.888C24.1766 143.224 25.4886 142.136 27.6006 142.136C29.7766 142.136 30.9286 143.32 30.9286 144.824V145.208L24.8486 145.88C21.8086 146.2 19.6006 147.96 19.6006 150.488C19.6006 153.528 21.9686 155.448 25.5526 155.448C28.9126 155.448 30.0326 153.816 30.5446 152.76H30.9926V155H34.9606V144.856C34.9606 141.144 32.1446 138.68 27.8246 138.68C23.9526 138.68 21.8086 140.408 19.9206 142.776ZM23.8246 150.264C23.8246 149.336 24.5606 148.792 26.0646 148.6L30.9286 148.024V148.28C30.9286 150.456 29.3606 152.12 26.5446 152.12C24.7526 152.12 23.8246 151.352 23.8246 150.264ZM42.3069 139.128H38.3389V155H42.3709V146.04C42.3709 143.8 43.8429 142.712 45.8909 142.712H48.2589V139.064H46.7229C44.7069 139.064 43.3629 139.672 42.7549 141.432H42.3069V139.128ZM49.4831 143.608C49.4831 146.552 51.4991 147.992 55.9471 148.504L56.4911 148.568C58.2191 148.76 59.8511 148.984 59.8511 150.168C59.8511 151.416 58.3471 152.12 56.7151 152.12C54.6671 152.12 52.5231 151.032 51.5311 148.952L48.3311 150.968C49.8031 153.208 52.2351 155.448 56.6191 155.448C60.8431 155.448 63.7551 153.176 63.7551 150.072C63.7551 147.16 61.8671 145.848 56.7791 145.24L56.2351 145.176C54.5711 144.984 53.3871 144.696 53.3871 143.544C53.3871 142.584 54.2191 141.944 55.7231 141.944C57.8351 141.944 59.4351 143.224 60.6511 144.664L63.5631 142.36C61.4191 140.12 59.1151 138.68 55.8511 138.68C52.1711 138.68 49.4831 140.664 49.4831 143.608ZM70.2771 132.6H66.2451V155H70.2771V132.6ZM72.9101 146.936C72.9101 151.864 76.3341 155.448 81.0701 155.448C85.3261 155.448 87.1821 153.208 88.2701 151.544L84.9741 149.624C84.4301 150.744 83.2461 151.992 81.0061 151.992C78.7021 151.992 77.1981 150.36 77.0381 148.248H88.5901V146.68C88.5901 141.912 85.4861 138.68 80.8781 138.68C76.2061 138.68 72.9101 142.136 72.9101 146.936ZM77.0701 145.432C77.3901 143.48 78.5741 142.136 80.8461 142.136C82.9261 142.136 84.2061 143.416 84.4941 145.432H77.0701ZM102.104 139.128L97.9444 150.52H97.5604L93.4004 139.128H89.0484L95.6404 156.024L93.4004 161.4H97.7524L106.456 139.128H102.104Z" fill="#7CBD2D" />
        <defs>
          <clipPath id="clip0_3_101">
            <rect width="105" height="107" fill="white" transform="translate(1)" />
          </clipPath>
        </defs>
      </svg>
    </SplashWrapper>
  )
};
