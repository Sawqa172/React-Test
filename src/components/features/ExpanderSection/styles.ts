import styled from 'styled-components';
import H4 from 'components/atoms/H4';

// utils
import { media } from 'styles/media';

interface Props {
  readonly isExtended?: boolean;
}

const Wrapper = styled.div``;

const Header = styled.div<Props>`
  box-sizing: border-box;
  ${props =>
    props.isExtended
      ? `
          padding-right: 78px
        `
      : ``};
`;

const HeaderContent = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const Title = styled(H4)`
  margin-left: 10px;
  font-size: 18px;
  ${media.medium`
    font-size: 24px;
    margin-left: 20px;
  `}
`;

const ArrowDownIcon = styled.span`
  color: ${p => p.theme.colors.primary};
`;

const Slot = styled.div`
  margin-top: 30px;
`;

export { Wrapper, Header, HeaderContent, Title, ArrowDownIcon, Slot };
