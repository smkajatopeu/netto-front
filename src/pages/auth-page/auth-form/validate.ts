export const REQUIRED_FIELD = 'Required to fill'

export const loginValidation = {
	required: REQUIRED_FIELD,
	validate: (value: string) => {
		if (value.match(/[а-яА-Я]/)) {
			return 'Login can contain only latin letters'
		}

		return true
	},
}

export const passwordValidation = {
	required: REQUIRED_FIELD,
	validate: (value: string) => {
		if (value.length < 6) {
			return 'Password must be at least 6 characters'
		}

		return true
	},
}
