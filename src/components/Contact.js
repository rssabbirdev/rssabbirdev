import React, { useContext } from 'react';
import { RefContext } from '../context/ScrollRefContext';

const Contact = () => {
	const {contactRef} = useContext(RefContext)
	return (
		<section ref={contactRef} class=''>
			<div class='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
				<div class='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
					<div class='lg:col-span-2 lg:py-12'>
						<p class='max-w-xl text-lg'>
							If you need any query about me, please contact on my
							phone number or email or here
						</p>

						<div class='mt-8'>
							<a href='' class='text-2xl font-bold text-blue-600'>
								+8801830868259,+971501934037
							</a>

							<p class='mt-2 not-italic'>
								sabbir.hosen.rahat@gmail.com
							</p>
						</div>
					</div>

					<div class='rounded-lg p-8 shadow-lg border border-slate-900 lg:col-span-3 lg:p-12'>
						<form
							action='https://public.herotofu.com/v1/553eeca0-795d-11ed-a126-b172cf164538'
							method='post'
							class='space-y-4'
						>
							<div>
								<label class='sr-only' for='name'>
									Name
								</label>
								<input
									class='bg-slate-600 outline-none w-full rounded-lg border-gray-200 p-3 text-sm'
									placeholder='Name'
									type='text'
									id='name'
									name='name'
								/>
							</div>

							<div class='grid grid-cols-1 gap-4 sm:grid-cols-2'>
								<div>
									<label class='sr-only' for='email'>
										Email
									</label>
									<input
										class='bg-slate-600 outline-none w-full rounded-lg border-gray-200 p-3 text-sm'
										placeholder='Email address'
										type='email'
										id='email'
										name='email'
										required
									/>
								</div>

								<div>
									<label class='sr-only' for='phone'>
										Phone
									</label>
									<input
										class='bg-slate-600 outline-none w-full rounded-lg border-gray-200 p-3 text-sm'
										placeholder='Phone Number'
										type='tel'
										id='phone'
										name='phone'
									/>
								</div>
							</div>

							<div>
								<label class='sr-only' for='message'>
									Message
								</label>
								<textarea
									class='bg-slate-600 w-full rounded-lg outline-none p-3 text-sm'
									placeholder='Message'
									rows='8'
									id='message'
									name='message'
									required
								></textarea>
							</div>

							<div class='mt-4'>
								<button
									type='submit'
									class='inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white sm:w-auto'
								>
									<span class='font-medium'>
										{' '}
										Send Enquiry{' '}
									</span>

									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='ml-3 h-5 w-5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M14 5l7 7m0 0l-7 7m7-7H3'
										/>
									</svg>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
