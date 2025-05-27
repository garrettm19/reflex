// src/renderer/components/Mascot.tsx

import { useMascotStore } from '../state/useMascotStore'
import Lottie from 'lottie-react'

// Import animations
import idle from '../assets/mascot/idle.json'
import celebrate from '../assets/mascot/celebrate.json'
import warning from '../assets/mascot/warning.json'
import presenting from '../assets/mascot/presenting.json'
import thinking from '../assets/mascot/thinking.json'
import money from '../assets/mascot/money.json'
import welcome from '../assets/mascot/welcome.json'
import tip from '../assets/mascot/tip.json'
import clap from '../assets/mascot/clap.json'

const animationMap = {
  idle,
  celebrate,
  warning,
  presenting,
  thinking,
  money,
  welcome,
  tip,
  clap,
}

export default function Mascot() {
  const { state, message } = useMascotStore()
  const animation = animationMap[state] || idle

  return (
    <div
      className="fixed bottom-6 right-6 z-50 pointer-events-none"
      aria-hidden="true"
    >
      <div className="relative w-40 h-40">
        <Lottie animationData={animation} loop />

        {message && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-sm px-3 py-1 rounded shadow pointer-events-auto">
            {message}
          </div>
        )}
      </div>
    </div>
  )
}
