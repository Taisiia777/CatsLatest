import { useAtom } from "jotai";
import Coin from "../Coin";
import { popupStateAtom } from "../App";
import icon1 from '../assets/icon1.png'
export default function Earn () {
  const [popupState,setPopupState] = useAtom(popupStateAtom);
    return (
        <>
        <div className="airdrop-block">
    <svg className="animate__animated animate__bounceInDown animate__faster" width={313} height={313} viewBox="0 0 313 313" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_2016_32206)">
    <circle cx="156.5" cy="152.5" r="56.5" fill="#F9E160" />
    <g filter="url(#filter1_i_2016_32206)">
      <circle cx="156.5" cy="152.5" r="46.9237" fill="#FE881C" fillOpacity="0.72" />
    </g>
    <g filter="url(#filter2_d_2016_32206)">
      <path d="M154.333 184.102V177.747C147.5 177.229 142.158 174.781 138.305 170.404L142.777 164.049C145.941 167.532 149.793 169.627 154.333 170.333V156.706C152.178 156.141 150.389 155.599 148.968 155.082C147.546 154.517 146.056 153.74 144.496 152.752C142.937 151.716 141.745 150.398 140.919 148.798C140.14 147.15 139.75 145.22 139.75 143.008C139.75 139.383 141.08 136.3 143.74 133.758C146.4 131.216 149.931 129.757 154.333 129.38V122.814H159.837V129.451C165.386 130.063 169.994 132.181 173.663 135.806L169.054 141.948C166.532 139.407 163.459 137.759 159.837 137.006V149.151C161.533 149.621 162.978 150.068 164.17 150.492C165.363 150.916 166.67 151.528 168.091 152.328C169.559 153.081 170.728 153.928 171.6 154.87C172.471 155.764 173.205 156.941 173.801 158.4C174.397 159.86 174.695 161.507 174.695 163.343C174.695 167.203 173.434 170.474 170.912 173.157C168.435 175.793 164.744 177.323 159.837 177.747V184.102H154.333ZM164.858 168.074C165.959 166.897 166.509 165.579 166.509 164.12C166.509 162.66 165.936 161.483 164.789 160.589C163.643 159.648 161.992 158.847 159.837 158.188V170.404C162.084 170.027 163.758 169.25 164.858 168.074ZM148.005 142.443C148.005 144.702 150.114 146.444 154.333 147.668V136.653C152.361 136.841 150.802 137.477 149.656 138.559C148.555 139.595 148.005 140.889 148.005 142.443Z" fill="#FFEA7C" />
    </g>
    <g style={{mixBlendMode: 'overlay'}} opacity="0.5" filter="url(#filter3_f_2016_32206)">
      <circle cx="157.458" cy="136.22" r="30.6441" fill="white" />
    </g>
  </g>
  <defs>
    <filter id="filter0_d_2016_32206" x={0} y={0} width={313} height={313} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset dy={4} />
      <feGaussianBlur stdDeviation={50} />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.631373 0 0 0 0 0.184314 0 0 0 0.8 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2016_32206" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2016_32206" result="shape" />
    </filter>
    <filter id="filter1_i_2016_32206" x="109.577" y="105.576" width="93.8474" height="94.5593" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="0.711864" operator="erode" in="SourceAlpha" result="effect1_innerShadow_2016_32206" />
      <feOffset dy="0.711864" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2016_32206" />
    </filter>
    <filter id="filter2_d_2016_32206" x="138.305" y="122.814" width="36.3898" height={62} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset dy="0.711864" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2016_32206" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2016_32206" result="shape" />
    </filter>
    <filter id="filter3_f_2016_32206" x="109.73" y="88.4914" width="95.4576" height="95.4576" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
       <feGaussianBlur stdDeviation="8.54237" result="effect1_foregroundBlur_2016_32206" />
    </filter>
  </defs>
</svg>




<h4 style={{marginBottom: 32,textAlign: 'center'}} className="animate__animated animate__bounceInLeft animate__faster">Заработай больше монет</h4>

<h5 className="animate__animated animate__bounceInRight animate__faster" style={{fontWeight: 500,textAlign: 'left',fontSize: 18, lineHeight: '22px',marginBottom: 18, width: '100%'}}>Список заданий</h5>


    <button className="animate__animated animate__bounceInLeft animate__faster dark-btn">
   <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <rect width={42} height={42} fill="url(#pattern0_2016_32224)" />
  <defs>
    <pattern id="pattern0_2016_32224" patternContentUnits="objectBoundingBox" width={1} height={1}>
      <use xlinkHref="#image0_2016_32224" transform="scale(0.00390625)" />
    </pattern>
    <image id="image0_2016_32224" width={256} height={256} xlinkHref="data:image/png;base64,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" />
  </defs>
</svg>



<div>
    <p>Ежедневные новости</p>
    <span>
        <Coin width={20}  />
        <p>+567</p>
    </span>
</div>
<a>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8067 7.52671C11.8692 7.58868 11.9187 7.66242 11.9526 7.74366C11.9864 7.8249 12.0039 7.91203 12.0039 8.00004C12.0039 8.08805 11.9864 8.17519 11.9526 8.25643C11.9187 8.33767 11.8692 8.4114 11.8067 8.47337L6.47333 13.8067C6.41136 13.8692 6.33762 13.9188 6.25638 13.9526C6.17515 13.9865 6.08801 14.0039 6 14.0039C5.91199 14.0039 5.82485 13.9865 5.74362 13.9526C5.66238 13.9188 5.58864 13.8692 5.52667 13.8067C5.46418 13.7447 5.41459 13.671 5.38074 13.5898C5.34689 13.5085 5.32947 13.4214 5.32947 13.3334C5.32947 13.2454 5.34689 13.1582 5.38074 13.077C5.41459 12.9958 5.46418 12.922 5.52667 12.86L10.3933 8.00004L5.52667 3.14004C5.40113 3.01451 5.33061 2.84424 5.33061 2.66671C5.33061 2.48917 5.40113 2.31891 5.52667 2.19338C5.6522 2.06784 5.82247 1.99731 6 1.99731C6.17753 1.99731 6.3478 2.06784 6.47333 2.19338L11.8067 7.52671Z" fill="white"/>
</svg>

</a>
    </button>
    <h5 className="animate__animated animate__bounceInRight animate__faster" style={{marginTop: 14,fontWeight: 500,textAlign: 'left',fontSize: 18, lineHeight: '22px',marginBottom: 18, width: '100%'}}>Ежедневные задания</h5>


<button className="animate__animated animate__bounceInLeft animate__faster dark-btn" onClick={()=>{
  setPopupState(3)
}}>
<img src={icon1} style={{transform: 'scale(1.5)',width: 42, height: 42}} alt="" />





<div >
<p>Ежедневные награды</p>
<span>
    <Coin width={20}  />
    <p>+567</p>
</span>
</div>
<a>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8067 7.52671C11.8692 7.58868 11.9187 7.66242 11.9526 7.74366C11.9864 7.8249 12.0039 7.91203 12.0039 8.00004C12.0039 8.08805 11.9864 8.17519 11.9526 8.25643C11.9187 8.33767 11.8692 8.4114 11.8067 8.47337L6.47333 13.8067C6.41136 13.8692 6.33762 13.9188 6.25638 13.9526C6.17515 13.9865 6.08801 14.0039 6 14.0039C5.91199 14.0039 5.82485 13.9865 5.74362 13.9526C5.66238 13.9188 5.58864 13.8692 5.52667 13.8067C5.46418 13.7447 5.41459 13.671 5.38074 13.5898C5.34689 13.5085 5.32947 13.4214 5.32947 13.3334C5.32947 13.2454 5.34689 13.1582 5.38074 13.077C5.41459 12.9958 5.46418 12.922 5.52667 12.86L10.3933 8.00004L5.52667 3.14004C5.40113 3.01451 5.33061 2.84424 5.33061 2.66671C5.33061 2.48917 5.40113 2.31891 5.52667 2.19338C5.6522 2.06784 5.82247 1.99731 6 1.99731C6.17753 1.99731 6.3478 2.06784 6.47333 2.19338L11.8067 7.52671Z" fill="white"/>
</svg>

</a>
</button>
<h5 className="animate__animated animate__bounceInRight animate__faster" style={{marginTop: 14,fontWeight: 500,textAlign: 'left',fontSize: 18, lineHeight: '22px',marginBottom: 16, width: '100%'}}>Список заданий</h5>


    <button className="animate__animated animate__bounceInLeft animate__faster dark-btn">
   <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_2016_32273)">
    <path d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="url(#paint0_linear_2016_32273)" />
    <path d="M14.2151 22.5351L16.7066 29.4311C16.7066 29.4311 17.0181 30.0764 17.3516 30.0764C17.6852 30.0764 22.6462 24.9153 22.6462 24.9153L28.1631 14.2595L14.304 20.755L14.2151 22.5351Z" fill="#C8DAEA" />
    <path d="M17.5185 24.3037L17.0402 29.3868C17.0402 29.3868 16.84 30.9443 18.3972 29.3868C19.9543 27.8293 21.4448 26.6282 21.4448 26.6282" fill="#A9C6D8" />
    <path d="M14.26 22.7811L9.13495 21.1113C9.13495 21.1113 8.52245 20.8628 8.71967 20.2993C8.76027 20.1831 8.84217 20.0842 9.08717 19.9143C10.2227 19.1228 30.1057 11.9763 30.1057 11.9763C30.1057 11.9763 30.6671 11.7871 30.9982 11.9129C31.0801 11.9383 31.1538 11.9849 31.2118 12.0481C31.2698 12.1113 31.3099 12.1888 31.3281 12.2726C31.3639 12.4206 31.3788 12.5728 31.3725 12.7249C31.371 12.8565 31.355 12.9785 31.343 13.1698C31.2219 15.1237 27.598 29.7061 27.598 29.7061C27.598 29.7061 27.3811 30.5594 26.6043 30.5886C26.4134 30.5948 26.2232 30.5624 26.0451 30.4935C25.8669 30.4246 25.7045 30.3205 25.5674 30.1875C24.043 28.8762 18.7741 25.3353 17.6098 24.5565C17.5836 24.5386 17.5615 24.5153 17.545 24.4881C17.5285 24.461 17.518 24.4306 17.5143 24.399C17.498 24.3169 17.5873 24.2153 17.5873 24.2153C17.5873 24.2153 26.7618 16.0603 27.0059 15.2042C27.0248 15.1378 26.9534 15.1051 26.8575 15.1342C26.2482 15.3583 15.6848 22.0292 14.519 22.7654C14.4351 22.7908 14.3464 22.7962 14.26 22.7811Z" fill="white" />
  </g>
  <defs>
    <linearGradient id="paint0_linear_2016_32273" x1={21} y1={42} x2={21} y2={0} gradientUnits="userSpaceOnUse">
      <stop stopColor="#1D93D2" />
      <stop offset={1} stopColor="#38B0E3" />
    </linearGradient>
    <clipPath id="clip0_2016_32273">
      <rect width={42} height={42} fill="white" />
    </clipPath>
  </defs>
