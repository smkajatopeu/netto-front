import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/auth-page/login-page'
import RegisterPage from './pages/auth-page/register-page'
import HomePage from './pages/HomePage'

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = props => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signup' element={<RegisterPage />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
