import React from 'react'
import { RegisterForm } from './auth-form/register-form'
import './auth-page.css'

export interface IRegisterPageProps {}

const RegisterPage: React.FunctionComponent<IRegisterPageProps> = props => {
	return (
		<div className='auth-page'>
			<RegisterForm />
		</div>
	)
}

export default RegisterPage
