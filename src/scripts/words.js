const result_div = document.getElementById('result-div')
const searchbtn = document.getElementById('submit-btn')
const text_field = document.getElementById('text-field')


async function getDefinition(word){
	const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'e3bcc24a89msh6a76c3446082eecp147343jsn384bce2dba2f',
			'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		
		const text = document.createElement('p')
		text.textContent = result;

		result_div.appendChild(text);
	} catch (error) {
		console.error(error);
	}
}

searchbtn.addEventListener('click',()=>{
	getDefinition(text_field.value);
});
