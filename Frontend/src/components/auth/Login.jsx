import { Field } from './Field'

// Assets
import { EyeSVG } from '../../assets/svg/EyeSVG'
import { useState } from 'react'

export const Login = () => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<>
			<p className="text-body-1 font-inter py-6">Log in to your account</p>
			<div className="flex flex-col gap-8">
				<Field
					htmlFor={'email'}
					id={'email'}
					labelText={'Email'}
					placeholder={'Enter your email address'}
				/>
				<Field
					htmlFor={'password'}
					type={showPassword ? 'text' : 'password'}
					id={'password'}
					labelText={'Password'}
					placeholder={'Enter your password'}
					icon={<EyeSVG height={'24'} width={'24'} color={'#000000'} />}
					setShowPassword={setShowPassword}
					showPassword={showPassword}
				/>
				<div className="flex justify-between text-body-3 font-inter">
					<div>
						<input type="checkbox" name="remember" id="remember" />
						<label htmlFor="remember" className="pl-2">
							Remember me
						</label>
					</div>
					<p className="text-primary-500">I forgot my password 😢</p>
				</div>
				<button className="bg-primary-500 h-14 text-white text-body-1 font-inter rounded-[4px]">
					Log in
				</button>

				<p className="text-body-3 font-inter text-center">
					By log in you are agree to the{' '}
					<span className="text-primary-500">Terms of Service</span>
				</p>
			</div>
		</>
	)
}
