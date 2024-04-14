import { theme } from '../index'

const breakpoints = [theme.breakpoints.tablet, theme.breakpoints.desktop]

export const media = breakpoints.map((bp) => `@media (max-width: ${bp})`)
