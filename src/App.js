import './App.css';
import Header from './components/Header';

function App() {
  return (
		<div className="App">
			<Router>
				<div>
					<Header />
					<Switch>
						<Route path="/items">
							<ItemsPage />
						</Route>
						{/* Other routes for other pages */}
					</Switch>
				</div>
			</Router>
		</div>
  );
}

export default App;
