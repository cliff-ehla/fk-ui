import ViDialog from './vi-dialog'
import {createSimpleFunctional} from '../../util/helper'
const ViDialogTitle = createSimpleFunctional('vi-dialog__title', 'div')
const ViDialogHeader = createSimpleFunctional('vi-dialog__header', 'div')
const ViDialogBody = createSimpleFunctional('vi-dialog__body', 'div')
const ViDialogFooter = createSimpleFunctional('vi-dialog__footer', 'div')
export {ViDialog, ViDialogTitle, ViDialogHeader, ViDialogFooter, ViDialogBody}
export default ViDialog
