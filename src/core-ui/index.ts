export const Theme = console.log()

// import { createTheme, ThemeProvider } from '@mui/material/styles'
// import { PRIMARY, SECONDARY } from '../constants/colors'
// // declare module '@mui/material/styles' {
// //    interface Theme {
// //       status: {
// //          danger: React.CSSProperties['color']
// //       }
// //    }

// //    interface Palette {
// //       neutral: Palette['primary']
// //    }
// //    interface PaletteOptions {
// //       neutral: PaletteOptions['primary']
// //    }

// //    interface PaletteColor {
// //       darker?: string
// //    }
// //    interface SimplePaletteColorOptions {
// //       darker?: string
// //    }
// //    interface ThemeOptions {
// //       status: {
// //          danger: React.CSSProperties['color']
// //       }
// //    }
// // }

// const theme = createTheme({
//    palette: {
//       mode: 'dark',
//       primary: {
//          light: '#42a5f5',
//          main: '#1976d2',
//          dark: '#1565c0',
//          contrastText: '#000',
//       },
//       secondary: {
//          light: '#ba68c8',
//          main: '#9c27b0',
//          dark: '#7b1fa2',
//          contrastText: '#000',
//       },
//       error: {
//          light: '#ba68c8',
//          main: '#9c27b0',
//          dark: '#7b1fa2',
//       },
//       info: {
//          light: '#ba68c8',
//          main: '#9c27b0',
//          dark: '#7b1fa2',
//       },
//       success: {
//          light: '#4caf50',
//          main: '#2e7d32',
//          dark: '#1b5e20',
//       },

//       // Used by `getContrastText()` to maximize the contrast between
//       // the background and the text.
//       contrastThreshold: 3,
//       // Used by the functions below to shift a color's luminance by approximately
//       // two indexes within its tonal palette.
//       // E.g., shift from Red 500 to Red 300 or Red 700.
//       tonalOffset: 0.2,
//    },
//    typography: {
//       subtitle1: {
//          fontSize: 12,
//       },
//       body1: {
//          fontWeight: 500,
//       },
//       button: {
//          fontStyle: 'italic',
//       },
//    },
//    components: {
//       // Name of the component

//       MuiButton: {
//          variants: [
//             {
//                props: { variant: 'contained' },
//                style: {
//                   textTransform: 'none',
//                   border: `2px solid ${PRIMARY}`,
//                },
//             },
//             {
//                props: { variant: 'outlined', color: 'secondary' },
//                style: {
//                   border: `4px solid ${SECONDARY}`,
//                },
//             },
//          ],
//          styleOverrides: {
//             // Name of the slot
//             root: {
//                // Some CSS
//                fontSize: '1rem',
//             },
//          },
//          defaultProps: {
//             size: 'small',
//             disableRipple: true, // No more ripple!
//          },
//       },
//       MuiButtonBase: {
//          defaultProps: {
//             // The props to change the default for.
//             disableRipple: true, // No more ripple!
//          },
//       },
//       // MuiFilledInput: {
//       //    defaultProps: {
//       //       margin: 'dense',
//       //    },
//       // },
//       // MuiFormControl: {
//       //    defaultProps: {
//       //       margin: 'dense',
//       //    },
//       // },
//       // MuiFormHelperText: {
//       //    defaultProps: {
//       //       margin: 'dense',
//       //    },
//       // },
//       MuiIconButton: {
//          defaultProps: {
//             size: 'small',
//          },
//       },
//       // MuiInputBase: {
//       //    defaultProps: {
//       //       margin: 'dense',
//       //    },
//       // },
//       // MuiInputLabel: {
//       //    defaultProps: {
//       //       margin: 'dense',
//       //    },
//       // },
//       // MuiListItem: {
//       //    defaultProps: {
//       //       dense: true,
//       //    },
//       // },
//       // MuiOutlinedInput: {
//       //    defaultProps: {
//       //       margin: 'dense',
//       //    },
//       // },
//       // MuiFab: {
//       //    defaultProps: {
//       //       size: 'small',
//       //    },
//       // },
//       // MuiTable: {
//       //    defaultProps: {
//       //       size: 'small',
//       //    },
//       // },
//       // MuiTextField: {
//       //    defaultProps: {
//       //       margin: 'dense',
//       //    },
//       // },
//       // MuiToolbar: {
//       //    defaultProps: {
//       //       variant: 'dense',
//       //    },
//       // },
//    },
//    transitions: {
//       duration: {
//          shortest: 150,
//          shorter: 200,
//          short: 250,
//          // most basic recommended timing
//          standard: 300,
//          // this is to be used in complex animations
//          complex: 375,
//          // recommended when something is entering screen
//          enteringScreen: 225,
//          // recommended when something is leaving screen
//          leavingScreen: 195,
//       },
//       easing: {
//          // This is the most common easing curve.
//          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
//          // Objects enter the screen at full velocity from off-screen and
//          // slowly decelerate to a resting point.
//          easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
//          // Objects leave the screen at full velocity. They do not decelerate when off-screen.
//          easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
//          // The sharp curve is used by objects that may return to the screen at any time.
//          sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
//       },
//    },
// })

// export default theme
