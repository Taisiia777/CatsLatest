import { useState } from "react";
import { appStateAtom, popupStateAtom } from "../App";
import Coin from "../Coin";
import { useAtom } from "jotai";

export default function UserProfile () {
    const [appState,setAppState] = useAtom(appStateAtom);
 const [popupState,setPopupState] = useAtom(popupStateAtom);
    return (
        <>
        <div className="user-profile">
            <nav>
                <div>
          <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width={32} height={32} rx={8} fill="#283434" />
  <path d="M16 11.0645L14.4555 11.169C13.4568 9.98452 10.6581 7 7.87096 7C7.87096 7 5.58322 10.4374 7.82451 15.0245C7.1858 15.9884 6.79096 16.4877 6.70967 17.6374L4.46838 17.9742L4.71225 19.1123L6.75613 18.8103L6.91871 19.6348L5.09548 20.7265L5.64129 21.76L7.32516 20.7265C8.66064 23.56 12.04 25 16 25C19.96 25 23.3394 23.56 24.6748 20.7265L26.3587 21.76L26.9045 20.7265L25.0813 19.6348L25.2439 18.8103L27.2877 19.1123L27.5316 17.9742L25.2903 17.6374C25.209 16.4877 24.8142 15.9884 24.1755 15.0245C26.4168 10.4374 24.129 7 24.129 7C21.3419 7 18.5432 9.98452 17.5445 11.169L16 11.0645ZM12.5161 14.5484C13.1548 14.5484 13.6774 15.071 13.6774 15.7097C13.6774 16.3484 13.1548 16.871 12.5161 16.871C11.8774 16.871 11.3548 16.3484 11.3548 15.7097C11.3548 15.071 11.8774 14.5484 12.5161 14.5484ZM19.4839 14.5484C20.1226 14.5484 20.6452 15.071 20.6452 15.7097C20.6452 16.3484 20.1226 16.871 19.4839 16.871C18.8452 16.871 18.3226 16.3484 18.3226 15.7097C18.3226 15.071 18.8452 14.5484 19.4839 14.5484ZM14.8387 18.0323H17.1613L16.3484 19.6465C16.5806 20.3897 17.231 20.9355 18.0323 20.9355C18.9961 20.9355 19.7742 20.1574 19.7742 19.1935H20.3548C20.3548 20.471 19.3097 21.5161 18.0323 21.5161C17.1613 21.5161 16.4064 21.04 16 20.3548C15.5935 21.04 14.8387 21.5161 13.9677 21.5161C12.6903 21.5161 11.6452 20.471 11.6452 19.1935H12.2258C12.2258 20.1574 13.0039 20.9355 13.9677 20.9355C14.769 20.9355 15.4194 20.3897 15.6516 19.6465L14.8387 18.0323Z" fill="white" />
</svg>
<p>Name (CEO)</p>

                </div>
                <section>
                    <nav>
                        <div onClick={()=>{
                            setAppState('level')
                        }}>
                        <p>Platinum</p>
                        <svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.80671 6.47333L5.14004 9.14C5.01451 9.26554 4.84424 9.33606 4.66671 9.33606C4.48917 9.33606 4.31891 9.26554 4.19338 9.14C4.06784 9.01446 3.99731 8.8442 3.99731 8.66667C3.99731 8.48913 4.06784 8.31887 4.19338 8.19334L6.39338 6L4.19338 3.80667C4.06784 3.68113 3.99731 3.51087 3.99731 3.33333C3.99731 3.24543 4.01463 3.15838 4.04827 3.07717C4.08191 2.99595 4.13122 2.92216 4.19338 2.86C4.25553 2.79784 4.32933 2.74854 4.41054 2.7149C4.49176 2.68126 4.5788 2.66394 4.66671 2.66394C4.84424 2.66394 5.01451 2.73447 5.14004 2.86L7.80671 5.52667C7.86919 5.58864 7.91879 5.66238 7.95264 5.74362C7.98648 5.82486 8.00391 5.91199 8.00391 6C8.00391 6.08801 7.98648 6.17515 7.95264 6.25639C7.91879 6.33763 7.86919 6.41136 7.80671 6.47333Z" fill="white"/>
</svg>
</div>
<span> 

    <p>4</p> / 10
</span>
                    </nav>
                    <div>
                        <div>

                        </div>
                    </div>
                </section>
            </nav>
            <section>
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.34063 10.0845L12.0019 5.42516L16.665 10.0883L19.3757 7.37572L12.0019 0L4.62805 7.37383L7.34063 10.0845Z" fill="#F3BA2F" />
  <path d="M0 12.0004L2.71159 9.28878L5.42318 12.0004L2.71159 14.712L0 12.0004Z" fill="#F3BA2F" />
  <path d="M7.34064 13.9155L12.0019 18.5767L16.665 13.9136L19.3776 16.6224L19.3757 16.6243L12.0019 24L4.62806 16.6281L4.62427 16.6243L7.34064 13.9155Z" fill="#F3BA2F" />
  <path d="M18.576 12.0011L21.2876 9.28951L23.9992 12.0011L21.2876 14.7127L18.576 12.0011Z" fill="#F3BA2F" />
  <path d="M14.7525 11.9991L12.002 9.2467L9.968 11.2807L9.73295 11.5138L9.25147 11.9953L9.24768 11.9991L9.25147 12.0048L12.002 14.7534L14.7525 12.001L14.7544 11.9991H14.7525Z" fill="#F3BA2F" />
</svg>
<div>
    <span>Прибыль в час</span>
  <div>  <Coin width={18} />
  <p>+37,71K</p>
  <a onClick={()=>{
    setPopupState(5);
  }}>
<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.16663 6.66663C9.16663 6.44561 9.25443 6.23365 9.41071 6.07737C9.56699 5.92109 9.77895 5.83329 9.99996 5.83329C10.1448 5.83646 10.2863 5.87732 10.4105 5.95185C10.5347 6.02638 10.6374 6.132 10.7083 6.25829C10.7882 6.37962 10.8316 6.52135 10.8333 6.66663C10.8333 6.88764 10.7455 7.0996 10.5892 7.25588C10.4329 7.41216 10.221 7.49996 9.99996 7.49996C9.77895 7.49996 9.56699 7.41216 9.41071 7.25588C9.25443 7.0996 9.16663 6.88764 9.16663 6.66663ZM18.3333 9.99996C18.3333 11.6481 17.8446 13.2593 16.9289 14.6297C16.0132 16.0001 14.7117 17.0682 13.189 17.699C11.6663 18.3297 9.99072 18.4947 8.37421 18.1732C6.7577 17.8516 5.27284 17.058 4.10741 15.8925C2.94197 14.7271 2.1483 13.2422 1.82675 11.6257C1.50521 10.0092 1.67024 8.33365 2.30097 6.81093C2.9317 5.28821 3.9998 3.98672 5.37021 3.07105C6.74062 2.15537 8.35179 1.66663 9.99996 1.66663C11.0943 1.66663 12.1779 1.88217 13.189 2.30096C14.2 2.71975 15.1187 3.33358 15.8925 4.1074C16.6663 4.88122 17.2802 5.79988 17.699 6.81093C18.1177 7.82198 18.3333 8.90561 18.3333 9.99996ZM16.6666 9.99996C16.6666 8.68142 16.2756 7.39249 15.5431 6.29616C14.8105 5.19983 13.7694 4.34535 12.5512 3.84076C11.333 3.33618 9.99257 3.20416 8.69936 3.46139C7.40615 3.71863 6.21827 4.35356 5.28592 5.28591C4.35357 6.21826 3.71863 7.40615 3.46139 8.69936C3.20416 9.99256 3.33618 11.333 3.84077 12.5512C4.34535 13.7694 5.19983 14.8105 6.29616 15.5431C7.39249 16.2756 8.68142 16.6666 9.99996 16.6666C11.7681 16.6666 13.4638 15.9642 14.714 14.714C15.9643 13.4638 16.6666 11.7681 16.6666 9.99996ZM10.8333 11.6666V9.16663C10.8333 8.94561 10.7455 8.73365 10.5892 8.57737C10.4329 8.42109 10.221 8.33329 9.99996 8.33329H9.16663C8.94562 8.33329 8.73365 8.42109 8.57737 8.57737C8.42109 8.73365 8.3333 8.94561 8.3333 9.16663C8.3333 9.38764 8.42109 9.5996 8.57737 9.75588C8.73365 9.91216 8.94562 9.99996 9.16663 9.99996V12.5C9.16663 12.721 9.25443 12.9329 9.41071 13.0892C9.56699 13.2455 9.77895 13.3333 9.99996 13.3333H10.8333C11.0543 13.3333 11.2663 13.2455 11.4226 13.0892C11.5788 12.9329 11.6666 12.721 11.6666 12.5C11.6666 12.2789 11.5788 12.067 11.4226 11.9107C11.2663 11.7544 11.0543 11.6666 10.8333 11.6666Z" fill="white" fillOpacity="0.5" />
</svg>


  </a>
  </div>
</div>
<a onClick={()=>{
    setAppState('settings');
    console.log('dff');
}}>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8.99996C11.4067 8.99996 10.8267 9.1759 10.3333 9.50555C9.83998 9.83519 9.45547 10.3037 9.2284 10.8519C9.00134 11.4001 8.94193 12.0033 9.05769 12.5852C9.17344 13.1672 9.45916 13.7017 9.87872 14.1213C10.2983 14.5408 10.8328 14.8266 11.4148 14.9423C11.9967 15.0581 12.5999 14.9987 13.1481 14.7716C13.6963 14.5445 14.1648 14.16 14.4945 13.6667C14.8241 13.1733 15 12.5933 15 12C15 11.2043 14.684 10.4412 14.1214 9.87864C13.5588 9.31603 12.7957 8.99996 12 8.99996ZM12 13C11.8023 13 11.6089 12.9413 11.4445 12.8314C11.28 12.7215 11.1518 12.5654 11.0762 12.3826C11.0005 12.1999 10.9807 11.9988 11.0193 11.8049C11.0578 11.6109 11.1531 11.4327 11.2929 11.2928C11.4328 11.153 11.611 11.0578 11.805 11.0192C11.9989 10.9806 12.2 11.0004 12.3827 11.0761C12.5655 11.1518 12.7216 11.2799 12.8315 11.4444C12.9414 11.6088 13 11.8022 13 12C13 12.2652 12.8947 12.5195 12.7071 12.7071C12.5196 12.8946 12.2653 13 12 13ZM20.81 12.81C20.647 12.6251 20.5579 12.3865 20.56 12.14V11.86C20.5579 11.6134 20.647 11.3748 20.81 11.19L21.45 10.47C21.9406 9.91935 22.2111 9.20737 22.21 8.46996C22.2052 7.94424 22.0676 7.42827 21.81 6.96996L21.25 5.96996C20.9866 5.51362 20.6076 5.13472 20.1511 4.8714C19.6947 4.60808 19.177 4.46962 18.65 4.46996C18.4486 4.47009 18.2476 4.49019 18.05 4.52996L17.11 4.71996H16.9C16.7285 4.71729 16.5603 4.67266 16.41 4.58996L16.16 4.43996C15.9666 4.34555 15.8088 4.19123 15.71 3.99996L15.4 3.08996C15.1926 2.50319 14.8078 1.99546 14.2989 1.63712C13.7901 1.27877 13.1824 1.08756 12.56 1.08996H11.44C10.8225 1.08461 10.2183 1.26998 9.71004 1.62077C9.20175 1.97155 8.81411 2.47066 8.60004 3.04996L8.29004 3.99996C8.21244 4.2322 8.05232 4.4279 7.84004 4.54996L7.60004 4.69996C7.44565 4.78132 7.27451 4.82581 7.10004 4.82996H6.90004L6.00004 4.57996C5.80252 4.54019 5.60153 4.52009 5.40004 4.51996C4.86663 4.50872 4.33987 4.63994 3.87406 4.90009C3.40825 5.16024 3.02025 5.53991 2.75004 5.99996L2.19004 6.99996C1.87618 7.54586 1.74205 8.17669 1.80667 8.80307C1.87128 9.42945 2.13135 10.0196 2.55004 10.49L3.19004 11.21C3.35311 11.3948 3.44214 11.6334 3.44004 11.88V12.16C3.44214 12.4065 3.35311 12.6451 3.19004 12.83L2.55004 13.55C2.05951 14.1006 1.78896 14.8125 1.79004 15.55C1.79487 16.0757 1.93246 16.5916 2.19004 17.05L2.75004 18.05C3.01351 18.5063 3.39253 18.8852 3.84895 19.1485C4.30538 19.4118 4.82311 19.5503 5.35004 19.55C5.55153 19.5498 5.75252 19.5297 5.95004 19.49L6.89004 19.3H7.09004C7.26154 19.3026 7.42978 19.3473 7.58004 19.43L7.83004 19.58C8.04232 19.702 8.20244 19.8977 8.28004 20.13L8.60004 21C8.80749 21.5867 9.1923 22.0945 9.70114 22.4528C10.21 22.8111 10.8177 23.0024 11.44 23H12.56C13.1824 23.0024 13.7901 22.8111 14.2989 22.4528C14.8078 22.0945 15.1926 21.5867 15.4 21L15.71 20.09C15.7876 19.8577 15.9478 19.662 16.16 19.54L16.4 19.39C16.5544 19.3086 16.7256 19.2641 16.9 19.26H17.1L18.05 19.45C18.2476 19.4897 18.4486 19.5098 18.65 19.51C19.177 19.5103 19.6947 19.3718 20.1511 19.1085C20.6076 18.8452 20.9866 18.4663 21.25 18.01L21.81 17.01C22.0676 16.5516 22.2052 16.0357 22.21 15.51C22.2111 14.7725 21.9406 14.0606 21.45 13.51L20.81 12.81ZM19.32 14.13L19.96 14.85C20.1231 15.0348 20.2121 15.2734 20.21 15.52C20.2082 15.696 20.1599 15.8685 20.07 16.02L19.51 17.02C19.4228 17.1711 19.2975 17.2968 19.1466 17.3845C18.9958 17.4722 18.8246 17.5189 18.65 17.52H18.45L17.51 17.33C16.7888 17.1804 16.0378 17.3014 15.4 17.67L15.16 17.81C14.5232 18.1761 14.0428 18.7632 13.81 19.46L13.51 20.38C13.443 20.5786 13.3151 20.7511 13.1447 20.8731C12.9742 20.9951 12.7697 21.0605 12.56 21.06H11.44C11.2304 21.0605 11.0259 20.9951 10.8554 20.8731C10.6849 20.7511 10.5571 20.5786 10.49 20.38L10.19 19.46C9.95723 18.7632 9.47688 18.1761 8.84004 17.81L8.59004 17.67C8.13674 17.409 7.62309 17.2711 7.10004 17.27C6.89524 17.2701 6.69094 17.2902 6.49004 17.33L5.55004 17.52H5.35004C5.17383 17.5207 5.00057 17.4748 4.84779 17.387C4.69501 17.2992 4.56815 17.1726 4.48004 17.02L3.93004 16.02C3.84017 15.8685 3.79187 15.696 3.79004 15.52C3.77676 15.2786 3.85136 15.0406 4.00004 14.85L4.64004 14.13C5.13057 13.5794 5.40112 12.8674 5.40004 12.13V11.85C5.40112 11.1125 5.13057 10.4006 4.64004 9.84996L4.00004 9.14996C3.83697 8.96507 3.74794 8.72647 3.75004 8.47996C3.76732 8.30703 3.82935 8.1416 3.93004 7.99996L4.49004 6.99996C4.5773 6.84882 4.70259 6.72315 4.85346 6.63543C5.00433 6.54772 5.17553 6.50101 5.35004 6.49996H5.55004L6.49004 6.68996C6.69087 6.73019 6.89522 6.75029 7.10004 6.74996C7.62309 6.74879 8.13674 6.6109 8.59004 6.34996L8.84004 6.20996C9.46941 5.85357 9.94883 5.28181 10.19 4.59996L10.49 3.67996C10.5571 3.48134 10.6849 3.30882 10.8554 3.1868C11.0259 3.06478 11.2304 2.99942 11.44 2.99996H12.56C12.7697 2.99942 12.9742 3.06478 13.1447 3.1868C13.3151 3.30882 13.443 3.48134 13.51 3.67996L13.81 4.59996C14.0428 5.29669 14.5232 5.88379 15.16 6.24996L15.41 6.38996C15.8633 6.6509 16.377 6.78879 16.9 6.78996C17.1049 6.79029 17.3092 6.77019 17.51 6.72996L18.45 6.53996H18.65C18.8263 6.53926 18.9995 6.58513 19.1523 6.67294C19.3051 6.76074 19.4319 6.88735 19.52 7.03996L20.07 8.03996C20.1599 8.19139 20.2082 8.36387 20.21 8.53996C20.2121 8.78647 20.1231 9.02507 19.96 9.20996L19.32 9.92996C18.8295 10.4806 18.559 11.1925 18.56 11.93V12.21C18.559 12.9474 18.8295 13.6594 19.32 14.21" fill="white"/>
</svg>

</a>
            </section>
        </div>
        </>
    )
}