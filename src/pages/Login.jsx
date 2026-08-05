import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "@/validations/schema"
import RegisterForm from "@/components/RegisterForm"
import { toast } from "react-toastify"

function Login() {
	const { formState, register, handleSubmit, reset } = useForm({
		resolver: zodResolver(loginSchema),
		mode: 'onSubmit',
		defaultValues: { identity: "", password: "" }
	})
	const { errors } = formState

	const onSubmit = async (data) => {
		toast.success(JSON.stringify(data, null, 2))
	}
	return (
		<>
			<div className="h-175 pt-20 pb-28 bg-base-200 max-md:pt-2">
				<div className="p-5 mx-auto max-w-5xl min-h-135 flex justify-between max-md:flex-col">
					<div className="flex flex-col gap-4 mt-20 basis-3/5 max-md:mt-0 max-md:text-center">
						<div className="text-5xl text-primary font-bold">Fakebook</div>
						<h2 className='text-[30px] leading-8 mt-3 w-128.5 max-md:hidden'>
							Fakebook helps you connect and share with the people in your life.
						</h2>
						<div className="badge badge-outline badge-error max-md:mx-auto">This is not real facebook</div>
					</div>
					<div className="flex flex-1 ">
						<div className="card bg-base-100 w-full h-[350px] shadow-xl mt-8">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="card-body gap-3 p-4">
									<div className="w-full">
										<input type="text"
											{...register('identity')}
											className='input input-bordered w-full'
											placeholder='E-mail or Phone number' />
										<p className="text-sm text-error">{errors.identity?.message}</p>	
									</div>
									<div className="w-full">
										<input type="password"
											{...register('password')}
											className='input input-bordered w-full'
											placeholder='password' />
										<p className="text-sm text-error">{errors.password?.message}</p>
									</div>
									<button className='btn btn-primary text-xl'>Login</button>
									<p className="text-center cursor-pointer opacity-70">
										Forgotten password?
									</p>
									<div className="divider my-0"></div>
									<button className='btn btn-secondary text-lg text-white mx-auto'
										type='button'
										onClick={() => document.querySelector('#register-form').showModal()}
									>Create new account</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<dialog id="register-form" className="modal">
				<div className="modal-box">
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
					<RegisterForm />
				</div>
			</dialog>

		</>
	)
}

export default Login