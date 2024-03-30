import { css } from '@emotion/react'

function flexboxName(value: string): string {
  switch (value) {
    case 'start':
      return 'flex-start'
    case 'end':
      return 'flex-end'
    case 'between':
      return 'space-between'
    case 'around':
      return 'space-around'
    default:
      return value
  }
}

export function flexbox(jc: string = 'center', ai: string = 'center') {
  return css`
    display: flex;
    justify-content: ${flexboxName(jc)};
    align-items: ${flexboxName(ai)};
  `
}

export function inlineFlexbox(jc: string = 'center', ai: string = 'center') {
  return css`
    display: inline-flex;
    justify-content: ${flexboxName(jc)};
    align-items: ${flexboxName(ai)};
  `
}

export function columnFlexbox(jc: string = 'center', ai: string = 'center') {
  return css`
    display: inline-flex;
    flex-direction: column;
    justify-content: ${flexboxName(jc)};
    align-items: ${flexboxName(ai)};
  `
}
