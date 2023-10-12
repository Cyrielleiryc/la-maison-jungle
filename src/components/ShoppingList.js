import { plantList } from '../datas/plantList.js'
import '../styles/ShoppingList.css'
import CareScale from './CareScale.js'

function ShoppingList() {
  const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

  return (
		<div className="lmj-plant-list">
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id} className="lmj-plant-item">
            {plant.name}
            <CareScale careType='water' scaleValue={plant.water} />
            <CareScale careType='light' scaleValue={plant.light} />
            {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
          </li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
