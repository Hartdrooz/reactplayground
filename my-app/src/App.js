import React, { Component } from 'react';
import './App.css';
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
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

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
					{/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
					<Person
						name={this.state.persons[1].name}
						age={this.state.persons[1].age}
						click={this.switchNameHandler.bind(this, 'Julie')}
						changed={this.nameChangedHandler}
					>
						My Hobbies: Racing
					</Person>
					<Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
				</div>
			);
		}

		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button style={style} onClick={this.togglePersonsHandler}>
					Switch Name
				</button>
				{/* {this.state.showPersons === true ? ( */}
				{persons}
				{/* ) : null} */}
			</div>
		);
	}
}

export default App;
