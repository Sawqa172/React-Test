import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//store
import { selectIsAuthenticated } from 'store/modules/selectors';

// styles
import { Inner, Wrapper } from './styles';

export function Header() {
  // slice hook

  // selectors
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // dispatch
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Inner></Inner>
    </Wrapper>
  );
}
