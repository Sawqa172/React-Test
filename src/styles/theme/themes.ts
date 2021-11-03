const lightTheme = {
  colors: {
    primary: '#414042',
    mainWhite: '#FFFFFF',
    mainGray: '#F6F6F6',
    mainOrange: '#F4C567',
    mainGreen: '#A8ED5F',
    mainPurple: '#DBABEF',
    mainBlue: '#8FEAF9',
    mainRed:'#ff4646',
    fontBlack: '#333',
  },
  boxShadows: {
    layout: '0 16px 40px 0 rgba(48, 49, 51, 0.15)',
  },
  fontFamily: {
    CocoGothicLight: '"Coco Gothic Light", Arial, sans-serif',
    CocoGothicRegular: '"Coco Gothic Regular", Arial, sans-serif',
    CocoGothicBold: '"Coco Gothic Bold", Arial, sans-serif',
    CocoGothicHeavy: '"Coco Gothic Heavy", Arial, sans-serif',
    SourceSansProSemiBold: 'SourceSansPro-Semibold',
    SourceSansProRegular: 'SourceSansPro-Regular',
    SourceSansProLight: 'SourceSansPro-Light',
    SourceSansProBold: 'SourceSansPro-Bold',
    RomanescoRegular:'Romanesco-Regular'
  },
  gradients: {
    radialBlue:
      'radial-gradient(105.28% 236.89% at 100% 100%, #FFDDD6 0%, #78FFF2 32.64%, #3EBFED 57.55%, #7FB4FF 76.04%, #FFFFFF 100%)',
    linearRedBlue90:
      'linear-gradient(90deg, rgba(255, 117, 89, 0.8) 0%, rgba(130, 225, 225, 0.8) 98.59%)',
    linearYellowBlue90:
      'linear-gradient(90deg, rgba(254, 214, 88, 0.8) 0%, rgba(127, 164, 226, 0.8) 98.59%)',
    linearPurpleGreen90:
      'linear-gradient(90deg, rgba(170, 91, 255, 0.8) 0%, rgba(191, 226, 124, 0.8) 98.59%)',
    linearRedBlue180:
      'linear-gradient(180deg, rgba(255, 117, 89, 0.8) 0%, rgba(130, 225, 225, 0.8) 98.59%)',
    linearYellowBlue180:
      'linear-gradient(180deg, rgba(254, 214, 88, 0.8) 0%, rgba(127, 164, 226, 0.8) 98.59%)',
    linearPurpleGreen180:
      'linear-gradient(180deg, rgba(170, 91, 255, 0.8) 0%, rgba(191, 226, 124, 0.8) 98.59%)',
    linearRedBlue45:
      'linear-gradient(45deg, rgba(255, 117, 89, 0.8) 0%, rgba(130, 225, 225, 0.8) 98.59%)',
    linearYellowBlue45:
      'linear-gradient(45deg, rgba(254, 214, 88, 0.8) 0%, rgba(127, 164, 226, 0.8) 98.59%)',
    linearPurpleGreen45:
      'linear-gradient(45deg, rgba(170, 91, 255, 0.8) 0%, rgba(191, 226, 124, 0.8) 98.59%)',
  },
  transitions: {
    regular: 'all ease 0.2s;',
  },
};

const darkTheme: Theme = {
  colors: {
    primary: '#414042',
    mainWhite: '#FFFFFF',
    mainGray: '#F6F6F6',
    mainOrange: '#F4C567',
    mainGreen: '#A8ED5F',
    mainPurple: '#DBABEF',
    mainBlue: '#8FEAF9',
    mainRed:'#ff4646',
    fontBlack: '#333',
  },
  boxShadows: {
    layout: '0 16px 40px 0 rgba(48, 49, 51, 0.15)',
  },
  fontFamily: {
    CocoGothicLight: '"Coco Gothic Light", Arial, sans-serif',
    CocoGothicRegular: '"Coco Gothic Regular", Arial, sans-serif',
    CocoGothicBold: '"Coco Gothic Bold", Arial, sans-serif',
    CocoGothicHeavy: '"Coco Gothic Heavy", Arial, sans-serif',
    SourceSansProSemiBold: 'SourceSansPro-Semibold',
    SourceSansProRegular: 'SourceSansPro-Regular',
    SourceSansProLight: 'SourceSansPro-Light',
    SourceSansProBold: 'SourceSansPro-Bold',
    RomanescoRegular:'Romanesco-Regular',
  },
  gradients: {
    radialBlue:
      'radial-gradient(105.28% 236.89% at 100% 100%, #FFDDD6 0%, #78FFF2 32.64%, #3EBFED 57.55%, #7FB4FF 76.04%, #FFFFFF 100%)',
    linearRedBlue90:
      'linear-gradient(90deg, rgba(255, 117, 89, 0.8) 0%, rgba(130, 225, 225, 0.8) 98.59%)',
    linearYellowBlue90:
      'linear-gradient(90deg, rgba(254, 214, 88, 0.8) 0%, rgba(127, 164, 226, 0.8) 98.59%)',
    linearPurpleGreen90:
      'linear-gradient(90deg, rgba(170, 91, 255, 0.8) 0%, rgba(191, 226, 124, 0.8) 98.59%)',
    linearRedBlue180:
      'linear-gradient(180deg, rgba(255, 117, 89, 0.8) 0%, rgba(130, 225, 225, 0.8) 98.59%)',
    linearYellowBlue180:
      'linear-gradient(180deg, rgba(254, 214, 88, 0.8) 0%, rgba(127, 164, 226, 0.8) 98.59%)',
    linearPurpleGreen180:
      'linear-gradient(180deg, rgba(170, 91, 255, 0.8) 0%, rgba(191, 226, 124, 0.8) 98.59%)',
    linearRedBlue45:
      'linear-gradient(45deg, rgba(255, 117, 89, 0.8) 0%, rgba(130, 225, 225, 0.8) 98.59%)',
    linearYellowBlue45:
      'linear-gradient(45deg, rgba(254, 214, 88, 0.8) 0%, rgba(127, 164, 226, 0.8) 98.59%)',
    linearPurpleGreen45:
      'linear-gradient(45deg, rgba(170, 91, 255, 0.8) 0%, rgba(191, 226, 124, 0.8) 98.59%)',
  },
  transitions: {
    regular: 'all ease 0.2s;',
  },
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
