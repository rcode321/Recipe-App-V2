import React, { useState, useEffect, useContext } from "react";
import { IconContext } from "react-icons/";
import { BiMenu, BiX } from "react-icons/bi";
import { Button } from "../../Globalstyles";
import { HashLink } from "react-router-hash-link";

import FavoritesContext from "../../store/favoritesContext";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MenuIcon,
	Menu,
	MenuItem,
	MenuLink,
	MenuItemBtn,
	MenuLinkBtn,
	Badge,
	Hashlink,
	Hashlink2,
} from "./Navbar.styles";
const Navbar = () => {
	const favoritesCtx = useContext(FavoritesContext);

	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const handleClick = () => setClick(!click);
	const closeMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 1000) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);
	window.addEventListener("resize", showButton);

	return (
		<div>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav>
					<NavbarContainer>
						<NavLogo>
							<Hashlink to="/#hero">
								<NavIcon />
								Recipe App
							</Hashlink>
						</NavLogo>
						<MenuIcon onClick={handleClick}>{click ? <BiX /> : <BiMenu />}</MenuIcon>

						<Menu onClick={handleClick} click={click}>
							<MenuItem>
								<Hashlink2 onClick={closeMenu} to="/#hero">
									Home
								</Hashlink2>
							</MenuItem>
							<MenuItem>
								<Hashlink2 onClick={closeMenu} to="/#about">
									About
								</Hashlink2>
							</MenuItem>
							<MenuItem>
								<Hashlink2 onClick={closeMenu} to="/#recipe">
									Recipes
								</Hashlink2>
							</MenuItem>
							<MenuItem>
								<MenuLink onClick={closeMenu} to="/favorites">
									Favorites
									<Badge>{favoritesCtx.totalFavorites}</Badge>
								</MenuLink>
							</MenuItem>
							<MenuItemBtn>
								{button ? (
									<MenuLinkBtn to="/order-now">
										<Button primary>Order Now</Button>
									</MenuLinkBtn>
								) : (
									<MenuLinkBtn to="/order-now">
										<Button primary bigFont onClick={closeMenu}>
											Order Now
										</Button>
									</MenuLinkBtn>
								)}
							</MenuItemBtn>
						</Menu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</div>
	);
};

export default Navbar;
