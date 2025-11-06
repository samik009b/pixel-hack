import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:1337", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const res = await response.json(); // or .text() if your server returns plain text
      console.log("Sent data:", data);
      console.log("Server response:", res);
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-lg border-0 rounded-3">
              <div className="card-body p-4 p-sm-5">
                <h2 className="text-center mb-4 fw-bold text-primary">Register</h2>
                <p className="text-center text-muted mb-4">Register to get started</p>

                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      {...register("username", {
                        required: "Username is required",
                        minLength: { value: 3, message: "Min 3 chars" },
                        maxLength: { value: 6, message: "Max 6 chars" },
                      })}
                      id="floatingNameCustom"
                      type="text"
                      placeholder="Username"
                    />
                    <label htmlFor="floatingNameCustom">Username</label>
                    {errors.username && (
                      <p className="text-danger small">{errors.username.message}</p>
                    )}
                  </Form.Floating>

                  <Form.Floating className="mb-3">
                    <Form.Control
                      {...register("email", { required: "Email required" })}
                      id="floatingInputCustom"
                      type="email"
                      placeholder="Email"
                    />
                    <label htmlFor="floatingInputCustom">Email address</label>
                    {errors.email && <p className="text-danger small">{errors.email.message}</p>}
                  </Form.Floating>

                  <Form.Floating className="mb-3">
                    <Form.Control
                      {...register("password", {
                        required: "Password required",
                      })}
                      id="floatingPasswordCustom"
                      type="password"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPasswordCustom">Password</label>
                    {errors.password && (
                      <p className="text-danger small">{errors.password.message}</p>
                    )}
                  </Form.Floating>

                  <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">
                    Sign Up
                  </button>

                  <div className="text-center">
                    <p className="text-muted mb-0">
                      Already have an account?{" "}
                      <Link to="/login" className="text-primary text-decoration-none fw-semibold">
                        Sign In
                      </Link>
                    </p>
                  </div>
                </Form>
              </div>
            </div>

            <div className="text-center mt-4">
              <p className="text-muted small">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
