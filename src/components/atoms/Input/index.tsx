import React, { ReactNode, useEffect, useState } from 'react';
import generateRandomString from 'utils/generate-random-string';
import { StyledInput, StyledTextarea, Wrapper, ErrorMessage } from './styles';
import defaultProps from './defaultProps';

// types
import { ElementTypesType, PropsType } from './types';

const Input = (props: PropsType) => {
  let inputElement: ReactNode = null;
  let inputInvalid = false;

  // console.log(props);

  // input name state
  const [inputName, setInputName] = useState('');

  useEffect(() => {
    setInputName(generateRandomString(6));
  }, []);

  if (props.invalid && props.touched) {
    inputInvalid = true;
  }

  // blur handler
  const onBlurHandler = e => {
    e.stopPropagation();
    props.onBlur();
  };

  if (props.elType === ElementTypesType.Input) {
    switch (props.type) {
      default:
        // text, e-mail etc.
        inputElement = (
          <StyledInput
            {...props}
            value={props.value || ''}
            id={inputName}
            invalid={inputInvalid}
            onChange={event =>
              props.changed({
                value: event.target.value,
                action: 'input-change',
              })
            }
            onFocus={props.onFocus}
            onBlur={onBlurHandler}
            dimension={props.dimension}
            color={props.color}
          />
        );
        break;
    }
  }

  if (props.elType === ElementTypesType.Textarea) {
    inputElement = (
      <StyledTextarea
        {...props}
        value={props.value || ''}
        id={inputName}
        invalid={inputInvalid}
        onChange={event =>
          props.changed({
            value: event.target.value,
            action: 'input-change',
          })
        }
        onFocus={props.onFocus}
        onBlur={onBlurHandler}
        dimension={props.dimension}
        color={props.color}
      />
    );
  }

  if (!inputElement) {
    inputElement = (
      <StyledInput
        {...props}
        value={props.value || ''}
        id={inputName}
        invalid={inputInvalid}
        onChange={event =>
          props.changed({
            value: event.target.value,
            action: 'input-change',
          })
        }
        onFocus={props.onFocus}
        onBlur={onBlurHandler}
        dimension={props.dimension}
        color={props.color}
      />
    );
  }

  return (
    <Wrapper {...props}>
      {inputElement}
      {props.errorMessage && props.errorMessage.length && (
        <ErrorMessage>{props.errorMessage}</ErrorMessage>
      )}
    </Wrapper>
  );
};

Input.defaultProps = defaultProps as Partial<PropsType>;

export default Input;
