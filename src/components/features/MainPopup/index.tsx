import React from 'react';

// types
import { Props } from './types';

// locales
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

// components
import CloseIcon from 'components/icons/Close';

// styles
import {
  Wrapper,
  Content,
  Modal,
  Caption,
  CloseButton,
  BackgroundOverlay,
} from './styles';

export default function MainPopup({
  caption,
  children,
  onClose,
  className,
}: Props) {
  // locales hook
  const { t } = useTranslation();

  return (
    <Wrapper className={className}>
      <Modal>
        <Caption>{caption}</Caption>
        <Content>{children}</Content>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      </Modal>

      <BackgroundOverlay onClick={onClose} />
    </Wrapper>
  );
}
