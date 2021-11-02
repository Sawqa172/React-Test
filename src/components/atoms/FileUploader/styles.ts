import styled from 'styled-components/macro';

import Close from 'components/icons/Close';

const FileUploaderWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const FileUploaderInput = styled.input`
  display: none;
`;

const FileUploaderIcon = styled.span`
  flex-shrink: 0;
  transition: ${p => p.theme.transitions.regular};
  && {
    color: ${p => p.theme.colors.primary};
  }
`;

const FileUploaderButton = styled.button`
  min-width: 24px;
  min-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  &:disabled {
    pointer-events: none;
    cursor: default;

    & > ${FileUploaderIcon} {
      color: ${p => p.theme.colors.primary};
    }
  }

  &:hover > ${FileUploaderIcon} {
    color: ${p => p.theme.colors.mainGreen};
  }
`;

const FileUploaderText = styled.div`
  margin-left: 15px;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  color: ${p => p.theme.colors.primary};
  font-size: 14px;
  line-height: 1.2;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const FileUploaderResetIcon = styled(Close)`
  width: 100%;
  height: 100%;
  color: ${p => p.theme.colors.primary};
  transition: ${p => p.theme.transitions.regular};
`;

const FileUploaderResetButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-left: 15px;
  padding: 0;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover > ${FileUploaderResetIcon} {
    color: ${p => p.theme.colors.mainGreen};
  }
`;

export {
  FileUploaderWrapper,
  FileUploaderInput,
  FileUploaderButton,
  FileUploaderIcon,
  FileUploaderText,
  FileUploaderResetButton,
  FileUploaderResetIcon,
};
