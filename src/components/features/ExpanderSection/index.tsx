// core
import React, { useState } from 'react';

// types
import { PropsType } from './types';

// data
import defaultProps from './defaultProps';

// styles
import {
  Wrapper,
  Header,
  HeaderContent,
  Title,
  ArrowDownIcon,
  Slot,
} from './styles';

function ExpanderSection({
  children,
  ...props
}: PropsType & typeof defaultProps) {
  const [isExpanded, setExpand] = useState(props.isExpanded);

  return (
    <Wrapper>
      <Header isExtended={props.isExtended}>
        <HeaderContent onClick={() => setExpand(!isExpanded)}>
          <ArrowDownIcon />
          <Title>{props.title}</Title>
        </HeaderContent>
      </Header>
      {isExpanded && <Slot>{children}</Slot>}
    </Wrapper>
  );
}

ExpanderSection.defaultProps = defaultProps;

export default ExpanderSection;
