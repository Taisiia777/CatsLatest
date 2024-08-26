export default function AnimationPath () {
    
    const CoinTransform = () => {
        return (
<svg style={{width: 40,height:40,top: 'calc(100% - '+(Math.floor((Math.random())*250)-75)+'px - 45px)', left: Math.floor(Math.random()*window.innerWidth)}} width={56} height={55} viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx={28} cy={33} r={19} fill="#F9E160" />
  <g filter="url(#filter0_i_4327_4160)">
    <circle cx="28.0001" cy="33.0001" r="15.7797" fill="#FE881C" fillOpacity="0.72" />
  </g>
  <g filter="url(#filter1_d_4327_4160)">
    <path d="M27.2713 43.627V41.49C24.9734 41.3159 23.1768 40.4928 21.8813 39.0206L23.385 36.8836C24.4491 38.055 25.7445 38.7594 27.2713 38.9968V34.4142C26.5465 34.2242 25.945 34.0422 25.4669 33.8681C24.9889 33.6781 24.4877 33.4169 23.9633 33.0845C23.439 32.7362 23.038 32.293 22.7604 31.7548C22.4982 31.2008 22.3671 30.5517 22.3671 29.8078C22.3671 28.5889 22.8144 27.552 23.7088 26.6972C24.6033 25.8424 25.7908 25.3517 27.2713 25.2251V23.0168H29.1219V25.2488C30.988 25.4546 32.5379 26.1669 33.7716 27.3858L32.2217 29.4516C31.3735 28.5968 30.3403 28.0428 29.1219 27.7895V31.8735C29.6925 32.0318 30.1783 32.1822 30.5793 32.3247C30.9803 32.4671 31.4198 32.6729 31.8979 32.942C32.3914 33.1953 32.7846 33.4802 33.0777 33.7968C33.3707 34.0976 33.6174 34.4933 33.8179 34.984C34.0184 35.4748 34.1186 36.0288 34.1186 36.6462C34.1186 37.9442 33.6945 39.0443 32.8463 39.9466C32.0135 40.8331 30.7721 41.3475 29.1219 41.49V43.627H27.2713ZM30.8106 38.237C31.1808 37.8413 31.3658 37.3981 31.3658 36.9073C31.3658 36.4166 31.1731 36.0209 30.7875 35.7201C30.402 35.4035 29.8468 35.1344 29.1219 34.9128V39.0206C29.8776 38.894 30.4405 38.6328 30.8106 38.237ZM25.1431 29.6178C25.1431 30.3776 25.8525 30.9633 27.2713 31.3749V27.6708C26.6082 27.7341 26.0838 27.9478 25.6983 28.3119C25.3281 28.6601 25.1431 29.0954 25.1431 29.6178Z" fill="#FFEA7C" />
  </g>
  <g style={{mixBlendMode: 'overlay'}} filter="url(#filter2_f_4327_4160)">
    <circle cx="28.3222" cy="27.5253" r="10.3051" fill="white" />
  </g>
  <defs>
    <filter id="filter0_i_4327_4160" x="12.2205" y="17.2205" width="31.5593" height="32.2712" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="0.711864" operator="erode" in="SourceAlpha" result="effect1_innerShadow_4327_4160" />
      <feOffset dy="0.711864" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4327_4160" />
    </filter>
    <filter id="filter1_d_4327_4160" x="21.8813" y="23.0168" width="12.2373" height="21.322" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset dy="0.711864" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4327_4160" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4327_4160" result="shape" />
    </filter>
    <filter id="filter2_f_4327_4160" x="0.932344" y="0.135469" width="54.7796" height="54.7796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="8.54237" result="effect1_foregroundBlur_4327_4160" />
    </filter>
  </defs>
</svg>

        )
    }
    return (
        <>
        <div className="Animation--Path">
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform   />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform   />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform   />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform   />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform   />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform   />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform   />
                <CoinTransform  />
                <CoinTransform  />
                <CoinTransform  />
        </div>
        </>
    )
}