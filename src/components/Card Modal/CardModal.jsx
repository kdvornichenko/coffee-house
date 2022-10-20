import CoffeeBeans from '../Coffee Beans/CoffeeBeans'
import styles from './CardModal.module.sass'

const CardModal = ({ cardModalData, isShowCardModal }) => {
	return cardModalData.map(
		({ imgUrl, alt, name, description, country, price }) => {
			return (
				<div className={styles.CardModal_BgBlur} key={name}>
					<div className={styles.CardModal}>
						<div
							className={styles.CardModal_Close}
							onClick={() => {
								isShowCardModal(false)
							}}
						/>
						<div className={styles.CardModal_Wrap}>
							<div className={styles.CardModal_ImgWrap}>
								<img src={imgUrl} alt={alt} />
							</div>
							<div className={styles.CardModal_Info}>
								<h2 className={styles.CardModal_Info_Heading}>About it</h2>
								<CoffeeBeans color='black' />
								<div className={styles.CardModal_Info}>
									<div className={styles.CardModal_Info_Text}>
										<span>Country:</span> {country}
									</div>
									<div className={styles.CardModal_Info_Text}>
										<span>Description:</span> {description}
									</div>
									<div className={styles.CardModal_Info_Text}>
										<span>Price:</span> {price}
									</div>
								</div>
								<button className={styles.CardModal_AddToCart}>
									Add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
			)
		}
	)
}

export default CardModal
