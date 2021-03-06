import { parseToRgb, toColorString } from 'polished'
export const calculateColorDifference = (color1, color2) => {
    const color1Rgb = parseToRgb(color1)
    const color2Rgb = parseToRgb(color2)
    const colorDifference = {
        red: Math.abs(color1Rgb.red - color2Rgb.red),
        green: Math.abs(color1Rgb.green - color2Rgb.green),
        blue: Math.abs(color1Rgb.blue - color2Rgb.blue),
    }
    return toColorString(colorDifference)
}

export const centerContent = ({ topMargin = 1 } = {}) => {
    return `
    max-width: 60rem;
    min-width: 15rem;
    width: 100%;
    margin: ${topMargin}rem auto;
  `
}

export const colors = {
    main: `#8345D3`,
    mainActive: `#3498DB`,
    secondary: `#C790AE`,
    dark: `#7D6594`,
    shade: `#202950`,
    fullDark: `#13172a`,
    light: `#ECEAEE`,
    accent: `#ffc452`,
}
export const cssConstants = {
    boxShadow: `0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);`,
    borderRadius: `6px`,
    boxShadowLarge: `0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)`,
}

export const breakpoints = {
    mobile: '@media (max-width: 480px)',
    mobilePlus: '@media (min-width: 481px)',
}
