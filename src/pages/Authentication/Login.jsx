

const Login = () => {
  return (
    <div>
      <h2 className="text-center font-bold py-6 text-2xl">Login</h2>
      <form>
        <div className="grid grid-cols-1 gap-3 w-2/5 mx-auto">
          <div>
            <label className="label block">Email</label>
            <input name="email" className="input w-full" placeholder="email" type="email" />
          </div>
          <div>
            <label className="label block">Password</label>
            <input name="password" className="input w-full" placeholder="password" type="password" />
          </div>
          <div className="flex justify-center mb-6">
            <button className="btn btn-primary">Log In</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;