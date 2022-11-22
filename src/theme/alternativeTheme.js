import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const alternativeTheme = createTheme({
    palette : {
        primary : {
            main: '#9cf196'
        },
        secondary : {
            main: '#eb8f8f'
        },
        error : {
            main : red.A400
        }
    }
})
