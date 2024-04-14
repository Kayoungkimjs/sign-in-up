import styled from '@emotion/styled'
import { positionCenter } from '../../styles/utils/position'
import { columnFlexbox, flexbox } from '../../styles/utils/flexbox'
import { theme } from '../../styles'
import { media } from '../../styles/utils/media'

export const SignupContainer = styled.div`
  ${positionCenter()}
  width: 530px;
  padding: 64px;
  border: 1px solid black;

  h1 {
    font-size: ${theme.fontSizes.md};
  }

  ${media[0]} {
    padding: 24px;
    width: calc(100% - 25px);

    h1 {
      font-size: ${theme.fontSizes.base};
    }
  }

  .signupResult {
    h3 {
      font-size: ${theme.fontSizes.lg};
      margin-bottom: 12px;
    }

    p {
      font-size: ${theme.fontSizes.md};
      margin-bottom: 8px;
    }

    .signupResultDetail {
      div {
        ${flexbox('start')};
        font-size: ${theme.fontSizes.base};

        &:not(:last-child) {
          margin-bottom: 8px;
        }

        dt {
          font-weight: 700;

          ::after {
            margin: 0 2px;
            content: ':';
          }
        }
      }
    }

    ${media[0]} {
      h3 {
        font-size: ${theme.fontSizes.md};
      }

      p {
        font-size: ${theme.fontSizes.sm};
      }

      .signupResultDetail {
        div {
          font-size: ${theme.fontSizes.xs};
        }
      }
    }
  }
`

export const SignupDetail = styled.div`
  ${columnFlexbox('start')}
  width: 100%;
  margin-top: 35px;

  form {
    width: 100%;

    .formItem {
      ${flexbox('between')}
      padding-bottom: 10px;

      label {
        font-size: ${theme.fontSizes.base};
        margin-right: 10px;
        margin-bottom: 5px;
      }

      ${media[0]} {
        ${columnFlexbox('start', 'start')}

        label {
          font-size: ${theme.fontSizes.sm};
          margin-right: 0;
        }
      }
    }
  }

  .buttonGroup {
    ${flexbox('end')};
    margin-top: 20px;

    button {
      &:first-of-type {
        margin-right: 10px;
      }
    }
  }

  .nextButton {
    text-align: right;
  }

  .postcode {
    ${positionCenter()}
    z-index: 500;
  }

  .zonecode {
    ${flexbox()}

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

  .addressDetail {
    ${flexbox('end')};

    input {
      &:first-of-type {
        width: 100%;
        margin-right: 10px;
      }
    }
  }

  .cardNumberGroup {
    ${flexbox()}
    width: 100%;
    padding-bottom: 5px;

    input {
      width: 25%;

      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }

  .testNumber {
    margin-top: 20px;
    font-size: ${theme.fontSizes.sm};

    strong {
      margin-bottom: 10px;
    }
  }
`
