import styled from 'styled-components/macro';

import Close from 'components/icons/Close';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const File = styled.div`
  position: relative;
`;

const Input = styled.input`
  display: none;
`;

const Icon = styled.span`
  flex-shrink: 0;
  transition: ${p => p.theme.transitions.regular};

  && {
    color: ${p => p.theme.colors.primary};
  }
`;

const Text = styled.span`
  margin-top: 15px;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  color: ${p => p.theme.colors.primary};
  font-size: 14px;
  line-height: 1.4;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  position: relative;
  width: 152px;
  height: 144px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: ${p => p.theme.colors.primary};
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.2s;

  &:disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.8;

    & > ${Icon} {
      color: ${p => p.theme.colors.primary};
    }
  }

  &:hover {
    border-color: ${p => p.theme.colors.mainGreen};
  }
`;

const ResetIcon = styled(Close)`
  width: 100%;
  height: 100%;
  color: ${p => p.theme.colors.primary};
  transition: ${p => p.theme.transitions.regular};
`;

const ResetButton = styled.button`
  position: absolute;
  top: 0;
  left: 105%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  padding: 0;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover > ${ResetIcon} {
    color: ${p => p.theme.colors.mainGreen};
  }
`;

const Tips = styled.div`
  margin-left: 30px;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  color: ${p => p.theme.colors.primary};

  & > span::after {
    content: '\\A';
    white-space: pre;
  }
`;

export {
  Wrapper,
  File,
  Input,
  Button,
  Icon,
  Text,
  Image,
  ResetButton,
  ResetIcon,
  Tips,
};
