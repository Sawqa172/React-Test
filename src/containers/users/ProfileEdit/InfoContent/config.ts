import i18next from 'i18next';
import { translations } from 'locales/translations';
import { FormDataType } from 'types/units/form-data';
import { ElementTypesType } from 'components/atoms/Input/types';
import countryList from 'react-select-country-list';

let initFormData: FormDataType = {};

function localeFillData() {
  initFormData = {
    avatar: {
      elType: ElementTypesType.Input,
      type: 'file',
      value: '',
      disabled: false,
      rules: {
        required: false,
      },
      invalid: false,
      touched: false,
    },
    firstName: {
      elType: ElementTypesType.Input,
      type: 'text',
      placeholder: i18next.t(
        translations.containers.profileEdit.info.profile.fields.firstName,
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
        translations.containers.profileEdit.info.profile.fields.lastName,
      ),
      disabled: false,
      value: '',
      rules: {
        required: false,
      },
      invalid: false,
      touched: false,
    },
    phone: {
      elType: ElementTypesType.Input,
      type: 'tel',
      placeholder: i18next.t(
        translations.containers.profileEdit.info.profile.fields.phone,
      ),
      disabled: false,
      value: '',
      rules: {
        required: true,
      },
      invalid: false,
      touched: false,
    },
    country: {
      elType: ElementTypesType.Select,
      type: 'select',
      placeholder: i18next.t(
        translations.containers.profileEdit.info.profile.fields.country,
      ),
      disabled: false,
      value: '',
      rules: {
        required: false,
      },
      options: countryList().getData(),
      invalid: false,
      touched: false,
    },
    city: {
      elType: ElementTypesType.Input,
      type: 'text',
      placeholder: i18next.t(
        translations.containers.profileEdit.info.profile.fields.city,
      ),
      disabled: false,
      value: '',
      rules: {
        required: false,
      },
      invalid: false,
      touched: false,
    },
    aboutMe: {
      elType: ElementTypesType.Textarea,
      type: 'text',
      placeholder: i18next.t(
        translations.containers.profileEdit.info.profile.fields.aboutMe,
      ),
      disabled: false,
      value: '',
      rules: {
        required: false,
      },
      invalid: false,
      touched: false,
    },
    facebook: {
      elType: ElementTypesType.Input,
      type: 'text',
      placeholder: i18next.t(
        translations.containers.profileEdit.info.socials.fields.facebook,
      ),
      disabled: false,
      value: '',
      rules: {
        required: false,
      },
      invalid: false,
      touched: false,
    },
    linkedin: {
      elType: ElementTypesType.Input,
      type: 'text',
      placeholder: i18next.t(
        translations.containers.profileEdit.info.socials.fields.linkedin,
      ),
      disabled: false,
      value: '',
      rules: {
        required: false,
      },
      invalid: false,
      touched: false,
    },
    google: {
      elType: ElementTypesType.Input,
      type: 'text',
      placeholder: i18next.t(
        translations.containers.profileEdit.info.socials.fields.google,
      ),
      disabled: false,
      value: '',
      rules: {
        required: false,
      },
      invalid: false,
      touched: false,
    },
    instagram: {
      elType: ElementTypesType.Input,
      type: 'text',
      placeholder: i18next.t(
        translations.containers.profileEdit.info.socials.fields.instagram,
      ),
      disabled: false,
      value: '',
      rules: {
        required: false,
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
