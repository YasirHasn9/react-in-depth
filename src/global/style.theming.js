import { ThemeProvider } from 'styled-components';


const theme = {
    bk:{
        primary:"red",
    }
}

export function Theming(props){
    return(
        <ThemeProvider theme={theme}>
            {
                props.children
            }
        </ThemeProvider>
    )
}