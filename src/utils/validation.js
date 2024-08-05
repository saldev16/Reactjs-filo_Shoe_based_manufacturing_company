/* eslint-disable no-unused-vars */
import { customPasswordCheck, equal, length, notEqual } from './javascript'
import { firstLetterToUppercase, number, passwordValidation } from './regex'

let Password = ''
const handleFormValidation = (name, value, state) => {
  const formErrors = { ...state.formErrors }
  if (name === 'Password') {
    Password = value
  }
  switch (name) {
    case 'yourRole':
    case 'fullName':
    case 'lastName':
    case 'password':
    case 'oldPassword':
    case 'email':
    case 'confirmPassword':
    case 'organization':
    case 'organizationSize':
    case 'message':
    case 'programName':
    case 'courseCode':
    case 'courseTitle':
    case 'assessmentTitle':
    case 'resourceTitle':
    case 'resourceType':
    case 'url':
    case 'activityTitle':
    case 'citation':
      if (equal(length(value))) {
        formErrors[name] = `${firstLetterToUppercase(name)} is required!`
      } else {
        formErrors[name] = ''
      }
      break
    case 'courseRunLength':
    case 'mobile':
    case 'points':
      if (!number(value)) {
        formErrors[name] = 'Please enter only number'
      } else {
        formErrors[name] = ''
      }
      break

    case 'Password':
    case 'newPassword':
      if (!equal(length(value))) {
        const valid = customPasswordCheck(value)
        if (valid) {
          formErrors[name] = valid
        } else formErrors[name] = ''
      } else formErrors[name] = 'Password is required'
      break

    case 'otpcode':
      if (value.length === 6) {
        formErrors[name] = ''
      } else {
        formErrors[name] = 'OTP is required'
      }
      break

    case 'ConfirmPassword':
      if (equal(length(value))) {
        formErrors[name] = `${firstLetterToUppercase(name)} is required!`
      } else if (notEqual(Password, value)) {
        formErrors[name] = `Password and Confirm Password is not match!`
      } else if (equal(Password, value)) {
        formErrors[name] = ''
      }
      break
    default:
      break
  }

  return formErrors
}
export default handleFormValidation
