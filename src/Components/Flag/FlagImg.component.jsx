import { Img } from "./Flag.styled"
const FlagImg = ({ country }) => {
  return <Img src={country.flag} alt={country.name} />
}

export default FlagImg
