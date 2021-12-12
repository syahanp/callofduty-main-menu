import { AnimatePresence, motion } from "framer-motion"
import React from "react"

const MotionElement = ({ bg }: { bg: string }) => {
  const common =
    "absolute w-screen h-screen bg-no-repeat bg-cover blur-[2px] -z-20"

  return (
    <motion.div
      className={`${common} ${bg}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )
}

const Background = ({ isActive }: { isActive: string }) => {
  return (
    <AnimatePresence>
      {isActive === "mw" && (
        <MotionElement key="1" bg="bg-[url('/cod-mw.jpg')]" />
      )}
      {isActive === "vanguard" && (
        <MotionElement key="2" bg="bg-[url('/cod-vanguard.jpg')]" />
      )}
      {isActive === "warzone" && (
        <MotionElement key="3" bg="bg-[url('/cod-warzone.jpg')]" />
      )}
      {isActive === "cw" && (
        <MotionElement key="4" bg="bg-[url('/cod-cw.jpg')]" />
      )}
    </AnimatePresence>
  )
}

export default Background
