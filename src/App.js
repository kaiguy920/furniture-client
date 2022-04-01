// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ShowFurniture from './components/furniture/ShowFurniture'


const App = () => {
	return (
		<Fragment>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/furniture/:id' element={<ShowFurniture />} />
			</Routes>
		</Fragment>
	)
}

export default App
