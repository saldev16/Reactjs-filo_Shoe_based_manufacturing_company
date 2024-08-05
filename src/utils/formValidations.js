import { equal, greaterThan, length } from "./javascript";
import {
  firstLetterToUppercase,
  stringValidation,
  emailValidation,
  regularString,
  number,
} from "./regex";

export const allValidations = (name, value, state, ignore = []) => {
  const formErrors = { ...state.formErrors };
  if (ignore.includes(name)) {
    if (formErrors[name]) formErrors[name] = "";
    return formErrors;
  }
  switch (name) {
    case "email":
      if (equal(length(value))) {
        formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
      } else if (!emailValidation(value)) {
        formErrors[name] = `Please enter valid email!`;
      } else {
        formErrors[name] = "";
      }
      break;
    case "fullName":
    case "name":
      if (equal(length(value))) {
        formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
      } else if (!regularString(value)) {
        formErrors[name] = `Unnecessary space or special chracter in word!`;
      } else if (greaterThan(length(value), 70)) {
        formErrors[name] = `${firstLetterToUppercase(
          name
        )} exceeds character limit. Maximum allowed: 70 characters.`;
      } else {
        formErrors[name] = "";
      }
      break;

    case "categoryName":
      if (equal(length(value))) {
        formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
      } else if (!stringValidation(value)) {
        formErrors[name] = `Unnecessary space in word!`;
      } else {
        formErrors[name] = "";
      }
      break;

    case "color":
    case "firstName":
    case "lastName":
    case "code":
    case "status":
    case "category":
    case "subCategory":
      if (equal(length(value))) {
        formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
      } else if (!stringValidation(value)) {
        formErrors[name] = `Unnecessary space or special chracter in word!`;
      } else {
        formErrors[name] = "";
      }
      break;
    case "expertise":
    case "names":
    case "sizes":
    case "materialTags":
    case "processName":
    case "labels":
    case "machines":
    case "label":
      if (!value.length) {
        formErrors[name] = `${firstLetterToUppercase(name)} are required!`;
      } else {
        formErrors[name] = "";
      }
      break;
    case "qty":
    case "noOflabels":
    case "capacityPerHour":
      if (!value) {
        if (name === "noOflabels") {
          formErrors[name] = `No of labels is required!`;
        } else {
          formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
        }
      } else if (!number(value)) {
        if (name === "noOflabels") {
          formErrors[name] = `No of labels should be number!`;
        } else {
          formErrors[name] = `${firstLetterToUppercase(
            name
          )} should be number!`;
        }
      } else {
        formErrors[name] = "";
      }
      break;
    case "operation":
    case "season":
    case "classType":
    case "group":
    case "jobPosition":
    case "type":
    case "injectionType":
    case "supplier":
    case "unit":
    case "material":
      if (!value.name) {
        formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
      } else {
        formErrors[name] = "";
      }
      break;
    case "tool":
    case "rawMaterial":
      if (!value) {
        formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
      } else {
        formErrors[name] = "";
      }
      break;

    default:
      break;
  }
  return formErrors;
};
