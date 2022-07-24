import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { BsChatLeftQuoteFill } from "react-icons/bs";


const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
			<Wrap >
				<Left>
					

<Box>
						<Quote>
							<BsChatLeftQuoteFill />
						</Quote>
						<Head>
							<h1>Make a Dream.</h1>
						</Head>
						<Paragraph>
							<p>Once you start making the effort to ‘wake yourself up’—that is, be more mindful in your activities—you suddenly start appreciating life a lot more</p>
						</Paragraph>
						<Source>
							<img src="https://www.speakingmatters.org/wp-content/uploads/2020/01/Robert-Biswas-Diener5.jpg" />
							<h2>Robert Biswas-Diener</h2>
						</Source>

						<Linker>
						<h1>Already User ?</h1>
					{/* <Link to="/login"> */}
						<button type="button" className="white_btn">
							Sign in
						</button>
					{/* </Link> */}
						</Linker>
						</Box>
				</Left>
				<Right>
					<form className="form_container" onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className="input"
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="input"
						/>
						{error && <div className="error_msg">{error}</div>}
						<button type="submit" className="green_btn">
							Sign Up
						</button>
					</form>

					<img src="/images/bot3.png" />
				</Right>
			</Wrap>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	background: #eae9e9;
	display: flex;
	justify-content: center;
	align-items: center;

`

const Wrap = styled.div`
	width: 70%;
	height: 80vh;
	display: flex;
	border-radius: 10px;
	box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
		0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);

`

const Left = styled.div`

	width: 50%;
 	background: #63e4f2;
 	display: flex;
 	align-items: center;
 	justify-content: center;
 	border-top-right-radius: 10px;
	 border-bottom-right-radius: 10px;
	
`
const Right = styled.div`

	width: 50%;
	background: red;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;

	form{
	display: flex;
	flex-direction: column;
	align-items: center;
	}

	h1{
		font-size: 40px;
		margin: 20px 0;
	}

	input{
	outline: none;
	border: none;
	width: 370px;
	padding: 15px;
	border-radius: 10px;
	background-color: #edf5f3;
	margin: 5px 0;
	font-size: 14px;
	}

	.error_msg {
		width: 370px;
		padding: 15px;
		margin: 5px 0;
		font-size: 14px;
		background-color: #f34646;
		color: white;
		border-radius: 5px;
		text-align: center;
	}

	button{
	border: none;
	outline: none;
	padding: 12px 0;
	margin: 20px 0;
	background-color: #46eacc;
	border-radius: 5px;
	width: 80%;
	font-weight: bold;
	font-size: 15px;
	cursor: pointer;
	}

	img{
		width: 18%;
	}
`

const Box = styled.div`
	width: 80%;

`
const Quote = styled.div`
	font-size: 40px;
`

const Head = styled.div`
	h1{
		font-size: 80px;
		color: white;
	}
`

const Paragraph = styled.div`
	width: 80%;
	text-align: right;
	color: #9b9b9b;

`


const Source = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 20px 0;

	img{
		width: 10%;
		border-radius: 50%;
		margin: 0 5px;
	}

	h2{
		font-size: 18px;
		margin: 5px ;
		color: #fff;
	}
`

const Linker = styled.div`
	display: flex;
	justify-content: space-between;

	h1{
		font-size: 20px;
		padding: 10px 0;
		color: #fff;
	}

	button{
		border: none;
	outline: none;
	padding: 12px 0;
	background-color: #46eacc;
	border-radius: 5px;
	width: 180px;
	font-weight: bold;
	font-size: 14px;
	cursor: pointer;
	}

`

export default Signup;