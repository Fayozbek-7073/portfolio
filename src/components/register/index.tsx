import { Button } from "@chakra-ui/react";
import "../../style/main.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { requies } from "../../server/index.js";
import { useNavigate } from "react-router-dom";

interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  passowrd: string;
}

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>({
    firstName: "",
    lastName: "",
    username: "",
    passowrd: "",
  });

  console.log(user);



  const submit = async () => {

    
  
    // e.preventDefault();
    try {
      const res = await requies.post("auth/register", user);
      console.log("res", res.data.user);
      const role = res.data.user.role;

      if (role === "user") {
        navigate("/user");
        console.log("usercha");
      }
    } catch (error) {
      console.log("Error");
      alert("Error 401");
    }
  };

  return (
    <div className="sign_up">
      <div className="containerzx">
        <h1>Register</h1>
        <p id="create">
          Create your account. It's free and only takes a minute
        </p>
        <div className="name bg-line">
          {/* onChange={(e: { target: { value: string } }) =>
                              setUserLoginPasword(e.target.value)
                            } */}

          <input
            type="text"
            onChange={(e: { target: { value: string } }) =>
              setUser({ ...user, firstName: e.target.value })
            }
            placeholder="First Name"
            required
          />
          <input
            type="text"
            onChange={(e: { target: { value: string } }) =>
              setUser({ ...user, lastName: e.target.value })
            }
            placeholder="Last Name"
            required
          />
        </div>
        <div className="details">
          <input
            type="email"
            onChange={(e: { target: { value: string } }) =>
              setUser({ ...user, username: e.target.value })
            }
            placeholder="Email"
            required
          />
          <input
            type="password"
            onChange={(e: { target: { value: string } }) =>
              setUser({ ...user, passowrd: e.target.value })
            }
            placeholder="Passowrd"
            required
          />
        </div>
        <div className="checkbox">
          <input type="checkbox" className="check" required />
          <p className="check">
            I accept the
            <span className="term">
              <a href="#">Terms of use</a>
            </span>{" "}
            &{" "}
            <span>
              <a id="privacy" href="#">
                Privacy Policy
              </a>
            </span>
          </p>
        </div>
        <Button
          onClick={submit}
          className="btv-reg"
          backgroundColor={"#e2e8f0"}
          margin={"5px 1px"}
        >
          Register
        </Button>
       
       <Link to={"/user"}><Button margin={"30px 10px"}>Admin Tell</Button> </Link>

      </div>
      <div className="signIn">
        <p>
          Already have an account?
          <span>
            <Link to={"/Login"}>Login in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
