export enum Color { 
    DarkModeBackground = 'hsl(207, 26%, 17%)',
    DarkModeText = 'hsl(0, 0%, 100%)',
    DarkModeElements = 'hsl(209, 23%, 22%)',

    LightModeBackground = 'hsl(0, 0%, 98%)',
    LightModeText = 'hsl(200, 15%, 8%)',
    LightModeElements = 'hsl(0, 0%, 100%)',
}


export const lightTheme = {
    body: Color.LightModeElements,
    text: Color.LightModeText,
    background: Color.LightModeBackground,
}
export const darkTheme = {
    body: Color.DarkModeElements,
    text: Color.DarkModeText,
    background: Color.DarkModeBackground,
}