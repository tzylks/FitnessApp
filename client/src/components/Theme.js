import { createTheme } from "@material-ui/core"



const theme = createTheme({ 
        palette: {
          primary: {
            main: '#78DEC7',
          },
          secondary: {
            main: '#D62AD0',
          },
        },
        typography: {
            fontFamily: 'Bebas Neue, cursive'
        }, 
        overrides: {
          MuiTooltip: {
              tooltip: {
                  fontSize: "1.2em",
                  color: 'black',
                  backgroundColor: '#FEC260'
              },
          },
      },      
}
)

export default theme;