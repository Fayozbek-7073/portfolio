import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Box bgImage={"../img/1644978979_7-phonoteka-org-p-izobrazhenie-dlya-fona-saita-7.jpg"} pos={"relative"}>
      <Box maxH={"10vh"} bg={"##3e4047e6"} pos={"fixed"} top={0} left={0} right={0} zIndex={1323}>
        <Header />
      </Box>

      <Box mt={"10vh"} minH={"90vh"} pos={"fixed"} top={0} left={0} right={0} maxW={"20vw"} bg={"gray.400"} padding={"4"}>
        <Sidebar />
      </Box>

      <Box mt={"11vh"} ml={"21vw"}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
