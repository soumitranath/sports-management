import { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"
const defaultData = {
    "email": "test1@gmail.com",
    "password": "12345678"
}
function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        let userDetails = sessionStorage.getItem("userDetails")
        if (userDetails) {
            navigate("/")
        }
    }, [])
    const loginHandler = (e) => {
        e.preventDefault();

        let loginPayload = {
            "email": email,
            "password": password
        }

        axios({
            method: 'post',
            url: "https://www.rnsa.in/api/public/user/check",
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://www.rnsa.in/api/public' },
            data: loginPayload,
            withCredentials: true,
            mode: "cors"

        })
            .then(response => {
                console.log(response.data);
                sessionStorage.setItem("userDetails", JSON.stringify(response.data.data))
                navigate("/")
                toast.success("Login Successfuilly!!")
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <div className="login">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 form_window">
                        <form onSubmit={loginHandler}>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;