import React, { useRef } from "react";

export default function Animation() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div role='presentation'>
      <lottie-player
        id="firstLottie"
        ref={ref}
        autoplay
        mode="normal"
        src="animation/landingPageAnimation.json"
        resizeMode='cover'
        style={{ width: '100vw' }}
      />
    </div>
  )
}