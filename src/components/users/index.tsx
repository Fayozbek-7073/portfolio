import "../../style/user.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Login from "../login";

const user = () => {
  return (
    <div className="xxx-body">
      <div className="cardz">
        Welcome to Our Portfolio Project <br />
        <br />
        Dear User! Your Path in Our Project:
        <br />
        Your role is user. if the admin updata your role client, then you can
        add your experiences, skill, education, portfolios. To update your role,
        you can apply to the{" "}
        <span className="col-red">abdulaziz_programmer@gmail.com</span> admin
        <br />
        <Link to={"./Login"} onClick={Login}>
          <Button>
            <a href="https://mail.ru/" target="_blank">
              Message Admin
            </a>
          </Button>
        </Link>{" "}
        <Link to={"/Login"}> --Login in--</Link>
      </div>
    </div>
  );
};
export default user;
