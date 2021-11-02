import _ from 'lodash';
import i18next from 'i18next';
import { translations } from 'locales/translations';

interface Props {
  value: string;
  rules: {
    required?: boolean;
    invalid?: boolean;
    minLength?: number;
    maxLength?: number;
    isEmail?: boolean;
    isNumeric?: boolean;
  };
}

const errorKeys = {
  required: i18next.t(translations.system.validation.required),
  invalid: i18next.t(translations.system.validation.invalid),
  minLength: i18next.t(translations.system.validation.minLength),
  maxLength: i18next.t(translations.system.validation.maxLength),
  isEmail: i18next.t(translations.system.validation.isEmail),
  isNumeric: i18next.t(translations.system.validation.isNumeric),
};

const checkValidity = ({ value, rules }: Props) => {
  let isValid: boolean = true;
  const errors: string[] = [];

  if (value === null) {
    return {
      isValid,
      errorText: '',
    };
  }

  if (!rules) {
    return {
      isValid,
      errorText: '',
    };
  }

  if (rules.required) {
    isValid =
      ((_.isString(value) && value.trim() !== '') ||
        _.isNumber(value) ||
        _.isObject(value)) &&
      isValid;

    !isValid && errors.push(errorKeys.required);
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;

    !isValid && errors.push(`${errorKeys.minLength}${rules.minLength}`);
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;

    !isValid && errors.push(`${errorKeys.maxLength}${rules.maxLength}`);
  }

  if (rules.isEmail) {
    const pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;

    !isValid && errors.push(errorKeys.isEmail);
  }

  if (rules.isNumeric) {
    const pattern = /^\d*\.?\d*$/;
    isValid = pattern.test(value) && isValid;

    !isValid && errors.push(errorKeys.isNumeric);
  }

  return { isValid, errorText: errors[0] || '' };
};

export default checkValidity;
