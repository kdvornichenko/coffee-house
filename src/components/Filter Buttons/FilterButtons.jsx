import styles from './FilterButtons.module.sass'

const FilterButtons = ({ onCardsFilterClick, activeBtn }) => {
	return activeBtn.map(({ name, filter }) => {
		return (
			<button
				onClick={onCardsFilterClick}
				className={filter ? styles.Filter_BtnsBtnActive : styles.Filter_BtnsBtn}
				data-label={name}
				key={name}
			>
				{name}
			</button>
		)
	})
}

export default FilterButtons
