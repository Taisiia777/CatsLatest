import { useState, useEffect } from "react";
import Coin from "../Coin";

import cat1 from '../assets/cat1.png'
import axios from "axios";
import { appStateAtom, popupStateAtom } from "../App";
import { useAtom } from "jotai";
export default function MineBlock() {
  const [tab, setTab] = useState(1);
  const [cardsTab, setCardsTab] = useState(1);
  const [popupState, setPopupState] = useAtom(popupStateAtom);
  const [coins, setCoins] = useState([]);
useEffect(()=>{
  const fetchCoins = async () => {
    try {
      const response = await fetch("https://85ef-95-161-221-131.ngrok-free.app/api/coin");
      const data = await response.json();
      setCoins(data);
    } catch (error) {
      console.error("Error fetching boosters:", error);
    }
  };
  fetchCoins()
},[]);
  return (
    <div className="MineBlock BottomBlock" onTouchMove={(e)=>{
      e.stopPropagation();
    }}>
      <div className="MineBlock__container">
        <section
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            marginBottom: 8,
            gap: 8,
            width: "100%",
          }}
        >
          <span style={{ opacity: 0.5, fontSize: 12 }}>00:17:03</span>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16663 6.66663C9.16663 6.44561 9.25443 6.23365 9.41071 6.07737C9.56699 5.92109 9.77895 5.83329 9.99996 5.83329C10.1448 5.83646 10.2863 5.87732 10.4105 5.95185C10.5347 6.02638 10.6374 6.132 10.7083 6.25829C10.7882 6.37962 10.8316 6.52135 10.8333 6.66663C10.8333 6.88764 10.7455 7.0996 10.5892 7.25588C10.4329 7.41216 10.221 7.49996 9.99996 7.49996C9.77895 7.49996 9.56699 7.41216 9.41071 7.25588C9.25443 7.0996 9.16663 6.88764 9.16663 6.66663ZM18.3333 9.99996C18.3333 11.6481 17.8446 13.2593 16.9289 14.6297C16.0132 16.0001 14.7117 17.0682 13.189 17.699C11.6663 18.3297 9.99072 18.4947 8.37421 18.1732C6.7577 17.8516 5.27284 17.058 4.10741 15.8925C2.94197 14.7271 2.1483 13.2422 1.82675 11.6257C1.50521 10.0092 1.67024 8.33365 2.30097 6.81093C2.9317 5.28821 3.9998 3.98672 5.37021 3.07105C6.74062 2.15537 8.35179 1.66663 9.99996 1.66663C11.0943 1.66663 12.1779 1.88217 13.189 2.30096C14.2 2.71975 15.1187 3.33358 15.8925 4.1074C16.6663 4.88122 17.2802 5.79988 17.699 6.81093C18.1177 7.82198 18.3333 8.90561 18.3333 9.99996ZM16.6666 9.99996C16.6666 8.68142 16.2756 7.39249 15.5431 6.29616C14.8105 5.19983 13.7694 4.34535 12.5512 3.84076C11.333 3.33618 9.99257 3.20416 8.69936 3.46139C7.40615 3.71863 6.21827 4.35356 5.28592 5.28591C4.35357 6.21826 3.71863 7.40615 3.46139 8.69936C3.20416 9.99256 3.33618 11.333 3.84077 12.5512C4.34535 13.7694 5.19983 14.8105 6.29616 15.5431C7.39249 16.2756 8.68142 16.6666 9.99996 16.6666C11.7681 16.6666 13.4638 15.9642 14.714 14.714C15.9643 13.4638 16.6666 11.7681 16.6666 9.99996ZM10.8333 11.6666V9.16663C10.8333 8.94561 10.7455 8.73365 10.5892 8.57737C10.4329 8.42109 10.221 8.33329 9.99996 8.33329H9.16663C8.94562 8.33329 8.73365 8.42109 8.57737 8.57737C8.42109 8.73365 8.3333 8.94561 8.3333 9.16663C8.3333 9.38764 8.42109 9.5996 8.57737 9.75588C8.73365 9.91216 8.94562 9.99996 9.16663 9.99996V12.5C9.16663 12.721 9.25443 12.9329 9.41071 13.0892C9.56699 13.2455 9.77895 13.3333 9.99996 13.3333H10.8333C11.0543 13.3333 11.2663 13.2455 11.4226 13.0892C11.5788 12.9329 11.6666 12.721 11.6666 12.5C11.6666 12.2789 11.5788 12.067 11.4226 11.9107C11.2663 11.7544 11.0543 11.6666 10.8333 11.6666Z"
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
        </section>
        <div className=" animate__animated animate__fadeInRight  daily_code">
          <p>Комбо</p>
          <div className="daily_combo">
           <nav></nav>
           <nav></nav>
           <nav></nav>
             </div>
          <button>
            <Coin width={18} />
            +5 000 000
          </button>
        </div>
        <div className="icons  animate__animated animate__fadeInLeft ">
          <div>
        <svg width={54} height={50} viewBox="0 0 54 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_2012_2142)">
    <path d="M31.5225 10.3927C29.9896 8.94778 29.794 6.57821 31.0719 4.90285L34.0335 1.02024C31.7297 -0.578308 31.3921 0.497055 29.3897 1.71445C27.2656 3.00575 26.0587 0.756475 24.8923 0.0898084C24.2127 -0.298597 23.1391 0.641982 22.3596 1.49416L24.9488 4.88691C26.2311 6.56662 26.0326 8.94778 24.4866 10.3884C17.7071 16.7057 8.18774 24.9463 8.18774 34.2898C8.18774 45.2434 17.0652 47.4579 28.0162 47.4579C38.9671 47.4579 47.8446 45.2434 47.8446 34.2898C47.8446 24.7623 39.109 17.5434 31.5225 10.3913V10.3927Z" fill="#EFE089" />
    <path d="M31.5226 10.3927C30.7039 9.6202 30.2693 8.58397 30.2345 7.53035C30.2041 6.61296 30.4764 5.68252 31.072 4.90136L32.2557 3.34919C31.724 3.3231 31.1893 3.38252 30.6184 3.57672C29.8128 3.85064 28.9507 4.36513 28.0785 4.36223C27.1642 4.35933 26.3891 3.77383 25.469 3.81586C25.0532 3.8347 24.6706 3.91875 24.3142 4.05499L24.9488 4.88687C25.5472 5.67093 25.8196 6.60716 25.7863 7.5289C25.7486 8.58252 25.3111 9.61875 24.4852 10.3883C23.8042 11.0231 33.6162 12.3506 33.6162 12.3506C32.9135 11.6956 32.2122 11.0434 31.5211 10.3912L31.5226 10.3927Z" fill="#D3C26E" />
    <path d="M28.0162 47.4593C38.9671 47.4593 47.8446 45.2448 47.8446 34.2912C47.8446 29.7304 45.8422 25.6985 42.9226 21.9506C29.6824 18.1521 30.5619 46.1811 8.21238 33.4709C8.19644 33.7434 8.18774 34.0173 8.18774 34.2912C8.18774 45.2448 17.0652 47.4593 28.0162 47.4593Z" fill="#D3C26E" />
    <g clipPath="url(#clip1_2012_2142)">
      <path d="M25.8652 30.4791C25.8652 29.5506 26.0188 28.7168 26.3265 27.978C26.6337 27.2392 27.2687 26.5949 28.2302 26.0452C28.5186 25.8747 28.874 25.6805 29.2971 25.4624C29.7196 25.245 30.1333 24.984 30.5376 24.6807C30.9413 24.378 31.2826 24.0225 31.5615 23.6149C31.8398 23.2078 31.9799 22.7387 31.9799 22.2081C31.9799 21.8103 31.9028 21.46 31.7492 21.1567C31.595 20.854 31.3932 20.5983 31.1437 20.3895C30.8936 20.1813 30.5999 20.0248 30.2639 19.9204C29.9273 19.8166 29.586 19.7638 29.24 19.7638C28.8169 19.7638 28.4326 19.8352 28.0866 19.9772C27.7406 20.1193 27.4275 20.2996 27.1492 20.5171C26.8703 20.7351 26.6202 20.9816 26.3995 21.2559C26.1782 21.5308 25.9905 21.7917 25.8369 22.0376H25.4027L23.3271 20.3327C23.5767 19.7458 23.9085 19.2245 24.3222 18.7693C24.7353 18.3147 25.2061 17.9308 25.7357 17.6182C26.2642 17.3057 26.8361 17.0691 27.4517 16.9079C28.0666 16.7472 28.701 16.6666 29.3548 16.6666C30.085 16.6666 30.8065 16.771 31.5179 16.9792C32.2288 17.1879 32.8685 17.5191 33.4357 17.9737C34.0024 18.4283 34.4644 19.0111 34.8198 19.7215C35.1752 20.4319 35.3535 21.2802 35.3535 22.2655C35.3535 22.872 35.2812 23.4073 35.137 23.8712C34.9928 24.3357 34.7857 24.7573 34.5167 25.1359C34.2472 25.5152 33.93 25.8562 33.5652 26.1589C33.1998 26.4621 32.7867 26.7556 32.3247 27.0397C31.9399 27.267 31.5556 27.4851 31.1713 27.6933C30.7865 27.902 30.4358 28.134 30.1186 28.3897C29.8014 28.6454 29.5419 28.9394 29.34 29.2706C29.1382 29.6023 29.037 30.0053 29.037 30.4785H25.8652V30.4791ZM25.9229 37.1014V33.179H29.1241V37.1014H25.9229Z" fill="#FFC727" />
      <path d="M25.8652 30.4791C25.8652 29.5506 26.0188 28.7168 26.3265 27.978C26.6337 27.2392 27.2687 26.5949 28.2302 26.0452C28.5186 25.8747 28.874 25.6805 29.2971 25.4624C29.7196 25.245 30.1333 24.984 30.5376 24.6807C30.9413 24.378 31.2826 24.0225 31.5615 23.6149C31.8398 23.2078 31.9799 22.7387 31.9799 22.2081C31.9799 21.8103 31.9028 21.46 31.7492 21.1567C31.595 20.854 31.3932 20.5983 31.1437 20.3895C30.8936 20.1813 30.5999 20.0248 30.2639 19.9204C29.9273 19.8166 29.586 19.7638 29.24 19.7638C28.8169 19.7638 28.4326 19.8352 28.0866 19.9772C27.7406 20.1193 27.4275 20.2996 27.1492 20.5171C26.8703 20.7351 26.6202 20.9816 26.3995 21.2559C26.1782 21.5308 25.9905 21.7917 25.8369 22.0376H25.4027L23.3271 20.3327C23.5767 19.7458 23.9085 19.2245 24.3222 18.7693C24.7353 18.3147 25.2061 17.9308 25.7357 17.6182C26.2642 17.3057 26.8361 17.0691 27.4517 16.9079C28.0666 16.7472 28.701 16.6666 29.3548 16.6666C30.085 16.6666 30.8065 16.771 31.5179 16.9792C32.2288 17.1879 32.8685 17.5191 33.4357 17.9737C34.0024 18.4283 34.4644 19.0111 34.8198 19.7215C35.1752 20.4319 35.3535 21.2802 35.3535 22.2655C35.3535 22.872 35.2812 23.4073 35.137 23.8712C34.9928 24.3357 34.7857 24.7573 34.5167 25.1359C34.2472 25.5152 33.93 25.8562 33.5652 26.1589C33.1998 26.4621 32.7867 26.7556 32.3247 27.0397C31.9399 27.267 31.5556 27.4851 31.1713 27.6933C30.7865 27.902 30.4358 28.134 30.1186 28.3897C29.8014 28.6454 29.5419 28.9394 29.34 29.2706C29.1382 29.6023 29.037 30.0053 29.037 30.4785H25.8652V30.4791ZM25.9229 37.1014V33.179H29.1241V37.1014H25.9229Z" fill="#D3C26E" />
      <path d="M25.4309 30.4791C25.4309 29.5506 25.5844 28.7168 25.8922 27.978C26.1994 27.2392 26.8343 26.5949 27.7959 26.0452C28.0842 25.8747 28.4397 25.6805 28.8628 25.4624C29.2853 25.245 29.699 24.984 30.1032 24.6807C30.5069 24.378 30.8482 24.0225 31.1272 23.6149C31.4055 23.2078 31.5456 22.7387 31.5456 22.2081C31.5456 21.8103 31.4685 21.46 31.3149 21.1567C31.1607 20.854 30.9589 20.5983 30.7094 20.3895C30.4593 20.1813 30.1656 20.0248 29.8296 19.9204C29.493 19.8166 29.1517 19.7638 28.8057 19.7638C28.3826 19.7638 27.9983 19.8352 27.6523 19.9772C27.3063 20.1193 26.9932 20.2996 26.7149 20.5171C26.4359 20.7351 26.1859 20.9816 25.9652 21.2559C25.7439 21.5308 25.5562 21.7917 25.4026 22.0376L22.8928 20.3327C23.1423 19.7458 23.4742 19.2245 23.8879 18.7693C24.301 18.3147 24.7718 17.9308 25.3014 17.6182C25.8298 17.3057 26.4018 17.0691 27.0173 16.9079C27.6323 16.7472 28.2667 16.6666 28.9204 16.6666C29.6507 16.6666 30.3722 16.771 31.0836 16.9792C31.7945 17.1879 32.4341 17.5191 33.0014 17.9737C33.5681 18.4283 34.03 19.0111 34.3855 19.7215C34.7409 20.4319 34.9192 21.2802 34.9192 22.2655C34.9192 22.872 34.8468 23.4073 34.7027 23.8712C34.5585 24.3357 34.3513 24.7573 34.0824 25.1359C33.8129 25.5152 33.4957 25.8562 33.1309 26.1589C32.7654 26.4621 32.3523 26.7556 31.8904 27.0397C31.5055 27.267 31.1213 27.4851 30.737 27.6933C30.3522 27.902 30.0014 28.134 29.6843 28.3897C29.3671 28.6454 29.1076 28.9394 28.9057 29.2706C28.7039 29.6023 28.6027 30.0053 28.6027 30.4785H25.4309V30.4791ZM25.4885 37.1014V33.179H28.6898V37.1014H25.4885Z" fill="#582900" />
    </g>
    <path d="M30.985 7H24.9894V8.45217H30.985V7Z" fill="#582900" />
    <path d="M30.5373 9.60428C30.5373 9.60428 30.5228 9.60428 30.517 9.60428L25.4183 9.51442C25.0242 9.50283 24.7141 9.16949 24.7242 8.76949C24.7358 8.36949 24.7286 8.055 25.1212 8.06659L30.8937 8.15645C31.2878 8.16804 31.2617 8.50138 31.2502 8.90138C31.2386 9.29413 30.9213 9.60428 30.5373 9.60428Z" fill="#753400" />
    <path d="M30.8734 7.55362C30.8734 7.55362 30.5228 7.55362 30.5155 7.55362L25.0792 7.46376C24.6851 7.45217 24.7112 7.11883 24.7227 6.71883C24.7343 6.31883 25.0647 6.00434 25.4573 6.01594L30.5561 6.10579C30.9502 6.11739 31.2603 6.45072 31.2501 6.85072C31.2385 7.24347 31.2588 7.55362 30.8734 7.55362Z" fill="#753400" />
    <mask id="mask0_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={8} y={33} width={40} height={15}>
      <path d="M28.0162 39.3029C15.867 49.5884 12.123 38.142 8.21093 33.5145C8.19644 33.7725 8.18774 34.0304 8.18774 34.2899C8.18774 45.2435 17.0652 47.458 28.0162 47.458C38.9671 47.458 47.8446 45.2435 47.8446 34.2899C47.8446 34.029 47.8373 33.7696 47.8243 33.5116C40.1783 42.7275 38.0702 30.7913 28.0162 39.3015V39.3029Z" fill="white" />
    </mask>
    <g mask="url(#mask0_2012_2142)">
      <path d="M48.7748 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M48.1155 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M47.4562 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M46.797 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M46.1377 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M45.4799 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M44.8207 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M44.1614 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M43.5022 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M42.8429 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M42.1836 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M41.5259 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M40.8666 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M40.2073 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M39.5481 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M38.8888 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M38.231 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M37.5718 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M36.9125 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M36.2532 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M35.594 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M34.9347 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M34.2769 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M33.6177 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M32.9584 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M32.2991 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M31.6399 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M30.9806 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M30.3228 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M29.6636 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M29.0043 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M28.3451 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M27.6858 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M27.028 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M26.3688 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M25.7095 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M25.0502 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M24.391 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M23.7317 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M23.0739 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M22.4147 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M21.7554 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M21.0961 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M20.4369 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M19.7776 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M19.1198 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M18.4606 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M17.8013 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M17.142 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M16.4828 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M15.825 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M15.1656 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M14.5065 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M13.8472 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M13.188 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M12.5287 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M11.8708 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M11.2117 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M10.5524 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M9.89307 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M9.23389 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M8.57458 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M7.91675 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M7.25757 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
    </g>
    <path d="M11.7014 45.3999C11.7014 45.0492 9.75696 44.7666 7.359 44.7666C4.96105 44.7666 3.0166 45.0507 3.0166 45.3999V46.2391C3.0166 46.5898 4.96105 46.8724 7.359 46.8724C9.75696 46.8724 11.7014 46.5883 11.7014 46.2391V45.3999Z" fill="#CC9933" />
    <mask id="mask1_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={3} y={44} width={9} height={3}>
      <path d="M11.7014 45.3999C11.7014 45.0492 9.75696 44.7666 7.359 44.7666C4.96105 44.7666 3.0166 45.0507 3.0166 45.3999V46.2391C3.0166 46.5898 4.96105 46.8724 7.359 46.8724C9.75696 46.8724 11.7014 46.5883 11.7014 46.2391V45.3999Z" fill="white" />
    </mask>
    <g mask="url(#mask1_2012_2142)">
      <path d="M3.16443 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M3.50061 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M3.83533 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.17139 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.5061 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.84229 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.17847 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.51306 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.84924 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.18396 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.52014 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.85486 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.19092 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.5271 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.86182 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.198 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.53271 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.86877 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.20349 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.53967 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.87585 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.2104 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.5466 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.8813 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.2175 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.5522 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M11.7014 45.3999C11.7014 45.7507 9.75696 46.0333 7.359 46.0333C4.96105 46.0333 3.0166 45.7492 3.0166 45.3999C3.0166 45.0507 4.96105 44.7666 7.359 44.7666C9.75696 44.7666 11.7014 45.0507 11.7014 45.3999Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M7.359 45.9289C9.57959 45.9289 11.3797 45.6921 11.3797 45.4C11.3797 45.1078 9.57959 44.871 7.359 44.871C5.1384 44.871 3.33826 45.1078 3.33826 45.4C3.33826 45.6921 5.1384 45.9289 7.359 45.9289Z" fill="#CC9933" />
    </g>
    <path d="M12.0245 44.3463C12.0245 43.9956 10.0801 43.713 7.68212 43.713C5.28417 43.713 3.33972 43.9971 3.33972 44.3463V45.1855C3.33972 45.5362 5.28417 45.8188 7.68212 45.8188C10.0801 45.8188 12.0245 45.5348 12.0245 45.1855V44.3463Z" fill="#CC9933" />
    <mask id="mask2_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={3} y={43} width={10} height={3}>
      <path d="M12.0245 44.3463C12.0245 43.9956 10.0801 43.713 7.68212 43.713C5.28417 43.713 3.33972 43.9971 3.33972 44.3463V45.1855C3.33972 45.5362 5.28417 45.8188 7.68212 45.8188C10.0801 45.8188 12.0245 45.5348 12.0245 45.1855V44.3463Z" fill="white" />
    </mask>
    <g mask="url(#mask2_2012_2142)">
      <path d="M3.48755 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M3.82373 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.15845 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.49451 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.82922 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.16541 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.50159 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.83618 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.17236 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.50708 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.84326 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.17798 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.51404 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.85022 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.18494 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.52112 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.85583 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.19189 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.52661 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.86279 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.1975 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.5336 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.8698 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.2045 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.5406 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.8754 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M7.68212 44.9797C10.0804 44.9797 12.0245 44.6961 12.0245 44.3463C12.0245 43.9966 10.0804 43.713 7.68212 43.713C5.28388 43.713 3.33972 43.9966 3.33972 44.3463C3.33972 44.6961 5.28388 44.9797 7.68212 44.9797Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M7.68212 44.8754C9.90271 44.8754 11.7029 44.6385 11.7029 44.3464C11.7029 44.0542 9.90271 43.8174 7.68212 43.8174C5.46152 43.8174 3.66138 44.0542 3.66138 44.3464C3.66138 44.6385 5.46152 44.8754 7.68212 44.8754Z" fill="#CC9933" />
    </g>
    <path d="M12.3476 43.2928C12.3476 42.942 10.4032 42.6594 8.00524 42.6594C5.60729 42.6594 3.66284 42.9435 3.66284 43.2928V44.1319C3.66284 44.4826 5.60729 44.7652 8.00524 44.7652C10.4032 44.7652 12.3476 44.4812 12.3476 44.1319V43.2928Z" fill="#CC9933" />
    <mask id="mask3_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={3} y={42} width={10} height={3}>
      <path d="M12.3476 43.2928C12.3476 42.942 10.4032 42.6594 8.00524 42.6594C5.60729 42.6594 3.66284 42.9435 3.66284 43.2928V44.1319C3.66284 44.4826 5.60729 44.7652 8.00524 44.7652C10.4032 44.7652 12.3476 44.4812 12.3476 44.1319V43.2928Z" fill="white" />
    </mask>
    <g mask="url(#mask3_2012_2142)">
      <path d="M3.81067 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.14685 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.48157 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.81763 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.15234 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.48853 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.82471 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.1593 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.49548 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.8302 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.16638 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.5011 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.83716 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.17334 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.50806 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.84424 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.17896 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.51501 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.84973 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.1859 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.5206 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.8567 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.1929 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.5276 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.8638 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M12.1985 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M8.00524 43.9261C10.4035 43.9261 12.3476 43.6425 12.3476 43.2928C12.3476 42.943 10.4035 42.6594 8.00524 42.6594C5.607 42.6594 3.66284 42.943 3.66284 43.2928C3.66284 43.6425 5.607 43.9261 8.00524 43.9261Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M8.00524 43.8218C10.2258 43.8218 12.026 43.5849 12.026 43.2928C12.026 43.0006 10.2258 42.7638 8.00524 42.7638C5.78464 42.7638 3.9845 43.0006 3.9845 43.2928C3.9845 43.5849 5.78464 43.8218 8.00524 43.8218Z" fill="#CC9933" />
    </g>
    <path d="M12.0245 42.3449C12.0245 41.9942 10.0801 41.7115 7.68212 41.7115C5.28417 41.7115 3.33972 41.9956 3.33972 42.3449V43.184C3.33972 43.5347 5.28417 43.8173 7.68212 43.8173C10.0801 43.8173 12.0245 43.5333 12.0245 43.184V42.3449Z" fill="#CC9933" />
    <mask id="mask4_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={3} y={41} width={10} height={3}>
      <path d="M12.0245 42.3449C12.0245 41.9942 10.0801 41.7115 7.68212 41.7115C5.28417 41.7115 3.33972 41.9956 3.33972 42.3449V43.184C3.33972 43.5347 5.28417 43.8173 7.68212 43.8173C10.0801 43.8173 12.0245 43.5333 12.0245 43.184V42.3449Z" fill="white" />
    </mask>
    <g mask="url(#mask4_2012_2142)">
      <path d="M3.48755 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M3.82373 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.15845 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.49451 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.82922 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.16541 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.50159 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.83618 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.17236 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.50708 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.84326 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.17798 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.51404 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.85022 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.18494 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.52112 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.85583 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.19189 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.52661 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.86279 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.1975 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.5336 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.8698 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.2045 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.5406 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.8754 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M7.68212 42.9782C10.0804 42.9782 12.0245 42.6947 12.0245 42.3449C12.0245 41.9951 10.0804 41.7115 7.68212 41.7115C5.28388 41.7115 3.33972 41.9951 3.33972 42.3449C3.33972 42.6947 5.28388 42.9782 7.68212 42.9782Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M7.68212 42.8739C9.90271 42.8739 11.7029 42.6371 11.7029 42.3449C11.7029 42.0528 9.90271 41.8159 7.68212 41.8159C5.46152 41.8159 3.66138 42.0528 3.66138 42.3449C3.66138 42.6371 5.46152 42.8739 7.68212 42.8739Z" fill="#CC9933" />
    </g>
    <g style={{mixBlendMode: 'multiply'}} opacity="0.5">
      <path d="M12.0839 43.0753C12.065 43.0681 12.0447 43.0608 12.0245 43.0536V42.3463C12.0245 42.697 10.08 42.9796 7.68207 42.9796C7.57774 42.9796 7.47487 42.9796 7.372 42.9782L6.42151 46.8579C6.72288 46.8681 7.0373 46.8724 7.35896 46.8724C9.75691 46.8724 11.7014 46.5883 11.7014 46.2391V45.426C11.9086 45.3521 12.0245 45.271 12.0245 45.1854V44.3724C12.2317 44.2985 12.3476 44.2173 12.3476 44.1318V43.2927C12.3476 43.2159 12.2548 43.142 12.0839 43.0753Z" fill="#CC9933" />
    </g>
    <path d="M19.8602 46.6637C19.8602 46.255 17.5883 45.9231 14.7861 45.9231C11.9839 45.9231 9.71204 46.255 9.71204 46.6637V47.6434C9.71204 48.0521 11.9839 48.384 14.7861 48.384C17.5883 48.384 19.8602 48.0521 19.8602 47.6434V46.6637Z" fill="#CC9933" />
    <mask id="mask5_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={45} width={11} height={4}>
      <path d="M19.8602 46.6637C19.8602 46.255 17.5883 45.9231 14.7861 45.9231C11.9839 45.9231 9.71204 46.255 9.71204 46.6637V47.6434C9.71204 48.0521 11.9839 48.384 14.7861 48.384C17.5883 48.384 19.8602 48.0521 19.8602 47.6434V46.6637Z" fill="white" />
    </mask>
    <g mask="url(#mask5_2012_2142)">
      <path d="M9.88586 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.2771 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.6697 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.0609 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.4536 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.8462 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.2374 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6301 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0214 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.4139 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.8052 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.1979 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.589 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.9817 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.3744 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.7655 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.1582 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.5494 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.9421 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.3333 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.726 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1172 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.5098 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.9025 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.2937 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.6863 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M14.7861 47.4043C17.5885 47.4043 19.8602 47.0727 19.8602 46.6637C19.8602 46.2547 17.5885 45.9231 14.7861 45.9231C11.9838 45.9231 9.71204 46.2547 9.71204 46.6637C9.71204 47.0727 11.9838 47.4043 14.7861 47.4043Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.482 46.6637C19.482 47.0042 17.3797 47.281 14.7847 47.281C12.1897 47.281 10.0873 47.0042 10.0873 46.6637C10.0873 46.3231 12.1897 46.0463 14.7847 46.0463C17.3797 46.0463 19.482 46.3231 19.482 46.6637Z" fill="#CC9933" />
    </g>
    <path d="M20.2369 45.4332C20.2369 45.0245 17.965 44.6926 15.1628 44.6926C12.3606 44.6926 10.0887 45.0245 10.0887 45.4332V46.4129C10.0887 46.8216 12.3606 47.1535 15.1628 47.1535C17.965 47.1535 20.2369 46.8216 20.2369 46.4129V45.4332Z" fill="#CC9933" />
    <mask id="mask6_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={10} y={44} width={11} height={4}>
      <path d="M20.2369 45.4332C20.2369 45.0245 17.965 44.6926 15.1628 44.6926C12.3606 44.6926 10.0887 45.0245 10.0887 45.4332V46.4129C10.0887 46.8216 12.3606 47.1535 15.1628 47.1535C17.965 47.1535 20.2369 46.8216 20.2369 46.4129V45.4332Z" fill="white" />
    </mask>
    <g mask="url(#mask6_2012_2142)">
      <path d="M10.2626 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.6553 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.0464 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.4391 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.8318 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.2229 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6156 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0068 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.3995 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.7906 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.1833 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.5746 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.9672 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.3599 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.7511 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.1437 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.5349 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.9276 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.3188 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.7114 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1027 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.4954 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.8879 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.2792 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.6719 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M20.063 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M20.2369 45.4332C20.2369 45.8419 17.965 46.1738 15.1628 46.1738C12.3606 46.1738 10.0887 45.8419 10.0887 45.4332C10.0887 45.0245 12.3606 44.6926 15.1628 44.6926C17.965 44.6926 20.2369 45.0245 20.2369 45.4332Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.8602 45.4332C19.8602 45.7738 17.7578 46.0506 15.1628 46.0506C12.5678 46.0506 10.4655 45.7738 10.4655 45.4332C10.4655 45.0926 12.5678 44.8158 15.1628 44.8158C17.7578 44.8158 19.8602 45.0926 19.8602 45.4332Z" fill="#CC9933" />
    </g>
    <path d="M19.4821 44.2029C19.4821 43.7942 17.2102 43.4623 14.408 43.4623C11.6058 43.4623 9.33386 43.7942 9.33386 44.2029V45.1826C9.33386 45.5913 11.6058 45.9231 14.408 45.9231C17.2102 45.9231 19.4821 45.5913 19.4821 45.1826V44.2029Z" fill="#CC9933" />
    <mask id="mask7_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={43} width={11} height={3}>
      <path d="M19.4821 44.2029C19.4821 43.7942 17.2102 43.4623 14.408 43.4623C11.6058 43.4623 9.33386 43.7942 9.33386 44.2029V45.1826C9.33386 45.5913 11.6058 45.9231 14.408 45.9231C17.2102 45.9231 19.4821 45.5913 19.4821 45.1826V44.2029Z" fill="white" />
    </mask>
    <g mask="url(#mask7_2012_2142)">
      <path d="M9.50769 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M9.90039 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.2915 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.6842 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.0754 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.468 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.8607 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.252 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6445 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0358 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.4285 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.8197 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.2123 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.6035 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.9962 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.3888 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.78 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.1727 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.564 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.9565 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.3478 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.7405 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1316 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.5243 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.917 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.3081 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M14.408 44.9434C17.2103 44.9434 19.4821 44.6119 19.4821 44.2029C19.4821 43.7938 17.2103 43.4623 14.408 43.4623C11.6056 43.4623 9.33386 43.7938 9.33386 44.2029C9.33386 44.6119 11.6056 44.9434 14.408 44.9434Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M14.408 44.8202C17.0022 44.8202 19.1053 44.5438 19.1053 44.2028C19.1053 43.8619 17.0022 43.5854 14.408 43.5854C11.8137 43.5854 9.71057 43.8619 9.71057 44.2028C9.71057 44.5438 11.8137 44.8202 14.408 44.8202Z" fill="#CC9933" />
    </g>
    <path d="M19.4821 43.0956C19.4821 42.6869 17.2102 42.355 14.408 42.355C11.6058 42.355 9.33386 42.6869 9.33386 43.0956V44.0753C9.33386 44.484 11.6058 44.8159 14.408 44.8159C17.2102 44.8159 19.4821 44.484 19.4821 44.0753V43.0956Z" fill="#CC9933" />
    <mask id="mask8_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={42} width={11} height={3}>
      <path d="M19.4821 43.0956C19.4821 42.6869 17.2102 42.355 14.408 42.355C11.6058 42.355 9.33386 42.6869 9.33386 43.0956V44.0753C9.33386 44.484 11.6058 44.8159 14.408 44.8159C17.2102 44.8159 19.4821 44.484 19.4821 44.0753V43.0956Z" fill="white" />
    </mask>
    <g mask="url(#mask8_2012_2142)">
      <path d="M9.50769 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M9.90039 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.2915 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.6842 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.0754 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.468 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.8607 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.252 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6445 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0358 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.4285 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.8197 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.2123 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.6035 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.9962 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.3888 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.78 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.1727 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.564 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.9565 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.3478 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.7405 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1316 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.5243 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.917 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.3081 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M14.408 43.8361C17.2103 43.8361 19.4821 43.5046 19.4821 43.0956C19.4821 42.6865 17.2103 42.355 14.408 42.355C11.6056 42.355 9.33386 42.6865 9.33386 43.0956C9.33386 43.5046 11.6056 43.8361 14.408 43.8361Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.1053 43.0955C19.1053 43.4361 17.003 43.7129 14.408 43.7129C11.8129 43.7129 9.71057 43.4361 9.71057 43.0955C9.71057 42.755 11.8129 42.4781 14.408 42.4781C17.003 42.4781 19.1053 42.755 19.1053 43.0955Z" fill="#CC9933" />
    </g>
    <path d="M19.4821 41.9883C19.4821 41.5796 17.2102 41.2477 14.408 41.2477C11.6058 41.2477 9.33386 41.5796 9.33386 41.9883V42.968C9.33386 43.3767 11.6058 43.7086 14.408 43.7086C17.2102 43.7086 19.4821 43.3767 19.4821 42.968V41.9883Z" fill="#CC9933" />
    <mask id="mask9_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={41} width={11} height={3}>
      <path d="M19.4821 41.9883C19.4821 41.5796 17.2102 41.2477 14.408 41.2477C11.6058 41.2477 9.33386 41.5796 9.33386 41.9883V42.968C9.33386 43.3767 11.6058 43.7086 14.408 43.7086C17.2102 43.7086 19.4821 43.3767 19.4821 42.968V41.9883Z" fill="white" />
    </mask>
    <g mask="url(#mask9_2012_2142)">
      <path d="M9.50769 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M9.90039 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.2915 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.6842 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.0754 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.468 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.8607 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.252 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6445 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0358 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.4285 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.8197 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.2123 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.6035 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.9962 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.3888 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.78 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.1727 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.564 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.9565 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.3478 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.7405 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1316 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.5243 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.917 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.3081 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M19.4821 41.9883C19.4821 42.397 17.2102 42.7288 14.408 42.7288C11.6058 42.7288 9.33386 42.397 9.33386 41.9883C9.33386 41.5796 11.6058 41.2477 14.408 41.2477C17.2102 41.2477 19.4821 41.5796 19.4821 41.9883Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.1053 41.9882C19.1053 42.3288 17.003 42.6056 14.408 42.6056C11.8129 42.6056 9.71057 42.3288 9.71057 41.9882C9.71057 41.6477 11.8129 41.3708 14.408 41.3708C17.003 41.3708 19.1053 41.6477 19.1053 41.9882Z" fill="#CC9933" />
    </g>
    <path d="M19.7675 40.884C19.7675 40.4753 17.4956 40.1434 14.6934 40.1434C11.8912 40.1434 9.61926 40.4753 9.61926 40.884V41.8637C9.61926 42.2724 11.8912 42.6043 14.6934 42.6043C17.4956 42.6043 19.7675 42.2724 19.7675 41.8637V40.884Z" fill="#CC9933" />
    <mask id="mask10_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={40} width={11} height={3}>
      <path d="M19.7675 40.884C19.7675 40.4753 17.4956 40.1434 14.6934 40.1434C11.8912 40.1434 9.61926 40.4753 9.61926 40.884V41.8637C9.61926 42.2724 11.8912 42.6043 14.6934 42.6043C17.4956 42.6043 19.7675 42.2724 19.7675 41.8637V40.884Z" fill="white" />
    </mask>
    <g mask="url(#mask10_2012_2142)">
      <path d="M9.79309 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.1843 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.5769 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.9681 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.3608 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.7521 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.1447 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.5374 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.9286 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.3212 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.7124 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.1051 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.4962 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.8889 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.2802 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.6727 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.0654 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.4567 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.8494 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.2405 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.6332 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.0244 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.417 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.8082 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.2009 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.5935 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M14.6934 41.6246C17.4957 41.6246 19.7675 41.293 19.7675 40.884C19.7675 40.475 17.4957 40.1434 14.6934 40.1434C11.891 40.1434 9.61926 40.475 9.61926 40.884C9.61926 41.293 11.891 41.6246 14.6934 41.6246Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.3893 40.884C19.3893 41.2246 17.2869 41.5014 14.6919 41.5014C12.0969 41.5014 9.99451 41.2246 9.99451 40.884C9.99451 40.5434 12.0969 40.2666 14.6919 40.2666C17.2869 40.2666 19.3893 40.5434 19.3893 40.884Z" fill="#CC9933" />
    </g>
    <path d="M19.9298 39.7767C19.9298 39.368 17.6579 39.0361 14.8557 39.0361C12.0535 39.0361 9.78162 39.368 9.78162 39.7767V40.7564C9.78162 41.1651 12.0535 41.497 14.8557 41.497C17.6579 41.497 19.9298 41.1651 19.9298 40.7564V39.7767Z" fill="#CC9933" />
    <mask id="mask11_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={39} width={11} height={3}>
      <path d="M19.9298 39.7767C19.9298 39.368 17.6579 39.0361 14.8557 39.0361C12.0535 39.0361 9.78162 39.368 9.78162 39.7767V40.7564C9.78162 41.1651 12.0535 41.497 14.8557 41.497C17.6579 41.497 19.9298 41.1651 19.9298 40.7564V39.7767Z" fill="white" />
    </mask>
    <g mask="url(#mask11_2012_2142)">
      <path d="M9.95544 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.3467 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.7393 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.132 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.5232 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.9158 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.307 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6997 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0909 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.4835 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.8748 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.2675 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.66 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.0513 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.444 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.8351 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.2278 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.619 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.0117 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.4028 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.7955 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1882 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.5793 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.972 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.3633 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.7559 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M19.9298 39.7767C19.9298 40.1854 17.6579 40.5173 14.8557 40.5173C12.0535 40.5173 9.78162 40.1854 9.78162 39.7767C9.78162 39.368 12.0535 39.0361 14.8557 39.0361C17.6579 39.0361 19.9298 39.368 19.9298 39.7767Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.5516 39.7767C19.5516 40.1173 17.4493 40.3941 14.8542 40.3941C12.2592 40.3941 10.1569 40.1173 10.1569 39.7767C10.1569 39.4361 12.2592 39.1593 14.8542 39.1593C17.4493 39.1593 19.5516 39.4361 19.5516 39.7767Z" fill="#CC9933" />
    </g>
    <path d="M29.3651 47.3869C29.3651 46.968 27.0381 46.6274 24.1664 46.6274C21.2946 46.6274 18.9677 46.9666 18.9677 47.3869V48.3912C18.9677 48.81 21.2946 49.1506 24.1664 49.1506C27.0381 49.1506 29.3651 48.8115 29.3651 48.3912V47.3869Z" fill="#CC9933" />
    <mask id="mask12_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={18} y={46} width={12} height={4}>
      <path d="M29.3651 47.3869C29.3651 46.968 27.0381 46.6274 24.1664 46.6274C21.2946 46.6274 18.9677 46.9666 18.9677 47.3869V48.3912C18.9677 48.81 21.2946 49.1506 24.1664 49.1506C27.0381 49.1506 29.3651 48.8115 29.3651 48.3912V47.3869Z" fill="white" />
    </mask>
    <g mask="url(#mask12_2012_2142)">
      <path d="M19.1459 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M19.5472 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M19.9486 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M20.35 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M20.7512 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M21.1541 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M21.5554 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M21.9568 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M22.3582 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M22.7595 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M23.1608 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M23.5636 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M23.965 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M24.3663 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M24.7677 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M25.1691 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M25.5718 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M25.9731 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M26.3745 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M26.7759 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M27.1772 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M27.58 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M27.9813 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M28.3827 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M28.7841 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M29.1854 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
    </g>
    <path d="M29.3651 47.3869C29.3651 47.8057 27.0381 48.1463 24.1664 48.1463C21.2946 48.1463 18.9677 47.8072 18.9677 47.3869C18.9677 46.9666 21.2946 46.6274 24.1664 46.6274C27.0381 46.6274 29.3651 46.9666 29.3651 47.3869Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M28.9782 47.3869C28.9782 47.7362 26.8237 48.0188 24.1663 48.0188C21.509 48.0188 19.3545 47.7362 19.3545 47.3869C19.3545 47.0376 21.509 46.755 24.1663 46.755C26.8237 46.755 28.9782 47.0376 28.9782 47.3869Z" fill="#CC9933" />
    </g>
    <path d="M29.1174 46.2536C29.1174 45.8347 26.7904 45.4941 23.9187 45.4941C21.0469 45.4941 18.72 45.8333 18.72 46.2536V47.2579C18.72 47.6767 21.0469 48.0173 23.9187 48.0173C26.7904 48.0173 29.1174 47.6782 29.1174 47.2579V46.2536Z" fill="#CC9933" />
    <mask id="mask13_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={18} y={45} width={12} height={4}>
      <path d="M29.1174 46.2536C29.1174 45.8347 26.7904 45.4941 23.9187 45.4941C21.0469 45.4941 18.72 45.8333 18.72 46.2536V47.2579C18.72 47.6767 21.0469 48.0173 23.9187 48.0173C26.7904 48.0173 29.1174 47.6782 29.1174 47.2579V46.2536Z" fill="white" />
    </mask>
    <g mask="url(#mask13_2012_2142)">
      <path d="M18.8982 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M19.2996 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M19.7009 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M20.1023 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M20.505 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M20.9064 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M21.3077 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M21.7091 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M22.1105 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M22.5132 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M22.9146 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M23.3159 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M23.7173 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M24.1187 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M24.52 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M24.9227 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M25.3241 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M25.7255 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M26.1268 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M26.5282 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M26.931 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M27.3323 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M27.7336 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M28.135 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M28.5364 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M28.9392 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
    </g>
    <path d="M29.1174 46.2536C29.1174 46.6724 26.7904 47.013 23.9187 47.013C21.0469 47.013 18.72 46.6738 18.72 46.2536C18.72 45.8333 21.0469 45.4941 23.9187 45.4941C26.7904 45.4941 29.1174 45.8333 29.1174 46.2536Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M28.7305 46.2536C28.7305 46.6029 26.576 46.8855 23.9187 46.8855C21.2613 46.8855 19.1068 46.6029 19.1068 46.2536C19.1068 45.9043 21.2613 45.6217 23.9187 45.6217C26.576 45.6217 28.7305 45.9043 28.7305 46.2536Z" fill="#CC9933" />
    </g>
    <path d="M7.18221 40.4639C6.98951 40.1914 5.32326 41.045 3.4614 42.3682C1.59954 43.6914 0.246255 44.9842 0.44041 45.2566C0.528794 45.3813 0.81423 45.7827 0.902614 45.9074C1.09532 46.1798 2.76157 45.3262 4.62343 44.0045C6.48529 42.6813 7.83857 41.3885 7.64442 41.1161C7.55603 40.9914 7.2706 40.59 7.18221 40.4653V40.4639Z" fill="#CC9933" />
    <mask id="mask14_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={0} y={40} width={8} height={6}>
      <path d="M7.18221 40.4639C6.98951 40.1914 5.32326 41.045 3.4614 42.3682C1.59954 43.6914 0.246255 44.9842 0.44041 45.2566C0.528794 45.3813 0.81423 45.7827 0.902614 45.9074C1.09532 46.1798 2.76157 45.3262 4.62343 44.0045C6.48529 42.6813 7.83857 41.3885 7.64442 41.1161C7.55603 40.9914 7.2706 40.59 7.18221 40.4653V40.4639Z" fill="white" />
    </mask>
    <g mask="url(#mask14_2012_2142)">
      <path d="M0.0578613 44.4695L1.76468 46.8724" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M0.318726 44.2854L2.0241 46.6869" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M0.578003 44.0999L2.28483 46.5028" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M0.838867 43.9144L2.54569 46.3173" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M1.09961 43.7303L2.80643 46.1318" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M1.36047 43.5448L3.06585 45.9477" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M1.61975 43.3594L3.32657 45.7623" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M1.88062 43.1753L3.58744 45.5767" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M2.14136 42.9897L3.84818 45.3926" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M2.40222 42.8042L4.1076 45.2071" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M2.66162 42.6188L4.36844 45.0217" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M2.92236 42.4347L4.62919 44.8361" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M3.18323 42.2491L4.89005 44.652" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M3.44397 42.0637L5.14934 44.4666" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M3.70337 41.8796L5.41019 44.2811" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M3.96411 41.6941L5.67093 44.097" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M4.22498 41.5085L5.9318 43.9114" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M4.48572 41.3246L6.19109 43.726" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M4.74512 41.139L6.45194 43.5419" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M5.00586 40.9535L6.71268 43.3564" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M5.26672 40.7681L6.9721 43.171" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M5.52747 40.584L7.23284 42.9854" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M5.78687 40.3984L7.49369 42.8013" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M6.04773 40.2129L7.75455 42.6158" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M6.30847 40.0289L8.01385 42.4304" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M6.56934 39.8434L8.27471 42.2463" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
    </g>
    <path d="M7.18234 40.4637C7.37504 40.7362 6.0232 42.0289 4.16135 43.3521C2.29949 44.6753 0.633239 45.5275 0.440533 45.255C0.247827 44.9825 1.59967 43.6898 3.46152 42.3666C5.32338 41.0434 6.98963 40.1912 7.18234 40.4622V40.4637Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M6.9316 40.6406C7.09243 40.8666 5.82608 42.0435 4.10187 43.2681C2.37911 44.4927 0.850504 45.3014 0.689675 45.0753C0.528845 44.8493 1.7952 43.6724 3.51941 42.4478C5.24217 41.2232 6.77077 40.4145 6.9316 40.6406Z" fill="#CC9933" />
    </g>
    <path d="M44.3295 45.3999C44.3295 45.0492 46.2739 44.7666 48.6719 44.7666C51.0698 44.7666 53.0143 45.0507 53.0143 45.3999V46.2391C53.0143 46.5898 51.0698 46.8724 48.6719 46.8724C46.2739 46.8724 44.3295 46.5883 44.3295 46.2391V45.3999Z" fill="#CC9933" />
    <mask id="mask15_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={44} y={44} width={10} height={3}>
      <path d="M44.3295 45.3999C44.3295 45.0492 46.2739 44.7666 48.6719 44.7666C51.0698 44.7666 53.0143 45.0507 53.0143 45.3999V46.2391C53.0143 46.5898 51.0698 46.8724 48.6719 46.8724C46.2739 46.8724 44.3295 46.5883 44.3295 46.2391V45.3999Z" fill="white" />
    </mask>
    <g mask="url(#mask15_2012_2142)">
      <path d="M52.8666 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M52.5319 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M52.1957 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.861 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.5248 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.1902 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.854 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.5178 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.1831 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.847 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.5123 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.1761 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.8414 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.5052 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.1692 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.8345 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.4983 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.1636 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.8274 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.4928 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.1566 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.8204 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.4857 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.1497 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.8149 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.4788 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M44.3295 45.3999C44.3295 45.7507 46.2739 46.0333 48.6719 46.0333C51.0698 46.0333 53.0143 45.7492 53.0143 45.3999C53.0143 45.0507 51.0698 44.7666 48.6719 44.7666C46.2739 44.7666 44.3295 45.0507 44.3295 45.3999Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M48.6733 45.9289C50.8939 45.9289 52.6941 45.6921 52.6941 45.4C52.6941 45.1078 50.8939 44.871 48.6733 44.871C46.4527 44.871 44.6526 45.1078 44.6526 45.4C44.6526 45.6921 46.4527 45.9289 48.6733 45.9289Z" fill="#CC9933" />
    </g>
    <path d="M44.0063 44.3463C44.0063 43.9956 45.9508 43.713 48.3487 43.713C50.7467 43.713 52.6911 43.9971 52.6911 44.3463V45.1855C52.6911 45.5362 50.7467 45.8188 48.3487 45.8188C45.9508 45.8188 44.0063 45.5348 44.0063 45.1855V44.3463Z" fill="#CC9933" />
    <mask id="mask16_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={44} y={43} width={9} height={3}>
      <path d="M44.0063 44.3463C44.0063 43.9956 45.9508 43.713 48.3487 43.713C50.7467 43.713 52.6911 43.9971 52.6911 44.3463V45.1855C52.6911 45.5362 50.7467 45.8188 48.3487 45.8188C45.9508 45.8188 44.0063 45.5348 44.0063 45.1855V44.3463Z" fill="white" />
    </mask>
    <g mask="url(#mask16_2012_2142)">
      <path d="M52.5435 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M52.2087 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.8726 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.5378 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.2017 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.8671 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.5309 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.1947 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.86 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.5239 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.1892 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.853 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.5183 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.1821 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.8461 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.5114 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.1752 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.8405 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.5043 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.1697 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.8335 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.4973 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.1626 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.8265 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.4918 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.1556 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M48.3502 44.9797C50.7485 44.9797 52.6926 44.6961 52.6926 44.3463C52.6926 43.9966 50.7485 43.713 48.3502 43.713C45.952 43.713 44.0078 43.9966 44.0078 44.3463C44.0078 44.6961 45.952 44.9797 48.3502 44.9797Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M48.3502 44.8754C50.5708 44.8754 52.3709 44.6385 52.3709 44.3464C52.3709 44.0542 50.5708 43.8174 48.3502 43.8174C46.1296 43.8174 44.3295 44.0542 44.3295 44.3464C44.3295 44.6385 46.1296 44.8754 48.3502 44.8754Z" fill="#CC9933" />
    </g>
    <path d="M43.6832 43.2928C43.6832 42.942 45.6277 42.6594 48.0256 42.6594C50.4236 42.6594 52.368 42.9435 52.368 43.2928V44.1319C52.368 44.4826 50.4236 44.7652 48.0256 44.7652C45.6277 44.7652 43.6832 44.4812 43.6832 44.1319V43.2928Z" fill="#CC9933" />
    <mask id="mask17_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={43} y={42} width={10} height={3}>
      <path d="M43.6832 43.2928C43.6832 42.942 45.6277 42.6594 48.0256 42.6594C50.4236 42.6594 52.368 42.9435 52.368 43.2928V44.1319C52.368 44.4826 50.4236 44.7652 48.0256 44.7652C45.6277 44.7652 43.6832 44.4812 43.6832 44.1319V43.2928Z" fill="white" />
    </mask>
    <g mask="url(#mask17_2012_2142)">
      <path d="M52.2203 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.8856 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.5494 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.2147 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.8785 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.5439 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.2078 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.8716 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.5369 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.2008 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.8661 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.5299 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.1952 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.859 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.5229 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.1882 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.8521 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.5173 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.1813 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.8466 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.5104 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.1742 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.8395 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.5034 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.1687 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M43.8325 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M48.0271 43.9261C50.4253 43.9261 52.3695 43.6425 52.3695 43.2928C52.3695 42.943 50.4253 42.6594 48.0271 42.6594C45.6289 42.6594 43.6847 42.943 43.6847 43.2928C43.6847 43.6425 45.6289 43.9261 48.0271 43.9261Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M48.0271 43.8218C50.2477 43.8218 52.0478 43.5849 52.0478 43.2928C52.0478 43.0006 50.2477 42.7638 48.0271 42.7638C45.8065 42.7638 44.0063 43.0006 44.0063 43.2928C44.0063 43.5849 45.8065 43.8218 48.0271 43.8218Z" fill="#CC9933" />
    </g>
    <path d="M44.0063 42.3449C44.0063 41.9942 45.9508 41.7115 48.3487 41.7115C50.7467 41.7115 52.6911 41.9956 52.6911 42.3449V43.184C52.6911 43.5347 50.7467 43.8173 48.3487 43.8173C45.9508 43.8173 44.0063 43.5333 44.0063 43.184V42.3449Z" fill="#CC9933" />
    <mask id="mask18_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={44} y={41} width={9} height={3}>
      <path d="M44.0063 42.3449C44.0063 41.9942 45.9508 41.7115 48.3487 41.7115C50.7467 41.7115 52.6911 41.9956 52.6911 42.3449V43.184C52.6911 43.5347 50.7467 43.8173 48.3487 43.8173C45.9508 43.8173 44.0063 43.5333 44.0063 43.184V42.3449Z" fill="white" />
    </mask>
    <g mask="url(#mask18_2012_2142)">
      <path d="M52.5435 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M52.2087 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.8726 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.5378 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.2017 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.8671 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.5309 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.1947 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.86 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.5239 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.1892 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.853 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.5183 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.1821 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.8461 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.5114 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.1752 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.8405 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.5043 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.1697 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.8335 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.4973 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.1626 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.8265 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.4918 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.1556 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M48.3502 42.9782C50.7485 42.9782 52.6926 42.6947 52.6926 42.3449C52.6926 41.9951 50.7485 41.7115 48.3502 41.7115C45.952 41.7115 44.0078 41.9951 44.0078 42.3449C44.0078 42.6947 45.952 42.9782 48.3502 42.9782Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M48.3502 42.8739C50.5708 42.8739 52.3709 42.6371 52.3709 42.3449C52.3709 42.0528 50.5708 41.8159 48.3502 41.8159C46.1296 41.8159 44.3295 42.0528 44.3295 42.3449C44.3295 42.6371 46.1296 42.8739 48.3502 42.8739Z" fill="#CC9933" />
    </g>
    <g style={{mixBlendMode: 'multiply'}} opacity="0.5">
      <path d="M43.9469 43.0753C43.9658 43.0681 43.9861 43.0608 44.0063 43.0536V42.3463C44.0063 42.697 45.9508 42.9796 48.3487 42.9796C48.4531 42.9796 48.5559 42.9796 48.6588 42.9782L49.6093 46.8579C49.3079 46.8681 48.9935 46.8724 48.6718 46.8724C46.2739 46.8724 44.3294 46.5883 44.3294 46.2391V45.426C44.1223 45.3521 44.0063 45.271 44.0063 45.1854V44.3724C43.7991 44.2985 43.6832 44.2173 43.6832 44.1318V43.2927C43.6832 43.2159 43.776 43.142 43.9469 43.0753Z" fill="#CC9933" />
    </g>
    <path d="M35.3896 47.0609C35.3896 46.6522 37.6615 46.3203 40.4652 46.3203C43.2689 46.3203 45.5407 46.6522 45.5407 47.0609V48.0406C45.5407 48.4493 43.2689 48.7812 40.4652 48.7812C37.6615 48.7812 35.3896 48.4493 35.3896 48.0406V47.0609Z" fill="#CC9933" />
    <mask id="mask19_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={35} y={46} width={11} height={3}>
      <path d="M35.3896 47.0609C35.3896 46.6522 37.6615 46.3203 40.4652 46.3203C43.2689 46.3203 45.5407 46.6522 45.5407 47.0609V48.0406C45.5407 48.4493 43.2689 48.7812 40.4652 48.7812C37.6615 48.7812 35.3896 48.4493 35.3896 48.0406V47.0609Z" fill="white" />
    </mask>
    <g mask="url(#mask19_2012_2142)">
      <path d="M45.3654 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.9741 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.5815 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.1903 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.7976 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.405 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.0138 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.6211 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.23 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.8373 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.4446 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.0535 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.6608 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.2695 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.877 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.4843 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.093 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.7004 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.3092 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.9165 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.5238 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.1327 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.74 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.3473 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.9562 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.5635 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M35.3896 47.0609C35.3896 47.4696 37.6615 47.8015 40.4652 47.8015C43.2689 47.8015 45.5407 47.4696 45.5407 47.0609C45.5407 46.6522 43.2689 46.3203 40.4652 46.3203C37.6615 46.3203 35.3896 46.6522 35.3896 47.0609Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M35.7678 47.0609C35.7678 47.4015 37.8716 47.6783 40.4652 47.6783C43.0588 47.6783 45.1626 47.4015 45.1626 47.0609C45.1626 46.7203 43.0588 46.4435 40.4652 46.4435C37.8716 46.4435 35.7678 46.7203 35.7678 47.0609Z" fill="#CC9933" />
    </g>
    <path d="M35.0115 45.8304C35.0115 45.4217 37.2834 45.0898 40.087 45.0898C42.8907 45.0898 45.1626 45.4217 45.1626 45.8304V46.8116C45.1626 47.2203 42.8907 47.5522 40.087 47.5522C37.2834 47.5522 35.0115 47.2203 35.0115 46.8116V45.8304Z" fill="#CC9933" />
    <mask id="mask20_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={35} y={45} width={11} height={3}>
      <path d="M35.0115 45.8304C35.0115 45.4217 37.2834 45.0898 40.087 45.0898C42.8907 45.0898 45.1626 45.4217 45.1626 45.8304V46.8116C45.1626 47.2203 42.8907 47.5522 40.087 47.5522C37.2834 47.5522 35.0115 47.2203 35.0115 46.8116V45.8304Z" fill="white" />
    </mask>
    <g mask="url(#mask20_2012_2142)">
      <path d="M44.9886 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.5961 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.2048 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.8121 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.4196 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.0283 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.6356 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.2444 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.8518 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.4591 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.0679 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.6753 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.2841 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.8914 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.4988 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.1075 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.7148 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.3236 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.931 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.5383 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.1471 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.7545 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.3633 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.9706 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.578 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.1868 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M40.087 46.571C42.8902 46.571 45.1626 46.2394 45.1626 45.8304C45.1626 45.4214 42.8902 45.0898 40.087 45.0898C37.2839 45.0898 35.0115 45.4214 35.0115 45.8304C35.0115 46.2394 37.2839 46.571 40.087 46.571Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M40.087 46.4478C42.6813 46.4478 44.7844 46.1714 44.7844 45.8304C44.7844 45.4894 42.6813 45.213 40.087 45.213C37.4927 45.213 35.3896 45.4894 35.3896 45.8304C35.3896 46.1714 37.4927 46.4478 40.087 46.4478Z" fill="#CC9933" />
    </g>
    <path d="M35.7678 44.6C35.7678 44.1913 38.0397 43.8594 40.8434 43.8594C43.647 43.8594 45.9189 44.1913 45.9189 44.6V45.5811C45.9189 45.9898 43.647 46.3217 40.8434 46.3217C38.0397 46.3217 35.7678 45.9898 35.7678 45.5811V44.6Z" fill="#CC9933" />
    <mask id="mask21_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={35} y={43} width={11} height={4}>
      <path d="M35.7678 44.6C35.7678 44.1913 38.0397 43.8594 40.8434 43.8594C43.647 43.8594 45.9189 44.1913 45.9189 44.6V45.5811C45.9189 45.9898 43.647 46.3217 40.8434 46.3217C38.0397 46.3217 35.7678 45.9898 35.7678 45.5811V44.6Z" fill="white" />
    </mask>
    <g mask="url(#mask21_2012_2142)">
      <path d="M45.7435 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.351 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.9597 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.567 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.1744 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.7832 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.3905 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.9993 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.6067 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.214 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.8228 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.4302 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.0389 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.6462 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.2537 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.8624 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.4697 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.0785 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.6859 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.2932 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.902 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.5094 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.1182 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.7255 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.3329 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.9417 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M35.7678 44.6C35.7678 45.0086 38.0397 45.3405 40.8434 45.3405C43.647 45.3405 45.9189 45.0086 45.9189 44.6C45.9189 44.1913 43.647 43.8594 40.8434 43.8594C38.0397 43.8594 35.7678 44.1913 35.7678 44.6Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M36.1445 44.5999C36.1445 44.9405 38.2484 45.2173 40.8419 45.2173C43.4355 45.2173 45.5393 44.9405 45.5393 44.5999C45.5393 44.2594 43.4355 43.9825 40.8419 43.9825C38.2484 43.9825 36.1445 44.2594 36.1445 44.5999Z" fill="#CC9933" />
    </g>
    <path d="M45.4872 43.4913C45.4872 43.0826 43.2153 42.7507 40.4116 42.7507C37.608 42.7507 35.3361 43.0826 35.3361 43.4913V44.4725C35.3361 44.8812 37.608 45.213 40.4116 45.213C43.2153 45.213 45.4872 44.8812 45.4872 44.4725V43.4913Z" fill="#CC9933" />
    <mask id="mask22_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={35} y={42} width={11} height={4}>
      <path d="M45.4872 43.4913C45.4872 43.0826 43.2153 42.7507 40.4116 42.7507C37.608 42.7507 35.3361 43.0826 35.3361 43.4913V44.4725C35.3361 44.8812 37.608 45.213 40.4116 45.213C43.2153 45.213 45.4872 44.8812 45.4872 44.4725V43.4913Z" fill="white" />
    </mask>
    <g mask="url(#mask22_2012_2142)">
      <path d="M35.5114 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.9041 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.2952 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.6879 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.0806 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.4717 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.8644 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.2556 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.6482 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.0409 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.4321 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.8248 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.2159 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.6086 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.0013 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.3925 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.7852 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.1764 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.569 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.9617 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.3529 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.7455 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.1367 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.5294 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.9221 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.3132 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M45.4872 43.4913C45.4872 43.9 43.2153 44.2319 40.4116 44.2319C37.608 44.2319 35.3361 43.9 35.3361 43.4913C35.3361 43.0826 37.608 42.7507 40.4116 42.7507C43.2153 42.7507 45.4872 43.0826 45.4872 43.4913Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M45.1105 43.4913C45.1105 43.8319 43.0066 44.1087 40.4131 44.1087C37.8195 44.1087 35.7157 43.8319 35.7157 43.4913C35.7157 43.1507 37.8195 42.8739 40.4131 42.8739C43.0066 42.8739 45.1105 43.1507 45.1105 43.4913Z" fill="#CC9933" />
    </g>
    <path d="M45.9754 42.384C45.9754 41.9753 43.7035 41.6434 40.8999 41.6434C38.0962 41.6434 35.8243 41.9753 35.8243 42.384V43.3652C35.8243 43.7739 38.0962 44.1057 40.8999 44.1057C43.7035 44.1057 45.9754 43.7739 45.9754 43.3652V42.384Z" fill="#CC9933" />
    <mask id="mask23_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={35} y={41} width={11} height={4}>
      <path d="M45.9754 42.384C45.9754 41.9753 43.7035 41.6434 40.8999 41.6434C38.0962 41.6434 35.8243 41.9753 35.8243 42.384V43.3652C35.8243 43.7739 38.0962 44.1057 40.8999 44.1057C43.7035 44.1057 45.9754 43.7739 45.9754 43.3652V42.384Z" fill="white" />
    </mask>
    <g mask="url(#mask23_2012_2142)">
      <path d="M35.9996 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.3923 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.7834 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.1761 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.5674 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.96 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.3527 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.7439 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.1365 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.5277 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.9204 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.3131 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.7042 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.0969 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.4882 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.8807 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.2734 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.6647 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.0573 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.4485 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.8412 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.2338 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.625 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.0177 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.4089 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.8015 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M45.9754 42.384C45.9754 42.7927 43.7035 43.1246 40.8999 43.1246C38.0962 43.1246 35.8243 42.7927 35.8243 42.384C35.8243 41.9753 38.0962 41.6434 40.8999 41.6434C43.7035 41.6434 45.9754 41.9753 45.9754 42.384Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M45.5987 42.384C45.5987 42.7246 43.4949 43.0014 40.9014 43.0014C38.3078 43.0014 36.204 42.7246 36.204 42.384C36.204 42.0434 38.3078 41.7666 40.9014 41.7666C43.4949 41.7666 45.5987 42.0434 45.5987 42.384Z" fill="#CC9933" />
    </g>
    <path d="M48.5154 48.4018C48.8965 48.251 48.3705 46.0163 47.3418 43.4076C46.313 40.8003 45.1699 38.8076 44.7902 38.9568C44.6149 39.0264 44.0527 39.2481 43.8789 39.3163C43.4978 39.467 44.0238 41.7018 45.0525 44.3105C46.0812 46.9177 47.2244 48.9105 47.604 48.7612C47.7793 48.6916 48.3415 48.4699 48.5154 48.4018Z" fill="#CC9933" />
    <mask id="mask24_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={43} y={38} width={6} height={11}>
      <path d="M48.5154 48.4018C48.8965 48.251 48.3705 46.0163 47.3418 43.4076C46.313 40.8003 45.1699 38.8076 44.7902 38.9568C44.6149 39.0264 44.0527 39.2481 43.8789 39.3163C43.4978 39.467 44.0238 41.7018 45.0525 44.3105C46.0812 46.9177 47.2244 48.9105 47.604 48.7612C47.7793 48.6916 48.3415 48.4699 48.5154 48.4018Z" fill="white" />
    </mask>
    <g mask="url(#mask24_2012_2142)">
      <path d="M45.8363 38.7305L42.4734 40.058" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.9812 39.0957L42.6168 40.4232" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.1246 39.4609L42.7617 40.7885" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.2681 39.8247L42.9052 41.1522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.413 40.1899L43.0486 41.5175" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.5564 40.5551L43.1935 41.8826" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.6998 40.9203L43.3369 42.2478" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.8447 41.2841L43.4803 42.6116" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.9882 41.6493L43.6252 42.9768" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.1316 42.0145L43.7687 43.3421" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.2765 42.3783L43.9121 43.7058" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.4199 42.7435L44.057 44.0711" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.5634 43.1088L44.2004 44.4363" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.7084 43.474L44.344 44.8015" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.8517 43.8378L44.4888 45.1653" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.9953 44.2029L44.6323 45.5304" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.1401 44.5681L44.7758 45.8957" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.2836 44.9319L44.9192 46.2594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.427 45.2971L45.0641 46.6247" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.5705 45.6624L45.2075 46.9899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.7153 46.0276L45.351 47.3551" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.8588 46.3914L45.4958 47.7189" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M49.0022 46.7566L45.6393 48.0841" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M49.1471 47.1218L45.7827 48.4494" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M49.2905 47.4856L45.9276 48.8131" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M49.434 47.8507L46.071 49.1782" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M48.5154 48.4014C48.1343 48.5522 46.9926 46.5594 45.9639 43.9507C44.9351 41.342 44.4092 39.1072 44.7902 38.9565C45.1713 38.8058 46.3131 40.7985 47.3418 43.4072C48.3705 46.0159 48.8965 48.2507 48.5154 48.4014Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M48.3777 48.0492C48.0604 48.1739 47.0317 46.3188 46.0797 43.9043C45.1278 41.4898 44.612 39.4318 44.9293 39.3072C45.2466 39.1826 46.2753 41.0376 47.2273 43.4521C48.1792 45.8666 48.695 47.9246 48.3777 48.0492Z" fill="#CC9933" />
    </g>
  </g>
  <defs>
    <clipPath id="clip0_2012_2142">
      <rect width="53.0303" height={50} fill="white" />
    </clipPath>
    <clipPath id="clip1_2012_2142">
      <rect width="12.4607" height="20.4348" fill="white" transform="translate(22.8928 16.6666)" />
    </clipPath>
  </defs>
