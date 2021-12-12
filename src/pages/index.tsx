import { AnimatePresence } from "framer-motion"
import React, { useState } from "react"
import Background from "../components/Background"
import Scene from "../components/Scene"
import { SceneList, sceneID } from "../types"

const list: SceneList[] = [
  {
    id: "mw",
    style: {
      backgroundImage: "url('/cod-mw.jpg')",
      backgroundPosition: "left center",
      backgroundSize: "cover",
    },
    logo: "logo-mw.svg",
    menus: ["campaign", "multiplayer", "co-op"],
  },
  {
    id: "vanguard",
    style: {
      backgroundImage: "url('/cod-vanguard.jpg')",
      backgroundPosition: "34% -40%",
      backgroundSize: "cover",
    },
    logo: "logo-vanguard.svg",
    menus: ["campaign", "multiplayer", "zombies"],
  },
  {
    id: "warzone",
    style: {
      backgroundImage: "url('/cod-warzone.jpg')",
      backgroundPosition: "65% 10%",
      backgroundSize: "cover",
    },
    logo: "logo-warzone.svg",
    menus: ["play now", "multiplayer"],
  },
  {
    id: "cw",
    style: {
      backgroundImage: "url('/cod-cw.jpg')",
      backgroundPosition: "top right",
      backgroundSize: "cover",
    },
    logo: "logo-cw.svg",
    menus: ["campaign", "multiplayer", "zombies", "league play"],
  },
]

const index = () => {
  const [active, setActive] = useState<sceneID>("mw")

  return (
    <div className="h-screen w-screen relative">
      <Background isActive={active} />

      <AnimatePresence>
        <div className="z-100 h-screen flex">
          {list.map(x => (
            <Scene
              key={x.id}
              setActive={setActive}
              isActive={active === x.id}
              id={x.id}
              style={x.style}
              logo={x.logo}
              menus={x.menus}
            />
          ))}
        </div>
      </AnimatePresence>
    </div>
  )
}

export default index
