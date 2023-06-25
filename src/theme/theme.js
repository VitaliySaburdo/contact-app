export const theme = Object.freeze({
  fonts: {
    main: `'Roboto', sans-serif`,
    second: `'Poppins', sans-serif`,
  },
  fontSizes: [12, 14, 16],
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  colors: {
    // My styles
    primaryColor: '#1976d2',
    scondaryColour: '#455a64',
    clearWhite: '#FFFFFF',
    btnBorderColor: 'rgba(30, 30, 30, 0.2)',
  // Prev styles
    dark: '#111111',
    orange: '#FFC107',
    white: '#FDF7F2',
    whity: '#FEF9F9',
    light: '#f0f0f0',
    
    blueGradient: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',
    blue: '#0f70da',
    blueDark: '#419EF1',
    blueLight: '#CCE4FB',
    green: '#00C3AD;',
    red: '#F43F5E',
    backdropColor: ' #61616199',
    black: '#111111',
    clearBlack: '#000000',
    grey: '#888888',
    transparent: 'transparent',
    currentColor: 'currentColor',
  },
  shadows: {
    mainShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    secondShadow: '7px 13px 14px rgba(116, 177, 232, 0.24)',
  },
  media: {
    sm: '(min-width: 320px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1280px)',
    smToMd: '(min-width: 320px) and (max-width: 767.99px)',
    mdToLg: '(min-width: 768px) and (max-width: 1279.99px)',
    toMd: '(max-width: 767.99px)',
    smToLg: '(min-width: 320px) and (max-width: 1279.99px)',
  },
});
