import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        standardBox: {
            main: "#FAFDFF",
            contrastText: '#3E4254'
        },
        contentBox: {
            main: "#F3F1F6",
            contrastText: "#3E4254"
        }
        ,
        skillBox: {
            main: "#D8F5F6",
            contrastText: "#639AED"
        },
        interactiveColor: {
            main: "#6D92F0",
            contrastText: "#ffffff"
        },
        defaultIcon: {
            main: "#666666"
        },
        mainBoldAccent: {
            main: "#3E4254",
            contrastText: "#ffffff"
        },
        activeJob: {
            main: "#BBF38E"
        },
        pendingJob: {
            main: "#FAD080"
        },
        rejectedJob: {
            main: "#F38EA6"
        },
        sentJob: {
            main: "#8AC7F2"
        },
        background: {
            default: "#D1D4DE"
        },

    },
    typography: {
        fontFamily: [
            'Forum',
            'Averia Serif Libre'
        ].join(','),
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontSize: "1.3em",
                    fontFamily: "Averia Serif Libre"
                },
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    height: "90vh",
                    paddingBottom: "10vh"
                }
            }
        },

    }
}
)

export default theme;
