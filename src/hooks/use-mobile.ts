import { useMediaQuery } from "react-responsive";
export const useMobile = () => {
  const isExtraSmallScreen = useMediaQuery({ maxWidth: 600 });
  const isSmallScreen = useMediaQuery({ minWidth: 600 });
  const isMediumScreen = useMediaQuery({ minWidth: 768 });
  const isLargeScreen = useMediaQuery({ minWidth: 992 });
  const isExtraLargeScreen = useMediaQuery({ minWidth: 1200 });

  return {
    isExtraSmallScreen,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isExtraLargeScreen,
  };
};
