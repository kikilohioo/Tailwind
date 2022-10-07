import React from 'react'

const Card = ({ photo }) => {
	return (
		<div className='card mt-2'>
			<img className='w-full' src={photo} alt="paisaje"/>
			<div className='px-6 py-4'>
				<h2 className='font-bold text-xl mb-2 cursor-pointer border-b-2 border-white hover:border-b-2 hover:border-gray-700 transition ease-in duration-200'>Title</h2>
				<p className='text-gray-700 text-base'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, necessitatibus?
				</p>
			</div>
			<div className='flex flex-wrap px-6 py-4'>
				<span className='hashtag'>#photography</span>
				<span className='hashtag'>#river</span>
				<span className='hashtag'>#mountain</span>
			</div>
		</div>
	)
}

export default Card