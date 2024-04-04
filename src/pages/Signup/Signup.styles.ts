import styled from '@emotion/styled'
import { positionCenter } from '../../styles/utils/position'
import { columnFlexbox, flexbox } from '../../styles/utils/flexbox'
import { theme } from '../../styles'
import { textStyle } from '../../styles/utils/typography'

export const SignupContainer = styled.div`
  ${positionCenter()}
  padding: 64px;
  width: 622px;
  height: 430px;
  border: 1px solid black;
`

export const SignupDetail = styled.div`
  ${columnFlexbox('start')}
  width: 100%;
  margin-top: 43px;

  .postcode {
    ${positionCenter()}
  }

  .zonecode {
    ${flexbox()};

    input {
      margin-right: 10px;
    }
  }

  .address {
    input {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  .address-detail {
    ${flexbox('end')};

    input {
      &:first-child {
        width: 100%;
        margin-right: 10px;
      }
    }
  }

  .next-button {
    text-align: right;
  }

  .button-group {
    ${flexbox('end')};
    margin-top: 20px;

    button {
      &:first-child {
        margin-right: 10px;
      }
    }
  }

  .card-number-group {
    ${flexbox('between')}
    margin-top: 20px;

    input {
      width: 100px;
    }
  }

  input {
    ${textStyle('base')};
    display: block;
    width: 200px;
    padding: 0 8px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.border};
    border-radius: 4px;
    color: ${theme.colors.black};
    transition: background-color 200ms ease-in-out,
      border-color 200ms ease-in-out;
    appearance: none;

    &::placeholder {
      color: ${theme.colors.tertiary};
    }

    &:focus {
      border: 2px solid ${theme.colors.blueDark};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
  }

  form {
    width: 100%;
  }

  .detail {
    ${flexbox('between')}
    padding-bottom: 10px;
  }

  .warning {
    ${flexbox('end')}
    color: ${theme.colors.red};

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  .result {
    ${flexbox()}
  }
`