</svg>


          </div>
          <div>
            <svg width={54} height={50} viewBox="0 0 54 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_2012_2142)">
    <path d="M31.5225 10.3927C29.9896 8.94778 29.794 6.57821 31.0719 4.90285L34.0335 1.02024C31.7297 -0.578308 31.3921 0.497055 29.3897 1.71445C27.2656 3.00575 26.0587 0.756475 24.8923 0.0898084C24.2127 -0.298597 23.1391 0.641982 22.3596 1.49416L24.9488 4.88691C26.2311 6.56662 26.0326 8.94778 24.4866 10.3884C17.7071 16.7057 8.18774 24.9463 8.18774 34.2898C8.18774 45.2434 17.0652 47.4579 28.0162 47.4579C38.9671 47.4579 47.8446 45.2434 47.8446 34.2898C47.8446 24.7623 39.109 17.5434 31.5225 10.3913V10.3927Z" fill="#EFE089" />
    <path d="M31.5226 10.3927C30.7039 9.6202 30.2693 8.58397 30.2345 7.53035C30.2041 6.61296 30.4764 5.68252 31.072 4.90136L32.2557 3.34919C31.724 3.3231 31.1893 3.38252 30.6184 3.57672C29.8128 3.85064 28.9507 4.36513 28.0785 4.36223C27.1642 4.35933 26.3891 3.77383 25.469 3.81586C25.0532 3.8347 24.6706 3.91875 24.3142 4.05499L24.9488 4.88687C25.5472 5.67093 25.8196 6.60716 25.7863 7.5289C25.7486 8.58252 25.3111 9.61875 24.4852 10.3883C23.8042 11.0231 33.6162 12.3506 33.6162 12.3506C32.9135 11.6956 32.2122 11.0434 31.5211 10.3912L31.5226 10.3927Z" fill="#D3C26E" />
    <path d="M28.0162 47.4593C38.9671 47.4593 47.8446 45.2448 47.8446 34.2912C47.8446 29.7304 45.8422 25.6985 42.9226 21.9506C29.6824 18.1521 30.5619 46.1811 8.21238 33.4709C8.19644 33.7434 8.18774 34.0173 8.18774 34.2912C8.18774 45.2448 17.0652 47.4593 28.0162 47.4593Z" fill="#D3C26E" />
    <g clipPath="url(#clip1_2012_2142)">
      <path d="M25.8652 30.4791C25.8652 29.5506 26.0188 28.7168 26.3265 27.978C26.6337 27.2392 27.2687 26.5949 28.2302 26.0452C28.5186 25.8747 28.874 25.6805 29.2971 25.4624C29.7196 25.245 30.1333 24.984 30.5376 24.6807C30.9413 24.378 31.2826 24.0225 31.5615 23.6149C31.8398 23.2078 31.9799 22.7387 31.9799 22.2081C31.9799 21.8103 31.9028 21.46 31.7492 21.1567C31.595 20.854 31.3932 20.5983 31.1437 20.3895C30.8936 20.1813 30.5999 20.0248 30.2639 19.9204C29.9273 19.8166 29.586 19.7638 29.24 19.7638C28.8169 19.7638 28.4326 19.8352 28.0866 19.9772C27.7406 20.1193 27.4275 20.2996 27.1492 20.5171C26.8703 20.7351 26.6202 20.9816 26.3995 21.2559C26.1782 21.5308 25.9905 21.7917 25.8369 22.0376H25.4027L23.3271 20.3327C23.5767 19.7458 23.9085 19.2245 24.3222 18.7693C24.7353 18.3147 25.2061 17.9308 25.7357 17.6182C26.2642 17.3057 26.8361 17.0691 27.4517 16.9079C28.0666 16.7472 28.701 16.6666 29.3548 16.6666C30.085 16.6666 30.8065 16.771 31.5179 16.9792C32.2288 17.1879 32.8685 17.5191 33.4357 17.9737C34.0024 18.4283 34.4644 19.0111 34.8198 19.7215C35.1752 20.4319 35.3535 21.2802 35.3535 22.2655C35.3535 22.872 35.2812 23.4073 35.137 23.8712C34.9928 24.3357 34.7857 24.7573 34.5167 25.1359C34.2472 25.5152 33.93 25.8562 33.5652 26.1589C33.1998 26.4621 32.7867 26.7556 32.3247 27.0397C31.9399 27.267 31.5556 27.4851 31.1713 27.6933C30.7865 27.902 30.4358 28.134 30.1186 28.3897C29.8014 28.6454 29.5419 28.9394 29.34 29.2706C29.1382 29.6023 29.037 30.0053 29.037 30.4785H25.8652V30.4791ZM25.9229 37.1014V33.179H29.1241V37.1014H25.9229Z" fill="#FFC727" />
      <path d="M25.8652 30.4791C25.8652 29.5506 26.0188 28.7168 26.3265 27.978C26.6337 27.2392 27.2687 26.5949 28.2302 26.0452C28.5186 25.8747 28.874 25.6805 29.2971 25.4624C29.7196 25.245 30.1333 24.984 30.5376 24.6807C30.9413 24.378 31.2826 24.0225 31.5615 23.6149C31.8398 23.2078 31.9799 22.7387 31.9799 22.2081C31.9799 21.8103 31.9028 21.46 31.7492 21.1567C31.595 20.854 31.3932 20.5983 31.1437 20.3895C30.8936 20.1813 30.5999 20.0248 30.2639 19.9204C29.9273 19.8166 29.586 19.7638 29.24 19.7638C28.8169 19.7638 28.4326 19.8352 28.0866 19.9772C27.7406 20.1193 27.4275 20.2996 27.1492 20.5171C26.8703 20.7351 26.6202 20.9816 26.3995 21.2559C26.1782 21.5308 25.9905 21.7917 25.8369 22.0376H25.4027L23.3271 20.3327C23.5767 19.7458 23.9085 19.2245 24.3222 18.7693C24.7353 18.3147 25.2061 17.9308 25.7357 17.6182C26.2642 17.3057 26.8361 17.0691 27.4517 16.9079C28.0666 16.7472 28.701 16.6666 29.3548 16.6666C30.085 16.6666 30.8065 16.771 31.5179 16.9792C32.2288 17.1879 32.8685 17.5191 33.4357 17.9737C34.0024 18.4283 34.4644 19.0111 34.8198 19.7215C35.1752 20.4319 35.3535 21.2802 35.3535 22.2655C35.3535 22.872 35.2812 23.4073 35.137 23.8712C34.9928 24.3357 34.7857 24.7573 34.5167 25.1359C34.2472 25.5152 33.93 25.8562 33.5652 26.1589C33.1998 26.4621 32.7867 26.7556 32.3247 27.0397C31.9399 27.267 31.5556 27.4851 31.1713 27.6933C30.7865 27.902 30.4358 28.134 30.1186 28.3897C29.8014 28.6454 29.5419 28.9394 29.34 29.2706C29.1382 29.6023 29.037 30.0053 29.037 30.4785H25.8652V30.4791ZM25.9229 37.1014V33.179H29.1241V37.1014H25.9229Z" fill="#D3C26E" />
      <path d="M25.4309 30.4791C25.4309 29.5506 25.5844 28.7168 25.8922 27.978C26.1994 27.2392 26.8343 26.5949 27.7959 26.0452C28.0842 25.8747 28.4397 25.6805 28.8628 25.4624C29.2853 25.245 29.699 24.984 30.1032 24.6807C30.5069 24.378 30.8482 24.0225 31.1272 23.6149C31.4055 23.2078 31.5456 22.7387 31.5456 22.2081C31.5456 21.8103 31.4685 21.46 31.3149 21.1567C31.1607 20.854 30.9589 20.5983 30.7094 20.3895C30.4593 20.1813 30.1656 20.0248 29.8296 19.9204C29.493 19.8166 29.1517 19.7638 28.8057 19.7638C28.3826 19.7638 27.9983 19.8352 27.6523 19.9772C27.3063 20.1193 26.9932 20.2996 26.7149 20.5171C26.4359 20.7351 26.1859 20.9816 25.9652 21.2559C25.7439 21.5308 25.5562 21.7917 25.4026 22.0376L22.8928 20.3327C23.1423 19.7458 23.4742 19.2245 23.8879 18.7693C24.301 18.3147 24.7718 17.9308 25.3014 17.6182C25.8298 17.3057 26.4018 17.0691 27.0173 16.9079C27.6323 16.7472 28.2667 16.6666 28.9204 16.6666C29.6507 16.6666 30.3722 16.771 31.0836 16.9792C31.7945 17.1879 32.4341 17.5191 33.0014 17.9737C33.5681 18.4283 34.03 19.0111 34.3855 19.7215C34.7409 20.4319 34.9192 21.2802 34.9192 22.2655C34.9192 22.872 34.8468 23.4073 34.7027 23.8712C34.5585 24.3357 34.3513 24.7573 34.0824 25.1359C33.8129 25.5152 33.4957 25.8562 33.1309 26.1589C32.7654 26.4621 32.3523 26.7556 31.8904 27.0397C31.5055 27.267 31.1213 27.4851 30.737 27.6933C30.3522 27.902 30.0014 28.134 29.6843 28.3897C29.3671 28.6454 29.1076 28.9394 28.9057 29.2706C28.7039 29.6023 28.6027 30.0053 28.6027 30.4785H25.4309V30.4791ZM25.4885 37.1014V33.179H28.6898V37.1014H25.4885Z" fill="#582900" />
    </g>
    <path d="M30.985 7H24.9894V8.45217H30.985V7Z" fill="#582900" />
    <path d="M30.5373 9.60428C30.5373 9.60428 30.5228 9.60428 30.517 9.60428L25.4183 9.51442C25.0242 9.50283 24.7141 9.16949 24.7242 8.76949C24.7358 8.36949 24.7286 8.055 25.1212 8.06659L30.8937 8.15645C31.2878 8.16804 31.2617 8.50138 31.2502 8.90138C31.2386 9.29413 30.9213 9.60428 30.5373 9.60428Z" fill="#753400" />
    <path d="M30.8734 7.55362C30.8734 7.55362 30.5228 7.55362 30.5155 7.55362L25.0792 7.46376C24.6851 7.45217 24.7112 7.11883 24.7227 6.71883C24.7343 6.31883 25.0647 6.00434 25.4573 6.01594L30.5561 6.10579C30.9502 6.11739 31.2603 6.45072 31.2501 6.85072C31.2385 7.24347 31.2588 7.55362 30.8734 7.55362Z" fill="#753400" />
    <mask id="mask0_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={8} y={33} width={40} height={15}>
      <path d="M28.0162 39.3029C15.867 49.5884 12.123 38.142 8.21093 33.5145C8.19644 33.7725 8.18774 34.0304 8.18774 34.2899C8.18774 45.2435 17.0652 47.458 28.0162 47.458C38.9671 47.458 47.8446 45.2435 47.8446 34.2899C47.8446 34.029 47.8373 33.7696 47.8243 33.5116C40.1783 42.7275 38.0702 30.7913 28.0162 39.3015V39.3029Z" fill="white" />
    </mask>
    <g mask="url(#mask0_2012_2142)">
      <path d="M48.7748 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M48.1155 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M47.4562 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M46.797 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M46.1377 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M45.4799 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M44.8207 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M44.1614 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M43.5022 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M42.8429 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M42.1836 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M41.5259 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M40.8666 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M40.2073 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M39.5481 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M38.8888 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M38.231 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M37.5718 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M36.9125 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M36.2532 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M35.594 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M34.9347 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M34.2769 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M33.6177 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M32.9584 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M32.2991 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M31.6399 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M30.9806 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M30.3228 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M29.6636 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M29.0043 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M28.3451 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M27.6858 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M27.028 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M26.3688 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M25.7095 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M25.0502 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M24.391 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M23.7317 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M23.0739 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M22.4147 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M21.7554 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M21.0961 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M20.4369 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M19.7776 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M19.1198 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M18.4606 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M17.8013 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M17.142 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M16.4828 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M15.825 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M15.1656 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M14.5065 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M13.8472 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M13.188 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M12.5287 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M11.8708 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M11.2117 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M10.5524 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M9.89307 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M9.23389 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M8.57458 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M7.91675 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M7.25757 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
    </g>
    <path d="M11.7014 45.3999C11.7014 45.0492 9.75696 44.7666 7.359 44.7666C4.96105 44.7666 3.0166 45.0507 3.0166 45.3999V46.2391C3.0166 46.5898 4.96105 46.8724 7.359 46.8724C9.75696 46.8724 11.7014 46.5883 11.7014 46.2391V45.3999Z" fill="#CC9933" />
    <mask id="mask1_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={3} y={44} width={9} height={3}>
      <path d="M11.7014 45.3999C11.7014 45.0492 9.75696 44.7666 7.359 44.7666C4.96105 44.7666 3.0166 45.0507 3.0166 45.3999V46.2391C3.0166 46.5898 4.96105 46.8724 7.359 46.8724C9.75696 46.8724 11.7014 46.5883 11.7014 46.2391V45.3999Z" fill="white" />
    </mask>
    <g mask="url(#mask1_2012_2142)">
      <path d="M3.16443 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M3.50061 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M3.83533 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.17139 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.5061 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.84229 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.17847 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.51306 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.84924 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.18396 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.52014 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.85486 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.19092 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.5271 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.86182 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.198 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.53271 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.86877 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.20349 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.53967 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.87585 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.2104 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.5466 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.8813 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.2175 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.5522 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M11.7014 45.3999C11.7014 45.7507 9.75696 46.0333 7.359 46.0333C4.96105 46.0333 3.0166 45.7492 3.0166 45.3999C3.0166 45.0507 4.96105 44.7666 7.359 44.7666C9.75696 44.7666 11.7014 45.0507 11.7014 45.3999Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M7.359 45.9289C9.57959 45.9289 11.3797 45.6921 11.3797 45.4C11.3797 45.1078 9.57959 44.871 7.359 44.871C5.1384 44.871 3.33826 45.1078 3.33826 45.4C3.33826 45.6921 5.1384 45.9289 7.359 45.9289Z" fill="#CC9933" />
    </g>
    <path d="M12.0245 44.3463C12.0245 43.9956 10.0801 43.713 7.68212 43.713C5.28417 43.713 3.33972 43.9971 3.33972 44.3463V45.1855C3.33972 45.5362 5.28417 45.8188 7.68212 45.8188C10.0801 45.8188 12.0245 45.5348 12.0245 45.1855V44.3463Z" fill="#CC9933" />
    <mask id="mask2_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={3} y={43} width={10} height={3}>
      <path d="M12.0245 44.3463C12.0245 43.9956 10.0801 43.713 7.68212 43.713C5.28417 43.713 3.33972 43.9971 3.33972 44.3463V45.1855C3.33972 45.5362 5.28417 45.8188 7.68212 45.8188C10.0801 45.8188 12.0245 45.5348 12.0245 45.1855V44.3463Z" fill="white" />
    </mask>
    <g mask="url(#mask2_2012_2142)">
      <path d="M3.48755 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M3.82373 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.15845 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.49451 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.82922 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.16541 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.50159 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.83618 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.17236 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.50708 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.84326 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.17798 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.51404 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.85022 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.18494 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.52112 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.85583 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.19189 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.52661 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.86279 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.1975 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.5336 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.8698 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.2045 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.5406 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.8754 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M7.68212 44.9797C10.0804 44.9797 12.0245 44.6961 12.0245 44.3463C12.0245 43.9966 10.0804 43.713 7.68212 43.713C5.28388 43.713 3.33972 43.9966 3.33972 44.3463C3.33972 44.6961 5.28388 44.9797 7.68212 44.9797Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M7.68212 44.8754C9.90271 44.8754 11.7029 44.6385 11.7029 44.3464C11.7029 44.0542 9.90271 43.8174 7.68212 43.8174C5.46152 43.8174 3.66138 44.0542 3.66138 44.3464C3.66138 44.6385 5.46152 44.8754 7.68212 44.8754Z" fill="#CC9933" />
    </g>
    <path d="M12.3476 43.2928C12.3476 42.942 10.4032 42.6594 8.00524 42.6594C5.60729 42.6594 3.66284 42.9435 3.66284 43.2928V44.1319C3.66284 44.4826 5.60729 44.7652 8.00524 44.7652C10.4032 44.7652 12.3476 44.4812 12.3476 44.1319V43.2928Z" fill="#CC9933" />
    <mask id="mask3_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={3} y={42} width={10} height={3}>
      <path d="M12.3476 43.2928C12.3476 42.942 10.4032 42.6594 8.00524 42.6594C5.60729 42.6594 3.66284 42.9435 3.66284 43.2928V44.1319C3.66284 44.4826 5.60729 44.7652 8.00524 44.7652C10.4032 44.7652 12.3476 44.4812 12.3476 44.1319V43.2928Z" fill="white" />
    </mask>
    <g mask="url(#mask3_2012_2142)">
      <path d="M3.81067 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.14685 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.48157 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.81763 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.15234 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.48853 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.82471 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.1593 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.49548 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.8302 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.16638 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.5011 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.83716 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.17334 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.50806 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.84424 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.17896 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.51501 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.84973 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.1859 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.5206 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.8567 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.1929 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.5276 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.8638 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M12.1985 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M8.00524 43.9261C10.4035 43.9261 12.3476 43.6425 12.3476 43.2928C12.3476 42.943 10.4035 42.6594 8.00524 42.6594C5.607 42.6594 3.66284 42.943 3.66284 43.2928C3.66284 43.6425 5.607 43.9261 8.00524 43.9261Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M8.00524 43.8218C10.2258 43.8218 12.026 43.5849 12.026 43.2928C12.026 43.0006 10.2258 42.7638 8.00524 42.7638C5.78464 42.7638 3.9845 43.0006 3.9845 43.2928C3.9845 43.5849 5.78464 43.8218 8.00524 43.8218Z" fill="#CC9933" />
    </g>
    <path d="M12.0245 42.3449C12.0245 41.9942 10.0801 41.7115 7.68212 41.7115C5.28417 41.7115 3.33972 41.9956 3.33972 42.3449V43.184C3.33972 43.5347 5.28417 43.8173 7.68212 43.8173C10.0801 43.8173 12.0245 43.5333 12.0245 43.184V42.3449Z" fill="#CC9933" />
    <mask id="mask4_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={3} y={41} width={10} height={3}>
      <path d="M12.0245 42.3449C12.0245 41.9942 10.0801 41.7115 7.68212 41.7115C5.28417 41.7115 3.33972 41.9956 3.33972 42.3449V43.184C3.33972 43.5347 5.28417 43.8173 7.68212 43.8173C10.0801 43.8173 12.0245 43.5333 12.0245 43.184V42.3449Z" fill="white" />
    </mask>
    <g mask="url(#mask4_2012_2142)">
      <path d="M3.48755 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M3.82373 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.15845 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.49451 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.82922 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.16541 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.50159 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.83618 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.17236 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.50708 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.84326 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.17798 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.51404 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.85022 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.18494 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.52112 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.85583 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.19189 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.52661 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.86279 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.1975 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.5336 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.8698 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.2045 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.5406 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.8754 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M7.68212 42.9782C10.0804 42.9782 12.0245 42.6947 12.0245 42.3449C12.0245 41.9951 10.0804 41.7115 7.68212 41.7115C5.28388 41.7115 3.33972 41.9951 3.33972 42.3449C3.33972 42.6947 5.28388 42.9782 7.68212 42.9782Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M7.68212 42.8739C9.90271 42.8739 11.7029 42.6371 11.7029 42.3449C11.7029 42.0528 9.90271 41.8159 7.68212 41.8159C5.46152 41.8159 3.66138 42.0528 3.66138 42.3449C3.66138 42.6371 5.46152 42.8739 7.68212 42.8739Z" fill="#CC9933" />
    </g>
    <g style={{mixBlendMode: 'multiply'}} opacity="0.5">
      <path d="M12.0839 43.0753C12.065 43.0681 12.0447 43.0608 12.0245 43.0536V42.3463C12.0245 42.697 10.08 42.9796 7.68207 42.9796C7.57774 42.9796 7.47487 42.9796 7.372 42.9782L6.42151 46.8579C6.72288 46.8681 7.0373 46.8724 7.35896 46.8724C9.75691 46.8724 11.7014 46.5883 11.7014 46.2391V45.426C11.9086 45.3521 12.0245 45.271 12.0245 45.1854V44.3724C12.2317 44.2985 12.3476 44.2173 12.3476 44.1318V43.2927C12.3476 43.2159 12.2548 43.142 12.0839 43.0753Z" fill="#CC9933" />
    </g>
    <path d="M19.8602 46.6637C19.8602 46.255 17.5883 45.9231 14.7861 45.9231C11.9839 45.9231 9.71204 46.255 9.71204 46.6637V47.6434C9.71204 48.0521 11.9839 48.384 14.7861 48.384C17.5883 48.384 19.8602 48.0521 19.8602 47.6434V46.6637Z" fill="#CC9933" />
    <mask id="mask5_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={45} width={11} height={4}>
      <path d="M19.8602 46.6637C19.8602 46.255 17.5883 45.9231 14.7861 45.9231C11.9839 45.9231 9.71204 46.255 9.71204 46.6637V47.6434C9.71204 48.0521 11.9839 48.384 14.7861 48.384C17.5883 48.384 19.8602 48.0521 19.8602 47.6434V46.6637Z" fill="white" />
    </mask>
    <g mask="url(#mask5_2012_2142)">
      <path d="M9.88586 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.2771 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.6697 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.0609 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.4536 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.8462 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.2374 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6301 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0214 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.4139 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.8052 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.1979 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.589 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.9817 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.3744 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.7655 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.1582 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.5494 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.9421 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.3333 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.726 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1172 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.5098 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.9025 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.2937 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.6863 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M14.7861 47.4043C17.5885 47.4043 19.8602 47.0727 19.8602 46.6637C19.8602 46.2547 17.5885 45.9231 14.7861 45.9231C11.9838 45.9231 9.71204 46.2547 9.71204 46.6637C9.71204 47.0727 11.9838 47.4043 14.7861 47.4043Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.482 46.6637C19.482 47.0042 17.3797 47.281 14.7847 47.281C12.1897 47.281 10.0873 47.0042 10.0873 46.6637C10.0873 46.3231 12.1897 46.0463 14.7847 46.0463C17.3797 46.0463 19.482 46.3231 19.482 46.6637Z" fill="#CC9933" />
    </g>
    <path d="M20.2369 45.4332C20.2369 45.0245 17.965 44.6926 15.1628 44.6926C12.3606 44.6926 10.0887 45.0245 10.0887 45.4332V46.4129C10.0887 46.8216 12.3606 47.1535 15.1628 47.1535C17.965 47.1535 20.2369 46.8216 20.2369 46.4129V45.4332Z" fill="#CC9933" />
    <mask id="mask6_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={10} y={44} width={11} height={4}>
      <path d="M20.2369 45.4332C20.2369 45.0245 17.965 44.6926 15.1628 44.6926C12.3606 44.6926 10.0887 45.0245 10.0887 45.4332V46.4129C10.0887 46.8216 12.3606 47.1535 15.1628 47.1535C17.965 47.1535 20.2369 46.8216 20.2369 46.4129V45.4332Z" fill="white" />
    </mask>
    <g mask="url(#mask6_2012_2142)">
      <path d="M10.2626 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.6553 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.0464 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.4391 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.8318 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.2229 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6156 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0068 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.3995 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.7906 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.1833 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.5746 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.9672 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.3599 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.7511 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.1437 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.5349 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.9276 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.3188 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.7114 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1027 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.4954 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.8879 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.2792 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.6719 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M20.063 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M20.2369 45.4332C20.2369 45.8419 17.965 46.1738 15.1628 46.1738C12.3606 46.1738 10.0887 45.8419 10.0887 45.4332C10.0887 45.0245 12.3606 44.6926 15.1628 44.6926C17.965 44.6926 20.2369 45.0245 20.2369 45.4332Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.8602 45.4332C19.8602 45.7738 17.7578 46.0506 15.1628 46.0506C12.5678 46.0506 10.4655 45.7738 10.4655 45.4332C10.4655 45.0926 12.5678 44.8158 15.1628 44.8158C17.7578 44.8158 19.8602 45.0926 19.8602 45.4332Z" fill="#CC9933" />
    </g>
    <path d="M19.4821 44.2029C19.4821 43.7942 17.2102 43.4623 14.408 43.4623C11.6058 43.4623 9.33386 43.7942 9.33386 44.2029V45.1826C9.33386 45.5913 11.6058 45.9231 14.408 45.9231C17.2102 45.9231 19.4821 45.5913 19.4821 45.1826V44.2029Z" fill="#CC9933" />
    <mask id="mask7_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={43} width={11} height={3}>
      <path d="M19.4821 44.2029C19.4821 43.7942 17.2102 43.4623 14.408 43.4623C11.6058 43.4623 9.33386 43.7942 9.33386 44.2029V45.1826C9.33386 45.5913 11.6058 45.9231 14.408 45.9231C17.2102 45.9231 19.4821 45.5913 19.4821 45.1826V44.2029Z" fill="white" />
    </mask>
    <g mask="url(#mask7_2012_2142)">
      <path d="M9.50769 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M9.90039 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.2915 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.6842 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.0754 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.468 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.8607 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.252 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6445 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0358 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.4285 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.8197 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.2123 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.6035 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.9962 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.3888 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.78 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.1727 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.564 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.9565 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.3478 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.7405 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1316 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.5243 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.917 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.3081 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M14.408 44.9434C17.2103 44.9434 19.4821 44.6119 19.4821 44.2029C19.4821 43.7938 17.2103 43.4623 14.408 43.4623C11.6056 43.4623 9.33386 43.7938 9.33386 44.2029C9.33386 44.6119 11.6056 44.9434 14.408 44.9434Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M14.408 44.8202C17.0022 44.8202 19.1053 44.5438 19.1053 44.2028C19.1053 43.8619 17.0022 43.5854 14.408 43.5854C11.8137 43.5854 9.71057 43.8619 9.71057 44.2028C9.71057 44.5438 11.8137 44.8202 14.408 44.8202Z" fill="#CC9933" />
    </g>
    <path d="M19.4821 43.0956C19.4821 42.6869 17.2102 42.355 14.408 42.355C11.6058 42.355 9.33386 42.6869 9.33386 43.0956V44.0753C9.33386 44.484 11.6058 44.8159 14.408 44.8159C17.2102 44.8159 19.4821 44.484 19.4821 44.0753V43.0956Z" fill="#CC9933" />
    <mask id="mask8_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={42} width={11} height={3}>
      <path d="M19.4821 43.0956C19.4821 42.6869 17.2102 42.355 14.408 42.355C11.6058 42.355 9.33386 42.6869 9.33386 43.0956V44.0753C9.33386 44.484 11.6058 44.8159 14.408 44.8159C17.2102 44.8159 19.4821 44.484 19.4821 44.0753V43.0956Z" fill="white" />
    </mask>
    <g mask="url(#mask8_2012_2142)">
      <path d="M9.50769 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M9.90039 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.2915 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.6842 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.0754 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.468 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.8607 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.252 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6445 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0358 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.4285 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.8197 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.2123 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.6035 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.9962 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.3888 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.78 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.1727 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.564 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.9565 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.3478 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.7405 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1316 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.5243 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.917 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.3081 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M14.408 43.8361C17.2103 43.8361 19.4821 43.5046 19.4821 43.0956C19.4821 42.6865 17.2103 42.355 14.408 42.355C11.6056 42.355 9.33386 42.6865 9.33386 43.0956C9.33386 43.5046 11.6056 43.8361 14.408 43.8361Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.1053 43.0955C19.1053 43.4361 17.003 43.7129 14.408 43.7129C11.8129 43.7129 9.71057 43.4361 9.71057 43.0955C9.71057 42.755 11.8129 42.4781 14.408 42.4781C17.003 42.4781 19.1053 42.755 19.1053 43.0955Z" fill="#CC9933" />
    </g>
    <path d="M19.4821 41.9883C19.4821 41.5796 17.2102 41.2477 14.408 41.2477C11.6058 41.2477 9.33386 41.5796 9.33386 41.9883V42.968C9.33386 43.3767 11.6058 43.7086 14.408 43.7086C17.2102 43.7086 19.4821 43.3767 19.4821 42.968V41.9883Z" fill="#CC9933" />
    <mask id="mask9_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={41} width={11} height={3}>
      <path d="M19.4821 41.9883C19.4821 41.5796 17.2102 41.2477 14.408 41.2477C11.6058 41.2477 9.33386 41.5796 9.33386 41.9883V42.968C9.33386 43.3767 11.6058 43.7086 14.408 43.7086C17.2102 43.7086 19.4821 43.3767 19.4821 42.968V41.9883Z" fill="white" />
    </mask>
    <g mask="url(#mask9_2012_2142)">
      <path d="M9.50769 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M9.90039 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.2915 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.6842 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.0754 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.468 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.8607 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.252 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6445 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0358 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.4285 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.8197 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.2123 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.6035 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.9962 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.3888 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.78 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.1727 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.564 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.9565 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.3478 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.7405 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1316 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.5243 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.917 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.3081 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M19.4821 41.9883C19.4821 42.397 17.2102 42.7288 14.408 42.7288C11.6058 42.7288 9.33386 42.397 9.33386 41.9883C9.33386 41.5796 11.6058 41.2477 14.408 41.2477C17.2102 41.2477 19.4821 41.5796 19.4821 41.9883Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.1053 41.9882C19.1053 42.3288 17.003 42.6056 14.408 42.6056C11.8129 42.6056 9.71057 42.3288 9.71057 41.9882C9.71057 41.6477 11.8129 41.3708 14.408 41.3708C17.003 41.3708 19.1053 41.6477 19.1053 41.9882Z" fill="#CC9933" />
    </g>
    <path d="M19.7675 40.884C19.7675 40.4753 17.4956 40.1434 14.6934 40.1434C11.8912 40.1434 9.61926 40.4753 9.61926 40.884V41.8637C9.61926 42.2724 11.8912 42.6043 14.6934 42.6043C17.4956 42.6043 19.7675 42.2724 19.7675 41.8637V40.884Z" fill="#CC9933" />
    <mask id="mask10_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={40} width={11} height={3}>
      <path d="M19.7675 40.884C19.7675 40.4753 17.4956 40.1434 14.6934 40.1434C11.8912 40.1434 9.61926 40.4753 9.61926 40.884V41.8637C9.61926 42.2724 11.8912 42.6043 14.6934 42.6043C17.4956 42.6043 19.7675 42.2724 19.7675 41.8637V40.884Z" fill="white" />
    </mask>
    <g mask="url(#mask10_2012_2142)">
      <path d="M9.79309 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.1843 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.5769 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.9681 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.3608 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.7521 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.1447 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.5374 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.9286 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.3212 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.7124 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.1051 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.4962 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.8889 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.2802 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.6727 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.0654 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.4567 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.8494 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.2405 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.6332 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.0244 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.417 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.8082 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.2009 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.5935 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M14.6934 41.6246C17.4957 41.6246 19.7675 41.293 19.7675 40.884C19.7675 40.475 17.4957 40.1434 14.6934 40.1434C11.891 40.1434 9.61926 40.475 9.61926 40.884C9.61926 41.293 11.891 41.6246 14.6934 41.6246Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.3893 40.884C19.3893 41.2246 17.2869 41.5014 14.6919 41.5014C12.0969 41.5014 9.99451 41.2246 9.99451 40.884C9.99451 40.5434 12.0969 40.2666 14.6919 40.2666C17.2869 40.2666 19.3893 40.5434 19.3893 40.884Z" fill="#CC9933" />
    </g>
    <path d="M19.9298 39.7767C19.9298 39.368 17.6579 39.0361 14.8557 39.0361C12.0535 39.0361 9.78162 39.368 9.78162 39.7767V40.7564C9.78162 41.1651 12.0535 41.497 14.8557 41.497C17.6579 41.497 19.9298 41.1651 19.9298 40.7564V39.7767Z" fill="#CC9933" />
    <mask id="mask11_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={39} width={11} height={3}>
      <path d="M19.9298 39.7767C19.9298 39.368 17.6579 39.0361 14.8557 39.0361C12.0535 39.0361 9.78162 39.368 9.78162 39.7767V40.7564C9.78162 41.1651 12.0535 41.497 14.8557 41.497C17.6579 41.497 19.9298 41.1651 19.9298 40.7564V39.7767Z" fill="white" />
    </mask>
    <g mask="url(#mask11_2012_2142)">
      <path d="M9.95544 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.3467 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.7393 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.132 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.5232 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.9158 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.307 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6997 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0909 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.4835 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.8748 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.2675 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.66 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.0513 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.444 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.8351 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.2278 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.619 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.0117 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.4028 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.7955 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1882 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.5793 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.972 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.3633 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.7559 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M19.9298 39.7767C19.9298 40.1854 17.6579 40.5173 14.8557 40.5173C12.0535 40.5173 9.78162 40.1854 9.78162 39.7767C9.78162 39.368 12.0535 39.0361 14.8557 39.0361C17.6579 39.0361 19.9298 39.368 19.9298 39.7767Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.5516 39.7767C19.5516 40.1173 17.4493 40.3941 14.8542 40.3941C12.2592 40.3941 10.1569 40.1173 10.1569 39.7767C10.1569 39.4361 12.2592 39.1593 14.8542 39.1593C17.4493 39.1593 19.5516 39.4361 19.5516 39.7767Z" fill="#CC9933" />
    </g>
    <path d="M29.3651 47.3869C29.3651 46.968 27.0381 46.6274 24.1664 46.6274C21.2946 46.6274 18.9677 46.9666 18.9677 47.3869V48.3912C18.9677 48.81 21.2946 49.1506 24.1664 49.1506C27.0381 49.1506 29.3651 48.8115 29.3651 48.3912V47.3869Z" fill="#CC9933" />
    <mask id="mask12_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={18} y={46} width={12} height={4}>
      <path d="M29.3651 47.3869C29.3651 46.968 27.0381 46.6274 24.1664 46.6274C21.2946 46.6274 18.9677 46.9666 18.9677 47.3869V48.3912C18.9677 48.81 21.2946 49.1506 24.1664 49.1506C27.0381 49.1506 29.3651 48.8115 29.3651 48.3912V47.3869Z" fill="white" />
    </mask>
    <g mask="url(#mask12_2012_2142)">
      <path d="M19.1459 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M19.5472 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M19.9486 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M20.35 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M20.7512 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M21.1541 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M21.5554 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M21.9568 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M22.3582 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M22.7595 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M23.1608 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M23.5636 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M23.965 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M24.3663 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M24.7677 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M25.1691 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M25.5718 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M25.9731 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M26.3745 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M26.7759 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M27.1772 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M27.58 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M27.9813 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M28.3827 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M28.7841 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M29.1854 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
    </g>
    <path d="M29.3651 47.3869C29.3651 47.8057 27.0381 48.1463 24.1664 48.1463C21.2946 48.1463 18.9677 47.8072 18.9677 47.3869C18.9677 46.9666 21.2946 46.6274 24.1664 46.6274C27.0381 46.6274 29.3651 46.9666 29.3651 47.3869Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M28.9782 47.3869C28.9782 47.7362 26.8237 48.0188 24.1663 48.0188C21.509 48.0188 19.3545 47.7362 19.3545 47.3869C19.3545 47.0376 21.509 46.755 24.1663 46.755C26.8237 46.755 28.9782 47.0376 28.9782 47.3869Z" fill="#CC9933" />
    </g>
    <path d="M29.1174 46.2536C29.1174 45.8347 26.7904 45.4941 23.9187 45.4941C21.0469 45.4941 18.72 45.8333 18.72 46.2536V47.2579C18.72 47.6767 21.0469 48.0173 23.9187 48.0173C26.7904 48.0173 29.1174 47.6782 29.1174 47.2579V46.2536Z" fill="#CC9933" />
    <mask id="mask13_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={18} y={45} width={12} height={4}>
      <path d="M29.1174 46.2536C29.1174 45.8347 26.7904 45.4941 23.9187 45.4941C21.0469 45.4941 18.72 45.8333 18.72 46.2536V47.2579C18.72 47.6767 21.0469 48.0173 23.9187 48.0173C26.7904 48.0173 29.1174 47.6782 29.1174 47.2579V46.2536Z" fill="white" />
    </mask>
    <g mask="url(#mask13_2012_2142)">
      <path d="M18.8982 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M19.2996 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M19.7009 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M20.1023 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M20.505 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M20.9064 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M21.3077 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M21.7091 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M22.1105 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M22.5132 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M22.9146 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M23.3159 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M23.7173 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M24.1187 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M24.52 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M24.9227 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M25.3241 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M25.7255 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M26.1268 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M26.5282 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M26.931 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M27.3323 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M27.7336 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M28.135 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M28.5364 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M28.9392 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
    </g>
    <path d="M29.1174 46.2536C29.1174 46.6724 26.7904 47.013 23.9187 47.013C21.0469 47.013 18.72 46.6738 18.72 46.2536C18.72 45.8333 21.0469 45.4941 23.9187 45.4941C26.7904 45.4941 29.1174 45.8333 29.1174 46.2536Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M28.7305 46.2536C28.7305 46.6029 26.576 46.8855 23.9187 46.8855C21.2613 46.8855 19.1068 46.6029 19.1068 46.2536C19.1068 45.9043 21.2613 45.6217 23.9187 45.6217C26.576 45.6217 28.7305 45.9043 28.7305 46.2536Z" fill="#CC9933" />
    </g>
    <path d="M7.18221 40.4639C6.98951 40.1914 5.32326 41.045 3.4614 42.3682C1.59954 43.6914 0.246255 44.9842 0.44041 45.2566C0.528794 45.3813 0.81423 45.7827 0.902614 45.9074C1.09532 46.1798 2.76157 45.3262 4.62343 44.0045C6.48529 42.6813 7.83857 41.3885 7.64442 41.1161C7.55603 40.9914 7.2706 40.59 7.18221 40.4653V40.4639Z" fill="#CC9933" />
    <mask id="mask14_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={0} y={40} width={8} height={6}>
      <path d="M7.18221 40.4639C6.98951 40.1914 5.32326 41.045 3.4614 42.3682C1.59954 43.6914 0.246255 44.9842 0.44041 45.2566C0.528794 45.3813 0.81423 45.7827 0.902614 45.9074C1.09532 46.1798 2.76157 45.3262 4.62343 44.0045C6.48529 42.6813 7.83857 41.3885 7.64442 41.1161C7.55603 40.9914 7.2706 40.59 7.18221 40.4653V40.4639Z" fill="white" />
    </mask>
    <g mask="url(#mask14_2012_2142)">
      <path d="M0.0578613 44.4695L1.76468 46.8724" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M0.318726 44.2854L2.0241 46.6869" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M0.578003 44.0999L2.28483 46.5028" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M0.838867 43.9144L2.54569 46.3173" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M1.09961 43.7303L2.80643 46.1318" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M1.36047 43.5448L3.06585 45.9477" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M1.61975 43.3594L3.32657 45.7623" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M1.88062 43.1753L3.58744 45.5767" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M2.14136 42.9897L3.84818 45.3926" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M2.40222 42.8042L4.1076 45.2071" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M2.66162 42.6188L4.36844 45.0217" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M2.92236 42.4347L4.62919 44.8361" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M3.18323 42.2491L4.89005 44.652" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M3.44397 42.0637L5.14934 44.4666" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M3.70337 41.8796L5.41019 44.2811" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M3.96411 41.6941L5.67093 44.097" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M4.22498 41.5085L5.9318 43.9114" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M4.48572 41.3246L6.19109 43.726" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M4.74512 41.139L6.45194 43.5419" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M5.00586 40.9535L6.71268 43.3564" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M5.26672 40.7681L6.9721 43.171" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M5.52747 40.584L7.23284 42.9854" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M5.78687 40.3984L7.49369 42.8013" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M6.04773 40.2129L7.75455 42.6158" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M6.30847 40.0289L8.01385 42.4304" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M6.56934 39.8434L8.27471 42.2463" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
    </g>
    <path d="M7.18234 40.4637C7.37504 40.7362 6.0232 42.0289 4.16135 43.3521C2.29949 44.6753 0.633239 45.5275 0.440533 45.255C0.247827 44.9825 1.59967 43.6898 3.46152 42.3666C5.32338 41.0434 6.98963 40.1912 7.18234 40.4622V40.4637Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M6.9316 40.6406C7.09243 40.8666 5.82608 42.0435 4.10187 43.2681C2.37911 44.4927 0.850504 45.3014 0.689675 45.0753C0.528845 44.8493 1.7952 43.6724 3.51941 42.4478C5.24217 41.2232 6.77077 40.4145 6.9316 40.6406Z" fill="#CC9933" />
    </g>
    <path d="M44.3295 45.3999C44.3295 45.0492 46.2739 44.7666 48.6719 44.7666C51.0698 44.7666 53.0143 45.0507 53.0143 45.3999V46.2391C53.0143 46.5898 51.0698 46.8724 48.6719 46.8724C46.2739 46.8724 44.3295 46.5883 44.3295 46.2391V45.3999Z" fill="#CC9933" />
    <mask id="mask15_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={44} y={44} width={10} height={3}>
      <path d="M44.3295 45.3999C44.3295 45.0492 46.2739 44.7666 48.6719 44.7666C51.0698 44.7666 53.0143 45.0507 53.0143 45.3999V46.2391C53.0143 46.5898 51.0698 46.8724 48.6719 46.8724C46.2739 46.8724 44.3295 46.5883 44.3295 46.2391V45.3999Z" fill="white" />
    </mask>
    <g mask="url(#mask15_2012_2142)">
      <path d="M52.8666 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M52.5319 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M52.1957 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.861 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.5248 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.1902 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.854 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.5178 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.1831 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.847 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.5123 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.1761 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.8414 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.5052 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.1692 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.8345 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.4983 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.1636 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.8274 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.4928 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.1566 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.8204 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.4857 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.1497 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.8149 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.4788 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M44.3295 45.3999C44.3295 45.7507 46.2739 46.0333 48.6719 46.0333C51.0698 46.0333 53.0143 45.7492 53.0143 45.3999C53.0143 45.0507 51.0698 44.7666 48.6719 44.7666C46.2739 44.7666 44.3295 45.0507 44.3295 45.3999Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M48.6733 45.9289C50.8939 45.9289 52.6941 45.6921 52.6941 45.4C52.6941 45.1078 50.8939 44.871 48.6733 44.871C46.4527 44.871 44.6526 45.1078 44.6526 45.4C44.6526 45.6921 46.4527 45.9289 48.6733 45.9289Z" fill="#CC9933" />
    </g>
    <path d="M44.0063 44.3463C44.0063 43.9956 45.9508 43.713 48.3487 43.713C50.7467 43.713 52.6911 43.9971 52.6911 44.3463V45.1855C52.6911 45.5362 50.7467 45.8188 48.3487 45.8188C45.9508 45.8188 44.0063 45.5348 44.0063 45.1855V44.3463Z" fill="#CC9933" />
    <mask id="mask16_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={44} y={43} width={9} height={3}>
      <path d="M44.0063 44.3463C44.0063 43.9956 45.9508 43.713 48.3487 43.713C50.7467 43.713 52.6911 43.9971 52.6911 44.3463V45.1855C52.6911 45.5362 50.7467 45.8188 48.3487 45.8188C45.9508 45.8188 44.0063 45.5348 44.0063 45.1855V44.3463Z" fill="white" />
    </mask>
    <g mask="url(#mask16_2012_2142)">
      <path d="M52.5435 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M52.2087 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.8726 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.5378 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.2017 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.8671 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.5309 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.1947 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.86 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.5239 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.1892 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.853 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.5183 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.1821 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.8461 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.5114 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.1752 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.8405 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.5043 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.1697 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.8335 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.4973 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.1626 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.8265 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.4918 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.1556 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M48.3502 44.9797C50.7485 44.9797 52.6926 44.6961 52.6926 44.3463C52.6926 43.9966 50.7485 43.713 48.3502 43.713C45.952 43.713 44.0078 43.9966 44.0078 44.3463C44.0078 44.6961 45.952 44.9797 48.3502 44.9797Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M48.3502 44.8754C50.5708 44.8754 52.3709 44.6385 52.3709 44.3464C52.3709 44.0542 50.5708 43.8174 48.3502 43.8174C46.1296 43.8174 44.3295 44.0542 44.3295 44.3464C44.3295 44.6385 46.1296 44.8754 48.3502 44.8754Z" fill="#CC9933" />
    </g>
    <path d="M43.6832 43.2928C43.6832 42.942 45.6277 42.6594 48.0256 42.6594C50.4236 42.6594 52.368 42.9435 52.368 43.2928V44.1319C52.368 44.4826 50.4236 44.7652 48.0256 44.7652C45.6277 44.7652 43.6832 44.4812 43.6832 44.1319V43.2928Z" fill="#CC9933" />
    <mask id="mask17_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={43} y={42} width={10} height={3}>
      <path d="M43.6832 43.2928C43.6832 42.942 45.6277 42.6594 48.0256 42.6594C50.4236 42.6594 52.368 42.9435 52.368 43.2928V44.1319C52.368 44.4826 50.4236 44.7652 48.0256 44.7652C45.6277 44.7652 43.6832 44.4812 43.6832 44.1319V43.2928Z" fill="white" />
    </mask>
    <g mask="url(#mask17_2012_2142)">
      <path d="M52.2203 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.8856 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.5494 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.2147 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.8785 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.5439 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.2078 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.8716 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.5369 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.2008 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.8661 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.5299 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.1952 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.859 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.5229 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.1882 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.8521 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.5173 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.1813 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.8466 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.5104 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.1742 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.8395 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.5034 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.1687 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M43.8325 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M48.0271 43.9261C50.4253 43.9261 52.3695 43.6425 52.3695 43.2928C52.3695 42.943 50.4253 42.6594 48.0271 42.6594C45.6289 42.6594 43.6847 42.943 43.6847 43.2928C43.6847 43.6425 45.6289 43.9261 48.0271 43.9261Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M48.0271 43.8218C50.2477 43.8218 52.0478 43.5849 52.0478 43.2928C52.0478 43.0006 50.2477 42.7638 48.0271 42.7638C45.8065 42.7638 44.0063 43.0006 44.0063 43.2928C44.0063 43.5849 45.8065 43.8218 48.0271 43.8218Z" fill="#CC9933" />
    </g>
    <path d="M44.0063 42.3449C44.0063 41.9942 45.9508 41.7115 48.3487 41.7115C50.7467 41.7115 52.6911 41.9956 52.6911 42.3449V43.184C52.6911 43.5347 50.7467 43.8173 48.3487 43.8173C45.9508 43.8173 44.0063 43.5333 44.0063 43.184V42.3449Z" fill="#CC9933" />
    <mask id="mask18_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={44} y={41} width={9} height={3}>
      <path d="M44.0063 42.3449C44.0063 41.9942 45.9508 41.7115 48.3487 41.7115C50.7467 41.7115 52.6911 41.9956 52.6911 42.3449V43.184C52.6911 43.5347 50.7467 43.8173 48.3487 43.8173C45.9508 43.8173 44.0063 43.5333 44.0063 43.184V42.3449Z" fill="white" />
    </mask>
    <g mask="url(#mask18_2012_2142)">
      <path d="M52.5435 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M52.2087 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.8726 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.5378 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.2017 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.8671 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.5309 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.1947 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.86 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.5239 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.1892 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.853 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.5183 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.1821 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.8461 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.5114 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.1752 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.8405 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.5043 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.1697 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.8335 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.4973 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.1626 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.8265 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.4918 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.1556 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M48.3502 42.9782C50.7485 42.9782 52.6926 42.6947 52.6926 42.3449C52.6926 41.9951 50.7485 41.7115 48.3502 41.7115C45.952 41.7115 44.0078 41.9951 44.0078 42.3449C44.0078 42.6947 45.952 42.9782 48.3502 42.9782Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M48.3502 42.8739C50.5708 42.8739 52.3709 42.6371 52.3709 42.3449C52.3709 42.0528 50.5708 41.8159 48.3502 41.8159C46.1296 41.8159 44.3295 42.0528 44.3295 42.3449C44.3295 42.6371 46.1296 42.8739 48.3502 42.8739Z" fill="#CC9933" />
    </g>
    <g style={{mixBlendMode: 'multiply'}} opacity="0.5">
      <path d="M43.9469 43.0753C43.9658 43.0681 43.9861 43.0608 44.0063 43.0536V42.3463C44.0063 42.697 45.9508 42.9796 48.3487 42.9796C48.4531 42.9796 48.5559 42.9796 48.6588 42.9782L49.6093 46.8579C49.3079 46.8681 48.9935 46.8724 48.6718 46.8724C46.2739 46.8724 44.3294 46.5883 44.3294 46.2391V45.426C44.1223 45.3521 44.0063 45.271 44.0063 45.1854V44.3724C43.7991 44.2985 43.6832 44.2173 43.6832 44.1318V43.2927C43.6832 43.2159 43.776 43.142 43.9469 43.0753Z" fill="#CC9933" />
    </g>
    <path d="M35.3896 47.0609C35.3896 46.6522 37.6615 46.3203 40.4652 46.3203C43.2689 46.3203 45.5407 46.6522 45.5407 47.0609V48.0406C45.5407 48.4493 43.2689 48.7812 40.4652 48.7812C37.6615 48.7812 35.3896 48.4493 35.3896 48.0406V47.0609Z" fill="#CC9933" />
    <mask id="mask19_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={35} y={46} width={11} height={3}>
      <path d="M35.3896 47.0609C35.3896 46.6522 37.6615 46.3203 40.4652 46.3203C43.2689 46.3203 45.5407 46.6522 45.5407 47.0609V48.0406C45.5407 48.4493 43.2689 48.7812 40.4652 48.7812C37.6615 48.7812 35.3896 48.4493 35.3896 48.0406V47.0609Z" fill="white" />
    </mask>
    <g mask="url(#mask19_2012_2142)">
      <path d="M45.3654 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.9741 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.5815 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.1903 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.7976 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.405 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.0138 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.6211 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.23 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.8373 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.4446 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.0535 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.6608 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.2695 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.877 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.4843 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.093 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.7004 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.3092 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.9165 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.5238 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.1327 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.74 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.3473 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.9562 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.5635 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M35.3896 47.0609C35.3896 47.4696 37.6615 47.8015 40.4652 47.8015C43.2689 47.8015 45.5407 47.4696 45.5407 47.0609C45.5407 46.6522 43.2689 46.3203 40.4652 46.3203C37.6615 46.3203 35.3896 46.6522 35.3896 47.0609Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M35.7678 47.0609C35.7678 47.4015 37.8716 47.6783 40.4652 47.6783C43.0588 47.6783 45.1626 47.4015 45.1626 47.0609C45.1626 46.7203 43.0588 46.4435 40.4652 46.4435C37.8716 46.4435 35.7678 46.7203 35.7678 47.0609Z" fill="#CC9933" />
    </g>
    <path d="M35.0115 45.8304C35.0115 45.4217 37.2834 45.0898 40.087 45.0898C42.8907 45.0898 45.1626 45.4217 45.1626 45.8304V46.8116C45.1626 47.2203 42.8907 47.5522 40.087 47.5522C37.2834 47.5522 35.0115 47.2203 35.0115 46.8116V45.8304Z" fill="#CC9933" />
    <mask id="mask20_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={35} y={45} width={11} height={3}>
      <path d="M35.0115 45.8304C35.0115 45.4217 37.2834 45.0898 40.087 45.0898C42.8907 45.0898 45.1626 45.4217 45.1626 45.8304V46.8116C45.1626 47.2203 42.8907 47.5522 40.087 47.5522C37.2834 47.5522 35.0115 47.2203 35.0115 46.8116V45.8304Z" fill="white" />
    </mask>
    <g mask="url(#mask20_2012_2142)">
      <path d="M44.9886 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.5961 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.2048 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.8121 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.4196 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.0283 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.6356 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.2444 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.8518 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.4591 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.0679 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.6753 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.2841 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.8914 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.4988 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.1075 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.7148 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.3236 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.931 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.5383 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.1471 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.7545 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.3633 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.9706 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.578 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.1868 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M40.087 46.571C42.8902 46.571 45.1626 46.2394 45.1626 45.8304C45.1626 45.4214 42.8902 45.0898 40.087 45.0898C37.2839 45.0898 35.0115 45.4214 35.0115 45.8304C35.0115 46.2394 37.2839 46.571 40.087 46.571Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M40.087 46.4478C42.6813 46.4478 44.7844 46.1714 44.7844 45.8304C44.7844 45.4894 42.6813 45.213 40.087 45.213C37.4927 45.213 35.3896 45.4894 35.3896 45.8304C35.3896 46.1714 37.4927 46.4478 40.087 46.4478Z" fill="#CC9933" />
    </g>
    <path d="M35.7678 44.6C35.7678 44.1913 38.0397 43.8594 40.8434 43.8594C43.647 43.8594 45.9189 44.1913 45.9189 44.6V45.5811C45.9189 45.9898 43.647 46.3217 40.8434 46.3217C38.0397 46.3217 35.7678 45.9898 35.7678 45.5811V44.6Z" fill="#CC9933" />
    <mask id="mask21_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={35} y={43} width={11} height={4}>
      <path d="M35.7678 44.6C35.7678 44.1913 38.0397 43.8594 40.8434 43.8594C43.647 43.8594 45.9189 44.1913 45.9189 44.6V45.5811C45.9189 45.9898 43.647 46.3217 40.8434 46.3217C38.0397 46.3217 35.7678 45.9898 35.7678 45.5811V44.6Z" fill="white" />
    </mask>
    <g mask="url(#mask21_2012_2142)">
      <path d="M45.7435 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.351 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.9597 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.567 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.1744 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.7832 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.3905 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.9993 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.6067 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.214 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.8228 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.4302 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.0389 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.6462 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.2537 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.8624 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.4697 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.0785 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.6859 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.2932 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.902 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.5094 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.1182 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.7255 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.3329 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.9417 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M35.7678 44.6C35.7678 45.0086 38.0397 45.3405 40.8434 45.3405C43.647 45.3405 45.9189 45.0086 45.9189 44.6C45.9189 44.1913 43.647 43.8594 40.8434 43.8594C38.0397 43.8594 35.7678 44.1913 35.7678 44.6Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M36.1445 44.5999C36.1445 44.9405 38.2484 45.2173 40.8419 45.2173C43.4355 45.2173 45.5393 44.9405 45.5393 44.5999C45.5393 44.2594 43.4355 43.9825 40.8419 43.9825C38.2484 43.9825 36.1445 44.2594 36.1445 44.5999Z" fill="#CC9933" />
    </g>
    <path d="M45.4872 43.4913C45.4872 43.0826 43.2153 42.7507 40.4116 42.7507C37.608 42.7507 35.3361 43.0826 35.3361 43.4913V44.4725C35.3361 44.8812 37.608 45.213 40.4116 45.213C43.2153 45.213 45.4872 44.8812 45.4872 44.4725V43.4913Z" fill="#CC9933" />
    <mask id="mask22_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={35} y={42} width={11} height={4}>
      <path d="M45.4872 43.4913C45.4872 43.0826 43.2153 42.7507 40.4116 42.7507C37.608 42.7507 35.3361 43.0826 35.3361 43.4913V44.4725C35.3361 44.8812 37.608 45.213 40.4116 45.213C43.2153 45.213 45.4872 44.8812 45.4872 44.4725V43.4913Z" fill="white" />
    </mask>
    <g mask="url(#mask22_2012_2142)">
      <path d="M35.5114 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.9041 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.2952 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.6879 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.0806 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.4717 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.8644 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.2556 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.6482 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.0409 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.4321 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.8248 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.2159 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.6086 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.0013 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.3925 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.7852 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.1764 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.569 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.9617 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.3529 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.7455 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.1367 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.5294 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.9221 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.3132 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M45.4872 43.4913C45.4872 43.9 43.2153 44.2319 40.4116 44.2319C37.608 44.2319 35.3361 43.9 35.3361 43.4913C35.3361 43.0826 37.608 42.7507 40.4116 42.7507C43.2153 42.7507 45.4872 43.0826 45.4872 43.4913Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M45.1105 43.4913C45.1105 43.8319 43.0066 44.1087 40.4131 44.1087C37.8195 44.1087 35.7157 43.8319 35.7157 43.4913C35.7157 43.1507 37.8195 42.8739 40.4131 42.8739C43.0066 42.8739 45.1105 43.1507 45.1105 43.4913Z" fill="#CC9933" />
    </g>
    <path d="M45.9754 42.384C45.9754 41.9753 43.7035 41.6434 40.8999 41.6434C38.0962 41.6434 35.8243 41.9753 35.8243 42.384V43.3652C35.8243 43.7739 38.0962 44.1057 40.8999 44.1057C43.7035 44.1057 45.9754 43.7739 45.9754 43.3652V42.384Z" fill="#CC9933" />
    <mask id="mask23_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={35} y={41} width={11} height={4}>
      <path d="M45.9754 42.384C45.9754 41.9753 43.7035 41.6434 40.8999 41.6434C38.0962 41.6434 35.8243 41.9753 35.8243 42.384V43.3652C35.8243 43.7739 38.0962 44.1057 40.8999 44.1057C43.7035 44.1057 45.9754 43.7739 45.9754 43.3652V42.384Z" fill="white" />
    </mask>
    <g mask="url(#mask23_2012_2142)">
      <path d="M35.9996 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.3923 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.7834 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.1761 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.5674 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.96 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.3527 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.7439 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.1365 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.5277 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.9204 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.3131 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.7042 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.0969 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.4882 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.8807 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.2734 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.6647 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.0573 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.4485 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.8412 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.2338 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.625 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.0177 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.4089 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.8015 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M45.9754 42.384C45.9754 42.7927 43.7035 43.1246 40.8999 43.1246C38.0962 43.1246 35.8243 42.7927 35.8243 42.384C35.8243 41.9753 38.0962 41.6434 40.8999 41.6434C43.7035 41.6434 45.9754 41.9753 45.9754 42.384Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M45.5987 42.384C45.5987 42.7246 43.4949 43.0014 40.9014 43.0014C38.3078 43.0014 36.204 42.7246 36.204 42.384C36.204 42.0434 38.3078 41.7666 40.9014 41.7666C43.4949 41.7666 45.5987 42.0434 45.5987 42.384Z" fill="#CC9933" />
    </g>
    <path d="M48.5154 48.4018C48.8965 48.251 48.3705 46.0163 47.3418 43.4076C46.313 40.8003 45.1699 38.8076 44.7902 38.9568C44.6149 39.0264 44.0527 39.2481 43.8789 39.3163C43.4978 39.467 44.0238 41.7018 45.0525 44.3105C46.0812 46.9177 47.2244 48.9105 47.604 48.7612C47.7793 48.6916 48.3415 48.4699 48.5154 48.4018Z" fill="#CC9933" />
    <mask id="mask24_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={43} y={38} width={6} height={11}>
      <path d="M48.5154 48.4018C48.8965 48.251 48.3705 46.0163 47.3418 43.4076C46.313 40.8003 45.1699 38.8076 44.7902 38.9568C44.6149 39.0264 44.0527 39.2481 43.8789 39.3163C43.4978 39.467 44.0238 41.7018 45.0525 44.3105C46.0812 46.9177 47.2244 48.9105 47.604 48.7612C47.7793 48.6916 48.3415 48.4699 48.5154 48.4018Z" fill="white" />
    </mask>
    <g mask="url(#mask24_2012_2142)">
      <path d="M45.8363 38.7305L42.4734 40.058" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.9812 39.0957L42.6168 40.4232" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.1246 39.4609L42.7617 40.7885" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.2681 39.8247L42.9052 41.1522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.413 40.1899L43.0486 41.5175" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.5564 40.5551L43.1935 41.8826" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.6998 40.9203L43.3369 42.2478" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.8447 41.2841L43.4803 42.6116" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.9882 41.6493L43.6252 42.9768" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.1316 42.0145L43.7687 43.3421" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.2765 42.3783L43.9121 43.7058" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.4199 42.7435L44.057 44.0711" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.5634 43.1088L44.2004 44.4363" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.7084 43.474L44.344 44.8015" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.8517 43.8378L44.4888 45.1653" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.9953 44.2029L44.6323 45.5304" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.1401 44.5681L44.7758 45.8957" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.2836 44.9319L44.9192 46.2594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.427 45.2971L45.0641 46.6247" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.5705 45.6624L45.2075 46.9899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.7153 46.0276L45.351 47.3551" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.8588 46.3914L45.4958 47.7189" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M49.0022 46.7566L45.6393 48.0841" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M49.1471 47.1218L45.7827 48.4494" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M49.2905 47.4856L45.9276 48.8131" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M49.434 47.8507L46.071 49.1782" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M48.5154 48.4014C48.1343 48.5522 46.9926 46.5594 45.9639 43.9507C44.9351 41.342 44.4092 39.1072 44.7902 38.9565C45.1713 38.8058 46.3131 40.7985 47.3418 43.4072C48.3705 46.0159 48.8965 48.2507 48.5154 48.4014Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M48.3777 48.0492C48.0604 48.1739 47.0317 46.3188 46.0797 43.9043C45.1278 41.4898 44.612 39.4318 44.9293 39.3072C45.2466 39.1826 46.2753 41.0376 47.2273 43.4521C48.1792 45.8666 48.695 47.9246 48.3777 48.0492Z" fill="#CC9933" />
    </g>
  </g>
  <defs>
    <clipPath id="clip0_2012_2142">
      <rect width="53.0303" height={50} fill="white" />
    </clipPath>
    <clipPath id="clip1_2012_2142">
      <rect width="12.4607" height="20.4348" fill="white" transform="translate(22.8928 16.6666)" />
    </clipPath>
  </defs>
