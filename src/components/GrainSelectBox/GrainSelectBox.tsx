import SelectBox from "../SelectBox/SelectBox"
import GRAIN_OPTIONS from "./constants"

const GrainSelectBox = () => {
  return (
    <SelectBox label="Grain" inlineLabel options={GRAIN_OPTIONS} />
  )
}

export default GrainSelectBox