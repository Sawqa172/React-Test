import styled from 'styled-components/macro';
import ArrowDownIcon from 'components/icons/ArrowDown';

const CurrentLang = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

const CurrentLangText = styled.span`
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 16px;
  line-height: 150%;
`;

const CurrentLangIcon = styled(ArrowDownIcon)`
  margin-left: 3px;
  transform-origin: 50%;
  transform: rotate(0deg);
  transition: transform 0.3s;
`;

const LangModal = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  top: 100%;
  right: 0;
  width: 170px;
  height: auto;
  background: ${p => p.theme.colors.mainWhite};
  border-radius: 15px;
  padding: 15px;
  &:hover {
    display: block;
  }
`;

const LangList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const LangItem = styled.li``;

const LangButton = styled.button`
  height: 40px;
  width: 100%;
  padding: 0 20px;
  text-align: left;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 14px;
  background: none;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: ${p => p.theme.colors.mainGreen};
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 60px;
  &:hover {
    ${LangModal} {
      display: block;
    }
    ${CurrentLangIcon} {
      transform: rotate(180deg);
    }
  }
`;

export {
  Wrapper,
  CurrentLang,
  CurrentLangText,
  CurrentLangIcon,
  LangModal,
  LangList,
  LangItem,
  LangButton,
};
