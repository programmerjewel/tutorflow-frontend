import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const Register = () => {

  const {createUser} = useContext(AuthContext);
  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    createUser(email, password)
    .then(result => console.log(result.user))
    .catch(error => console.log(error.message))


  }
  return (
    <section>
        <h2 className="text-center font-bold py-6 text-2xl">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="grid grid-cols-1 gap-3 w-2/5 mx-auto">
            <div>
              <label className="label block">Email</label>
              <input
                className="input w-full"
                placeholder="email"
                type="email"
                name = 'email'
              />
            </div>
            <div>
              <label className="label block">Password</label>
              <input
                className="input w-full"
                placeholder="password"
                type="password"
                name='password'
              />
            </div>
            <div className="flex justify-center mb-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </form>
      </section>
  );
};

export default Register;