</svg>




<div>
    <p>Подписывайся на наш Telegram</p>
    <span>
        <Coin width={20}  />
        <p>+567</p>
    </span>
</div>
<a>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8067 7.52671C11.8692 7.58868 11.9187 7.66242 11.9526 7.74366C11.9864 7.8249 12.0039 7.91203 12.0039 8.00004C12.0039 8.08805 11.9864 8.17519 11.9526 8.25643C11.9187 8.33767 11.8692 8.4114 11.8067 8.47337L6.47333 13.8067C6.41136 13.8692 6.33762 13.9188 6.25638 13.9526C6.17515 13.9865 6.08801 14.0039 6 14.0039C5.91199 14.0039 5.82485 13.9865 5.74362 13.9526C5.66238 13.9188 5.58864 13.8692 5.52667 13.8067C5.46418 13.7447 5.41459 13.671 5.38074 13.5898C5.34689 13.5085 5.32947 13.4214 5.32947 13.3334C5.32947 13.2454 5.34689 13.1582 5.38074 13.077C5.41459 12.9958 5.46418 12.922 5.52667 12.86L10.3933 8.00004L5.52667 3.14004C5.40113 3.01451 5.33061 2.84424 5.33061 2.66671C5.33061 2.48917 5.40113 2.31891 5.52667 2.19338C5.6522 2.06784 5.82247 1.99731 6 1.99731C6.17753 1.99731 6.3478 2.06784 6.47333 2.19338L11.8067 7.52671Z" fill="white"/>
</svg>

