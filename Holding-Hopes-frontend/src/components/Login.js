import { useState } from "react";
import axios from "axios";
// import styles from "./Login.css";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/Main";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<Container>
			<div >
				<div>
					<form  onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
						/>
						{error && <div className="error_msg">{error}</div>}
						<button type="submit" >
							Sing In
						</button>
					</form>
				</div>
				<div >
					<h1>New Here ?</h1>
						<Link to="/signup">
						<button type="button">
							Sing Up
						</button>
						</Link>
					
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	background: #eae9e9;

`

export default Login;