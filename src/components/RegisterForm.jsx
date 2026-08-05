import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/validations/schema'
import axios from 'axios'
import { Flip, toast } from 'react-toastify'

function RegisterForm() {
	const { formState, register, handleSubmit, reset } = useForm({
		resolver: zodResolver(registerSchema),
		mode: 'onSubmit',
		defaultValues: {
			firstName: "", lastName: "", identity: "",
			password: "", confirmPassword: ""
		}
	})
	const { errors } = formState

	const onSubmit = async (data) => {
		try {
			const resp = await axios.post('http://localhost:8899/api/auth/register', data)
			toast(resp.data.message, { type : 'success'})
		}catch(err){
			console.error(err.response?.data?.error )
			toast(err.response?.data?.error, {
				type: 'error',
				autoClose: 2000,
				transition: Flip
			} )
		}
	}

	return (
		<>
			<div className="text-3xl text-center opacity-70">Create a new account</div>
			<div className="divider opacity-60"></div>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 p-4 pt-3'>
				<div className="flex gap-2">
					<div className="w-full">
						<input type="text"
							{...register('firstName')}
							placeholder='First name'
							className='input input-bordered w-full' />
						<p className="text-sm text-error">{errors.firstName?.message}</p>	
					</div>
					<div className="w-full">
						<input type="text"
							{...register('lastName')}
							placeholder='Last name'
							className='input input-bordered w-full' />
						<p className="text-sm text-error">{errors.lastName?.message}</p>	
					</div>
				</div>
				<div className="w-full">
					<input type="text"
						{...register('identity')}
						placeholder='Email or Phone number'
						className='input input-bordered w-full' />
						<p className="text-sm text-error">{errors.identity?.message}</p>	
				</div>
				<div className="w-full">
					<input type="password"
						{...register('password')}
						placeholder='New password'
						className='input input-bordered w-full' />
					<p className="text-sm text-error">{errors.password?.message}</p>	
				</div>
				<div className="w-full">
					<input type="password"
						{...register('confirmPassword')}
						placeholder='Confirm password'
						className='input input-bordered w-full' />
					<p className="text-sm text-error">{errors.confirmPassword?.message}</p>	
				</div>
				<button className='btn btn-secondary text-xl text-white'>Sign up</button>
				<button className='btn btn-warning text-xl text-white'
					type='button' onClick={()=>reset()}
				>Reset</button>
			</form>
			{/* <div className="border">
				<pre className="text-error text-xs">
					{JSON.stringify(errors, (k, v) => k === 'ref' ? undefined : v, 2)}</pre>
			</div> */}
		</>
	)
}

export default RegisterForm