</a>
    </button>
    <button className="animate__animated animate__bounceInRight animate__faster dark-btn">
   <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_2016_32297)">
    <path d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="black" />
    <path d="M9.19692 10.0538L18.2457 22.1527L9.13989 31.9896H11.1894L19.1617 23.377L25.6029 31.9896H32.5769L23.0188 19.2104L31.4946 10.0538H29.4451L22.1032 17.9856L16.171 10.0538H9.19692ZM12.2108 11.5633H15.4147L29.5627 30.4801H26.3588L12.2108 11.5633Z" fill="white" />
  </g>
  <defs>
    <clipPath id="clip0_2016_32297">
      <rect width={42} height={42} fill="white" />
    </clipPath>
  </defs>
</svg>






<div>
    <p>Следи за нашим аккаунтом в X</p>
    <span>
        <Coin width={20}  />
        <p>+567</p>
    </span>
</div>
<a>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8067 7.52671C11.8692 7.58868 11.9187 7.66242 11.9526 7.74366C11.9864 7.8249 12.0039 7.91203 12.0039 8.00004C12.0039 8.08805 11.9864 8.17519 11.9526 8.25643C11.9187 8.33767 11.8692 8.4114 11.8067 8.47337L6.47333 13.8067C6.41136 13.8692 6.33762 13.9188 6.25638 13.9526C6.17515 13.9865 6.08801 14.0039 6 14.0039C5.91199 14.0039 5.82485 13.9865 5.74362 13.9526C5.66238 13.9188 5.58864 13.8692 5.52667 13.8067C5.46418 13.7447 5.41459 13.671 5.38074 13.5898C5.34689 13.5085 5.32947 13.4214 5.32947 13.3334C5.32947 13.2454 5.34689 13.1582 5.38074 13.077C5.41459 12.9958 5.46418 12.922 5.52667 12.86L10.3933 8.00004L5.52667 3.14004C5.40113 3.01451 5.33061 2.84424 5.33061 2.66671C5.33061 2.48917 5.40113 2.31891 5.52667 2.19338C5.6522 2.06784 5.82247 1.99731 6 1.99731C6.17753 1.99731 6.3478 2.06784 6.47333 2.19338L11.8067 7.52671Z" fill="white"/>
</svg>

</a>
    </button>
</div>

        </>
    )
}