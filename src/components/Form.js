export default function  Form() {
	return (
		<>
			<form>	
					<label>Height</label>
					
					<div className="height-items">
						<select className="sm-item">
							<option value="">Feet</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
						</select>
						<select className="sm-item">
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
					<input type="text" name="weight" placeholder="Weight in kilograms" />
					<label>Experience</label>
					<select className="full-length">
						<option value="">Beginner</option>
						<option value="">Intermediate</option>
						<option value="">Pro</option>
					</select>
					<button 
						type="button">
					Continue
					</button>
				</form>
		</>
	)
}