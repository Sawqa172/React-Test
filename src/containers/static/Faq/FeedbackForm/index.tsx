import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

// store
import { selectFeedbackDone } from 'store/modules/static/faq/selectors';

// styles
import {
  Wrapper,
  LeftSide,
  Title,
  RightSide,
  Description,
  Form,
  Success,
} from './styles';

// types
import { Props } from './types';

export default function FeedbackForm({ className }: Props) {
  // state
  const [isFeedbackSent, setFeedbackSentStatus] = useState(false);

  // locales hook
  const { t } = useTranslation();

  // selectors
  const done = useSelector(selectFeedbackDone);

  // watch done - switch success modal
  useEffect(() => {
    done && setFeedbackSentStatus(true);
  }, [done]);

  return (
    <Wrapper className={className}>
      <LeftSide data-aos="fade-right" data-aos-duration="800">
        <Title>Не знайшли відповіді?</Title>
      </LeftSide>

      <RightSide data-aos="fade-left" data-aos-duration="800">
        <Description>
          Напишіть питання, яке вас турбує, у формі нижче. Ми обов’язково
          відповімо!
        </Description>

        {!isFeedbackSent && <Form />}

        {isFeedbackSent && <Success />}
      </RightSide>
    </Wrapper>
  );
}
