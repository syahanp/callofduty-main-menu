import { motion } from "framer-motion"
import React from "react"
import { sceneID } from "../types"
import MainMenu from "./MainMenu"

interface Props {
  id: sceneID
  style: React.CSSProperties
  isActive: boolean
  setActive: (val: sceneID) => void
  logo: string
  menus?: string[]
}

const Scene: React.FC<Props> = ({
  id,
  setActive,
  isActive,
  style,
  logo,
  menus,
}) => {
  const handleHover = () => {
    setActive(id)
  }

  const containerStyle = "relative grow h-full pt-[150px] overflow-hidden"

  if (isActive) {
    return (
      <motion.div
        key={id}
        onHoverStart={handleHover}
        className={containerStyle}
        initial={{ width: 220 }} // initial size of each scene
        animate={{ width: 380 }}
      >
        <motion.div
          key={id}
          className="absolute brightness-[.7] inset-0 -z-10"
          style={style}
          initial={{ scale: 1.4 }}
          animate={{ scale: 1.1 }}
          transition={{ type: "tween", duration: 4, ease: "linear" }}
        />

        <div className="h-[200px] w-full text-center mb-10">
          <motion.img
            src={`/${logo}`}
            className="w-auto h-auto max-w-[200px] mx-auto"
            alt="logo"
            initial={{ scale: 1 }}
            animate={{ scale: 1.8 }}
          />
        </div>

        <MainMenu menus={menus} />
      </motion.div>
    )
  }

  return (
    <motion.div onHoverStart={handleHover} className={containerStyle}>
      <div className="absolute bg-cover inset-0 bg-black/70 hover:bg-transparent -z-10" />

      <div className="h-[200px] w-full border-gray-50/10 text-center border-r-4">
        <img
          src={`/${logo}`}
          className="w-auto h-auto max-w-[200px] mx-auto brightness-[.5]"
          alt="logo"
        />
      </div>
    </motion.div>
  )
}

export default Scene
