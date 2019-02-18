
export const VAT = 0.05
export const MAX_PHONE_LENGTH = 10
export const MAX_PASSWORD_LENGTH = 15

/* Gradient Colors */
export const FIRST_COLOR = '#6171b6'
export const SECOND_COLOR = '#14BAAB'

/* Colors */
export const PRIMARY_COLOR = '#2B2B2B'
export const LINK_COLOR = '#3061E9'
export const DETAILS_COLOR = '#A1A1A1'

export const getBillInfo = (items) => {
  const subtotal = getSubtotal(items)
  const vatApprox = getVatApprox(subtotal)
  const totalPrice = subtotal + vatApprox

  return { subtotal, vatApprox, totalPrice }
}

function getSubtotal(items) {
  let subtotal = 0

  for (let item of items) {
    if (item.price) {
       subtotal = subtotal + parseInt(item.price) * parseInt(item.quantity)
    }
  }

  return subtotal
}

function getVatApprox(subtotal) {
  let vatApprox = VAT * subtotal
  vatApprox = Math.round(vatApprox * 100) / 100
  return vatApprox
}
