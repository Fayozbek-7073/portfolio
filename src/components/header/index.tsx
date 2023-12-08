import { HStack, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <HStack paddingX={"20"} paddingY={"4"} justifyContent={"space-between"} >
      <Box><img width={"50px"} src="/src/img/my/favicon.png" alt="F" /></Box>
      <Box>
        <Link to={"/portfolio"}>
          <Button>My Profile</Button>
        </Link>
      </Box>
    </HStack>
  );
};

export default Header;