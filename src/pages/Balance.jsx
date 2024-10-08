import { useAtom } from "jotai";
import Coin from "../Coin";
import { popupStateAtom } from "../App";
import rocket1 from '../assets/rocket1.png'
import hand from '../assets/hand.png'
import charge from '../assets/charge.png'
export default function Balance () {
  const [popupState,setPopupState] = useAtom(popupStateAtom);
    return(
        <>
        <div className="earn-block">
            <div className="earn-block__top">
        <span>Ваш баланс</span>
        <div>
   <Coin width={38}/>
<p>100 420 822</p>
</div>
<a>Как работает усиление</a>

        </div>
        <div className="earn-block__body">
<p>Бесплатные ежедневные усилители</p>
<button onClick={()=>{
setPopupState(6)
}} className="dark-btn">
<svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M34.3264 17.2746L27.0215 15.6376C26.4252 15.5039 26.0869 15.0067 26.2759 14.5415L29.7593 5.96678C30.2831 5.42554 30.2665 4.64956 29.6719 4.11863C28.9958 3.5156 27.8295 3.45734 27.0666 3.98912L5.31115 19.1614C4.54841 19.6933 4.47815 20.6138 5.1541 21.2173C5.39386 21.432 5.70842 21.5861 6.05829 21.6604C6.122 21.6739 6.18664 21.6836 6.25155 21.6917C6.31319 21.7106 6.37632 21.7274 6.44162 21.7413L11.9124 22.9037C12.5768 23.0448 12.915 23.6286 12.615 24.1162L7.02346 33.2041C6.40874 33.7144 6.33844 34.5161 6.90112 35.0933C7.14803 35.3474 7.49424 35.5302 7.88584 35.6132C8.42186 35.7271 9.01618 35.6498 9.48945 35.3627L34.8527 19.9791C35.0865 19.8373 35.2734 19.6531 35.3975 19.4419C35.4849 19.3298 35.5558 19.207 35.6031 19.0739C35.8793 18.3001 35.3076 17.4945 34.3264 17.2746Z" fill="url(#paint0_linear_4002_3683)" />
  <defs>
    <linearGradient id="paint0_linear_4002_3683" x1="25.7339" y1="3.03119" x2="25.7339" y2="27.8181" gradientUnits="userSpaceOnUse">
      <stop stopColor="#F7C243" />
      <stop offset={1} stopColor="#FD902B" />
    </linearGradient>
  </defs>
</svg>
<div>
    <p>Full energy</p>
    <span>6/6 доступно</span>
</div>

</button>
<button disabled  className="dark-btn">
<img src={rocket1} style={{width: 40}} alt="" />

<div>
    <p>Turbo</p>
    <span>Cкоро будет</span>
</div>

</button>
<p>Усилители</p>
<button className="dark-btn"  onClick={()=>{
setPopupState(7)
}}>
<img src={hand} style={{width: 40}} alt="" />



<div>
    <p>Multitap</p>
    <span> <Coin width={20}/> <p>1,02М</p> • 11 lvl</span>

</div>
<a>
<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.8068 7.52671C11.8693 7.58868 11.9189 7.66242 11.9527 7.74366C11.9866 7.8249 12.004 7.91203 12.004 8.00004C12.004 8.08805 11.9866 8.17519 11.9527 8.25643C11.9189 8.33767 11.8693 8.4114 11.8068 8.47337L6.47346 13.8067C6.41148 13.8692 6.33775 13.9188 6.25651 13.9526C6.17527 13.9865 6.08813 14.0039 6.00012 14.0039C5.91211 14.0039 5.82498 13.9865 5.74374 13.9526C5.6625 13.9188 5.58876 13.8692 5.52679 13.8067C5.4643 13.7447 5.41471 13.671 5.38086 13.5898C5.34702 13.5085 5.32959 13.4214 5.32959 13.3334C5.32959 13.2454 5.34702 13.1582 5.38086 13.077C5.41471 12.9958 5.4643 12.922 5.52679 12.86L10.3935 8.00004L5.52679 3.14004C5.40125 3.01451 5.33073 2.84424 5.33073 2.66671C5.33073 2.48917 5.40125 2.31891 5.52679 2.19338C5.65232 2.06784 5.82259 1.99731 6.00012 1.99731C6.17766 1.99731 6.34792 2.06784 6.47346 2.19338L11.8068 7.52671Z" fill="white" />
</svg>


</a>
</button>
<button  className="dark-btn"  onClick={()=>{
setPopupState(8)
}}>
<img src={charge} style={{width: 40}} alt="" />




<div>
    <p>Energy limit</p>
    <span> <Coin width={20}/> <p>1,02М</p> • 11 lvl</span>
</div>
<a>
<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.8068 7.52671C11.8693 7.58868 11.9189 7.66242 11.9527 7.74366C11.9866 7.8249 12.004 7.91203 12.004 8.00004C12.004 8.08805 11.9866 8.17519 11.9527 8.25643C11.9189 8.33767 11.8693 8.4114 11.8068 8.47337L6.47346 13.8067C6.41148 13.8692 6.33775 13.9188 6.25651 13.9526C6.17527 13.9865 6.08813 14.0039 6.00012 14.0039C5.91211 14.0039 5.82498 13.9865 5.74374 13.9526C5.6625 13.9188 5.58876 13.8692 5.52679 13.8067C5.4643 13.7447 5.41471 13.671 5.38086 13.5898C5.34702 13.5085 5.32959 13.4214 5.32959 13.3334C5.32959 13.2454 5.34702 13.1582 5.38086 13.077C5.41471 12.9958 5.4643 12.922 5.52679 12.86L10.3935 8.00004L5.52679 3.14004C5.40125 3.01451 5.33073 2.84424 5.33073 2.66671C5.33073 2.48917 5.40125 2.31891 5.52679 2.19338C5.65232 2.06784 5.82259 1.99731 6.00012 1.99731C6.17766 1.99731 6.34792 2.06784 6.47346 2.19338L11.8068 7.52671Z" fill="white" />
</svg>


</a>
</button>
</div>
        </div>
        </>
    )
}