import {createSimpleFunctional} from "../../util/helper";
import ViInput from './vi-input'
import ViInputError from './vi-input-error'
const ViInputLabel = createSimpleFunctional('vi-input-label', 'label')
const ViInputGroup = createSimpleFunctional('vi-input-group', 'div')
export {ViInput, ViInputError, ViInputLabel, ViInputGroup}
export default ViInput
