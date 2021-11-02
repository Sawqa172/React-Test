import i18next from 'i18next';
import { translations } from 'locales/translations';
import { FormDataType } from 'types/units/form-data';
import { ElementTypesType } from 'components/atoms/Input/types';

let initFormData: FormDataType = {};

function localeFillData() {
  initFormData = {
    message: {
      elType: ElementTypesType.Textarea,
      type: 'text',
      placeholder: 'Ваше запитання',
      disabled: false,
      value: '',
      rules: {
        required: true,
      },
      invalid: false,
      touched: false,
    },
    email: {
      elType: ElementTypesType.Input,
      type: 'email',
      placeholder: 'Email',
      disabled: false,
      value: '',
      rules: {
        required: true,
        isEmail: true,
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
