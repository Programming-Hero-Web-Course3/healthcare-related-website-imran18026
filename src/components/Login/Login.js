import React from "react";
import useFirebase from "./../../Hooks/useFirebase";

const Login = () => {
  const {
    error,
    loginWithGoogle,
    user,
    nameHandeler,
    formClickHandeler,
    emailHandeler,
    passwordHandeler,
    haveAnAccount,
    isloginchack,
  } = useFirebase();

  // console.log(user.email);

  return (
    <div className="mt-5">
      {!user.displayName ? (
        <div>
          <h1>
            {isloginchack ? "Please LogIn." : "Please complete Registration"}
          </h1>
          <div className="container">
            <div className="m-5">
              <form onSubmit={formClickHandeler}>
                <div className="row mb-3">
                  <label
                    htmlFor="inputname3"
                    className="col-sm-2 col-form-label"
                  >
                    Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      onBlur={nameHandeler}
                      className="form-control"
                      id="inputname3"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      onBlur={emailHandeler}
                      className="form-control"
                      id="inputEmail3"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      onBlur={passwordHandeler}
                      className="form-control"
                      id="inputPassword3"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                      <input
                        onClick={haveAnAccount}
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                      />
                      <label className="from-check-label" htmlFor="gridCheck1">
                        I have already have an account.
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <button className="btn text-danger">{error}</button>
                </div>
                <button type="submit" className="btn btn-primary">
                  {isloginchack ? "Log In" : "Register"}
                </button>
              </form>
            </div>
          </div>
          <button onClick={loginWithGoogle} className=" mt-5">
            Sign in With Google
          </button>
        </div>
      ) : (
        <h1>LogIn Successful ! welcome {user.displayName || user.email}</h1>
      )}
    </div>
  );
};

export default Login;
