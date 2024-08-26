import qr from '../assets/qr.png'
export default function DesktopBlock () {
    return (
        <>
        <div className="DesktopBlock">
            <h2>Играйте на своем мобильном телефоне</h2>
            <img src={qr} style={{width: 231}} alt="" />
            <h2>@Beast_Tap_bot</h2>
        </div>
        </>
    )
}