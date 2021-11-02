// core
import React from 'react';

// components
import FaqSEO from './SEO';
import QAList from './QAList';
import FeedbackForm from './FeedbackForm';

// store
import { useFaqSlice } from 'store/modules/static/faq/hook';

// styles
import { Wrapper } from './styles';

export function Faq() {
  // init slice
  useFaqSlice();

  // render
  return (
    <>
      <FaqSEO />

      <Wrapper>
        <QAList />
        <FeedbackForm />
      </Wrapper>
    </>
  );
}
