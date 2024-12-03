import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);

  const handelSIgnIn = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log("form sign in", email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

      // update last login time
      const lastSignInTime = result?.user?.metadata?.lastSignInTime;
      const loginInfo = {email, lastSignInTime}
      console.log(loginInfo)


      fetch(`http://localhost:5000/users`, {
        method: 'PATCH',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(loginInfo)
      })
      .then(res => res.json())
      .then(data => {
        console.log('sign in info updated in db', data)
      })


      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <div className="card bg-base-100 w-4/12 mx-auto shrink-0 shadow-2xl mt-14">
      <form onSubmit={handelSIgnIn} className="card-body">
        <h2 className="text-center text-3xl font-bold">Sign In now!</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
