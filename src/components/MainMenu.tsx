import { motion } from "framer-motion"
import React from "react"

const MainMenu = ({ menus }: { menus: string[] }) => {
  return (
    <div className="text-center gap-y-2">
      {menus.map((x, i) => (
        <motion.div
          key={x}
          className="uppercase text-3xl max-w-[250px] mx-auto font-poppins font-semibold text-white/70 bg-transparent py-3 hover:text-red-400 hover:bg-stone-300 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.25 }}
        >
          {x}
        </motion.div>
      ))}
    </div>
  )
}

export default MainMenu
