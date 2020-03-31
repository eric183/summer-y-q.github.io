import Typography from "typography"
// import fairyGateTheme from "typography-theme-fairy-gates"
// import Sutro from "typography-theme-sutro"
import Grove from "typography-theme-stern-grove"

// fairyGateTheme.headerFontFamily = ['Spicy Rice', 'cursive'];

// const typography = new Typography(fairyGateTheme)
const typography = new Typography(Grove)
// typography.options.headerFontFamily = ['Spicy Rice', 'cursive'];
// console.log(fairyGateTheme);
export const { scale, rhythm, options } = typography
export default typography