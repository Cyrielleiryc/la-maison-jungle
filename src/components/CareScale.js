import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function handleClick(scaleValue, careType) {
  const need = `${careType === 'water' ? "d'arrosage" : 'de lumière'}`
  let adv
  if (scaleValue === 1) {
    adv = 'peu'
  } else if (scaleValue === 2) {
    adv = 'modérement'
  } else {
    adv = 'beaucoup'
  }
  alert(`Cette plante requiert ${adv} ${need}`)
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={() => handleClick(scaleValue, careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
