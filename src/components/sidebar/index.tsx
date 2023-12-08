import { Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useLoginStore } from "../../store/useLogin.js";
import shallow from "zustand/shallow";
import { useCallback } from "react";
export interface IMenu {
  path: string;
  icon?: React.FC;
  title: string;
  role?: string[];
}
const Sidebar = () => {
  const [userInfo, setUserInfo] = useLoginStore(
    (s) => [s.userInfo, s.setUserInfo],
    shallow
  );

  const logout = () => {
    setUserInfo({});
    localStorage.removeItem("token");
  };

  const menu_data: IMenu[] = [
    {
      path: "/education",
      title: `Education`,
      role: ["user"],
    },

    // {
    //   path: '/about',
    //   title: `About`,
    //   role: [ 'client',]
    // },

    // {
    //   path: '/about',
    //   title: `About`,

    //   role: [ 'client',]
    // },
    // {
    //   path: '/about',
    //   title: `About`,
    //   role: [ 'client',]

    // },

    // {
    //   path: '/about',
    //   title: `About`,
    //   role: [ 'admin',]
    // },
  ];

  const userFilter = useCallback(() => {
    return menu_data.filter((item) =>
      item?.role?.find((a) => a === userInfo?.role)
    );
  }, [userInfo]);

  console.log(userFilter());

  return (
    <>
      <Stack spacing={4}>
        <a>User : </a>
        <Link to={"/about"}>
          <Button colorScheme="linkedin" variant={"solid"} width={"100%"}>
            Experience
          </Button>
        </Link>
        <Link to={"/education"}>
          <Button colorScheme="linkedin" variant={"solid"} width={"100%"}>
            Education
          </Button>
        </Link>
        <Link to={"/addportfoli"}>
          <Button colorScheme="linkedin" variant={"solid"} width={"100%"}>
            Add Portfolio
          </Button>
        </Link>
        <Link to={"/skill"}>
          <Button colorScheme="linkedin" variant={"solid"} width={"100%"}>
            Skill
          </Button>
        </Link>
        <Link to={"/portfolio"}>
          <Button colorScheme="linkedin" variant={"solid"} width={"100%"}>
            My Portfolio
          </Button>
        </Link>
        <Link to={"/testimonials"}>
          <Button colorScheme="linkedin" variant={"solid"} width={"100%"}>
            Messages
          </Button>
        </Link>
        <Link to={"/contact"}>
          <Button colorScheme="linkedin" variant={"solid"} width={"100%"}>
            Account
          </Button>
        </Link>
        <Link to={"/settings"}>
          <Button colorScheme="linkedin" variant={"solid"} width={"100%"}>
            Settings
          </Button>
        </Link>
        <div className="Preference"> Preference</div>
        <Link to={"/Login"} onClick={logout}>
          <Button>Log out</Button>
        </Link>
      </Stack>
    </>
  );
};

export default Sidebar;
