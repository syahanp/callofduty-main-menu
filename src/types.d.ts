export type sceneID = "mw" | "vanguard" | "warzone" | "cw"

export interface SceneList {
  id: sceneID
  style: React.CSSProperties
  logo: any
  menus: string[]
}