</svg>

          </div>
          <div>
               <svg width={54} height={50} viewBox="0 0 54 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_2012_2142)">
    <path d="M31.5225 10.3927C29.9896 8.94778 29.794 6.57821 31.0719 4.90285L34.0335 1.02024C31.7297 -0.578308 31.3921 0.497055 29.3897 1.71445C27.2656 3.00575 26.0587 0.756475 24.8923 0.0898084C24.2127 -0.298597 23.1391 0.641982 22.3596 1.49416L24.9488 4.88691C26.2311 6.56662 26.0326 8.94778 24.4866 10.3884C17.7071 16.7057 8.18774 24.9463 8.18774 34.2898C8.18774 45.2434 17.0652 47.4579 28.0162 47.4579C38.9671 47.4579 47.8446 45.2434 47.8446 34.2898C47.8446 24.7623 39.109 17.5434 31.5225 10.3913V10.3927Z" fill="#EFE089" />
    <path d="M31.5226 10.3927C30.7039 9.6202 30.2693 8.58397 30.2345 7.53035C30.2041 6.61296 30.4764 5.68252 31.072 4.90136L32.2557 3.34919C31.724 3.3231 31.1893 3.38252 30.6184 3.57672C29.8128 3.85064 28.9507 4.36513 28.0785 4.36223C27.1642 4.35933 26.3891 3.77383 25.469 3.81586C25.0532 3.8347 24.6706 3.91875 24.3142 4.05499L24.9488 4.88687C25.5472 5.67093 25.8196 6.60716 25.7863 7.5289C25.7486 8.58252 25.3111 9.61875 24.4852 10.3883C23.8042 11.0231 33.6162 12.3506 33.6162 12.3506C32.9135 11.6956 32.2122 11.0434 31.5211 10.3912L31.5226 10.3927Z" fill="#D3C26E" />
    <path d="M28.0162 47.4593C38.9671 47.4593 47.8446 45.2448 47.8446 34.2912C47.8446 29.7304 45.8422 25.6985 42.9226 21.9506C29.6824 18.1521 30.5619 46.1811 8.21238 33.4709C8.19644 33.7434 8.18774 34.0173 8.18774 34.2912C8.18774 45.2448 17.0652 47.4593 28.0162 47.4593Z" fill="#D3C26E" />
    <g clipPath="url(#clip1_2012_2142)">
      <path d="M25.8652 30.4791C25.8652 29.5506 26.0188 28.7168 26.3265 27.978C26.6337 27.2392 27.2687 26.5949 28.2302 26.0452C28.5186 25.8747 28.874 25.6805 29.2971 25.4624C29.7196 25.245 30.1333 24.984 30.5376 24.6807C30.9413 24.378 31.2826 24.0225 31.5615 23.6149C31.8398 23.2078 31.9799 22.7387 31.9799 22.2081C31.9799 21.8103 31.9028 21.46 31.7492 21.1567C31.595 20.854 31.3932 20.5983 31.1437 20.3895C30.8936 20.1813 30.5999 20.0248 30.2639 19.9204C29.9273 19.8166 29.586 19.7638 29.24 19.7638C28.8169 19.7638 28.4326 19.8352 28.0866 19.9772C27.7406 20.1193 27.4275 20.2996 27.1492 20.5171C26.8703 20.7351 26.6202 20.9816 26.3995 21.2559C26.1782 21.5308 25.9905 21.7917 25.8369 22.0376H25.4027L23.3271 20.3327C23.5767 19.7458 23.9085 19.2245 24.3222 18.7693C24.7353 18.3147 25.2061 17.9308 25.7357 17.6182C26.2642 17.3057 26.8361 17.0691 27.4517 16.9079C28.0666 16.7472 28.701 16.6666 29.3548 16.6666C30.085 16.6666 30.8065 16.771 31.5179 16.9792C32.2288 17.1879 32.8685 17.5191 33.4357 17.9737C34.0024 18.4283 34.4644 19.0111 34.8198 19.7215C35.1752 20.4319 35.3535 21.2802 35.3535 22.2655C35.3535 22.872 35.2812 23.4073 35.137 23.8712C34.9928 24.3357 34.7857 24.7573 34.5167 25.1359C34.2472 25.5152 33.93 25.8562 33.5652 26.1589C33.1998 26.4621 32.7867 26.7556 32.3247 27.0397C31.9399 27.267 31.5556 27.4851 31.1713 27.6933C30.7865 27.902 30.4358 28.134 30.1186 28.3897C29.8014 28.6454 29.5419 28.9394 29.34 29.2706C29.1382 29.6023 29.037 30.0053 29.037 30.4785H25.8652V30.4791ZM25.9229 37.1014V33.179H29.1241V37.1014H25.9229Z" fill="#FFC727" />
      <path d="M25.8652 30.4791C25.8652 29.5506 26.0188 28.7168 26.3265 27.978C26.6337 27.2392 27.2687 26.5949 28.2302 26.0452C28.5186 25.8747 28.874 25.6805 29.2971 25.4624C29.7196 25.245 30.1333 24.984 30.5376 24.6807C30.9413 24.378 31.2826 24.0225 31.5615 23.6149C31.8398 23.2078 31.9799 22.7387 31.9799 22.2081C31.9799 21.8103 31.9028 21.46 31.7492 21.1567C31.595 20.854 31.3932 20.5983 31.1437 20.3895C30.8936 20.1813 30.5999 20.0248 30.2639 19.9204C29.9273 19.8166 29.586 19.7638 29.24 19.7638C28.8169 19.7638 28.4326 19.8352 28.0866 19.9772C27.7406 20.1193 27.4275 20.2996 27.1492 20.5171C26.8703 20.7351 26.6202 20.9816 26.3995 21.2559C26.1782 21.5308 25.9905 21.7917 25.8369 22.0376H25.4027L23.3271 20.3327C23.5767 19.7458 23.9085 19.2245 24.3222 18.7693C24.7353 18.3147 25.2061 17.9308 25.7357 17.6182C26.2642 17.3057 26.8361 17.0691 27.4517 16.9079C28.0666 16.7472 28.701 16.6666 29.3548 16.6666C30.085 16.6666 30.8065 16.771 31.5179 16.9792C32.2288 17.1879 32.8685 17.5191 33.4357 17.9737C34.0024 18.4283 34.4644 19.0111 34.8198 19.7215C35.1752 20.4319 35.3535 21.2802 35.3535 22.2655C35.3535 22.872 35.2812 23.4073 35.137 23.8712C34.9928 24.3357 34.7857 24.7573 34.5167 25.1359C34.2472 25.5152 33.93 25.8562 33.5652 26.1589C33.1998 26.4621 32.7867 26.7556 32.3247 27.0397C31.9399 27.267 31.5556 27.4851 31.1713 27.6933C30.7865 27.902 30.4358 28.134 30.1186 28.3897C29.8014 28.6454 29.5419 28.9394 29.34 29.2706C29.1382 29.6023 29.037 30.0053 29.037 30.4785H25.8652V30.4791ZM25.9229 37.1014V33.179H29.1241V37.1014H25.9229Z" fill="#D3C26E" />
      <path d="M25.4309 30.4791C25.4309 29.5506 25.5844 28.7168 25.8922 27.978C26.1994 27.2392 26.8343 26.5949 27.7959 26.0452C28.0842 25.8747 28.4397 25.6805 28.8628 25.4624C29.2853 25.245 29.699 24.984 30.1032 24.6807C30.5069 24.378 30.8482 24.0225 31.1272 23.6149C31.4055 23.2078 31.5456 22.7387 31.5456 22.2081C31.5456 21.8103 31.4685 21.46 31.3149 21.1567C31.1607 20.854 30.9589 20.5983 30.7094 20.3895C30.4593 20.1813 30.1656 20.0248 29.8296 19.9204C29.493 19.8166 29.1517 19.7638 28.8057 19.7638C28.3826 19.7638 27.9983 19.8352 27.6523 19.9772C27.3063 20.1193 26.9932 20.2996 26.7149 20.5171C26.4359 20.7351 26.1859 20.9816 25.9652 21.2559C25.7439 21.5308 25.5562 21.7917 25.4026 22.0376L22.8928 20.3327C23.1423 19.7458 23.4742 19.2245 23.8879 18.7693C24.301 18.3147 24.7718 17.9308 25.3014 17.6182C25.8298 17.3057 26.4018 17.0691 27.0173 16.9079C27.6323 16.7472 28.2667 16.6666 28.9204 16.6666C29.6507 16.6666 30.3722 16.771 31.0836 16.9792C31.7945 17.1879 32.4341 17.5191 33.0014 17.9737C33.5681 18.4283 34.03 19.0111 34.3855 19.7215C34.7409 20.4319 34.9192 21.2802 34.9192 22.2655C34.9192 22.872 34.8468 23.4073 34.7027 23.8712C34.5585 24.3357 34.3513 24.7573 34.0824 25.1359C33.8129 25.5152 33.4957 25.8562 33.1309 26.1589C32.7654 26.4621 32.3523 26.7556 31.8904 27.0397C31.5055 27.267 31.1213 27.4851 30.737 27.6933C30.3522 27.902 30.0014 28.134 29.6843 28.3897C29.3671 28.6454 29.1076 28.9394 28.9057 29.2706C28.7039 29.6023 28.6027 30.0053 28.6027 30.4785H25.4309V30.4791ZM25.4885 37.1014V33.179H28.6898V37.1014H25.4885Z" fill="#582900" />
    </g>
    <path d="M30.985 7H24.9894V8.45217H30.985V7Z" fill="#582900" />
    <path d="M30.5373 9.60428C30.5373 9.60428 30.5228 9.60428 30.517 9.60428L25.4183 9.51442C25.0242 9.50283 24.7141 9.16949 24.7242 8.76949C24.7358 8.36949 24.7286 8.055 25.1212 8.06659L30.8937 8.15645C31.2878 8.16804 31.2617 8.50138 31.2502 8.90138C31.2386 9.29413 30.9213 9.60428 30.5373 9.60428Z" fill="#753400" />
    <path d="M30.8734 7.55362C30.8734 7.55362 30.5228 7.55362 30.5155 7.55362L25.0792 7.46376C24.6851 7.45217 24.7112 7.11883 24.7227 6.71883C24.7343 6.31883 25.0647 6.00434 25.4573 6.01594L30.5561 6.10579C30.9502 6.11739 31.2603 6.45072 31.2501 6.85072C31.2385 7.24347 31.2588 7.55362 30.8734 7.55362Z" fill="#753400" />
    <mask id="mask0_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={8} y={33} width={40} height={15}>
      <path d="M28.0162 39.3029C15.867 49.5884 12.123 38.142 8.21093 33.5145C8.19644 33.7725 8.18774 34.0304 8.18774 34.2899C8.18774 45.2435 17.0652 47.458 28.0162 47.458C38.9671 47.458 47.8446 45.2435 47.8446 34.2899C47.8446 34.029 47.8373 33.7696 47.8243 33.5116C40.1783 42.7275 38.0702 30.7913 28.0162 39.3015V39.3029Z" fill="white" />
    </mask>
    <g mask="url(#mask0_2012_2142)">
      <path d="M48.7748 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M48.1155 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M47.4562 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M46.797 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M46.1377 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M45.4799 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M44.8207 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M44.1614 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M43.5022 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M42.8429 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M42.1836 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M41.5259 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M40.8666 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M40.2073 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M39.5481 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M38.8888 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M38.231 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M37.5718 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M36.9125 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M36.2532 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M35.594 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M34.9347 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M34.2769 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M33.6177 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M32.9584 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M32.2991 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M31.6399 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M30.9806 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M30.3228 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M29.6636 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M29.0043 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M28.3451 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M27.6858 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M27.028 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M26.3688 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M25.7095 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M25.0502 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M24.391 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M23.7317 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M23.0739 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M22.4147 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M21.7554 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M21.0961 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M20.4369 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M19.7776 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M19.1198 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M18.4606 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M17.8013 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M17.142 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M16.4828 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M15.825 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M15.1656 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M14.5065 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M13.8472 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M13.188 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M12.5287 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M11.8708 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M11.2117 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M10.5524 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M9.89307 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M9.23389 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M8.57458 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M7.91675 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
      <path d="M7.25757 32.2073V54.9522" stroke="#BAA23C" strokeWidth="2.3" strokeMiterlimit={10} />
    </g>
    <path d="M11.7014 45.3999C11.7014 45.0492 9.75696 44.7666 7.359 44.7666C4.96105 44.7666 3.0166 45.0507 3.0166 45.3999V46.2391C3.0166 46.5898 4.96105 46.8724 7.359 46.8724C9.75696 46.8724 11.7014 46.5883 11.7014 46.2391V45.3999Z" fill="#CC9933" />
    <mask id="mask1_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={3} y={44} width={9} height={3}>
      <path d="M11.7014 45.3999C11.7014 45.0492 9.75696 44.7666 7.359 44.7666C4.96105 44.7666 3.0166 45.0507 3.0166 45.3999V46.2391C3.0166 46.5898 4.96105 46.8724 7.359 46.8724C9.75696 46.8724 11.7014 46.5883 11.7014 46.2391V45.3999Z" fill="white" />
    </mask>
    <g mask="url(#mask1_2012_2142)">
      <path d="M3.16443 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M3.50061 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M3.83533 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.17139 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.5061 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.84229 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.17847 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.51306 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.84924 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.18396 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.52014 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.85486 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.19092 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.5271 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.86182 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.198 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.53271 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.86877 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.20349 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.53967 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.87585 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.2104 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.5466 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.8813 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.2175 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.5522 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M11.7014 45.3999C11.7014 45.7507 9.75696 46.0333 7.359 46.0333C4.96105 46.0333 3.0166 45.7492 3.0166 45.3999C3.0166 45.0507 4.96105 44.7666 7.359 44.7666C9.75696 44.7666 11.7014 45.0507 11.7014 45.3999Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M7.359 45.9289C9.57959 45.9289 11.3797 45.6921 11.3797 45.4C11.3797 45.1078 9.57959 44.871 7.359 44.871C5.1384 44.871 3.33826 45.1078 3.33826 45.4C3.33826 45.6921 5.1384 45.9289 7.359 45.9289Z" fill="#CC9933" />
    </g>
    <path d="M12.0245 44.3463C12.0245 43.9956 10.0801 43.713 7.68212 43.713C5.28417 43.713 3.33972 43.9971 3.33972 44.3463V45.1855C3.33972 45.5362 5.28417 45.8188 7.68212 45.8188C10.0801 45.8188 12.0245 45.5348 12.0245 45.1855V44.3463Z" fill="#CC9933" />
    <mask id="mask2_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={3} y={43} width={10} height={3}>
      <path d="M12.0245 44.3463C12.0245 43.9956 10.0801 43.713 7.68212 43.713C5.28417 43.713 3.33972 43.9971 3.33972 44.3463V45.1855C3.33972 45.5362 5.28417 45.8188 7.68212 45.8188C10.0801 45.8188 12.0245 45.5348 12.0245 45.1855V44.3463Z" fill="white" />
    </mask>
    <g mask="url(#mask2_2012_2142)">
      <path d="M3.48755 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M3.82373 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.15845 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.49451 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.82922 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.16541 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.50159 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.83618 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.17236 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.50708 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.84326 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.17798 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.51404 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.85022 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.18494 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.52112 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.85583 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.19189 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.52661 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.86279 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.1975 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.5336 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.8698 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.2045 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.5406 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.8754 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M7.68212 44.9797C10.0804 44.9797 12.0245 44.6961 12.0245 44.3463C12.0245 43.9966 10.0804 43.713 7.68212 43.713C5.28388 43.713 3.33972 43.9966 3.33972 44.3463C3.33972 44.6961 5.28388 44.9797 7.68212 44.9797Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M7.68212 44.8754C9.90271 44.8754 11.7029 44.6385 11.7029 44.3464C11.7029 44.0542 9.90271 43.8174 7.68212 43.8174C5.46152 43.8174 3.66138 44.0542 3.66138 44.3464C3.66138 44.6385 5.46152 44.8754 7.68212 44.8754Z" fill="#CC9933" />
    </g>
    <path d="M12.3476 43.2928C12.3476 42.942 10.4032 42.6594 8.00524 42.6594C5.60729 42.6594 3.66284 42.9435 3.66284 43.2928V44.1319C3.66284 44.4826 5.60729 44.7652 8.00524 44.7652C10.4032 44.7652 12.3476 44.4812 12.3476 44.1319V43.2928Z" fill="#CC9933" />
    <mask id="mask3_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={3} y={42} width={10} height={3}>
      <path d="M12.3476 43.2928C12.3476 42.942 10.4032 42.6594 8.00524 42.6594C5.60729 42.6594 3.66284 42.9435 3.66284 43.2928V44.1319C3.66284 44.4826 5.60729 44.7652 8.00524 44.7652C10.4032 44.7652 12.3476 44.4812 12.3476 44.1319V43.2928Z" fill="white" />
    </mask>
    <g mask="url(#mask3_2012_2142)">
      <path d="M3.81067 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.14685 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.48157 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.81763 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.15234 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.48853 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.82471 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.1593 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.49548 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.8302 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.16638 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.5011 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.83716 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.17334 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.50806 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.84424 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.17896 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.51501 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.84973 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.1859 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.5206 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.8567 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.1929 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.5276 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.8638 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M12.1985 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M8.00524 43.9261C10.4035 43.9261 12.3476 43.6425 12.3476 43.2928C12.3476 42.943 10.4035 42.6594 8.00524 42.6594C5.607 42.6594 3.66284 42.943 3.66284 43.2928C3.66284 43.6425 5.607 43.9261 8.00524 43.9261Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M8.00524 43.8218C10.2258 43.8218 12.026 43.5849 12.026 43.2928C12.026 43.0006 10.2258 42.7638 8.00524 42.7638C5.78464 42.7638 3.9845 43.0006 3.9845 43.2928C3.9845 43.5849 5.78464 43.8218 8.00524 43.8218Z" fill="#CC9933" />
    </g>
    <path d="M12.0245 42.3449C12.0245 41.9942 10.0801 41.7115 7.68212 41.7115C5.28417 41.7115 3.33972 41.9956 3.33972 42.3449V43.184C3.33972 43.5347 5.28417 43.8173 7.68212 43.8173C10.0801 43.8173 12.0245 43.5333 12.0245 43.184V42.3449Z" fill="#CC9933" />
    <mask id="mask4_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={3} y={41} width={10} height={3}>
      <path d="M12.0245 42.3449C12.0245 41.9942 10.0801 41.7115 7.68212 41.7115C5.28417 41.7115 3.33972 41.9956 3.33972 42.3449V43.184C3.33972 43.5347 5.28417 43.8173 7.68212 43.8173C10.0801 43.8173 12.0245 43.5333 12.0245 43.184V42.3449Z" fill="white" />
    </mask>
    <g mask="url(#mask4_2012_2142)">
      <path d="M3.48755 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M3.82373 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.15845 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.49451 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M4.82922 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.16541 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.50159 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M5.83618 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.17236 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.50708 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M6.84326 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.17798 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.51404 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M7.85022 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.18494 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.52112 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M8.85583 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.19189 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.52661 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M9.86279 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.1975 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.5336 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M10.8698 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.2045 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.5406 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M11.8754 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M7.68212 42.9782C10.0804 42.9782 12.0245 42.6947 12.0245 42.3449C12.0245 41.9951 10.0804 41.7115 7.68212 41.7115C5.28388 41.7115 3.33972 41.9951 3.33972 42.3449C3.33972 42.6947 5.28388 42.9782 7.68212 42.9782Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M7.68212 42.8739C9.90271 42.8739 11.7029 42.6371 11.7029 42.3449C11.7029 42.0528 9.90271 41.8159 7.68212 41.8159C5.46152 41.8159 3.66138 42.0528 3.66138 42.3449C3.66138 42.6371 5.46152 42.8739 7.68212 42.8739Z" fill="#CC9933" />
    </g>
    <g style={{mixBlendMode: 'multiply'}} opacity="0.5">
      <path d="M12.0839 43.0753C12.065 43.0681 12.0447 43.0608 12.0245 43.0536V42.3463C12.0245 42.697 10.08 42.9796 7.68207 42.9796C7.57774 42.9796 7.47487 42.9796 7.372 42.9782L6.42151 46.8579C6.72288 46.8681 7.0373 46.8724 7.35896 46.8724C9.75691 46.8724 11.7014 46.5883 11.7014 46.2391V45.426C11.9086 45.3521 12.0245 45.271 12.0245 45.1854V44.3724C12.2317 44.2985 12.3476 44.2173 12.3476 44.1318V43.2927C12.3476 43.2159 12.2548 43.142 12.0839 43.0753Z" fill="#CC9933" />
    </g>
    <path d="M19.8602 46.6637C19.8602 46.255 17.5883 45.9231 14.7861 45.9231C11.9839 45.9231 9.71204 46.255 9.71204 46.6637V47.6434C9.71204 48.0521 11.9839 48.384 14.7861 48.384C17.5883 48.384 19.8602 48.0521 19.8602 47.6434V46.6637Z" fill="#CC9933" />
    <mask id="mask5_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={45} width={11} height={4}>
      <path d="M19.8602 46.6637C19.8602 46.255 17.5883 45.9231 14.7861 45.9231C11.9839 45.9231 9.71204 46.255 9.71204 46.6637V47.6434C9.71204 48.0521 11.9839 48.384 14.7861 48.384C17.5883 48.384 19.8602 48.0521 19.8602 47.6434V46.6637Z" fill="white" />
    </mask>
    <g mask="url(#mask5_2012_2142)">
      <path d="M9.88586 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.2771 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.6697 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.0609 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.4536 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.8462 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.2374 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6301 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0214 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.4139 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.8052 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.1979 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.589 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.9817 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.3744 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.7655 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.1582 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.5494 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.9421 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.3333 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.726 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1172 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.5098 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.9025 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.2937 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.6863 45.6072V49.2231" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M14.7861 47.4043C17.5885 47.4043 19.8602 47.0727 19.8602 46.6637C19.8602 46.2547 17.5885 45.9231 14.7861 45.9231C11.9838 45.9231 9.71204 46.2547 9.71204 46.6637C9.71204 47.0727 11.9838 47.4043 14.7861 47.4043Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.482 46.6637C19.482 47.0042 17.3797 47.281 14.7847 47.281C12.1897 47.281 10.0873 47.0042 10.0873 46.6637C10.0873 46.3231 12.1897 46.0463 14.7847 46.0463C17.3797 46.0463 19.482 46.3231 19.482 46.6637Z" fill="#CC9933" />
    </g>
    <path d="M20.2369 45.4332C20.2369 45.0245 17.965 44.6926 15.1628 44.6926C12.3606 44.6926 10.0887 45.0245 10.0887 45.4332V46.4129C10.0887 46.8216 12.3606 47.1535 15.1628 47.1535C17.965 47.1535 20.2369 46.8216 20.2369 46.4129V45.4332Z" fill="#CC9933" />
    <mask id="mask6_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={10} y={44} width={11} height={4}>
      <path d="M20.2369 45.4332C20.2369 45.0245 17.965 44.6926 15.1628 44.6926C12.3606 44.6926 10.0887 45.0245 10.0887 45.4332V46.4129C10.0887 46.8216 12.3606 47.1535 15.1628 47.1535C17.965 47.1535 20.2369 46.8216 20.2369 46.4129V45.4332Z" fill="white" />
    </mask>
    <g mask="url(#mask6_2012_2142)">
      <path d="M10.2626 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.6553 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.0464 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.4391 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.8318 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.2229 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6156 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0068 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.3995 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.7906 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.1833 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.5746 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.9672 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.3599 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.7511 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.1437 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.5349 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.9276 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.3188 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.7114 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1027 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.4954 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.8879 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.2792 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.6719 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M20.063 44.3767V47.9926" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M20.2369 45.4332C20.2369 45.8419 17.965 46.1738 15.1628 46.1738C12.3606 46.1738 10.0887 45.8419 10.0887 45.4332C10.0887 45.0245 12.3606 44.6926 15.1628 44.6926C17.965 44.6926 20.2369 45.0245 20.2369 45.4332Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.8602 45.4332C19.8602 45.7738 17.7578 46.0506 15.1628 46.0506C12.5678 46.0506 10.4655 45.7738 10.4655 45.4332C10.4655 45.0926 12.5678 44.8158 15.1628 44.8158C17.7578 44.8158 19.8602 45.0926 19.8602 45.4332Z" fill="#CC9933" />
    </g>
    <path d="M19.4821 44.2029C19.4821 43.7942 17.2102 43.4623 14.408 43.4623C11.6058 43.4623 9.33386 43.7942 9.33386 44.2029V45.1826C9.33386 45.5913 11.6058 45.9231 14.408 45.9231C17.2102 45.9231 19.4821 45.5913 19.4821 45.1826V44.2029Z" fill="#CC9933" />
    <mask id="mask7_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={43} width={11} height={3}>
      <path d="M19.4821 44.2029C19.4821 43.7942 17.2102 43.4623 14.408 43.4623C11.6058 43.4623 9.33386 43.7942 9.33386 44.2029V45.1826C9.33386 45.5913 11.6058 45.9231 14.408 45.9231C17.2102 45.9231 19.4821 45.5913 19.4821 45.1826V44.2029Z" fill="white" />
    </mask>
    <g mask="url(#mask7_2012_2142)">
      <path d="M9.50769 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M9.90039 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.2915 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.6842 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.0754 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.468 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.8607 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.252 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6445 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0358 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.4285 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.8197 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.2123 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.6035 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.9962 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.3888 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.78 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.1727 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.564 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.9565 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.3478 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.7405 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1316 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.5243 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.917 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.3081 43.1464V46.7623" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M14.408 44.9434C17.2103 44.9434 19.4821 44.6119 19.4821 44.2029C19.4821 43.7938 17.2103 43.4623 14.408 43.4623C11.6056 43.4623 9.33386 43.7938 9.33386 44.2029C9.33386 44.6119 11.6056 44.9434 14.408 44.9434Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M14.408 44.8202C17.0022 44.8202 19.1053 44.5438 19.1053 44.2028C19.1053 43.8619 17.0022 43.5854 14.408 43.5854C11.8137 43.5854 9.71057 43.8619 9.71057 44.2028C9.71057 44.5438 11.8137 44.8202 14.408 44.8202Z" fill="#CC9933" />
    </g>
    <path d="M19.4821 43.0956C19.4821 42.6869 17.2102 42.355 14.408 42.355C11.6058 42.355 9.33386 42.6869 9.33386 43.0956V44.0753C9.33386 44.484 11.6058 44.8159 14.408 44.8159C17.2102 44.8159 19.4821 44.484 19.4821 44.0753V43.0956Z" fill="#CC9933" />
    <mask id="mask8_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={42} width={11} height={3}>
      <path d="M19.4821 43.0956C19.4821 42.6869 17.2102 42.355 14.408 42.355C11.6058 42.355 9.33386 42.6869 9.33386 43.0956V44.0753C9.33386 44.484 11.6058 44.8159 14.408 44.8159C17.2102 44.8159 19.4821 44.484 19.4821 44.0753V43.0956Z" fill="white" />
    </mask>
    <g mask="url(#mask8_2012_2142)">
      <path d="M9.50769 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M9.90039 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.2915 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.6842 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.0754 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.468 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.8607 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.252 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6445 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0358 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.4285 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.8197 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.2123 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.6035 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.9962 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.3888 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.78 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.1727 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.564 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.9565 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.3478 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.7405 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1316 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.5243 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.917 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.3081 42.0391V45.655" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M14.408 43.8361C17.2103 43.8361 19.4821 43.5046 19.4821 43.0956C19.4821 42.6865 17.2103 42.355 14.408 42.355C11.6056 42.355 9.33386 42.6865 9.33386 43.0956C9.33386 43.5046 11.6056 43.8361 14.408 43.8361Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.1053 43.0955C19.1053 43.4361 17.003 43.7129 14.408 43.7129C11.8129 43.7129 9.71057 43.4361 9.71057 43.0955C9.71057 42.755 11.8129 42.4781 14.408 42.4781C17.003 42.4781 19.1053 42.755 19.1053 43.0955Z" fill="#CC9933" />
    </g>
    <path d="M19.4821 41.9883C19.4821 41.5796 17.2102 41.2477 14.408 41.2477C11.6058 41.2477 9.33386 41.5796 9.33386 41.9883V42.968C9.33386 43.3767 11.6058 43.7086 14.408 43.7086C17.2102 43.7086 19.4821 43.3767 19.4821 42.968V41.9883Z" fill="#CC9933" />
    <mask id="mask9_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={41} width={11} height={3}>
      <path d="M19.4821 41.9883C19.4821 41.5796 17.2102 41.2477 14.408 41.2477C11.6058 41.2477 9.33386 41.5796 9.33386 41.9883V42.968C9.33386 43.3767 11.6058 43.7086 14.408 43.7086C17.2102 43.7086 19.4821 43.3767 19.4821 42.968V41.9883Z" fill="white" />
    </mask>
    <g mask="url(#mask9_2012_2142)">
      <path d="M9.50769 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M9.90039 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.2915 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.6842 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.0754 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.468 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.8607 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.252 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6445 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0358 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.4285 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.8197 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.2123 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.6035 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.9962 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.3888 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.78 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.1727 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.564 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.9565 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.3478 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.7405 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1316 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.5243 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.917 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.3081 40.9318V44.5477" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M19.4821 41.9883C19.4821 42.397 17.2102 42.7288 14.408 42.7288C11.6058 42.7288 9.33386 42.397 9.33386 41.9883C9.33386 41.5796 11.6058 41.2477 14.408 41.2477C17.2102 41.2477 19.4821 41.5796 19.4821 41.9883Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.1053 41.9882C19.1053 42.3288 17.003 42.6056 14.408 42.6056C11.8129 42.6056 9.71057 42.3288 9.71057 41.9882C9.71057 41.6477 11.8129 41.3708 14.408 41.3708C17.003 41.3708 19.1053 41.6477 19.1053 41.9882Z" fill="#CC9933" />
    </g>
    <path d="M19.7675 40.884C19.7675 40.4753 17.4956 40.1434 14.6934 40.1434C11.8912 40.1434 9.61926 40.4753 9.61926 40.884V41.8637C9.61926 42.2724 11.8912 42.6043 14.6934 42.6043C17.4956 42.6043 19.7675 42.2724 19.7675 41.8637V40.884Z" fill="#CC9933" />
    <mask id="mask10_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={40} width={11} height={3}>
      <path d="M19.7675 40.884C19.7675 40.4753 17.4956 40.1434 14.6934 40.1434C11.8912 40.1434 9.61926 40.4753 9.61926 40.884V41.8637C9.61926 42.2724 11.8912 42.6043 14.6934 42.6043C17.4956 42.6043 19.7675 42.2724 19.7675 41.8637V40.884Z" fill="white" />
    </mask>
    <g mask="url(#mask10_2012_2142)">
      <path d="M9.79309 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.1843 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.5769 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.9681 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.3608 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.7521 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.1447 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.5374 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.9286 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.3212 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.7124 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.1051 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.4962 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.8889 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.2802 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.6727 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.0654 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.4567 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.8494 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.2405 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.6332 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.0244 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.417 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.8082 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.2009 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.5935 39.8275V43.4435" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M14.6934 41.6246C17.4957 41.6246 19.7675 41.293 19.7675 40.884C19.7675 40.475 17.4957 40.1434 14.6934 40.1434C11.891 40.1434 9.61926 40.475 9.61926 40.884C9.61926 41.293 11.891 41.6246 14.6934 41.6246Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.3893 40.884C19.3893 41.2246 17.2869 41.5014 14.6919 41.5014C12.0969 41.5014 9.99451 41.2246 9.99451 40.884C9.99451 40.5434 12.0969 40.2666 14.6919 40.2666C17.2869 40.2666 19.3893 40.5434 19.3893 40.884Z" fill="#CC9933" />
    </g>
    <path d="M19.9298 39.7767C19.9298 39.368 17.6579 39.0361 14.8557 39.0361C12.0535 39.0361 9.78162 39.368 9.78162 39.7767V40.7564C9.78162 41.1651 12.0535 41.497 14.8557 41.497C17.6579 41.497 19.9298 41.1651 19.9298 40.7564V39.7767Z" fill="#CC9933" />
    <mask id="mask11_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={9} y={39} width={11} height={3}>
      <path d="M19.9298 39.7767C19.9298 39.368 17.6579 39.0361 14.8557 39.0361C12.0535 39.0361 9.78162 39.368 9.78162 39.7767V40.7564C9.78162 41.1651 12.0535 41.497 14.8557 41.497C17.6579 41.497 19.9298 41.1651 19.9298 40.7564V39.7767Z" fill="white" />
    </mask>
    <g mask="url(#mask11_2012_2142)">
      <path d="M9.95544 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.3467 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M10.7393 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.132 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.5232 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M11.9158 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.307 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M12.6997 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.0909 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.4835 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M13.8748 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.2675 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M14.66 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.0513 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.444 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M15.8351 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.2278 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M16.619 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.0117 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.4028 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M17.7955 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.1882 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.5793 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M18.972 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.3633 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M19.7559 38.7202V42.3362" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M19.9298 39.7767C19.9298 40.1854 17.6579 40.5173 14.8557 40.5173C12.0535 40.5173 9.78162 40.1854 9.78162 39.7767C9.78162 39.368 12.0535 39.0361 14.8557 39.0361C17.6579 39.0361 19.9298 39.368 19.9298 39.7767Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M19.5516 39.7767C19.5516 40.1173 17.4493 40.3941 14.8542 40.3941C12.2592 40.3941 10.1569 40.1173 10.1569 39.7767C10.1569 39.4361 12.2592 39.1593 14.8542 39.1593C17.4493 39.1593 19.5516 39.4361 19.5516 39.7767Z" fill="#CC9933" />
    </g>
    <path d="M29.3651 47.3869C29.3651 46.968 27.0381 46.6274 24.1664 46.6274C21.2946 46.6274 18.9677 46.9666 18.9677 47.3869V48.3912C18.9677 48.81 21.2946 49.1506 24.1664 49.1506C27.0381 49.1506 29.3651 48.8115 29.3651 48.3912V47.3869Z" fill="#CC9933" />
    <mask id="mask12_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={18} y={46} width={12} height={4}>
      <path d="M29.3651 47.3869C29.3651 46.968 27.0381 46.6274 24.1664 46.6274C21.2946 46.6274 18.9677 46.9666 18.9677 47.3869V48.3912C18.9677 48.81 21.2946 49.1506 24.1664 49.1506C27.0381 49.1506 29.3651 48.8115 29.3651 48.3912V47.3869Z" fill="white" />
    </mask>
    <g mask="url(#mask12_2012_2142)">
      <path d="M19.1459 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M19.5472 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M19.9486 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M20.35 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M20.7512 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M21.1541 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M21.5554 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M21.9568 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M22.3582 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M22.7595 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M23.1608 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M23.5636 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M23.965 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M24.3663 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M24.7677 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M25.1691 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M25.5718 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M25.9731 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M26.3745 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M26.7759 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M27.1772 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M27.58 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M27.9813 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M28.3827 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M28.7841 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M29.1854 46.3042V50.01" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
    </g>
    <path d="M29.3651 47.3869C29.3651 47.8057 27.0381 48.1463 24.1664 48.1463C21.2946 48.1463 18.9677 47.8072 18.9677 47.3869C18.9677 46.9666 21.2946 46.6274 24.1664 46.6274C27.0381 46.6274 29.3651 46.9666 29.3651 47.3869Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M28.9782 47.3869C28.9782 47.7362 26.8237 48.0188 24.1663 48.0188C21.509 48.0188 19.3545 47.7362 19.3545 47.3869C19.3545 47.0376 21.509 46.755 24.1663 46.755C26.8237 46.755 28.9782 47.0376 28.9782 47.3869Z" fill="#CC9933" />
    </g>
    <path d="M29.1174 46.2536C29.1174 45.8347 26.7904 45.4941 23.9187 45.4941C21.0469 45.4941 18.72 45.8333 18.72 46.2536V47.2579C18.72 47.6767 21.0469 48.0173 23.9187 48.0173C26.7904 48.0173 29.1174 47.6782 29.1174 47.2579V46.2536Z" fill="#CC9933" />
    <mask id="mask13_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={18} y={45} width={12} height={4}>
      <path d="M29.1174 46.2536C29.1174 45.8347 26.7904 45.4941 23.9187 45.4941C21.0469 45.4941 18.72 45.8333 18.72 46.2536V47.2579C18.72 47.6767 21.0469 48.0173 23.9187 48.0173C26.7904 48.0173 29.1174 47.6782 29.1174 47.2579V46.2536Z" fill="white" />
    </mask>
    <g mask="url(#mask13_2012_2142)">
      <path d="M18.8982 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M19.2996 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M19.7009 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M20.1023 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M20.505 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M20.9064 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M21.3077 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M21.7091 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M22.1105 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M22.5132 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M22.9146 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M23.3159 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M23.7173 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M24.1187 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M24.52 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M24.9227 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M25.3241 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M25.7255 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M26.1268 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M26.5282 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M26.931 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M27.3323 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M27.7336 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M28.135 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M28.5364 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
      <path d="M28.9392 45.1709V48.8752" stroke="#AA7924" strokeWidth="1.23" strokeMiterlimit={10} />
    </g>
    <path d="M29.1174 46.2536C29.1174 46.6724 26.7904 47.013 23.9187 47.013C21.0469 47.013 18.72 46.6738 18.72 46.2536C18.72 45.8333 21.0469 45.4941 23.9187 45.4941C26.7904 45.4941 29.1174 45.8333 29.1174 46.2536Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M28.7305 46.2536C28.7305 46.6029 26.576 46.8855 23.9187 46.8855C21.2613 46.8855 19.1068 46.6029 19.1068 46.2536C19.1068 45.9043 21.2613 45.6217 23.9187 45.6217C26.576 45.6217 28.7305 45.9043 28.7305 46.2536Z" fill="#CC9933" />
    </g>
    <path d="M7.18221 40.4639C6.98951 40.1914 5.32326 41.045 3.4614 42.3682C1.59954 43.6914 0.246255 44.9842 0.44041 45.2566C0.528794 45.3813 0.81423 45.7827 0.902614 45.9074C1.09532 46.1798 2.76157 45.3262 4.62343 44.0045C6.48529 42.6813 7.83857 41.3885 7.64442 41.1161C7.55603 40.9914 7.2706 40.59 7.18221 40.4653V40.4639Z" fill="#CC9933" />
    <mask id="mask14_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={0} y={40} width={8} height={6}>
      <path d="M7.18221 40.4639C6.98951 40.1914 5.32326 41.045 3.4614 42.3682C1.59954 43.6914 0.246255 44.9842 0.44041 45.2566C0.528794 45.3813 0.81423 45.7827 0.902614 45.9074C1.09532 46.1798 2.76157 45.3262 4.62343 44.0045C6.48529 42.6813 7.83857 41.3885 7.64442 41.1161C7.55603 40.9914 7.2706 40.59 7.18221 40.4653V40.4639Z" fill="white" />
    </mask>
    <g mask="url(#mask14_2012_2142)">
      <path d="M0.0578613 44.4695L1.76468 46.8724" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M0.318726 44.2854L2.0241 46.6869" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M0.578003 44.0999L2.28483 46.5028" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M0.838867 43.9144L2.54569 46.3173" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M1.09961 43.7303L2.80643 46.1318" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M1.36047 43.5448L3.06585 45.9477" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M1.61975 43.3594L3.32657 45.7623" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M1.88062 43.1753L3.58744 45.5767" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M2.14136 42.9897L3.84818 45.3926" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M2.40222 42.8042L4.1076 45.2071" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M2.66162 42.6188L4.36844 45.0217" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M2.92236 42.4347L4.62919 44.8361" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M3.18323 42.2491L4.89005 44.652" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M3.44397 42.0637L5.14934 44.4666" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M3.70337 41.8796L5.41019 44.2811" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M3.96411 41.6941L5.67093 44.097" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M4.22498 41.5085L5.9318 43.9114" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M4.48572 41.3246L6.19109 43.726" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M4.74512 41.139L6.45194 43.5419" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M5.00586 40.9535L6.71268 43.3564" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M5.26672 40.7681L6.9721 43.171" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M5.52747 40.584L7.23284 42.9854" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M5.78687 40.3984L7.49369 42.8013" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M6.04773 40.2129L7.75455 42.6158" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M6.30847 40.0289L8.01385 42.4304" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
      <path d="M6.56934 39.8434L8.27471 42.2463" stroke="#AA7924" strokeWidth="0.98" strokeMiterlimit={10} />
    </g>
    <path d="M7.18234 40.4637C7.37504 40.7362 6.0232 42.0289 4.16135 43.3521C2.29949 44.6753 0.633239 45.5275 0.440533 45.255C0.247827 44.9825 1.59967 43.6898 3.46152 42.3666C5.32338 41.0434 6.98963 40.1912 7.18234 40.4622V40.4637Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M6.9316 40.6406C7.09243 40.8666 5.82608 42.0435 4.10187 43.2681C2.37911 44.4927 0.850504 45.3014 0.689675 45.0753C0.528845 44.8493 1.7952 43.6724 3.51941 42.4478C5.24217 41.2232 6.77077 40.4145 6.9316 40.6406Z" fill="#CC9933" />
    </g>
    <path d="M44.3295 45.3999C44.3295 45.0492 46.2739 44.7666 48.6719 44.7666C51.0698 44.7666 53.0143 45.0507 53.0143 45.3999V46.2391C53.0143 46.5898 51.0698 46.8724 48.6719 46.8724C46.2739 46.8724 44.3295 46.5883 44.3295 46.2391V45.3999Z" fill="#CC9933" />
    <mask id="mask15_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={44} y={44} width={10} height={3}>
      <path d="M44.3295 45.3999C44.3295 45.0492 46.2739 44.7666 48.6719 44.7666C51.0698 44.7666 53.0143 45.0507 53.0143 45.3999V46.2391C53.0143 46.5898 51.0698 46.8724 48.6719 46.8724C46.2739 46.8724 44.3295 46.5883 44.3295 46.2391V45.3999Z" fill="white" />
    </mask>
    <g mask="url(#mask15_2012_2142)">
      <path d="M52.8666 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M52.5319 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M52.1957 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.861 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.5248 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.1902 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.854 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.5178 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.1831 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.847 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.5123 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.1761 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.8414 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.5052 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.1692 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.8345 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.4983 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.1636 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.8274 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.4928 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.1566 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.8204 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.4857 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.1497 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.8149 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.4788 44.4956V47.5898" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M44.3295 45.3999C44.3295 45.7507 46.2739 46.0333 48.6719 46.0333C51.0698 46.0333 53.0143 45.7492 53.0143 45.3999C53.0143 45.0507 51.0698 44.7666 48.6719 44.7666C46.2739 44.7666 44.3295 45.0507 44.3295 45.3999Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M48.6733 45.9289C50.8939 45.9289 52.6941 45.6921 52.6941 45.4C52.6941 45.1078 50.8939 44.871 48.6733 44.871C46.4527 44.871 44.6526 45.1078 44.6526 45.4C44.6526 45.6921 46.4527 45.9289 48.6733 45.9289Z" fill="#CC9933" />
    </g>
    <path d="M44.0063 44.3463C44.0063 43.9956 45.9508 43.713 48.3487 43.713C50.7467 43.713 52.6911 43.9971 52.6911 44.3463V45.1855C52.6911 45.5362 50.7467 45.8188 48.3487 45.8188C45.9508 45.8188 44.0063 45.5348 44.0063 45.1855V44.3463Z" fill="#CC9933" />
    <mask id="mask16_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={44} y={43} width={9} height={3}>
      <path d="M44.0063 44.3463C44.0063 43.9956 45.9508 43.713 48.3487 43.713C50.7467 43.713 52.6911 43.9971 52.6911 44.3463V45.1855C52.6911 45.5362 50.7467 45.8188 48.3487 45.8188C45.9508 45.8188 44.0063 45.5348 44.0063 45.1855V44.3463Z" fill="white" />
    </mask>
    <g mask="url(#mask16_2012_2142)">
      <path d="M52.5435 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M52.2087 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.8726 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.5378 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.2017 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.8671 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.5309 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.1947 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.86 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.5239 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.1892 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.853 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.5183 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.1821 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.8461 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.5114 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.1752 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.8405 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.5043 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.1697 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.8335 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.4973 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.1626 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.8265 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.4918 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.1556 43.442V46.5377" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M48.3502 44.9797C50.7485 44.9797 52.6926 44.6961 52.6926 44.3463C52.6926 43.9966 50.7485 43.713 48.3502 43.713C45.952 43.713 44.0078 43.9966 44.0078 44.3463C44.0078 44.6961 45.952 44.9797 48.3502 44.9797Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M48.3502 44.8754C50.5708 44.8754 52.3709 44.6385 52.3709 44.3464C52.3709 44.0542 50.5708 43.8174 48.3502 43.8174C46.1296 43.8174 44.3295 44.0542 44.3295 44.3464C44.3295 44.6385 46.1296 44.8754 48.3502 44.8754Z" fill="#CC9933" />
    </g>
    <path d="M43.6832 43.2928C43.6832 42.942 45.6277 42.6594 48.0256 42.6594C50.4236 42.6594 52.368 42.9435 52.368 43.2928V44.1319C52.368 44.4826 50.4236 44.7652 48.0256 44.7652C45.6277 44.7652 43.6832 44.4812 43.6832 44.1319V43.2928Z" fill="#CC9933" />
    <mask id="mask17_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={43} y={42} width={10} height={3}>
      <path d="M43.6832 43.2928C43.6832 42.942 45.6277 42.6594 48.0256 42.6594C50.4236 42.6594 52.368 42.9435 52.368 43.2928V44.1319C52.368 44.4826 50.4236 44.7652 48.0256 44.7652C45.6277 44.7652 43.6832 44.4812 43.6832 44.1319V43.2928Z" fill="white" />
    </mask>
    <g mask="url(#mask17_2012_2142)">
      <path d="M52.2203 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.8856 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.5494 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.2147 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.8785 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.5439 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.2078 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.8716 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.5369 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.2008 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.8661 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.5299 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.1952 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.859 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.5229 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.1882 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.8521 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.5173 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.1813 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.8466 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.5104 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.1742 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.8395 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.5034 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.1687 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M43.8325 42.3884V45.4841" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M48.0271 43.9261C50.4253 43.9261 52.3695 43.6425 52.3695 43.2928C52.3695 42.943 50.4253 42.6594 48.0271 42.6594C45.6289 42.6594 43.6847 42.943 43.6847 43.2928C43.6847 43.6425 45.6289 43.9261 48.0271 43.9261Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M48.0271 43.8218C50.2477 43.8218 52.0478 43.5849 52.0478 43.2928C52.0478 43.0006 50.2477 42.7638 48.0271 42.7638C45.8065 42.7638 44.0063 43.0006 44.0063 43.2928C44.0063 43.5849 45.8065 43.8218 48.0271 43.8218Z" fill="#CC9933" />
    </g>
    <path d="M44.0063 42.3449C44.0063 41.9942 45.9508 41.7115 48.3487 41.7115C50.7467 41.7115 52.6911 41.9956 52.6911 42.3449V43.184C52.6911 43.5347 50.7467 43.8173 48.3487 43.8173C45.9508 43.8173 44.0063 43.5333 44.0063 43.184V42.3449Z" fill="#CC9933" />
    <mask id="mask18_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={44} y={41} width={9} height={3}>
      <path d="M44.0063 42.3449C44.0063 41.9942 45.9508 41.7115 48.3487 41.7115C50.7467 41.7115 52.6911 41.9956 52.6911 42.3449V43.184C52.6911 43.5347 50.7467 43.8173 48.3487 43.8173C45.9508 43.8173 44.0063 43.5333 44.0063 43.184V42.3449Z" fill="white" />
    </mask>
    <g mask="url(#mask18_2012_2142)">
      <path d="M52.5435 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M52.2087 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.8726 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.5378 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M51.2017 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.8671 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.5309 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M50.1947 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.86 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.5239 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M49.1892 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.853 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.5183 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M48.1821 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.8461 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.5114 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M47.1752 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.8405 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.5043 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M46.1697 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.8335 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.4973 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M45.1626 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.8265 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.4918 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
      <path d="M44.1556 41.4406V44.5362" stroke="#AA7924" strokeWidth="1.03" strokeMiterlimit={10} />
    </g>
    <path d="M48.3502 42.9782C50.7485 42.9782 52.6926 42.6947 52.6926 42.3449C52.6926 41.9951 50.7485 41.7115 48.3502 41.7115C45.952 41.7115 44.0078 41.9951 44.0078 42.3449C44.0078 42.6947 45.952 42.9782 48.3502 42.9782Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M48.3502 42.8739C50.5708 42.8739 52.3709 42.6371 52.3709 42.3449C52.3709 42.0528 50.5708 41.8159 48.3502 41.8159C46.1296 41.8159 44.3295 42.0528 44.3295 42.3449C44.3295 42.6371 46.1296 42.8739 48.3502 42.8739Z" fill="#CC9933" />
    </g>
    <g style={{mixBlendMode: 'multiply'}} opacity="0.5">
      <path d="M43.9469 43.0753C43.9658 43.0681 43.9861 43.0608 44.0063 43.0536V42.3463C44.0063 42.697 45.9508 42.9796 48.3487 42.9796C48.4531 42.9796 48.5559 42.9796 48.6588 42.9782L49.6093 46.8579C49.3079 46.8681 48.9935 46.8724 48.6718 46.8724C46.2739 46.8724 44.3294 46.5883 44.3294 46.2391V45.426C44.1223 45.3521 44.0063 45.271 44.0063 45.1854V44.3724C43.7991 44.2985 43.6832 44.2173 43.6832 44.1318V43.2927C43.6832 43.2159 43.776 43.142 43.9469 43.0753Z" fill="#CC9933" />
    </g>
    <path d="M35.3896 47.0609C35.3896 46.6522 37.6615 46.3203 40.4652 46.3203C43.2689 46.3203 45.5407 46.6522 45.5407 47.0609V48.0406C45.5407 48.4493 43.2689 48.7812 40.4652 48.7812C37.6615 48.7812 35.3896 48.4493 35.3896 48.0406V47.0609Z" fill="#CC9933" />
    <mask id="mask19_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={35} y={46} width={11} height={3}>
      <path d="M35.3896 47.0609C35.3896 46.6522 37.6615 46.3203 40.4652 46.3203C43.2689 46.3203 45.5407 46.6522 45.5407 47.0609V48.0406C45.5407 48.4493 43.2689 48.7812 40.4652 48.7812C37.6615 48.7812 35.3896 48.4493 35.3896 48.0406V47.0609Z" fill="white" />
    </mask>
    <g mask="url(#mask19_2012_2142)">
      <path d="M45.3654 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.9741 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.5815 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.1903 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.7976 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.405 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.0138 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.6211 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.23 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.8373 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.4446 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.0535 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.6608 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.2695 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.877 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.4843 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.093 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.7004 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.3092 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.9165 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.5238 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.1327 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.74 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.3473 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.9562 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.5635 46.0044V49.6218" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M35.3896 47.0609C35.3896 47.4696 37.6615 47.8015 40.4652 47.8015C43.2689 47.8015 45.5407 47.4696 45.5407 47.0609C45.5407 46.6522 43.2689 46.3203 40.4652 46.3203C37.6615 46.3203 35.3896 46.6522 35.3896 47.0609Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M35.7678 47.0609C35.7678 47.4015 37.8716 47.6783 40.4652 47.6783C43.0588 47.6783 45.1626 47.4015 45.1626 47.0609C45.1626 46.7203 43.0588 46.4435 40.4652 46.4435C37.8716 46.4435 35.7678 46.7203 35.7678 47.0609Z" fill="#CC9933" />
    </g>
    <path d="M35.0115 45.8304C35.0115 45.4217 37.2834 45.0898 40.087 45.0898C42.8907 45.0898 45.1626 45.4217 45.1626 45.8304V46.8116C45.1626 47.2203 42.8907 47.5522 40.087 47.5522C37.2834 47.5522 35.0115 47.2203 35.0115 46.8116V45.8304Z" fill="#CC9933" />
    <mask id="mask20_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={35} y={45} width={11} height={3}>
      <path d="M35.0115 45.8304C35.0115 45.4217 37.2834 45.0898 40.087 45.0898C42.8907 45.0898 45.1626 45.4217 45.1626 45.8304V46.8116C45.1626 47.2203 42.8907 47.5522 40.087 47.5522C37.2834 47.5522 35.0115 47.2203 35.0115 46.8116V45.8304Z" fill="white" />
    </mask>
    <g mask="url(#mask20_2012_2142)">
      <path d="M44.9886 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.5961 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.2048 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.8121 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.4196 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.0283 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.6356 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.2444 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.8518 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.4591 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.0679 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.6753 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.2841 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.8914 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.4988 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.1075 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.7148 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.3236 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.931 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.5383 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.1471 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.7545 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.3633 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.9706 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.578 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.1868 44.7739V48.3899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M40.087 46.571C42.8902 46.571 45.1626 46.2394 45.1626 45.8304C45.1626 45.4214 42.8902 45.0898 40.087 45.0898C37.2839 45.0898 35.0115 45.4214 35.0115 45.8304C35.0115 46.2394 37.2839 46.571 40.087 46.571Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M40.087 46.4478C42.6813 46.4478 44.7844 46.1714 44.7844 45.8304C44.7844 45.4894 42.6813 45.213 40.087 45.213C37.4927 45.213 35.3896 45.4894 35.3896 45.8304C35.3896 46.1714 37.4927 46.4478 40.087 46.4478Z" fill="#CC9933" />
    </g>
    <path d="M35.7678 44.6C35.7678 44.1913 38.0397 43.8594 40.8434 43.8594C43.647 43.8594 45.9189 44.1913 45.9189 44.6V45.5811C45.9189 45.9898 43.647 46.3217 40.8434 46.3217C38.0397 46.3217 35.7678 45.9898 35.7678 45.5811V44.6Z" fill="#CC9933" />
    <mask id="mask21_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={35} y={43} width={11} height={4}>
      <path d="M35.7678 44.6C35.7678 44.1913 38.0397 43.8594 40.8434 43.8594C43.647 43.8594 45.9189 44.1913 45.9189 44.6V45.5811C45.9189 45.9898 43.647 46.3217 40.8434 46.3217C38.0397 46.3217 35.7678 45.9898 35.7678 45.5811V44.6Z" fill="white" />
    </mask>
    <g mask="url(#mask21_2012_2142)">
      <path d="M45.7435 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.351 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.9597 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.567 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.1744 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.7832 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.3905 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.9993 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.6067 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.214 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.8228 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.4302 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.0389 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.6462 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.2537 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.8624 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.4697 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.0785 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.6859 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.2932 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.902 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.5094 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.1182 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.7255 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.3329 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.9417 43.5435V47.1594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M35.7678 44.6C35.7678 45.0086 38.0397 45.3405 40.8434 45.3405C43.647 45.3405 45.9189 45.0086 45.9189 44.6C45.9189 44.1913 43.647 43.8594 40.8434 43.8594C38.0397 43.8594 35.7678 44.1913 35.7678 44.6Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M36.1445 44.5999C36.1445 44.9405 38.2484 45.2173 40.8419 45.2173C43.4355 45.2173 45.5393 44.9405 45.5393 44.5999C45.5393 44.2594 43.4355 43.9825 40.8419 43.9825C38.2484 43.9825 36.1445 44.2594 36.1445 44.5999Z" fill="#CC9933" />
    </g>
    <path d="M45.4872 43.4913C45.4872 43.0826 43.2153 42.7507 40.4116 42.7507C37.608 42.7507 35.3361 43.0826 35.3361 43.4913V44.4725C35.3361 44.8812 37.608 45.213 40.4116 45.213C43.2153 45.213 45.4872 44.8812 45.4872 44.4725V43.4913Z" fill="#CC9933" />
    <mask id="mask22_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={35} y={42} width={11} height={4}>
      <path d="M45.4872 43.4913C45.4872 43.0826 43.2153 42.7507 40.4116 42.7507C37.608 42.7507 35.3361 43.0826 35.3361 43.4913V44.4725C35.3361 44.8812 37.608 45.213 40.4116 45.213C43.2153 45.213 45.4872 44.8812 45.4872 44.4725V43.4913Z" fill="white" />
    </mask>
    <g mask="url(#mask22_2012_2142)">
      <path d="M35.5114 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M35.9041 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.2952 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.6879 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.0806 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.4717 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.8644 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.2556 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.6482 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.0409 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.4321 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.8248 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.2159 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.6086 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.0013 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.3925 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.7852 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.1764 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.569 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.9617 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.3529 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.7455 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.1367 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.5294 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.9221 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.3132 42.4348V46.0522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M45.4872 43.4913C45.4872 43.9 43.2153 44.2319 40.4116 44.2319C37.608 44.2319 35.3361 43.9 35.3361 43.4913C35.3361 43.0826 37.608 42.7507 40.4116 42.7507C43.2153 42.7507 45.4872 43.0826 45.4872 43.4913Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M45.1105 43.4913C45.1105 43.8319 43.0066 44.1087 40.4131 44.1087C37.8195 44.1087 35.7157 43.8319 35.7157 43.4913C35.7157 43.1507 37.8195 42.8739 40.4131 42.8739C43.0066 42.8739 45.1105 43.1507 45.1105 43.4913Z" fill="#CC9933" />
    </g>
    <path d="M45.9754 42.384C45.9754 41.9753 43.7035 41.6434 40.8999 41.6434C38.0962 41.6434 35.8243 41.9753 35.8243 42.384V43.3652C35.8243 43.7739 38.0962 44.1057 40.8999 44.1057C43.7035 44.1057 45.9754 43.7739 45.9754 43.3652V42.384Z" fill="#CC9933" />
    <mask id="mask23_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={35} y={41} width={11} height={4}>
      <path d="M45.9754 42.384C45.9754 41.9753 43.7035 41.6434 40.8999 41.6434C38.0962 41.6434 35.8243 41.9753 35.8243 42.384V43.3652C35.8243 43.7739 38.0962 44.1057 40.8999 44.1057C43.7035 44.1057 45.9754 43.7739 45.9754 43.3652V42.384Z" fill="white" />
    </mask>
    <g mask="url(#mask23_2012_2142)">
      <path d="M35.9996 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.3923 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M36.7834 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.1761 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.5674 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M37.96 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.3527 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M38.7439 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.1365 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.5277 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M39.9204 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.3131 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M40.7042 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.0969 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.4882 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M41.8807 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.2734 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M42.6647 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.0573 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.4485 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M43.8412 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.2338 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M44.625 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.0177 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.4089 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.8015 41.3275V44.9449" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M45.9754 42.384C45.9754 42.7927 43.7035 43.1246 40.8999 43.1246C38.0962 43.1246 35.8243 42.7927 35.8243 42.384C35.8243 41.9753 38.0962 41.6434 40.8999 41.6434C43.7035 41.6434 45.9754 41.9753 45.9754 42.384Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M45.5987 42.384C45.5987 42.7246 43.4949 43.0014 40.9014 43.0014C38.3078 43.0014 36.204 42.7246 36.204 42.384C36.204 42.0434 38.3078 41.7666 40.9014 41.7666C43.4949 41.7666 45.5987 42.0434 45.5987 42.384Z" fill="#CC9933" />
    </g>
    <path d="M48.5154 48.4018C48.8965 48.251 48.3705 46.0163 47.3418 43.4076C46.313 40.8003 45.1699 38.8076 44.7902 38.9568C44.6149 39.0264 44.0527 39.2481 43.8789 39.3163C43.4978 39.467 44.0238 41.7018 45.0525 44.3105C46.0812 46.9177 47.2244 48.9105 47.604 48.7612C47.7793 48.6916 48.3415 48.4699 48.5154 48.4018Z" fill="#CC9933" />
    <mask id="mask24_2012_2142" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={43} y={38} width={6} height={11}>
      <path d="M48.5154 48.4018C48.8965 48.251 48.3705 46.0163 47.3418 43.4076C46.313 40.8003 45.1699 38.8076 44.7902 38.9568C44.6149 39.0264 44.0527 39.2481 43.8789 39.3163C43.4978 39.467 44.0238 41.7018 45.0525 44.3105C46.0812 46.9177 47.2244 48.9105 47.604 48.7612C47.7793 48.6916 48.3415 48.4699 48.5154 48.4018Z" fill="white" />
    </mask>
    <g mask="url(#mask24_2012_2142)">
      <path d="M45.8363 38.7305L42.4734 40.058" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M45.9812 39.0957L42.6168 40.4232" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.1246 39.4609L42.7617 40.7885" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.2681 39.8247L42.9052 41.1522" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.413 40.1899L43.0486 41.5175" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.5564 40.5551L43.1935 41.8826" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.6998 40.9203L43.3369 42.2478" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.8447 41.2841L43.4803 42.6116" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M46.9882 41.6493L43.6252 42.9768" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.1316 42.0145L43.7687 43.3421" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.2765 42.3783L43.9121 43.7058" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.4199 42.7435L44.057 44.0711" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.5634 43.1088L44.2004 44.4363" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.7084 43.474L44.344 44.8015" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.8517 43.8378L44.4888 45.1653" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M47.9953 44.2029L44.6323 45.5304" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.1401 44.5681L44.7758 45.8957" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.2836 44.9319L44.9192 46.2594" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.427 45.2971L45.0641 46.6247" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.5705 45.6624L45.2075 46.9899" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.7153 46.0276L45.351 47.3551" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M48.8588 46.3914L45.4958 47.7189" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M49.0022 46.7566L45.6393 48.0841" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M49.1471 47.1218L45.7827 48.4494" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M49.2905 47.4856L45.9276 48.8131" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
      <path d="M49.434 47.8507L46.071 49.1782" stroke="#AA7924" strokeWidth="1.2" strokeMiterlimit={10} />
    </g>
    <path d="M48.5154 48.4014C48.1343 48.5522 46.9926 46.5594 45.9639 43.9507C44.9351 41.342 44.4092 39.1072 44.7902 38.9565C45.1713 38.8058 46.3131 40.7985 47.3418 43.4072C48.3705 46.0159 48.8965 48.2507 48.5154 48.4014Z" fill="#FFD84F" />
    <g opacity="0.5">
      <path d="M48.3777 48.0492C48.0604 48.1739 47.0317 46.3188 46.0797 43.9043C45.1278 41.4898 44.612 39.4318 44.9293 39.3072C45.2466 39.1826 46.2753 41.0376 47.2273 43.4521C48.1792 45.8666 48.695 47.9246 48.3777 48.0492Z" fill="#CC9933" />
    </g>
  </g>
  <defs>
    <clipPath id="clip0_2012_2142">
      <rect width="53.0303" height={50} fill="white" />
    </clipPath>
    <clipPath id="clip1_2012_2142">
      <rect width="12.4607" height="20.4348" fill="white" transform="translate(22.8928 16.6666)" />
    </clipPath>
  </defs>
