import { useAtom } from "jotai"
import { popupStateAtom } from "../App"
import Coin from "../Coin";
import money from '../assets/money.png'
import rocket from '../assets/rocket.png'
import cat1 from '../assets/cat1.png'
import cat_money from '../assets/cat_money.png'

import charge from '../assets/charge.png'
import hand from '../assets/hand.png'
export default function Popup () {
    const closePopup = () => {
        setPopupState(false);
    }
    const coinAnim = () => {
      setPopupState(false);
      if (!document.querySelector('.Animation--Path'))return;
      document.querySelector('.Animation--Path').classList.add('shown');
      setTimeout(()=>{
        document.querySelector('.Animation--Path').classList.add('animate');
        
      },10);
       setTimeout(()=>{
        document.querySelector('.Animation--Path').classList.remove('shown');
        document.querySelector('.Animation--Path').classList.remove('animate');
      
      },2100)

    }
    const [popupState,setPopupState] = useAtom(popupStateAtom);
    return (
        <>
        {
            popupState == 1 && <>
            <div className="popup-fs"  onClick={closePopup}>
            <div className="PopupBlock"  onClick={(e)=>{
e.stopPropagation();
e.preventDefault();
            }}>
                <nav onClick={closePopup} className="close-btn">
             <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.71 16.2899C17.8983 16.4782 18.0041 16.7336 18.0041 16.9999C18.0041 17.2662 17.8983 17.5216 17.71 17.7099C17.5217 17.8982 17.2663 18.004 17 18.004C16.7337 18.004 16.4783 17.8982 16.29 17.7099L12 13.4099L7.71 17.7099C7.5217 17.8982 7.2663 18.004 7 18.004C6.7337 18.004 6.47831 17.8982 6.29 17.7099C6.1017 17.5216 5.99591 17.2662 5.99591 16.9999C5.99591 16.7336 6.1017 16.4782 6.29 16.2899L10.59 11.9999L6.29 7.70994C6.1017 7.52164 5.99591 7.26624 5.99591 6.99994C5.99591 6.73364 6.1017 6.47825 6.29 6.28994C6.47831 6.10164 6.7337 5.99585 7 5.99585C7.2663 5.99585 7.5217 6.10164 7.71 6.28994L12 10.5899L16.29 6.28994C16.4783 6.10164 16.7337 5.99585 17 5.99585C17.2663 5.99585 17.5217 6.10164 17.71 6.28994C17.8983 6.47825 18.0041 6.73364 18.0041 6.99994C18.0041 7.26624 17.8983 7.52164 17.71 7.70994L13.41 11.9999L17.71 16.2899Z" fill="white" />
</svg>


                </nav>
                <div className="balance-display">
                    <section>
       <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.6228 15.9671L19.0031 8.58984L26.3864 15.9731L30.6783 11.6782L19.0031 0L7.32788 11.6752L11.6228 15.9671Z" fill="#F3BA2F" />
  <path d="M0 19.0006L4.29335 14.7073L8.5867 19.0006L4.29335 23.294L0 19.0006Z" fill="#F3BA2F" />
  <path d="M11.6227 22.0328L19.003 29.4131L26.3863 22.0298L30.6812 26.3187L30.6782 26.3217L19.003 37.9999L7.32778 26.3277L7.32178 26.3217L11.6227 22.0328Z" fill="#F3BA2F" />
  <path d="M29.4124 19.0017L33.7057 14.7084L37.9991 19.0017L33.7057 23.2951L29.4124 19.0017Z" fill="#F3BA2F" />
  <path d="M23.358 18.9986L19.003 14.6406L15.7826 17.8611L15.4104 18.2302L14.6481 18.9926L14.6421 18.9986L14.6481 19.0076L19.003 23.3595L23.358 19.0016L23.361 18.9986H23.358Z" fill="#F3BA2F" />
</svg>


                    </section>
                    <span>
<svg width={52} height={52} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx={26} cy={26} r={26} fill="#F9E160" />
  <g filter="url(#filter0_i_2016_21902)">
    <circle cx="26.0002" cy={26} r="21.5932" fill="#FE881C" fillOpacity="0.72" />
  </g>
  <g filter="url(#filter1_d_2016_21902)">
    <path d="M25.0029 40.5424V37.6181C21.8585 37.3798 19.3999 36.2534 17.6272 34.2389L19.6848 31.3145C21.141 32.9175 22.9137 33.8814 25.0029 34.2064V27.9353C24.0111 27.6754 23.188 27.4263 22.5338 27.188C21.8796 26.9281 21.1937 26.5707 20.4762 26.1158C19.7587 25.6392 19.21 25.0327 18.8301 24.2962C18.4713 23.538 18.292 22.6499 18.292 21.6318C18.292 19.9639 18.904 18.545 20.128 17.3753C21.352 16.2056 22.977 15.5341 25.0029 15.3608V12.339H27.5354V15.3933C30.0889 15.6749 32.2098 16.6496 33.8981 18.3176L31.7772 21.1444C30.6165 19.9747 29.2026 19.2165 27.5354 18.87V24.4586C28.3162 24.6753 28.981 24.8811 29.5297 25.076C30.0784 25.271 30.6798 25.5526 31.334 25.9208C32.0093 26.2674 32.5475 26.6573 32.9485 27.0905C33.3494 27.5021 33.6871 28.0436 33.9614 28.7152C34.2358 29.3867 34.373 30.1448 34.373 30.9896C34.373 32.7659 33.7926 34.2713 32.6319 35.5061C31.4923 36.7191 29.7935 37.4231 27.5354 37.6181V40.5424H25.0029ZM29.8462 33.1666C30.3527 32.6251 30.606 32.0185 30.606 31.347C30.606 30.6755 30.3422 30.134 29.8146 29.7224C29.287 29.2892 28.5272 28.9209 27.5354 28.6177V34.2389C28.5695 34.0656 29.3397 33.7081 29.8462 33.1666ZM22.0906 21.3719C22.0906 22.4116 23.0614 23.2131 25.0029 23.7763V18.7075C24.0955 18.7941 23.3779 19.0866 22.8504 19.5848C22.3439 20.0613 22.0906 20.657 22.0906 21.3719Z" fill="#FFEA7C" />
  </g>
  <defs>
    <filter id="filter0_i_2016_21902" x="4.40698" y="4.40674" width="43.1865" height="43.8983" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="0.711864" operator="erode" in="SourceAlpha" result="effect1_innerShadow_2016_21902" />
      <feOffset dy="0.711864" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2016_21902" />
    </filter>
    <filter id="filter1_d_2016_21902" x="17.6272" y="12.339" width="16.7458" height="28.9152" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset dy="0.711864" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2016_21902" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2016_21902" result="shape" />
    </filter>
  </defs>
</svg>



<p>50.29K</p>
                    </span>
                    <h5>Биржа начала работать для вас</h5>
                </div>
                <a onClick={coinAnim} className="btn">
                    Получить
                </a>
            </div>
            </div>
            </>
            
        }
         {
            popupState == 2 && <>
            <div className="popup-fs" onClick={closePopup}>
            <div className="PopupBlock"  onClick={(e)=>{
e.stopPropagation();
e.preventDefault();
            }}>
                <nav onClick={closePopup} className="close-btn">
             <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.71 16.2899C17.8983 16.4782 18.0041 16.7336 18.0041 16.9999C18.0041 17.2662 17.8983 17.5216 17.71 17.7099C17.5217 17.8982 17.2663 18.004 17 18.004C16.7337 18.004 16.4783 17.8982 16.29 17.7099L12 13.4099L7.71 17.7099C7.5217 17.8982 7.2663 18.004 7 18.004C6.7337 18.004 6.47831 17.8982 6.29 17.7099C6.1017 17.5216 5.99591 17.2662 5.99591 16.9999C5.99591 16.7336 6.1017 16.4782 6.29 16.2899L10.59 11.9999L6.29 7.70994C6.1017 7.52164 5.99591 7.26624 5.99591 6.99994C5.99591 6.73364 6.1017 6.47825 6.29 6.28994C6.47831 6.10164 6.7337 5.99585 7 5.99585C7.2663 5.99585 7.5217 6.10164 7.71 6.28994L12 10.5899L16.29 6.28994C16.4783 6.10164 16.7337 5.99585 17 5.99585C17.2663 5.99585 17.5217 6.10164 17.71 6.28994C17.8983 6.47825 18.0041 6.73364 18.0041 6.99994C18.0041 7.26624 17.8983 7.52164 17.71 7.70994L13.41 11.9999L17.71 16.2899Z" fill="white" />
</svg>


                </nav>
          <svg style={{marginBottom: '32px'}} width={90} height={90} viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M89.969 45.0187V44.8442C89.8804 20.1517 69.6926 0 44.9845 0C20.2764 0 0 20.1517 0 45.0187C0 69.8888 20.1847 90 44.9845 90C56.3643 90.0076 67.309 85.6921 75.5414 77.9514C76.3523 77.2215 76.8356 76.2042 76.8851 75.1232C76.9347 74.0423 76.5463 72.9862 75.8056 72.1873C75.0648 71.3884 74.0322 70.9122 72.9351 70.8634C71.8379 70.8146 70.766 71.1972 69.9551 71.9271L69.8666 72.0143C66.3145 75.3413 62.1167 77.9268 57.5251 79.6155C52.9336 81.3043 48.043 82.0616 43.1471 81.8418C38.2511 81.622 33.4507 80.4298 29.0341 78.3367C24.6174 76.2436 20.6756 73.2927 17.4453 69.6613L36.662 39.2998V53.3493C36.662 60.0623 39.3191 62.247 41.5524 62.8579C43.7856 63.4687 47.1355 63.0262 50.7637 57.3572L61.3068 40.4903C61.5884 39.9979 61.9142 39.5304 62.2748 39.091V47.646C62.2748 53.9258 64.8433 58.9871 69.2687 61.4274C71.3116 62.5233 73.6175 63.0536 75.9417 62.9619C78.2659 62.8703 80.5215 62.1601 82.4689 60.9069C87.5807 57.6376 90.3264 51.9125 89.969 45.0187ZM78.2776 53.8541C77.5677 54.3359 76.74 54.6221 75.8802 54.6829C75.0204 54.7437 74.1597 54.577 73.3873 54.2001C71.6158 53.156 70.5498 50.803 70.5498 47.5743V37.6854C70.5498 32.9794 68.6898 29.573 65.5045 28.7066C60.0985 27.0985 56.0305 33.6775 54.5217 36.1209L44.9845 51.2113V32.6304C44.8959 28.3576 43.4756 25.8269 40.8185 25.0384C39.0471 24.518 36.39 24.7829 33.8246 28.6225L12.4822 62.2969C9.64291 56.9666 8.15497 51.0385 8.14535 45.0187C8.14535 24.6894 24.7018 8.19967 44.9845 8.19967C65.2672 8.19967 81.8236 24.6894 81.8236 45.0187V45.1963C82.0356 49.117 80.7576 52.2647 78.2808 53.8292L78.2776 53.8541Z" fill="white" />
</svg>
<h4 style={{marginBottom: '14px'}}>CoinMarketCap CO</h4>
<p style={{marginBottom: '16px', textAlign: 'center'}}>Расширьте присутствие своей биржи на CoinMarketCap</p>
<div style={{marginBottom: 20,display: 'flex', gap: 8, flexDirection: 'column', alignItems: 'center'}}>
  <span style={{fontSize: 12}}>Прибыль в час</span>
  <div style={{display: 'flex',gap: 4, alignItems: 'center'}}>
    <Coin width={20} />
    <span style={{fontSize: 14, fontWeight: 600}}> +567</span>
  </div>
</div>
<div style={{marginBottom: 16,display: 'flex',gap: 12, alignItems: 'center'}}>
    <Coin width={32} />
    <span style={{fontSize: 24, fontWeight: 700}}> 1200</span>
  </div>
                <a onClick={coinAnim} className="btn">
                    Получить
                </a>
            </div>
            </div>
            </>
            
        }
        {
          popupState == 3 && <>
             <div className="popup-fs" onClick={closePopup}>
            <div className="PopupBlock"  onClick={(e)=>{
e.stopPropagation();
e.preventDefault();
            }}>
                <nav onClick={closePopup} className="close-btn">
             <svg  width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.71 16.2899C17.8983 16.4782 18.0041 16.7336 18.0041 16.9999C18.0041 17.2662 17.8983 17.5216 17.71 17.7099C17.5217 17.8982 17.2663 18.004 17 18.004C16.7337 18.004 16.4783 17.8982 16.29 17.7099L12 13.4099L7.71 17.7099C7.5217 17.8982 7.2663 18.004 7 18.004C6.7337 18.004 6.47831 17.8982 6.29 17.7099C6.1017 17.5216 5.99591 17.2662 5.99591 16.9999C5.99591 16.7336 6.1017 16.4782 6.29 16.2899L10.59 11.9999L6.29 7.70994C6.1017 7.52164 5.99591 7.26624 5.99591 6.99994C5.99591 6.73364 6.1017 6.47825 6.29 6.28994C6.47831 6.10164 6.7337 5.99585 7 5.99585C7.2663 5.99585 7.5217 6.10164 7.71 6.28994L12 10.5899L16.29 6.28994C16.4783 6.10164 16.7337 5.99585 17 5.99585C17.2663 5.99585 17.5217 6.10164 17.71 6.28994C17.8983 6.47825 18.0041 6.73364 18.0041 6.99994C18.0041 7.26624 17.8983 7.52164 17.71 7.70994L13.41 11.9999L17.71 16.2899Z" fill="white" />
</svg>


                </nav>
     <img style={{marginTop: -16, width: 96}} src={money} alt="" />
<h4 style={{textAlign: 'center',fontWeight: '600', fontSize: 26, lineHeight: '28px', marginBottom: '14px'}} className="animate__animated animate__fadeInRight ">Ежедневная награда</h4>
<p style={{fontSize: 14, lineHeight: '16.8px', marginBottom: 20, textAlign: 'center'}} className="animate__animated animate__fadeInLeft ">Получайте монеты за ежедневный вход в игру без пропусков. Необходимо нажимать кнопку «Забрать» каждый день, иначе счетчик дней начнёт отсчёт заново</p>
                <div  className="animate__animated 
                animate__fadeIn
                
                daily_rewards-list">
                  <div  className="act">
                    <span>День 1</span>
                    <Coin width={32} />
                    <span>500</span>
                  </div>
                  
                  <div>
                    <span>День 2</span>
                    <Coin width={32} />
                    <span>1K</span>
                  </div>
                  <div>
                    <span>День 3</span>
                    <Coin width={32} />
                    <span>2,5K</span>
                  </div>
                  <div>
                    <span>День 4</span>
                    <Coin width={32} />
                    <span>5K</span>
                  </div>
                  <div>
                    <span>День 5</span>
                    <Coin width={32} />
                    <span>15K</span>
                  </div>
                  <div>
                    <span>День 6</span>
                    <Coin width={32} />
                    <span>25K</span>
                  </div>
                  <div>
                    <span>День 7</span>
                    <Coin width={32} />
                    <span>100K</span>
                  </div>
                  <div>
                    <span>День 8</span>
                    <Coin width={32} />
                    <span>500K</span>
                  </div>
                  <div>
                    <span>День 9</span>
                    <Coin width={32} />
                    <span>750K</span>
                  </div>
                 
                </div>
                <a onClick={coinAnim} className="btn animate__fadeIn animate__animated">
                    Получить
                </a>
            </div>
            </div>
          </>
        }
          {
            popupState == 4 && <>
            <div className="popup-fs" onClick={closePopup}>
            <div className="PopupBlock"  onClick={(e)=>{
e.stopPropagation();
e.preventDefault();
            }}>
                <nav onClick={closePopup} className="close-btn">
             <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.71 16.2899C17.8983 16.4782 18.0041 16.7336 18.0041 16.9999C18.0041 17.2662 17.8983 17.5216 17.71 17.7099C17.5217 17.8982 17.2663 18.004 17 18.004C16.7337 18.004 16.4783 17.8982 16.29 17.7099L12 13.4099L7.71 17.7099C7.5217 17.8982 7.2663 18.004 7 18.004C6.7337 18.004 6.47831 17.8982 6.29 17.7099C6.1017 17.5216 5.99591 17.2662 5.99591 16.9999C5.99591 16.7336 6.1017 16.4782 6.29 16.2899L10.59 11.9999L6.29 7.70994C6.1017 7.52164 5.99591 7.26624 5.99591 6.99994C5.99591 6.73364 6.1017 6.47825 6.29 6.28994C6.47831 6.10164 6.7337 5.99585 7 5.99585C7.2663 5.99585 7.5217 6.10164 7.71 6.28994L12 10.5899L16.29 6.28994C16.4783 6.10164 16.7337 5.99585 17 5.99585C17.2663 5.99585 17.5217 6.10164 17.71 6.28994C17.8983 6.47825 18.0041 6.73364 18.0041 6.99994C18.0041 7.26624 17.8983 7.52164 17.71 7.70994L13.41 11.9999L17.71 16.2899Z" fill="white" />
</svg>


                </nav>
     <img src={cat1} style={{width: 120, height: 120}} alt="" />


<h4 style={{marginBottom: '14px'}}>CoinMarketCap CO</h4>
<p style={{marginBottom: '16px', textAlign: "center"}}>Для этого нам нужно 10 миллионов подписчиков.Можем ли мы попросить вас о помощи, СЕО?</p>
<a style={{maxWidth: 271, padding: '14px 0', fontSize: 16, fontWeight: 600, marginBottom: 24}} className="btn">
Смотрите наши новые Shorts
</a>
<div style={{marginBottom: 20,display: 'flex', gap: 8, flexDirection: 'column', alignItems: 'center'}}>
  <span style={{fontSize: 12}}>Прибыль в час</span>
  <div style={{display: 'flex',gap: 4, alignItems: 'center'}}>
    <Coin width={20} />
    <span style={{fontSize: 14, fontWeight: 600}}> +567</span>
  </div>
</div>
<div style={{marginBottom: 16,display: 'flex',gap: 12, alignItems: 'center'}}>
    <Coin width={32} />
    <span style={{fontSize: 24, fontWeight: 700}}> 1200</span>
  </div>
                <a onClick={closePopup} className="btn">
                    Получить
                </a>
            </div>
            </div>
            </>
            
        }
           {
            popupState == 5 && <>
            <div className="popup-fs" onClick={closePopup}>
            <div className="PopupBlock"  onClick={(e)=>{
e.stopPropagation();
e.preventDefault();
            }}>
                <nav onClick={closePopup} className="close-btn">
             <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.71 16.2899C17.8983 16.4782 18.0041 16.7336 18.0041 16.9999C18.0041 17.2662 17.8983 17.5216 17.71 17.7099C17.5217 17.8982 17.2663 18.004 17 18.004C16.7337 18.004 16.4783 17.8982 16.29 17.7099L12 13.4099L7.71 17.7099C7.5217 17.8982 7.2663 18.004 7 18.004C6.7337 18.004 6.47831 17.8982 6.29 17.7099C6.1017 17.5216 5.99591 17.2662 5.99591 16.9999C5.99591 16.7336 6.1017 16.4782 6.29 16.2899L10.59 11.9999L6.29 7.70994C6.1017 7.52164 5.99591 7.26624 5.99591 6.99994C5.99591 6.73364 6.1017 6.47825 6.29 6.28994C6.47831 6.10164 6.7337 5.99585 7 5.99585C7.2663 5.99585 7.5217 6.10164 7.71 6.28994L12 10.5899L16.29 6.28994C16.4783 6.10164 16.7337 5.99585 17 5.99585C17.2663 5.99585 17.5217 6.10164 17.71 6.28994C17.8983 6.47825 18.0041 6.73364 18.0041 6.99994C18.0041 7.26624 17.8983 7.52164 17.71 7.70994L13.41 11.9999L17.71 16.2899Z" fill="white" />
</svg>


                </nav>
     <img src={rocket} style={{position: 'relative',zIndex: 100,marginTop: -4, width: 116,marginBottom: 48}} alt="" />
     <div style={{zIndex: 99,position: 'absolute', top: 65, left: 'calc(50% - 35px)', width: 70, height: 70, background: '#12B0B0', filter: 'blur(30px)'}}></div>
<h4 style={{textAlign: 'center',marginTop: -32,marginBottom: 32}}>Увеличьте вашу прибыль</h4>
<p style={{textAlign: 'center',marginBottom: 46}}>Перейдите в меню добычи и купите
улучшения для вашей биржи, что бы увеличить</p>
<p style={{textAlign: 'center',marginBottom: 32}}>Зарабатывайте в оффлайне в течении 3 часов</p>
                <a onClick={closePopup} className="btn">
                    Начать добычу
                </a>
            </div>
            </div>
            </>
            
        }
          {
            popupState == 6 && <>
            <div className="popup-fs" onClick={closePopup}>
            <div className="PopupBlock"  onClick={(e)=>{
e.stopPropagation();
e.preventDefault();
            }}>
                <nav onClick={closePopup} className="close-btn">
             <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.71 16.2899C17.8983 16.4782 18.0041 16.7336 18.0041 16.9999C18.0041 17.2662 17.8983 17.5216 17.71 17.7099C17.5217 17.8982 17.2663 18.004 17 18.004C16.7337 18.004 16.4783 17.8982 16.29 17.7099L12 13.4099L7.71 17.7099C7.5217 17.8982 7.2663 18.004 7 18.004C6.7337 18.004 6.47831 17.8982 6.29 17.7099C6.1017 17.5216 5.99591 17.2662 5.99591 16.9999C5.99591 16.7336 6.1017 16.4782 6.29 16.2899L10.59 11.9999L6.29 7.70994C6.1017 7.52164 5.99591 7.26624 5.99591 6.99994C5.99591 6.73364 6.1017 6.47825 6.29 6.28994C6.47831 6.10164 6.7337 5.99585 7 5.99585C7.2663 5.99585 7.5217 6.10164 7.71 6.28994L12 10.5899L16.29 6.28994C16.4783 6.10164 16.7337 5.99585 17 5.99585C17.2663 5.99585 17.5217 6.10164 17.71 6.28994C17.8983 6.47825 18.0041 6.73364 18.0041 6.99994C18.0041 7.26624 17.8983 7.52164 17.71 7.70994L13.41 11.9999L17.71 16.2899Z" fill="white" />
</svg>


                </nav>
<svg width={116} height={116} viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M92.9839 43.8857L73.9498 43.6745C72.3959 43.6572 71.2919 42.5993 71.5161 41.3423L75.6484 18.1742C76.6653 16.5512 76.2139 14.6299 74.4544 13.6236C72.4541 12.481 69.5225 12.9525 67.9059 14.6783L21.8133 63.9124C20.1974 65.6386 20.5091 67.9652 22.5092 69.109C23.219 69.5161 24.0828 69.7332 24.9923 69.7331C25.1579 69.7331 25.3238 69.723 25.4895 69.7089C25.6528 69.7232 25.8187 69.7317 25.9885 69.7317H40.2099C41.9369 69.7317 43.0867 71.005 42.5981 72.3762L33.4934 97.9349C32.2342 99.5291 32.483 101.56 34.1876 102.699C34.936 103.2 35.8937 103.472 36.9115 103.471C38.3049 103.471 39.7423 102.965 40.7677 102.001L95.7221 50.3342C96.2287 49.8581 96.5961 49.3011 96.7933 48.7104C96.9515 48.3852 97.0628 48.0424 97.1102 47.6864C97.3881 45.6156 95.5404 43.9141 92.9839 43.8857Z" fill="url(#paint0_linear_4327_4157)" />
  <defs>
    <linearGradient id="paint0_linear_4327_4157" x1="64.085" y1={13} x2="77.1842" y2="74.6508" gradientUnits="userSpaceOnUse">
      <stop stopColor="#F7C243" />
      <stop offset={1} stopColor="#FD902B" />
    </linearGradient>
  </defs>
</svg>


<h4 style={{marginTop: 32,marginBottom: 10}}>Увеличьте вашу прибыль</h4>
<p style={{textAlign: 'center',marginBottom: 20}}>Перейдите в меню добычи и купите
улучшения для вашей биржи, что бы увеличить</p>
<span style={{display: 'flex', alignItems: 'center', gap: 12}}>
  <Coin width={38}/> <h3>Бесплатно</h3>
</span>
                <a onClick={coinAnim} className="btn">
          Получить
                </a>
            </div>
            </div>
            </>
            
        }
         {
            popupState == 7 && <>
            <div className="popup-fs" onClick={closePopup}>
            <div className="PopupBlock"  onClick={(e)=>{
e.stopPropagation();
e.preventDefault();
            }}>
                <nav onClick={closePopup} className="close-btn">
             <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.71 16.2899C17.8983 16.4782 18.0041 16.7336 18.0041 16.9999C18.0041 17.2662 17.8983 17.5216 17.71 17.7099C17.5217 17.8982 17.2663 18.004 17 18.004C16.7337 18.004 16.4783 17.8982 16.29 17.7099L12 13.4099L7.71 17.7099C7.5217 17.8982 7.2663 18.004 7 18.004C6.7337 18.004 6.47831 17.8982 6.29 17.7099C6.1017 17.5216 5.99591 17.2662 5.99591 16.9999C5.99591 16.7336 6.1017 16.4782 6.29 16.2899L10.59 11.9999L6.29 7.70994C6.1017 7.52164 5.99591 7.26624 5.99591 6.99994C5.99591 6.73364 6.1017 6.47825 6.29 6.28994C6.47831 6.10164 6.7337 5.99585 7 5.99585C7.2663 5.99585 7.5217 6.10164 7.71 6.28994L12 10.5899L16.29 6.28994C16.4783 6.10164 16.7337 5.99585 17 5.99585C17.2663 5.99585 17.5217 6.10164 17.71 6.28994C17.8983 6.47825 18.0041 6.73364 18.0041 6.99994C18.0041 7.26624 17.8983 7.52164 17.71 7.70994L13.41 11.9999L17.71 16.2899Z" fill="white" />
</svg>


                </nav>
     <img style={{width: 120, height: 120}} src={hand} alt="" />






<h4 style={{marginTop: 32,marginBottom: 10}}>Multitap</h4>
<p style={{textAlign: 'center',marginBottom: 20}}>Увеличивает количество монет, которые вы можете заработать за одно нажатие</p>
 <p  style={{textAlign: 'center',marginBottom: 20}}>+1 монет за тап для 2 уровня</p>
<span style={{display: 'flex', alignItems: 'center', gap: 12}}>
  <Coin width={38}/> <h3 style={{fontSize: 28,display: 'flex', alignItems: 'center'}}>2 000 <p style={{fontSize: 28, fontWeight: 400,opacity: .5,marginLeft: 6  }}> • 2 lvl</p> </h3>
</span>
                <a onClick={coinAnim} className="btn">
          Получить
                </a>
            </div>
            </div>
            </>
            
        }
         {
            popupState == 8 && <>
            <div className="popup-fs" onClick={closePopup}>
            <div className="PopupBlock"  onClick={(e)=>{
e.stopPropagation();
e.preventDefault();
            }}>
                <nav onClick={closePopup} className="close-btn">
             <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.71 16.2899C17.8983 16.4782 18.0041 16.7336 18.0041 16.9999C18.0041 17.2662 17.8983 17.5216 17.71 17.7099C17.5217 17.8982 17.2663 18.004 17 18.004C16.7337 18.004 16.4783 17.8982 16.29 17.7099L12 13.4099L7.71 17.7099C7.5217 17.8982 7.2663 18.004 7 18.004C6.7337 18.004 6.47831 17.8982 6.29 17.7099C6.1017 17.5216 5.99591 17.2662 5.99591 16.9999C5.99591 16.7336 6.1017 16.4782 6.29 16.2899L10.59 11.9999L6.29 7.70994C6.1017 7.52164 5.99591 7.26624 5.99591 6.99994C5.99591 6.73364 6.1017 6.47825 6.29 6.28994C6.47831 6.10164 6.7337 5.99585 7 5.99585C7.2663 5.99585 7.5217 6.10164 7.71 6.28994L12 10.5899L16.29 6.28994C16.4783 6.10164 16.7337 5.99585 17 5.99585C17.2663 5.99585 17.5217 6.10164 17.71 6.28994C17.8983 6.47825 18.0041 6.73364 18.0041 6.99994C18.0041 7.26624 17.8983 7.52164 17.71 7.70994L13.41 11.9999L17.71 16.2899Z" fill="white" />
</svg>


                </nav>
     <img src={charge} style={{width: 120,height: 120}} alt="" />




<h4 style={{marginTop: 32,marginBottom: 10}}>Energy limit</h4>
<p style={{textAlign: 'center',marginBottom: 20}}>Увеличивает количество энергии</p>
 <p  style={{textAlign: 'center',marginBottom: 20}}>+500 энергии для 2 уровня</p>
<span style={{display: 'flex', alignItems: 'center', gap: 12}}>
  <Coin width={38}/> <h3 style={{fontSize: 28,display: 'flex', alignItems: 'center'}}>2 000 <p style={{fontSize: 28, fontWeight: 400,opacity: .5,marginLeft: 6  }}> • 2 lvl</p> </h3>
</span>
                <a onClick={coinAnim} className="btn">
          Получить
                </a>
            </div>
            </div>
            </>
            
        }
        {
          popupState == 9 && <>
           <div className="popup-black-fs" onClick={closePopup}>
            <div className="popup9">
              <h2 className="animate__animated animate__fadeInLeft animate__faster">Комбо</h2>
              <nav className="animate__animated animate__fadeInRight animate__faster">
                <div className="sel"></div>
                <div></div>
                <div></div>
              </nav>
              <div className="circle animate__animated animate__zoomIn animate__faster">
               <div></div>
               <div></div>
               <div></div>
               <img src={cat_money} alt="" />
              </div>
              <h2 className="animate__animated animate__fadeInLeft animate__faster">Круто, первая карта есть! Не останавливайся</h2>
            </div>
           </div>
          
          </>
        }
        </>
    )
}