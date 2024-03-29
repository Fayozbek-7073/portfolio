import { useState } from "react";
import { requies } from "../../server/index.js";
import { Link, useNavigate } from "react-router-dom";
import { useLoginStore } from "../../store/useLogin.js";
import shallow from "zustand/shallow";

const Login = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState("");
  const [userLoginx, setUserLoginPasword] = useState("");
  const [setUserInfo] = useLoginStore((s) => [s.setUserInfo], shallow);

  const submit = async () => {
    try {
      const res = await requies.post("auth/login", {
        username: userLogin,
        password: userLoginx,
      });
      console.log("res", res.data.user);
      const role = res.data.user.role;
      const token = res.data.token;
      console.log("res.data.user", res.data.user);

      if (role === "user") {
        console.log("usercha");
      } else if (role === "admin") {
        localStorage.setItem("token", token);
        navigate("/main");
        setUserInfo(res.data.user);
      } else if (role === "client") {
        navigate("/about");
      }
    } catch (error) {
      console.log("Error");
      alert("Login yoki parol notugri");
    }
  };

  return (
    <div>
      <section className="h-100 gradient-form bgliner">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img className="imgtbo" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" />
                        <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                      </div>

                      <form>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Phone number or email address"
                            onChange={(e: { target: { value: string } }) => setUserLogin(e.target.value)}
                          />
                          <label className="form-label">Username</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="Password"
                            onChange={(e: { target: { value: string } }) => setUserLoginPasword(e.target.value)}
                          />
                          <label className="form-label">Password</label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={submit}>
                            Log in
                          </button>
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button type="button" className="btn btn-outline-danger m-2">
                            <Link to={"/Register"}> Register</Link>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
