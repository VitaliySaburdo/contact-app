export const theme = Object.freeze({
  fonts: {
    main: `'Roboto', sans-serif`,
    second: `'Poppins', sans-serif`,
  },
  fontSizes: {
    mainFontSize: '16px',
    menuTitleSize: '28px',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  colors: {
    // My styles
    primaryColor: '#1976d2',
    secondaryColor: '#455a64',
    clearWhite: '#FFFFFF',
    // Buttons
    btnBorderColor: 'rgba(30, 30, 30, 0.2)',
    btnSuccessColor: 'green',
    btnEditColor: 'orange',
    btnSuccessHoverColor: '#13ba00',
    btnEditHoverColor: '#FF9966',
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
