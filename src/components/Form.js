import { useState } from 'react';

export default function  Form() {
	console.log("hello");
	const [heightFeet, setHeightFeet] = useState('');
	const [heightInches, setHeightInches] = useState('');
	const [weight, setWeight] = useState('');
	const [exp, setExp] = useState('');
	const [message, setMessage] = useState('');


	function handleSubmit(e) {
		e.preventDefault();
		setHeightFeet('');
		setHeightInches('');
		setWeight('');
		setExp('');
		setMessage(`Your height is ${heightFeet} foot ${heightInches} inches, 
		your weight is ${weight}kgs and you are a ${exp}`);
	}
	return (
		<>
			<form onSubmit={handleSubmit}>	
					<label>Height</label>
					
					<div className="height-items">
						<select 
							className="sm-item"
							value={heightFeet}
							onChange={function(event) {
								setHeightFeet(event.target.value);
							}}

						>
							<option value="">Feet</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
						</select>
						<select 
							className="sm-item"
							value={heightInches}
							onChange={function(event) {
								setHeightInches(event.target.value);
							}}
						>
							<option value="">Inches</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
						</select>
					</div>
					<label>Weight</label>	
					<input 
						type="text" 
						name="weight" 
						placeholder="Weight in kilograms" 
						value={weight}
						onChange={function(event) {
							setWeight(event.target.value);
						}}
					/>
					
					<label>Experience</label>
					<select 
						className="full-length"
						value={exp}
						onChange={function(event) {
							setExp(event.target.value);
						}}
					>
						<option>Beginner</option>
						<option>Intermediate</option>
						<option>Pro</option>
					</select>


					<button 
						type="button" onClick={handleSubmit}>
					Continue
					</button>
					<h4>{message}</h4>
				</form>
		</>
	)
}