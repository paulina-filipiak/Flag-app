import { Flag } from "../Flag/Flag.component"
import { FlagsGrid } from "./FlagList.styled"
import { v4 as uuidv4 } from "uuid"

const FlagList = ({ countries }) => {
  return (
    <FlagsGrid>
      {countries.map((country) => {
        return <Flag key={uuidv4()} country={country} />
      })}
    </FlagsGrid>
  )
}

export default FlagList
