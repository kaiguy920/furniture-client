// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ShowFurniture from './components/furniture/ShowFurniture'
import NewFurniture from './components/furniture/NewFurniture'
import EditFurniture from './components/furniture/EditFurniture'


const App = () => {
	return (
		<Fragment>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/furniture/:id' element={<ShowFurniture />} />
				<Route path='/furniture' element={<NewFurniture />} />
				<Route path='/furniture/:id/edit' element={<EditFurniture />} />


			</Routes>
		</Fragment>
	)
}

export default App
