import { useState, useEffect } from 'react';

export default function  Form() {

	const initialValues = { heightFeet: "", heightInches: "", weight: "", exp: "" }
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);
	

	function handleChange(e) {
		//make sure name and value is attributed in select tag
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
		console.log(formValues.heightInches);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmitted(true);
	}

	function validate(values) {
		const errors = {};
		if(!values.heightFeet) {
			errors.heightFeet = "Height in feet required";
		}
		if(!values.heightInches) {
			errors.heightInches = "Height in inches required";
		}
		if(!values.weight) {
			errors.weight = "weight is required";
		} else if(isNaN(values.weight)) {
			errors.weight = "Please enter a number";
		}
		if(!values.exp) {
			errors.exp = "Exp is required";
		}
		return errors;
	}
	 

	return (
		<>	
			{/*if length equals 0 and is submitted */}
			{Object.keys(formErrors).length === 0 && isSubmitted ? 
			(<div className="msg-success">
				<h2>
					Your sled will be with you shortly
				</h2>
			</div>) : <></>}
			<form onSubmit={handleSubmit}>	
					<label>Height</label>
					<div className="height-items">
						<select
							className="sm-item"
							value={formValues.heightFeet}
							onChange={handleChange}
							name="heightFeet"
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
						<p className="error">{formErrors.heightFeet}</p>
						<select 
							className="sm-item"
							value={formValues.heightInches}
							onChange={handleChange}
							name="heightInches"
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
						<p className="error">{formErrors.heightInches}</p>
					</div>
					<label>Weight</label>	
					<input 
						type="text" 
						name="weight" 
						placeholder="Weight in kilograms" 
						value={formValues.weight}
						onChange={handleChange}
					/>
					<p className="error">{formErrors.weight}</p>

					
					<label>Experience</label>
					<select 
						className="full-length"
						value={formValues.exp}
						onChange={handleChange}
						name="exp"
					>
						<option>Exp</option>
						<option>Beginner</option>
						<option>Intermediate</option>
						<option>Pro</option>
					</select>
					<p className="error">{formErrors.exp}</p>


					<button
						type="submit" 		
					>
						Continue
					</button>
					<h4></h4>
				</form>

		</>
	)
}