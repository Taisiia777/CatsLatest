import { useEffect, useState } from 'react'
import 'animate.css';
import './App.css'
import cat from './assets/cat.png'
import axios from 'axios';
import { retrieveLaunchParams } from '@tma.js/sdk';
import { useDispatch, useSelector } from "react-redux";
import { setCoins, setUser } from "./store/reducers/userSlice";

import { atom, useAtom } from 'jotai';

import Exchange from './pages/Exchange';
import Earn from './pages/Earn';
import FooterMenu from './components/FooterMenu';
import Popup from './components/Popup';
import Settings from './pages/Settings';
import Balance from './pages/Balance';
import ChangeExchange from './pages/ChangeExchange';
import AirDrop from './pages/Airdrop';
import Friends from './pages/Friends';
import Mine from './pages/Mine';
import Level from './pages/Level';
import AnimationPath from './components/AnimationPath';
import { isMobile } from 'react-device-detect';
import DesktopBlock from './pages/Desktop';
export const appStateAtom = atom('exchange');
export const popupStateAtom = atom(1);
function App() {
  const dispatch = useDispatch();


  const [appState,setAppState] = useAtom(appStateAtom);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appState]);
const [loading,setLoading] = useState(true);
useEffect(()=>{
  let app =window.Telegram.WebApp;
  app.ready();
  app.isClosingConfirmationEnabled = true;
  app.allow_vertical_swipe = false; 
  app.disableVerticalSwipes();
  app.expand()
setTimeout(()=>{setLoading(false)},1500);

},[]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const { initData } = retrieveLaunchParams(); // Предполагается, что у вас есть эта функция
      if (initData && initData.user) {
        const user = initData.user;
        let username = user.username || `guest_${user.id}`;
        const userId = user.id;

        const referralResponse = await axios.get(`https://coinfarm.club/api1/getReferralCode?user_id=${userId}`);
        const { referral_code: referralCode, click_id: clickId } = referralResponse.data;

        if (clickId) {
          const postUrl = `https://binomtracky.pro/click.php?event8=1&cnv_status=bot&cnv_id=${clickId}`;
          await axios.post(postUrl);
        }

        await axios.post('https://coinfarm.club/api1/saveUserId', {
          username: username,
          user_id: userId,
        });

        const userResponse = await axios.post("https://dc94-95-161-221-131.ngrok-free.app/api/user", {
          username,
          coins: 0,
          totalEarnings: 0,
          incomeMultiplier: 1,
          coinsPerHour: 1000,
          xp: 1000,
          level: 0,
          referralCode,
        });

        if (userResponse.status === 409) {
          dispatch(setUser(userResponse.data));
        } else {
          dispatch(setUser(userResponse.data));
        }

        const coinsResponse = await axios.get('https://dc94-95-161-221-131.ngrok-free.app/api/coin', {
          headers: {
            'ngrok-skip-browser-warning': 'true' // Добавляем заголовок для обхода предупреждения ngrok
          }
        });
        dispatch(setCoins(coinsResponse.data));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
  setTimeout(() => {
    setLoading(false);
  }, 1500);
}, []);

