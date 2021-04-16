import React from 'react';
import { render } from 'react-dom'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';


const App = () => {
	return (
		<BrowserRouter>
			<div>
				<h1>Hello World</h1>
			</div>
		</BrowserRouter>
	)
}

export default App;
