import '../styles/Categories.css'

function Categories({ setChosenCategory, categories, chosenCategory }) {
	return (
		<div className='lmj-categories'>
			<select
				value={chosenCategory}
				onChange={(e) => setChosenCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setChosenCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories
