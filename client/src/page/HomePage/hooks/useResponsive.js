import { useMediaQuery, useTheme } from "@mui/material";

const useResponsive = (mobileBreakpoint = "sm", tabletBreakpoint = "md") => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(mobileBreakpoint));
    const isTablet = useMediaQuery(theme.breakpoints.down(tabletBreakpoint));
    const isDesktop = useMediaQuery(theme.breakpoints.up(tabletBreakpoint));

    return {
        isMobile,
        isTablet,
        isDesktop,
    };
};

export default useResponsive;
