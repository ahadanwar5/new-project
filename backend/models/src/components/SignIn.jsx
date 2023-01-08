import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../Store";
import "../styles/signin.css";
import { getError } from "../utils";

const SignIn = () => {
  const navigate = useNavigate();

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/login");
      //console.log(data);
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div
      class="container background-signin mt-5 rounded-4"
      style={{ width: "85%" }}
    >
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card border-0 background-card-styling shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title fs-2 text-center mb-5 seagreen-color">
                Sign In
              </h5>

              <form>
                <h5 class="fw-light fs-5 text-left mb-4">Welcome Back!</h5>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="d-grid">
                  <button
                    class="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit"
                    onClick={submitHandler}
                  >
                    Sign in
                  </button>
                </div>
                <hr class="my-4" />
                <div class="d-grid">
                  <Link
                    class="fw-light fs-5 text-right mb-4"
                    type="submit"
                    to={`/signup`}
                    style={{ textDecoration: "none" }}
                  >
                    Don't have an account?{" "}
                    <span class="fw-bold fs-5 text-right mb-4"> Register</span>{" "}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
