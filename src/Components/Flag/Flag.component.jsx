import FlagDescription from "./FlagDescription.component"
import FlagImg from "./FlagImg.component"
import { FlagContainer } from "./Flag.styled"
import { Link, useParams } from "react-router-dom"

export const Flag = ({ country }) => {
  const { name } = country
  return (
    <Link to={`details/${name}`}>
      <FlagContainer>
        <FlagImg country={country} />
        <FlagDescription country={country} />
      </FlagContainer>
    </Link>
  )
}
