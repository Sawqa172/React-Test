import React from 'react';
import { useSelector } from 'react-redux';

//store
import { selectIsAuthenticated } from 'store/modules/selectors';

// types
import { Props } from './types';
import { ColorTypes } from 'components/atoms/MainLogo/types';

// styles
import { Actions, Button, Logo, Wrapper } from './styles';

export function Header({ isToggled, onToggle, className }: Props) {
  // slice hook

  // selectors
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Wrapper className={className + ` ${isToggled ? 'active' : ''}`}>
      <Button isToggled={isToggled} onClick={onToggle} />
      <Logo to="/" colorType={ColorTypes.Color} />
      <Actions />
    </Wrapper>
  );
}
