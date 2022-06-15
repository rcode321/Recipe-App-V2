import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Hero, Footer } from "./components";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Recipe from "./pages/Recipe/Recipe";
import Order from "./pages/Order/Order";
import GlobalStyles from "./Globalstyles";
import FavoritesPage from "./pages/Favorites/Favorites";
function App() {
	return (
		<>
			<GlobalStyles />
			<Hero />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/recipes/:id" component={Recipe} />
				<Route path="/order-now" component={Order} />
				<Route path="/favorites">
					<FavoritesPage />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
