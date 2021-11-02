import React, { Fragment } from 'react';

import LoadingIndicator from 'components/atoms/LoadingIndicator';

import { StyledButton, Text, AfterIcon, BeforeIcon } from './styles';
import { PropsType } from './types';
import { ColorType, TypesType } from 'components/atoms/LoadingIndicator/types';
import defaultProps from './defaultProps';

function Button({ children, ...restProps }: PropsType & typeof defaultProps) {
  return (
    <StyledButton {...restProps} onClick={restProps.onClick}>
      {!restProps.isLoading ? (
        <Fragment>
          {restProps.prependIcon && <BeforeIcon as={restProps.prependIcon} />}
          {children && <Text>{children}</Text>}
          {restProps.appendIcon && <AfterIcon as={restProps.appendIcon} />}
        </Fragment>
      ) : (
        <LoadingIndicator
          type={TypesType.Local}
          color={ColorType.Dark}
          size={5}
        />
      )}
    </StyledButton>
  );
}

Button.defaultProps = defaultProps;

export default Button;
