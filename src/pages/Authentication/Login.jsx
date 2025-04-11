import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { Link } from "react-router-dom";


const Login = () => {

  const {signInUser} = useContext(AuthContext);
  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
    .then(result =>console.log('sign in', result))
    .catch(error => console.log(error))
  }
  return (
    <div>
      <h2 className="text-center font-bold py-6 text-2xl">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="grid grid-cols-1 gap-4 w-2/5 mx-auto">
          <div>
            <label className="label block">Email</label>
            <input name="email" className="input w-full" placeholder="email" type="email" />
          </div>
          <div>
            <label className="label block">Password</label>
            <input name="password" className="input w-full" placeholder="password" type="password" />
          </div>
          <div className="flex justify-center">
            <button className="btn btn-primary">Log In</button>
          </div>
          <div className="flex justify-center mb-3">
            <p>New to the website?</p>
            <Link className="ml-1 font-semibold text-violet-600 hover:underline" to='/register'>Register</Link>
          </div>
        </div>
      </form>
      
    </div>
  );
};

export default Login;