import { useState } from "react";


function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginHandler=(e)=>{
        // e.preventDefault();
        sessionStorage.setItem('email',email);
    }
    return (
        <div className="login">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 form_window">
                        <form onSubmit={loginHandler}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;