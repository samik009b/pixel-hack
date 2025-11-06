import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, email, password });
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-lg border-0 rounded-3">
                            <div className="card-body p-4 p-sm-5">
                                <h2 className="text-center mb-4 fw-bold text-primary">
                                    Login
                                </h2>
                                <p className="text-center text-muted mb-4">
                                    Login with your account
                                </p>

                                <Form onSubmit={handleSubmit}>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            id="floatingNameCustom"
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        <label htmlFor="floatingNameCustom">Username</label>
                                    </Form.Floating>

                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            id="floatingInputCustom"
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label htmlFor="floatingInputCustom">Email address</label>
                                    </Form.Floating>

                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            id="floatingPasswordCustom"
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label htmlFor="floatingPasswordCustom">Password</label>
                                    </Form.Floating>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-lg w-100 mb-3"
                                        onClick={handleSubmit}>
                                        Sign Up
                                    </button>

                                    <div className="text-center">
                                        <p className="text-muted mb-0">
                                            Forget your password ? 
                                            <Link
                                                to="/"
                                                className="text-primary text-decoration-none fw-semibold">
                                                Click here
                                            </Link>
                                        </p>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
