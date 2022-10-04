import React from 'react'
import { Button, Typography, TextField } from '@mui/material'
import {
	SubmitHandler,
	useForm,
	Controller,
	useFormState,
} from 'react-hook-form'
import './auth-form.css'
import { IShippingField } from '../../../components/utils/interfaces/auth.interface'
import { loginValidation, passwordValidation } from './validate'

export interface ILoginFormProps {}

export const LoginForm: React.FunctionComponent<ILoginFormProps> = () => {
	const { handleSubmit, control, register, reset } = useForm<IShippingField>({
		mode: 'onSubmit',
		reValidateMode: 'onChange',
	})
	const { errors } = useFormState({
		control,
	})
	const onSubmit: SubmitHandler<IShippingField> = data => {
		reset()
		console.log(data)
	}
	return (
		<div className='auth-form'>
			<Typography variant='h4' component='div'>
				Войдите
			</Typography>
			<Typography
				variant='subtitle1'
				component='div'
				gutterBottom
				className='auth-from__subtitle'
			>
				Чтобы получить доступ
			</Typography>
			<form className='auth-form__form' onSubmit={handleSubmit(onSubmit)}>
				<Controller
					control={control}
					name='email'
					rules={loginValidation}
					defaultValue=''
					render={({ field }) => (
						<TextField
							{...field}
							{...register('email')}
							label='Email'
							type='email'
							size='small'
							margin='normal'
							className='auth-form__input'
							fullWidth
							onChange={e => field.onChange(e)}
							value={field.value}
							error={!!errors.email?.message}
							helperText={errors.email?.message}
						/>
					)}
				/>
				<Controller
					control={control}
					name='password'
					rules={passwordValidation}
					defaultValue=''
					render={({ field }) => (
						<TextField
							{...field}
							{...register('password')}
							label='Password'
							type='password'
							size='small'
							margin='normal'
							className='auth-form__input'
							fullWidth
							onChange={e => field.onChange(e)}
							value={field.value}
							error={!!errors.password?.message}
							helperText={errors.password?.message}
						/>
					)}
				/>
				<Button
					type='submit'
					variant='contained'
					fullWidth
					disableElevation
					sx={{ marginTop: 2 }}
				>
					Sign in
				</Button>
			</form>
		</div>
	)
}
