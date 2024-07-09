import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";
import { Wrapper, Button, Box, Text, IconBox, Icon } from "./styled";

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text> Dark mode {isDarkTheme ? "on" : "off"}</Text>
        <Box>
          <IconBox $movetoright={isDarkTheme}>
            <Icon />
          </IconBox>
        </Box>
      </Button>
    </Wrapper>
  );
};
