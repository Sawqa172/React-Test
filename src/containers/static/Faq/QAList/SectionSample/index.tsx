import React, { useState } from 'react';

import {
  Wrapper,
  Question,
  QuestionIcon,
  QuestionIconContent,
  Answer,
} from './styles';

// types
import { Props } from './types';

export default function SectionSample({ question, answer, className }: Props) {
  const [isToggled, setToggled] = useState<boolean>(false);

  return (
    <Wrapper className={className}>
      <Question onClick={() => setToggled(!isToggled)}>
        {question}
        <QuestionIcon isToggled={isToggled}>
          <QuestionIconContent />
        </QuestionIcon>
      </Question>

      <Answer
        isToggled={isToggled}
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </Wrapper>
  );
}