return (
    <>
    {isMobile ?
    <div className="container-">
{loading ? <>
<div className="loading-block">
<div className="loading-block__content">
  <img src={cat} className='absolute' alt="" />
<svg className='spinner' width={120} height={120} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.57141 51.7241C1.89172 51.3169 0.0294051 48.8077 0.654123 46.1702C3.22517 35.3156 8.78124 25.3578 16.7383 17.4479C25.859 8.38108 37.6517 2.48481 50.3776 0.628393C63.1035 -1.22802 76.0892 1.05366 87.42 7.13704C98.7509 13.2204 107.827 22.7836 113.311 34.4165C118.795 46.0494 120.395 59.1364 117.877 71.7481C115.359 84.3598 108.855 95.8286 99.3248 104.464C89.7943 113.099 77.7414 118.443 64.9432 119.709C53.778 120.813 42.5611 118.762 32.5519 113.837C30.1198 112.641 29.3695 109.607 30.7607 107.281C32.1519 104.955 35.1572 104.221 37.608 105.379C45.795 109.245 54.9066 110.838 63.9773 109.941C74.6818 108.882 84.763 104.412 92.7344 97.1899C100.706 89.9674 106.146 80.3748 108.252 69.8262C110.358 59.2777 109.019 48.3316 104.432 38.6017C99.8459 28.8718 92.2544 20.8731 82.7771 15.7849C73.2999 10.6967 62.4386 8.78824 51.7945 10.341C41.1504 11.8937 31.2868 16.8254 23.6581 24.409C17.1938 30.835 12.624 38.8771 10.3965 47.6529C9.72965 50.28 7.25109 52.1312 4.57141 51.7241Z" fill="#D9D9D9" />
  <path d="M4.57141 51.7241C1.89172 51.3169 0.0294051 48.8077 0.654123 46.1702C3.22517 35.3156 8.78124 25.3578 16.7383 17.4479C25.859 8.38108 37.6517 2.48481 50.3776 0.628393C63.1035 -1.22802 76.0892 1.05366 87.42 7.13704C98.7509 13.2204 107.827 22.7836 113.311 34.4165C118.795 46.0494 120.395 59.1364 117.877 71.7481C115.359 84.3598 108.855 95.8286 99.3248 104.464C89.7943 113.099 77.7414 118.443 64.9432 119.709C53.778 120.813 42.5611 118.762 32.5519 113.837C30.1198 112.641 29.3695 109.607 30.7607 107.281C32.1519 104.955 35.1572 104.221 37.608 105.379C45.795 109.245 54.9066 110.838 63.9773 109.941C74.6818 108.882 84.763 104.412 92.7344 97.1899C100.706 89.9674 106.146 80.3748 108.252 69.8262C110.358 59.2777 109.019 48.3316 104.432 38.6017C99.8459 28.8718 92.2544 20.8731 82.7771 15.7849C73.2999 10.6967 62.4386 8.78824 51.7945 10.341C41.1504 11.8937 31.2868 16.8254 23.6581 24.409C17.1938 30.835 12.624 38.8771 10.3965 47.6529C9.72965 50.28 7.25109 52.1312 4.57141 51.7241Z" fill="url(#paint0_linear_4004_7758)" />
  <defs>
    <linearGradient id="paint0_linear_4004_7758" x1="119.039" y1={60} x2="-0.961431" y2={60} gradientUnits="userSpaceOnUse">
      <stop stopColor="#ADFAA1" />
      <stop offset="0.45" stopColor="#C597CC" />
      <stop offset={1} stopColor="#15CFA2" />
    </linearGradient>
  </defs>
</svg>
<h4>Загрузка</h4>
<h1>Cat Tap</h1>
<p>Больше информации в официальных каналах</p>
<div>
  <nav>
<svg width={32} height={30} viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M29.6263 0.0839787C29.475 0.133137 27.0775 1.19354 24.2986 2.4295C21.5197 3.66546 15.4595 6.35509 10.828 8.41268C6.19656 10.4703 2.18263 12.254 1.89808 12.3874C0.941518 12.8369 0.505615 13.3004 0.505615 13.8902C0.505615 14.2695 0.65697 14.5152 1.05049 14.761C1.31688 14.9296 8.35791 17.5279 8.61824 17.556C8.66667 17.563 12.39 14.8945 16.8943 11.622C21.3926 8.3565 25.1644 5.63177 25.2733 5.56154C25.5155 5.42109 25.8969 5.393 26.0059 5.51941C26.0664 5.58963 26.0604 5.63879 25.9938 5.77222C25.9454 5.86351 22.9183 9.04471 19.2736 12.8369L12.6443 19.74L12.4263 23.2934C12.3052 25.2456 12.1842 27.1417 12.166 27.4929L12.1236 28.1459H12.39C12.8743 28.1459 13.1589 27.8861 15.1507 25.674L17.0275 23.5883L20.6177 26.6361C22.9849 28.6516 24.3228 29.7401 24.5408 29.8454C24.7587 29.9437 25.013 29.9999 25.2673 29.9999C25.903 30.0069 26.2783 29.6839 26.5932 28.8482C26.6537 28.6726 27.7919 22.6543 29.1117 15.4703C31.4789 2.59102 31.5152 2.40141 31.491 1.73427C31.4728 1.13033 31.4486 1.01797 31.2852 0.716005C30.9643 0.11207 30.2862 -0.147764 29.6263 0.0839787Z" fill="white" />
</svg>


  </nav>
  <nav>
  <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.8985 4.39451C6.80866 4.49998 4.05476 4.72264 3.13484 5.02146C2.11531 5.34959 1.30671 6.07029 0.843821 7.06639C0.621165 7.54099 0.427805 8.54881 0.240305 10.2304C0.0352273 12.0351 -0.017507 13.2422 0.0176492 15.6328C0.0528055 17.9297 0.0879617 18.5039 0.29304 20.1855C0.503977 21.8672 0.632884 22.5117 0.843821 22.9512C1.34187 23.9648 2.16218 24.6855 3.15827 24.9844C5.47859 25.6699 17.8653 25.8808 24.4044 25.3359C25.7403 25.2304 26.7305 25.0664 27.1466 24.8906C27.9493 24.5566 28.6993 23.8828 29.086 23.1445C29.3497 22.6465 29.4317 22.3125 29.6192 21.0351C29.9005 19.0664 29.9532 18.3047 29.9825 15.6797C30.0235 12.498 29.9415 11.1387 29.5548 8.55467C29.4141 7.61717 29.379 7.4824 29.1446 6.99607C28.7286 6.13474 28.0255 5.46092 27.1934 5.12107C26.3848 4.79881 24.4688 4.59373 20.8243 4.4531C18.6915 4.37107 13.1134 4.33592 10.8985 4.39451ZM16.7286 13.2363C18.3399 14.1797 19.6759 14.9648 19.6993 14.9883C19.7286 15.0176 13.2364 18.8496 12.1466 19.4414L12.0118 19.5176V15.0058V10.4941L12.9083 11.0097C13.3946 11.2969 15.1173 12.2988 16.7286 13.2363Z" fill="white" />
</svg>


  </nav>
  <nav>
 <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.328016 0.0703125C0.351454 0.105469 2.92372 3.85547 6.04677 8.39648C9.16395 12.9375 11.7186 16.6641 11.7186 16.6758C11.7186 16.6875 1.17763 28.9629 0.363173 29.8945C0.281141 29.9941 0.345594 30 1.61708 30H2.96474L7.9452 24.2051L12.9315 18.416L16.91 24.2051L20.8886 30H25.3007C28.8163 30 29.7069 29.9824 29.6659 29.9238C29.6425 29.8887 26.994 26.0215 23.7772 21.3398C20.5546 16.6582 17.912 12.7969 17.8944 12.7559C17.871 12.6855 19.2948 11.0156 26.8183 2.26758L28.7753 0H27.4276H26.08L21.3749 5.47266C18.785 8.47852 16.6522 10.9336 16.6347 10.9219C16.6171 10.916 14.9179 8.44922 12.8554 5.45508L9.11122 0H4.69911C1.29481 0 0.29872 0.0175781 0.328016 0.0703125ZM16.7284 14.748C21.6268 21.7617 25.7343 27.6387 25.8573 27.8145L26.08 28.125H24.1288L22.1776 28.1191L13.2714 15.375C8.37294 8.36133 4.26552 2.48438 4.14247 2.30859L3.91395 1.99219H5.87099L7.82216 1.99805L16.7284 14.748Z" fill="white" />
</svg>


  </nav>
</div>
</div>
</div>
  </> : <>
  {appState == 'earn' && <Earn />}
  {appState == 'airdrop' && <AirDrop/>}
  {appState == 'change_exchange' && <ChangeExchange/>}
  {appState == 'exchange' && <Exchange/>}
  {appState == 'mine' && <Mine/>}
  {appState == 'balance' && <Balance/>}
  {appState == 'level' && <Level/>}
  
  {appState == 'friends' && <Friends/>}
  {appState == 'settings' && <Settings/>}
  <AnimationPath/>
        <FooterMenu/>
<Popup/>
   </>
}
</div> : <DesktopBlock/>}

      </>
  )
}

export default App
