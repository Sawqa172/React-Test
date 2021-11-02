import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { media } from '../../../styles/media';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  id: string;
  label: string;
  className?: string;
  isSelected?: boolean;
}

export const Radio = memo(
  ({ id, label, className, isSelected, ...restProps }: Props) => {
    return (
      <Wrapper className={className}>
        <input type="radio" id={id} checked={isSelected} {...restProps} />
        <label htmlFor={id}>{label}</label>
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  input[type='radio'] {
    margin: 0;
    opacity: 0;
    width: 0;
    height: 0;
    padding: 0;

    + label {
      margin: 0;
      display: inline-block;
      position: relative;
      cursor: pointer;
      font-size: ${(16 / 375) * 100}vw;
      line-height: ${(22 / 375) * 100}vw;
      color: ${p => p.theme.colors.primary};
      font-family: ${p => p.theme.fontFamily.CocoGothicBold};
      z-index: 1;
      background:
              linear-gradient(#ffffff,#ffffff) padding-box,
              linear-gradient(#ffffff,#ffffff) border-box;
      border: ${(5 / 375) * 100}vw solid transparent;
      border-radius: ${(15 / 375) * 100}vw;
      padding: ${(10 / 375) * 100}vw ${(15 / 375) * 100}vw;

      ${media.xxsmall`
        font-size: 16px;
        line-height: 22px;
        padding: 10px 15px;
        border-radius: 15px;
        border: 4px solid transparent;
      `}

      ${media.medium`
        padding: ${(15 / 1920) * 100}vw ${(25 / 1920) * 100}vw;
        font-size: ${(26 / 1920) * 100}vw;
        line-height: ${(30 / 1920) * 100}vw;
        border-radius: ${(25 / 1920) * 100}vw;
        border: ${(10 / 1920) * 100}vw solid transparent;
      `}

      ${media.large`
        padding: ${15 * (1440 / 1920)}px ${25 * (1440 / 1920)}px;
        font-size: ${26 * (1440 / 1920)}px;
        line-height: ${30 * (1440 / 1920)}px;
        border: ${(10 / 1920) * 100}vw solid transparent;
        border-radius: ${25 * (1440 / 1920)}px;
      `}

      a {
        color: ${p => p.theme.colors.primary};
        text-decoration: none;
      }

      &:hover {
        background:
                linear-gradient(#ffffff,#ffffff) padding-box,
                ${p => p.theme.gradients.radialBlue} border-box;
      }
    }
    &:disabled {
      + label {
        opacity: 0.6;
        cursor: auto;

        &:hover {
          &::before {
           
          }
        }
      }
    }
    &:checked {
      + label {
        background:
                linear-gradient(#ffffff,#ffffff) padding-box,
                ${p => p.theme.gradients.radialBlue} border-box;
      }
    }
  }
`;
