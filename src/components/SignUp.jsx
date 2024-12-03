import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handelSIgnUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("form sign up", email, password);


    createUser(email, password)
      .then((result) => {
        console.log('user created a firebase',result.user);

        const createdAt = result?.user?.metadata?.creationTime;// ata db a dekhabe j kondin signup korce

        const newUser = {name, email, createdAt};

        // save new user info to the database
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then((res) => res.json())
          .then(data => {
            if(data.insertedId){
              console.log('user created in db')
            }
          })
      })
      .catch((error) => {
        console.log(error);
      })

  };

  return (
    <div className="card bg-base-100 w-4/12 mx-auto shrink-0 shadow-2xl mt-14">
      <form onSubmit={handelSIgnUp} className="card-body">
        <h2 className="text-center text-3xl font-bold">Sign Up now!</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            className="input input-bordered"
            required
          />
        </div>
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
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
