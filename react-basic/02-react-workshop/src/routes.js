// https://reacttraining.com/react-router/web/example/basic

import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import App from './components/FormExamples';
import About from './components/About';
import Music from './components/AudioPlayerExamples';
//import NotFound from './components/NotFound';
//import MaterialDesign from './components/MaterialDesign';

const Routes = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/topics">Topics</Link></li>
				<li><Link to="/music">Music</Link></li>
			</ul>

			<hr />

			<Route exact path="/" component={App} />
			<Route path="/about" component={About} />
			<Route path="/topics" component={Topics} />
			<Route path="/music" component={Music} />
		</div>
	</Router>
)

const Topics = ({ match }) => (
	<div>
		<h2>Topics</h2>
		<ul>
			<li>
				<Link to={`${match.url}/rendering`}>
					Rendering with React
        </Link>
			</li>
			<li>
				<Link to={`${match.url}/components`}>
					Components
        </Link>
			</li>
			<li>
				<Link to={`${match.url}/props-v-state`}>
					Props v. State
        </Link>
			</li>
		</ul>

		<Route path={`${match.url}/:topicId`} component={Topic} />
		<Route exact path={match.url} render={() => (
			<h3>Please select a topic.</h3>
		)} />
	</div>
)

const Topic = ({ match }) => (
	<div>
		<h3>{match.params.topicId}</h3>
	</div>
)

export default Routes
