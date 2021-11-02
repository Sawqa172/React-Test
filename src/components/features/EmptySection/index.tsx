//core
import React from 'react';

// styles
import { Wrapper, Link } from './styles';

// data, types, props, default
import { PropsType } from './types';

function EmptySection({ title, link, url }: PropsType) {
  return (
    <Wrapper>
      {title}
      <br />
      <Link to={url}>{link}</Link>
    </Wrapper>
  );
}

export default EmptySection;
