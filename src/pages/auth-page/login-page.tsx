import React from 'react'
import { LoginForm } from './auth-form/login-form'
import './auth-page.css'

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = props => {
	return (
		<div className='auth-page'>
			<LoginForm />
		</div>
	)
}

export default LoginPage
