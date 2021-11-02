import styled from 'styled-components';

const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 15px;
  height: 15px;
  box-sizing: border-box;
  padding: 1px 2px;
  background-color: ${p => p.theme.colors.mainGreen};
  border: 2px solid ${p => p.theme.colors.mainWhite};
  border-radius: 7px;
`;
const BadgeCount = styled.div`
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 9px;
  line-height: 1;
  white-space: nowrap;
`;

export { BadgeWrapper, BadgeCount };
