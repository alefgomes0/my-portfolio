import { Moon } from "../svg/Moon"
import { Sun } from "../svg/Sun"

type NightModeProps = {
  changeTheme: () => void
  width: number
  height: number
}

export const NightMode = (props: NightModeProps) => {
  return (
    <div className="w-min flex items-center gap-1 cursor-pointer" onClick={props.changeTheme}>
      <div>
        <Sun width={props.width} height={props.height} />
      </div>
      <span>|</span>
      <div>
        <Moon width={props.width} height={props.height} />
      </div>
    </div>
  )
}