// Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from React Router

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Your App Name
				</Typography>
				{/* Use Link components to navigate to different routes */}
				<Button color="inherit" component={Link} to="/market">
					Market
				</Button>
				<Button color="inherit" component={Link} to="/items">
					Items
				</Button>
				<Button color="inherit" component={Link} to="/resources">
					Resources
				</Button>
				<Button color="inherit" component={Link} to="/categories">
					Categories
				</Button>
				<Button color="inherit" component={Link} to="/types">
					Types
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
