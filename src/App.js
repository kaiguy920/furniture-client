// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'


const App = () => {
	return (
		<Fragment>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</Fragment>
	)
}

export default App
