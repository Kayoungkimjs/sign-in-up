import '@emotion/react'

declare module '@emotion/react' {
  export type TypographyScale = 'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'lg'

  export interface DefaultTheme {
    breakpoints: {
      tablet: string
      desktop: string
    }

    colors: {
      black: string
      dark: string
      primary: string
      secondary: string
      tertiary: string
      border: string
      background: string
      white: string
      blue: string
      blueDark: string
      blueLight: string
      red: string
      green: string
    }

    fontFamilies: {
      main: string
      price: string
    }

    fontSizes: {
      xxs: string
      xs: string
      sm: string
      base: string
      md: string
      lg: string
    }

    lineHeights: {
      xxs: string
      xs: string
      sm: string
      base: string
      md: string
      lg: string
    }

    letterSpacings: {
      xxs: string
      xs: string
      sm: string
      base: string
      md: string
      lg: string
    }
  }
}
