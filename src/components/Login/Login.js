import React from "react";
import useFirebase from "./../../Hooks/useFirebase";

const Login = () => {
  const {
    loginWithGoogle,
    user,
    formClickHandeler,
    emailHandeler,
    passwordHandeler,
  } = useFirebase();

  // console.log(user.email);

  return (
    <div className="mt-5">
      {!user.displayName ? (
        <div>
          <h1>Please Login First</h1>
          <div className="container">
            <div className="m-5">
              <form onSubmit={formClickHandeler}>
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
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </form>
            </div>
          </div>
          <button onClick={loginWithGoogle} className=" mt-5">
            Sign in With Google
          </button>
        </div>
      ) : (
        <h1>LogIn Successful ! welcome {user.displayName}</h1>
      )}
    </div>
  );
};

export default Login;
