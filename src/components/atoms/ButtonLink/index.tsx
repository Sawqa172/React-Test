import React, { Fragment } from 'react';

import { StyledButton, Text, AfterIcon, BeforeIcon } from './styles';
import { PropsType } from './types';
import defaultProps from './defaultProps';

function ButtonLink({
  children,
  ...restProps
}: PropsType & typeof defaultProps) {
  return (
    <StyledButton {...restProps}>
      {restProps.prependIcon && <BeforeIcon as={restProps.prependIcon} />}
      {children && <Text>{children}</Text>}
      {restProps.appendIcon && <AfterIcon as={restProps.appendIcon} />}
    </StyledButton>
  );
}

ButtonLink.defaultProps = defaultProps;

export default ButtonLink;
