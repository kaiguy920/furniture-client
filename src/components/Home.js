import IndexFurniture from "./furniture/IndexFurniture"

const Home = (props) => {
	// const { msgAlert, user } = props
	// console.log('props in home', props)

	return (
		<>
			<div class='container'>
				<h2>The Nature of Furni</h2>
				<IndexFurniture />
			</div>
		</>
	)
}

export default Home

