import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

// config
import { initFormData } from './data';

import {
  selectFeedbackLoading,
  selectFeedbackDone,
} from 'store/modules/static/faq/selectors';
import { actions } from 'store/modules/static/faq/slice';

// utils
import checkValidity from 'utils/check-validity';

import { Wrapper, Fields, Input, Actions, SubmitButton } from './styles';

// types
import { Props } from './types';
import { FormFieldType } from 'types/units/form-field';
import {
  ButtonDimensionsType,
  ButtonGroupsType,
} from 'components/atoms/Button/types';

export default function Form({ className }: Props) {
  // local data
  const [formData, setFormData] = useState(initFormData);

  // form validation state
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  // locales hook
  const { t } = useTranslation();

  // selectors
  const loading = useSelector(selectFeedbackLoading);
  const done = useSelector(selectFeedbackDone);

  // dispatch
  const dispatch = useDispatch();
  const sendFeedback = payload =>
    dispatch(actions.sendFeedbackTrigger(payload));

  // init form validity
  useEffect(() => {
    let tempFormIsValid = Object.keys(formData).every(
      controlKey =>
        !formData[controlKey].invalid && formData[controlKey].touched,
    );

    setFormIsValid(tempFormIsValid);
  }, [formData]);

  // input change handler
  const inputChangedHandler = (controlName, value) => {
    const { isValid, errorText } = checkValidity({
      value,
      rules: formData[controlName].rules,
    });

    const updatedFields = {
      ...formData,
      [controlName]: {
        ...formData[controlName],
        value,
        invalid: !isValid,
        // errorMessage: isValid ? '' : errorText,
        touched: true,
      },
    };

    setFormData(updatedFields);
  };

  // submit handler
  const submitHandler = event => {
    event.preventDefault();

    const payload = {
      message: formData.message.value,
      email: formData.email.value,
    };

    sendFeedback(payload);
  };

  // form formatting
  const formElementsArray: Array<FormFieldType> = [];
  Object.keys(formData).forEach(key => {
    formElementsArray.push({
      id: key,
      ...formData[key],
    });
  });

  return (
    <Wrapper onSubmit={submitHandler} className={className}>
      <Fields>
        {formElementsArray.map(formElement => (
          <Input
            {...formElement}
            key={formElement.id}
            changed={({ value }) => inputChangedHandler(formElement.id, value)}
          />
        ))}
      </Fields>

      <Actions>
        <SubmitButton
          type="submit"
          group={ButtonGroupsType.OutlinedBlack}
          dimension={ButtonDimensionsType.Regular}
          isLoading={loading}
          disabled={!formIsValid}
        >
          Надіслати
        </SubmitButton>
      </Actions>
    </Wrapper>
  );
}
