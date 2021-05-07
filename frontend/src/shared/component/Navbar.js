import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu } from "antd";
import { AuthContext } from "../../shared/context/auth-context";
import "antd/dist/antd.css";
import "./Navbar.css";

const { SubMenu } = Menu;

const Navbar = () => {
	const history = useHistory();

	const [current, setCurrent] = useState("indexPage");
	const navBarStyle = {
		fontSize: "16px",
	};

	const auth = useContext(AuthContext); // the whole component will re-render when auth is changed (provided by useContext)
	let userName = auth.userName;

	const logoutFunc = () => {
		auth.logout();
		history.push("/");
	};

	return (
		<Menu
			onClick={(e) => setCurrent(e.key)}
			selectedKeys={current}
			mode="horizontal"
			style={navBarStyle}
		>
			<Menu.Item key="logo">
				<Link to="/">
					<img src="/img/logo1.png" alt="logo" className="logoStyle" />
				</Link>
			</Menu.Item>

			<Menu.Item key="IndexPage">
				<Link to="/">Index Page</Link>
			</Menu.Item>
			<Menu.Item key="CourseListPage">
				<Link to="/course">Course List Page</Link>
			</Menu.Item>

			{/* <Menu.Item key="CoursePage">
				<Link to="/course/:coursecode">CoursePage</Link>
			</Menu.Item> */}

			{/* <Menu.Item key="CreateReviewPage">
				<Link to="/course/:coursecode/createreview">CreateReviewPage</Link>
			</Menu.Item> */}

			{!auth.isLoggedIn ? (
				<SubMenu key="SubMenu" title="Authentication">
					<Menu.Item key="Signup">
						<Link to="/signup">Signup</Link>
					</Menu.Item>
					<Menu.Item key="Login">
						<Link to="/login">Login</Link>
					</Menu.Item>
				</SubMenu>
			) : (
				<React.Fragment>
					<Menu.Item key="TimatablePage">
						<Link to="/timetable">Timetable Page</Link>
					</Menu.Item>
					<Menu.Item key="Logout" onClick={logoutFunc}>
						Logout
					</Menu.Item>
				</React.Fragment>
			)}
		</Menu>
	);
};

export default Navbar;
