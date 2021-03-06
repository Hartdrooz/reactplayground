import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ id: 'de2d2', name: 'Max', age: 28 },
			{ id: 'vd2r3', name: 'Hugo', age: 29 },
			{ id: 'rt53d', name: 'Stephanie', age: 26 }
		],
		showPersons: false
	};

	nameChangedHandler = (event, id) => {
		const index = this.state.persons.findIndex(p => p.id === id);
		const person = {
			...this.state.persons[index]
		};
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[index] = person;
		this.setState({
			persons: persons
		});
	};

	deletePersonHandler = index => {
		// Copy the array not keeping memory reference
		const persons = [...this.state.persons];

		persons.splice(index, 1);

		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;

		this.setState({
			showPersons: !doesShow
		});
	};

	render() {
		let persons = null;
		let btnClass = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={event => this.nameChangedHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);

			btnClass = classes.Red;
		}

		const assignedClasses = [];
		if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.red);
		}
		if (this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold);
		}

		return (
			<div className={classes.App}>
				<h1>Hi, I'm a React App</h1>
				<p className={assignedClasses.join(' ')}>This is really working!</p>
				<button className={btnClass} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{/* {this.state.showPersons === true ? ( */}
				{persons}
				{/* ) : null} */}
			</div>
		);
	}
}

export default App;