</svg>

          </div>
        </div>
        <div  style={{ marginBottom: 20 }} className="bal  animate__animated animate__fadeInRight ">
          <Coin width={38} />
          <h4>507,981</h4>
        </div>
        <div className="tabs  animate__animated animate__fadeInLeft ">
          <div data-tab={tab}>
            <h5
              onClick={() => {
                setTab(1);
              }}
            >
              PR&Team
            </h5>
            <h5
              onClick={() => {
                setTab(2);
              }}
            >
              Markets
            </h5>
            <h5
              onClick={() => {
                setTab(3);
              }}
            >
              Legal
            </h5>
            <h5
              onClick={() => {
                setTab(4);
              }}
            >
              Specials
            </h5>
          </div>
        </div>
        {tab <= 3 ? (
        <div className="adv_list">
          {coins.map((coin, index) => (
            <div
              key={coin.id}
              onClick={() => {
                setPopupState(2);
              }}
            >
              <div>
                <svg
                  width={36}
                  height={37}
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.9876 18.5075V18.4377C35.9522 8.56067 27.877 0.5 17.9938 0.5C8.11056 0.5 0 8.56067 0 18.5075C0 28.4555 8.07386 36.5 17.9938 36.5C22.5457 36.503 26.9236 34.7769 30.2166 31.6805C30.5409 31.3886 30.7342 30.9817 30.7541 30.5493C30.7739 30.1169 30.6185 29.6945 30.3222 29.3749C30.0259 29.0554 29.6129 28.8649 29.174 28.8454C28.7352 28.8258 28.3064 28.9789 27.9821 29.2708L27.9466 29.3057C26.5258 30.6365 24.8467 31.6707 23.01 32.3462C21.1734 33.0217 19.2172 33.3246 17.2588 33.2367C15.3005 33.1488 13.3803 32.6719 11.6136 31.8347C9.84697 30.9974 8.27025 29.8171 6.97812 28.3645L14.6648 16.2199V21.8397C14.6648 24.5249 15.7276 25.3988 16.6209 25.6432C17.5142 25.8875 18.8542 25.7105 20.3055 23.4429L24.5227 16.6961C24.6353 16.4992 24.7657 16.3122 24.9099 16.1364V19.5584C24.9099 22.0703 25.9373 24.0948 27.7075 25.071C28.5246 25.5093 29.447 25.7214 30.3767 25.6848C31.3064 25.6481 32.2086 25.3641 32.9876 24.8628C35.0323 23.5551 36.1306 21.265 35.9876 18.5075ZM31.3111 22.0417C31.0271 22.2344 30.696 22.3488 30.3521 22.3732C30.0082 22.3975 29.6639 22.3308 29.3549 22.18C28.6463 21.7624 28.2199 20.8212 28.2199 19.5297V15.5742C28.2199 13.6918 27.4759 12.3292 26.2018 11.9827C24.0394 11.3394 22.4122 13.971 21.8087 14.9484L17.9938 20.9845V13.5521C17.9584 11.843 17.3902 10.8308 16.3274 10.5154C15.6188 10.3072 14.556 10.4132 13.5298 11.949L4.99286 25.4188C3.85716 23.2866 3.26199 20.9154 3.25814 18.5075C3.25814 10.3758 9.88071 3.77987 17.9938 3.77987C26.1069 3.77987 32.7295 10.3758 32.7295 18.5075V18.5785C32.8142 20.1468 32.303 21.4059 31.3123 22.0317L31.3111 22.0417Z"
                    fill="white"
                  />
                </svg>

                <div>
                  <p>{coin.name}</p>
                  <span>Прибыль в час</span>
                  <h6>
                    {" "}
                    <Coin width={12} /> +{coin.hourlyIncome.toLocaleString()}{" "}
                  </h6>
                </div>
              </div>
              <section>
                <p>lvl 1</p>
                <div>
                  <Coin width={20} />
                  <p>{coin.cost.toLocaleString()}</p>
                </div>
              </section>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Other rendering logic */}
        </>
      )}
        {/* {tab <= 3 ? (
          <div className="adv_list">
            <div
              onClick={() => {
                setPopupState(2);
              }}
            >
              <div>
                <svg
                  width={36}
                  height={37}
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.9876 18.5075V18.4377C35.9522 8.56067 27.877 0.5 17.9938 0.5C8.11056 0.5 0 8.56067 0 18.5075C0 28.4555 8.07386 36.5 17.9938 36.5C22.5457 36.503 26.9236 34.7769 30.2166 31.6805C30.5409 31.3886 30.7342 30.9817 30.7541 30.5493C30.7739 30.1169 30.6185 29.6945 30.3222 29.3749C30.0259 29.0554 29.6129 28.8649 29.174 28.8454C28.7352 28.8258 28.3064 28.9789 27.9821 29.2708L27.9466 29.3057C26.5258 30.6365 24.8467 31.6707 23.01 32.3462C21.1734 33.0217 19.2172 33.3246 17.2588 33.2367C15.3005 33.1488 13.3803 32.6719 11.6136 31.8347C9.84697 30.9974 8.27025 29.8171 6.97812 28.3645L14.6648 16.2199V21.8397C14.6648 24.5249 15.7276 25.3988 16.6209 25.6432C17.5142 25.8875 18.8542 25.7105 20.3055 23.4429L24.5227 16.6961C24.6353 16.4992 24.7657 16.3122 24.9099 16.1364V19.5584C24.9099 22.0703 25.9373 24.0948 27.7075 25.071C28.5246 25.5093 29.447 25.7214 30.3767 25.6848C31.3064 25.6481 32.2086 25.3641 32.9876 24.8628C35.0323 23.5551 36.1306 21.265 35.9876 18.5075ZM31.3111 22.0417C31.0271 22.2344 30.696 22.3488 30.3521 22.3732C30.0082 22.3975 29.6639 22.3308 29.3549 22.18C28.6463 21.7624 28.2199 20.8212 28.2199 19.5297V15.5742C28.2199 13.6918 27.4759 12.3292 26.2018 11.9827C24.0394 11.3394 22.4122 13.971 21.8087 14.9484L17.9938 20.9845V13.5521C17.9584 11.843 17.3902 10.8308 16.3274 10.5154C15.6188 10.3072 14.556 10.4132 13.5298 11.949L4.99286 25.4188C3.85716 23.2866 3.26199 20.9154 3.25814 18.5075C3.25814 10.3758 9.88071 3.77987 17.9938 3.77987C26.1069 3.77987 32.7295 10.3758 32.7295 18.5075V18.5785C32.8142 20.1468 32.303 21.4059 31.3123 22.0317L31.3111 22.0417Z"
                    fill="white"
                  />
                </svg>

                <div>
                  <p>CEO</p>
                  <span>Прибыль в час</span>
                  <h6>
                    {" "}
                    <Coin width={12} /> +1.61K
                  </h6>
                </div>
              </div>
              <section>
                <p>lvl 13</p>
                <div>
                  <Coin width={20} />
                  <p>2K</p>
                </div>
              </section>
            </div>
            <div
              onClick={() => {
                setPopupState(2);
              }}
            >
              <div>
                <svg
                  width={36}
                  height={37}
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.9876 18.5075V18.4377C35.9522 8.56067 27.877 0.5 17.9938 0.5C8.11056 0.5 0 8.56067 0 18.5075C0 28.4555 8.07386 36.5 17.9938 36.5C22.5457 36.503 26.9236 34.7769 30.2166 31.6805C30.5409 31.3886 30.7342 30.9817 30.7541 30.5493C30.7739 30.1169 30.6185 29.6945 30.3222 29.3749C30.0259 29.0554 29.6129 28.8649 29.174 28.8454C28.7352 28.8258 28.3064 28.9789 27.9821 29.2708L27.9466 29.3057C26.5258 30.6365 24.8467 31.6707 23.01 32.3462C21.1734 33.0217 19.2172 33.3246 17.2588 33.2367C15.3005 33.1488 13.3803 32.6719 11.6136 31.8347C9.84697 30.9974 8.27025 29.8171 6.97812 28.3645L14.6648 16.2199V21.8397C14.6648 24.5249 15.7276 25.3988 16.6209 25.6432C17.5142 25.8875 18.8542 25.7105 20.3055 23.4429L24.5227 16.6961C24.6353 16.4992 24.7657 16.3122 24.9099 16.1364V19.5584C24.9099 22.0703 25.9373 24.0948 27.7075 25.071C28.5246 25.5093 29.447 25.7214 30.3767 25.6848C31.3064 25.6481 32.2086 25.3641 32.9876 24.8628C35.0323 23.5551 36.1306 21.265 35.9876 18.5075ZM31.3111 22.0417C31.0271 22.2344 30.696 22.3488 30.3521 22.3732C30.0082 22.3975 29.6639 22.3308 29.3549 22.18C28.6463 21.7624 28.2199 20.8212 28.2199 19.5297V15.5742C28.2199 13.6918 27.4759 12.3292 26.2018 11.9827C24.0394 11.3394 22.4122 13.971 21.8087 14.9484L17.9938 20.9845V13.5521C17.9584 11.843 17.3902 10.8308 16.3274 10.5154C15.6188 10.3072 14.556 10.4132 13.5298 11.949L4.99286 25.4188C3.85716 23.2866 3.26199 20.9154 3.25814 18.5075C3.25814 10.3758 9.88071 3.77987 17.9938 3.77987C26.1069 3.77987 32.7295 10.3758 32.7295 18.5075V18.5785C32.8142 20.1468 32.303 21.4059 31.3123 22.0317L31.3111 22.0417Z"
                    fill="white"
                  />
                </svg>

                <div>
                  <p>CEO</p>
                  <span>Прибыль в час</span>
                  <h6>
                    {" "}
                    <Coin width={12} /> +1.61K
                  </h6>
                </div>
              </div>
              <section>
                <p>lvl 13</p>
                <div>
                  <Coin width={20} />
                  <p>2K</p>
                </div>
              </section>
            </div>
            <div
              onClick={() => {
                setPopupState(2);
              }}
            >
              <div>
                <svg
                  width={36}
                  height={37}
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.9876 18.5075V18.4377C35.9522 8.56067 27.877 0.5 17.9938 0.5C8.11056 0.5 0 8.56067 0 18.5075C0 28.4555 8.07386 36.5 17.9938 36.5C22.5457 36.503 26.9236 34.7769 30.2166 31.6805C30.5409 31.3886 30.7342 30.9817 30.7541 30.5493C30.7739 30.1169 30.6185 29.6945 30.3222 29.3749C30.0259 29.0554 29.6129 28.8649 29.174 28.8454C28.7352 28.8258 28.3064 28.9789 27.9821 29.2708L27.9466 29.3057C26.5258 30.6365 24.8467 31.6707 23.01 32.3462C21.1734 33.0217 19.2172 33.3246 17.2588 33.2367C15.3005 33.1488 13.3803 32.6719 11.6136 31.8347C9.84697 30.9974 8.27025 29.8171 6.97812 28.3645L14.6648 16.2199V21.8397C14.6648 24.5249 15.7276 25.3988 16.6209 25.6432C17.5142 25.8875 18.8542 25.7105 20.3055 23.4429L24.5227 16.6961C24.6353 16.4992 24.7657 16.3122 24.9099 16.1364V19.5584C24.9099 22.0703 25.9373 24.0948 27.7075 25.071C28.5246 25.5093 29.447 25.7214 30.3767 25.6848C31.3064 25.6481 32.2086 25.3641 32.9876 24.8628C35.0323 23.5551 36.1306 21.265 35.9876 18.5075ZM31.3111 22.0417C31.0271 22.2344 30.696 22.3488 30.3521 22.3732C30.0082 22.3975 29.6639 22.3308 29.3549 22.18C28.6463 21.7624 28.2199 20.8212 28.2199 19.5297V15.5742C28.2199 13.6918 27.4759 12.3292 26.2018 11.9827C24.0394 11.3394 22.4122 13.971 21.8087 14.9484L17.9938 20.9845V13.5521C17.9584 11.843 17.3902 10.8308 16.3274 10.5154C15.6188 10.3072 14.556 10.4132 13.5298 11.949L4.99286 25.4188C3.85716 23.2866 3.26199 20.9154 3.25814 18.5075C3.25814 10.3758 9.88071 3.77987 17.9938 3.77987C26.1069 3.77987 32.7295 10.3758 32.7295 18.5075V18.5785C32.8142 20.1468 32.303 21.4059 31.3123 22.0317L31.3111 22.0417Z"
                    fill="white"
                  />
                </svg>

                <div>
                  <p>CEO</p>
                  <span>Прибыль в час</span>
                  <h6>
                    {" "}
                    <Coin width={12} /> +1.61K
                  </h6>
                </div>
              </div>
              <section>
                <p>lvl 13</p>
                <div>
                  <Coin width={20} />
                  <p>2K</p>
                </div>
              </section>
            </div>
            <div
              onClick={() => {
                setPopupState(2);
              }}
            >
              <div>
                <svg
                  width={36}
                  height={37}
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.9876 18.5075V18.4377C35.9522 8.56067 27.877 0.5 17.9938 0.5C8.11056 0.5 0 8.56067 0 18.5075C0 28.4555 8.07386 36.5 17.9938 36.5C22.5457 36.503 26.9236 34.7769 30.2166 31.6805C30.5409 31.3886 30.7342 30.9817 30.7541 30.5493C30.7739 30.1169 30.6185 29.6945 30.3222 29.3749C30.0259 29.0554 29.6129 28.8649 29.174 28.8454C28.7352 28.8258 28.3064 28.9789 27.9821 29.2708L27.9466 29.3057C26.5258 30.6365 24.8467 31.6707 23.01 32.3462C21.1734 33.0217 19.2172 33.3246 17.2588 33.2367C15.3005 33.1488 13.3803 32.6719 11.6136 31.8347C9.84697 30.9974 8.27025 29.8171 6.97812 28.3645L14.6648 16.2199V21.8397C14.6648 24.5249 15.7276 25.3988 16.6209 25.6432C17.5142 25.8875 18.8542 25.7105 20.3055 23.4429L24.5227 16.6961C24.6353 16.4992 24.7657 16.3122 24.9099 16.1364V19.5584C24.9099 22.0703 25.9373 24.0948 27.7075 25.071C28.5246 25.5093 29.447 25.7214 30.3767 25.6848C31.3064 25.6481 32.2086 25.3641 32.9876 24.8628C35.0323 23.5551 36.1306 21.265 35.9876 18.5075ZM31.3111 22.0417C31.0271 22.2344 30.696 22.3488 30.3521 22.3732C30.0082 22.3975 29.6639 22.3308 29.3549 22.18C28.6463 21.7624 28.2199 20.8212 28.2199 19.5297V15.5742C28.2199 13.6918 27.4759 12.3292 26.2018 11.9827C24.0394 11.3394 22.4122 13.971 21.8087 14.9484L17.9938 20.9845V13.5521C17.9584 11.843 17.3902 10.8308 16.3274 10.5154C15.6188 10.3072 14.556 10.4132 13.5298 11.949L4.99286 25.4188C3.85716 23.2866 3.26199 20.9154 3.25814 18.5075C3.25814 10.3758 9.88071 3.77987 17.9938 3.77987C26.1069 3.77987 32.7295 10.3758 32.7295 18.5075V18.5785C32.8142 20.1468 32.303 21.4059 31.3123 22.0317L31.3111 22.0417Z"
                    fill="white"
                  />
                </svg>

                <div>
                  <p>CEO</p>
                  <span>Прибыль в час</span>
                  <h6>
                    {" "}
                    <Coin width={12} /> +1.61K
                  </h6>
                </div>
              </div>
              <section>
                <p>lvl 13</p>
                <div>
                  <Coin width={20} />
                  <p>2K</p>
                </div>
              </section>
            </div>
            <div
              onClick={() => {
                setPopupState(2);
              }}
            >
              <div>
                <svg
                  width={36}
                  height={37}
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.9876 18.5075V18.4377C35.9522 8.56067 27.877 0.5 17.9938 0.5C8.11056 0.5 0 8.56067 0 18.5075C0 28.4555 8.07386 36.5 17.9938 36.5C22.5457 36.503 26.9236 34.7769 30.2166 31.6805C30.5409 31.3886 30.7342 30.9817 30.7541 30.5493C30.7739 30.1169 30.6185 29.6945 30.3222 29.3749C30.0259 29.0554 29.6129 28.8649 29.174 28.8454C28.7352 28.8258 28.3064 28.9789 27.9821 29.2708L27.9466 29.3057C26.5258 30.6365 24.8467 31.6707 23.01 32.3462C21.1734 33.0217 19.2172 33.3246 17.2588 33.2367C15.3005 33.1488 13.3803 32.6719 11.6136 31.8347C9.84697 30.9974 8.27025 29.8171 6.97812 28.3645L14.6648 16.2199V21.8397C14.6648 24.5249 15.7276 25.3988 16.6209 25.6432C17.5142 25.8875 18.8542 25.7105 20.3055 23.4429L24.5227 16.6961C24.6353 16.4992 24.7657 16.3122 24.9099 16.1364V19.5584C24.9099 22.0703 25.9373 24.0948 27.7075 25.071C28.5246 25.5093 29.447 25.7214 30.3767 25.6848C31.3064 25.6481 32.2086 25.3641 32.9876 24.8628C35.0323 23.5551 36.1306 21.265 35.9876 18.5075ZM31.3111 22.0417C31.0271 22.2344 30.696 22.3488 30.3521 22.3732C30.0082 22.3975 29.6639 22.3308 29.3549 22.18C28.6463 21.7624 28.2199 20.8212 28.2199 19.5297V15.5742C28.2199 13.6918 27.4759 12.3292 26.2018 11.9827C24.0394 11.3394 22.4122 13.971 21.8087 14.9484L17.9938 20.9845V13.5521C17.9584 11.843 17.3902 10.8308 16.3274 10.5154C15.6188 10.3072 14.556 10.4132 13.5298 11.949L4.99286 25.4188C3.85716 23.2866 3.26199 20.9154 3.25814 18.5075C3.25814 10.3758 9.88071 3.77987 17.9938 3.77987C26.1069 3.77987 32.7295 10.3758 32.7295 18.5075V18.5785C32.8142 20.1468 32.303 21.4059 31.3123 22.0317L31.3111 22.0417Z"
                    fill="white"
                  />
                </svg>

                <div>
                  <p>CEO</p>
                  <span>Прибыль в час</span>
                  <h6>
                    {" "}
                    <Coin width={12} /> +1.61K
                  </h6>
                </div>
              </div>
              <section>
                <p>lvl 13</p>
                <div>
                  <Coin width={20} />
                  <p>2K</p>
                </div>
              </section>
            </div>
            <div
              onClick={() => {
                setPopupState(2);
              }}
            >
              <div>
                <svg
                  width={36}
                  height={37}
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.9876 18.5075V18.4377C35.9522 8.56067 27.877 0.5 17.9938 0.5C8.11056 0.5 0 8.56067 0 18.5075C0 28.4555 8.07386 36.5 17.9938 36.5C22.5457 36.503 26.9236 34.7769 30.2166 31.6805C30.5409 31.3886 30.7342 30.9817 30.7541 30.5493C30.7739 30.1169 30.6185 29.6945 30.3222 29.3749C30.0259 29.0554 29.6129 28.8649 29.174 28.8454C28.7352 28.8258 28.3064 28.9789 27.9821 29.2708L27.9466 29.3057C26.5258 30.6365 24.8467 31.6707 23.01 32.3462C21.1734 33.0217 19.2172 33.3246 17.2588 33.2367C15.3005 33.1488 13.3803 32.6719 11.6136 31.8347C9.84697 30.9974 8.27025 29.8171 6.97812 28.3645L14.6648 16.2199V21.8397C14.6648 24.5249 15.7276 25.3988 16.6209 25.6432C17.5142 25.8875 18.8542 25.7105 20.3055 23.4429L24.5227 16.6961C24.6353 16.4992 24.7657 16.3122 24.9099 16.1364V19.5584C24.9099 22.0703 25.9373 24.0948 27.7075 25.071C28.5246 25.5093 29.447 25.7214 30.3767 25.6848C31.3064 25.6481 32.2086 25.3641 32.9876 24.8628C35.0323 23.5551 36.1306 21.265 35.9876 18.5075ZM31.3111 22.0417C31.0271 22.2344 30.696 22.3488 30.3521 22.3732C30.0082 22.3975 29.6639 22.3308 29.3549 22.18C28.6463 21.7624 28.2199 20.8212 28.2199 19.5297V15.5742C28.2199 13.6918 27.4759 12.3292 26.2018 11.9827C24.0394 11.3394 22.4122 13.971 21.8087 14.9484L17.9938 20.9845V13.5521C17.9584 11.843 17.3902 10.8308 16.3274 10.5154C15.6188 10.3072 14.556 10.4132 13.5298 11.949L4.99286 25.4188C3.85716 23.2866 3.26199 20.9154 3.25814 18.5075C3.25814 10.3758 9.88071 3.77987 17.9938 3.77987C26.1069 3.77987 32.7295 10.3758 32.7295 18.5075V18.5785C32.8142 20.1468 32.303 21.4059 31.3123 22.0317L31.3111 22.0417Z"
                    fill="white"
                  />
                </svg>

                <div>
                  <p>CEO</p>
                  <span>Прибыль в час</span>
                  <h6>
                    {" "}
                    <Coin width={12} /> +1.61K
                  </h6>
                </div>
              </div>
              <section>
                <p>lvl 13</p>
                <div>
                  <Coin width={20} />
                  <p>2K</p>
                </div>
              </section>
            </div>
            <div
              onClick={() => {
                setPopupState(2);
              }}
            >
              <div>
                <svg
                  width={36}
                  height={37}
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.9876 18.5075V18.4377C35.9522 8.56067 27.877 0.5 17.9938 0.5C8.11056 0.5 0 8.56067 0 18.5075C0 28.4555 8.07386 36.5 17.9938 36.5C22.5457 36.503 26.9236 34.7769 30.2166 31.6805C30.5409 31.3886 30.7342 30.9817 30.7541 30.5493C30.7739 30.1169 30.6185 29.6945 30.3222 29.3749C30.0259 29.0554 29.6129 28.8649 29.174 28.8454C28.7352 28.8258 28.3064 28.9789 27.9821 29.2708L27.9466 29.3057C26.5258 30.6365 24.8467 31.6707 23.01 32.3462C21.1734 33.0217 19.2172 33.3246 17.2588 33.2367C15.3005 33.1488 13.3803 32.6719 11.6136 31.8347C9.84697 30.9974 8.27025 29.8171 6.97812 28.3645L14.6648 16.2199V21.8397C14.6648 24.5249 15.7276 25.3988 16.6209 25.6432C17.5142 25.8875 18.8542 25.7105 20.3055 23.4429L24.5227 16.6961C24.6353 16.4992 24.7657 16.3122 24.9099 16.1364V19.5584C24.9099 22.0703 25.9373 24.0948 27.7075 25.071C28.5246 25.5093 29.447 25.7214 30.3767 25.6848C31.3064 25.6481 32.2086 25.3641 32.9876 24.8628C35.0323 23.5551 36.1306 21.265 35.9876 18.5075ZM31.3111 22.0417C31.0271 22.2344 30.696 22.3488 30.3521 22.3732C30.0082 22.3975 29.6639 22.3308 29.3549 22.18C28.6463 21.7624 28.2199 20.8212 28.2199 19.5297V15.5742C28.2199 13.6918 27.4759 12.3292 26.2018 11.9827C24.0394 11.3394 22.4122 13.971 21.8087 14.9484L17.9938 20.9845V13.5521C17.9584 11.843 17.3902 10.8308 16.3274 10.5154C15.6188 10.3072 14.556 10.4132 13.5298 11.949L4.99286 25.4188C3.85716 23.2866 3.26199 20.9154 3.25814 18.5075C3.25814 10.3758 9.88071 3.77987 17.9938 3.77987C26.1069 3.77987 32.7295 10.3758 32.7295 18.5075V18.5785C32.8142 20.1468 32.303 21.4059 31.3123 22.0317L31.3111 22.0417Z"
                    fill="white"
                  />
                </svg>

                <div>
                  <p>CEO</p>
                  <span>Прибыль в час</span>
                  <h6>
                    {" "}
                    <Coin width={12} /> +1.61K
                  </h6>
                </div>
              </div>
              <section>
                <p>lvl 13</p>
                <div>
                  <Coin width={20} />
                  <p>2K</p>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <>
            <div className="cards-menu">
              <a
                onClick={() => {
                  setCardsTab(1);
                }}
                className={cardsTab == 1 ? "sel" : ""}
              >
                Мои карточки
              </a>
              <a
                onClick={() => {
                  setCardsTab(2);
                }}
                className={cardsTab == 2 ? "sel" : ""}
              >
                Новые карточки
              </a>
              <a
                onClick={() => {
                  setCardsTab(3);
                }}
                className={cardsTab == 3 ? "sel" : ""}
              >
                {" "}
                Упущенные карточки
              </a>
            </div>
            <div className="cards-list">
              <div onClick={()=>{
                setPopupState(9);
              }}
                style={{
                  background:
                    "linear-gradient(180deg, #F34E4C 27.99%, rgba(12, 43, 43, 0.3) 112.39%)",
                }}
              >
                <img src={cat1} alt="" />
                <div>
                  <p>YouTube Gold Button</p>
                  <span>26 hours speed run</span>
                  <div>
                    {" "}
                    <span> Прибыль в час</span> <Coin width={12} /> <h6>2K</h6>{" "}
                  </div>
                </div>
                <section>
                  <p>lvl 13</p>
                  <div>
                    <Coin width={20} />
                    <p>2K</p>
                  </div>
                </section>
              </div>
              <div onClick={()=>{
                setPopupState(9);
              }}
                style={{
                  background:
                    "linear-gradient(180deg, #000000 27.99%, rgba(12, 43, 43, 0.3) 112.39%)",
                }}
              >
              <img src={cat1} alt="" />
                <div>
                  <p>YouTube Gold Button</p>
                  <span>26 hours speed run</span>
                  <div>
                    {" "}
                    <span> Прибыль в час</span> <Coin width={12} /> <h6>2K</h6>{" "}
                  </div>
                </div>
                <section>
                  <p>lvl 13</p>
                  <div>
                    <Coin width={20} />
                    <p>2K</p>
                  </div>
                </section>
              </div>
              <div onClick={()=>{
                setPopupState(9);
              }}
                style={{
                  background:
                    "linear-gradient(180deg, #15CFCF 27.99%, rgba(12, 43, 43, 0.3) 112.39%)",
                }}
              >
              <img src={cat1} alt="" />
                <div>
                  <p>YouTube Gold Button</p>
                  <span>26 hours speed run</span>
                  <div>
                    {" "}
                    <span> Прибыль в час</span> <Coin width={12} /> <h6>2K</h6>{" "}
                  </div>
                </div>
                <section>
                  <p>lvl 13</p>
                  <div>
                    <Coin width={20} />
                    <p>2K</p>
                  </div>
                </section>
              </div>
            </div>
          </>
        )} */}
      </div>
    </div>
  );

}