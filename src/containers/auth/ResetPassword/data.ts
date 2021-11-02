import i18next from 'i18next';
import { translations } from 'locales/translations';
import { FormDataType } from 'types/units/form-data';
import { ElementTypesType } from 'components/atoms/Input/types';

let initFormData: FormDataType = {};

function localeFillData() {
  initFormData = {
    password: {
      elType: ElementTypesType.Input,
      type: 'password',
      value: '',
      placeholder: i18next.t(
        translations.containers.resetPassword.form.password.placeholder,
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