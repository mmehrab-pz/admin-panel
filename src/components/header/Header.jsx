import {
  AppBar,
  Box,
  List,
} from "@mui/material";
import SearchInput from "./SearchInput";
import StreamButton from "./StreamButton";
import LanguageMenu from "./LanguageMenu";
import Notifications from "./Notifications";
import FullScreenButton from "./FullScreenButton";
import ProfileMenu from "./ProfileMenu";

export default function Header() {
  return (
    <AppBar elevation={0}
      sx={{
        width: "calc(100% - 260px)",
        height: "85px",
        bgcolor: "#111936",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "24px",
        }}
      >
        <SearchInput />
        <List
          sx={{
            height: "100%",
            width: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: 2,
          }}
        >
          <StreamButton />
          <LanguageMenu />
          <Notifications />
          <FullScreenButton />
          <ProfileMenu />
        </List>
      </Box>
    </AppBar>
  );
}
