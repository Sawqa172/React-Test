import i18next from 'i18next';
import { translations } from 'locales/translations';
import { FormDataType } from 'types/units/form-data';
import { ElementTypesType } from 'components/atoms/Input/types';

let initFormData: FormDataType = {};

function localeFillData() {
  initFormData = {
    firstName: {
      elType: ElementTypesType.Input,
      type: 'text',
      placeholder: i18next.t(
        translations.containers.signUp.form.firstName.placeholder,
      ),
      disabled: false,
      value: '',
      rules: {
        required: true,
        minLength: 2,
      },
      invalid: false,
      touched: false,
    },
    lastName: {
      elType: ElementTypesType.Input,
      type: 'text',
      placeholder: i18next.t(
        translations.containers.signUp.form.lastName.placeholder,
      ),
      disabled: false,
      value: '',
      rules: {
        required: false,
      },
      invalid: false,
      touched: true,
    },
    email: {
      elType: ElementTypesType.Input,
      type: 'email',
      placeholder: i18next.t(
        translations.containers.signUp.form.email.placeholder,
      ),
      disabled: false,
      value: '',
      rules: {
        required: true,
        isEmail: true,
      },
      invalid: false,
      touched: false,
    },
    phone: {
      elType: ElementTypesType.Input,
      type: 'tel',
      placeholder: i18next.t(
        translations.containers.signUp.form.phone.placeholder,
      ),
      disabled: false,
      value: '',
      rules: {
        required: true,
      },
      invalid: false,
      touched: false,
    },
    password: {
      elType: ElementTypesType.Input,
      type: 'password',
      value: '',
      placeholder: i18next.t(
        translations.containers.signUp.form.password.placeholder,
      ),
      disabled: false,
      rules: {
        required: true,
        minLength: 5,
      },
      invalid: false,
      touched: false,
    },
  };
}

// init locale filling data
localeFillData();

// language changed event
i18next.on('languageChanged init', () => {
  localeFillData();
});

export { initFormData };
