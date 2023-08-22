import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-2 '>
      <div className='bg-slate-900 shadow-md shadow-slate-800 text-white
     w-full lg:w-[40%] lg:h-[auto] p-9 rounded-md lg:mb-20 mb-2'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className=" rounded-full p-8 bg-green-600 text-black"
        >
          <g clip-path="url(#clip0_7_323)">
            <path
              d="M22.766 4.56588C22.4006 4.41367 21.9981 4.37366 21.6099 4.45094C21.2217 4.52823 20.8653 4.71932 20.586 4.99988L18 7.58588L13.414 2.99988C13.0389 2.62494 12.5303 2.41431 12 2.41431C11.4697 2.41431 10.9611 2.62494 10.586 2.99988L6 7.58588L3.414 4.99988C3.1343 4.72026 2.77797 4.52985 2.39006 4.45271C2.00216 4.37558 1.60009 4.41518 1.23469 4.56652C0.869291 4.71786 0.556965 4.97414 0.337197 5.30296C0.117428 5.63178 8.44486e-05 6.01838 0 6.41388L0 16.9999C0.00158786 18.3255 0.528882 19.5963 1.46622 20.5337C2.40356 21.471 3.67441 21.9983 5 21.9999H19C20.3256 21.9983 21.5964 21.471 22.5338 20.5337C23.4711 19.5963 23.9984 18.3255 24 16.9999V6.41388C24.0001 6.01835 23.8829 5.63167 23.6633 5.30273C23.4436 4.97379 23.1314 4.71737 22.766 4.56588Z"
              fill="#191F30"
              className='bg-black'
            />
          </g>
          <defs>
            <clipPath id="clip0_7_323">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className='text-3xl text-white mt-3'>For <span className='border-b-2 border-green-600 text-green-600 font-semibold'>Creators</span></p>
        <div className='h-auto'>
          <p className='text-sm text-slate-400 mt-3 '>Creators can gain independence through a decentralised digital currency system that is
            dependent on growing and engaging with the community and also their star power. They own
            10-15% of the total value of the tokens minted.</p>
        </div>
        <button className='mt-4 border-b-2 text-md text-emerald-600 border-emerald-600 flex text-center gap-1 items-center justify-center'>Learn more
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70727 2.62615C8.31675 2.23562 7.68358 2.23562 7.29306 2.62615C6.90253 3.01667 6.90253 3.64983 7.29306 4.04036L10.2526 6.99992H3.3335C2.78121 6.99992 2.3335 7.44763 2.3335 7.99992C2.3335 8.5522 2.78121 8.99992 3.3335 8.99992H10.2526L7.29306 11.9595C6.90253 12.35 6.90253 12.9832 7.29306 13.3737C7.68358 13.7642 8.31675 13.7642 8.70727 13.3737L13.3739 8.70703C13.4698 8.61115 13.5422 8.50065 13.591 8.3827C13.6398 8.2648 13.6668 8.13551 13.6668 7.99992C13.6668 7.86433 13.6398 7.73504 13.591 7.61714C13.5422 7.49919 13.4698 7.38869 13.3739 7.29281L8.70727 2.62615Z" fill="#22A75D" />
          </svg></button>

      </div>
      <div className='bg-slate-900 shadow-md shadow-slate-800 text-white
     w-full lg:w-[40%] lg:h-[auto] p-9 rounded-md'>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className=" rounded-full p-8 bg-blue-600 text-black"
        >
          <g clip-path="url(#clip0_7_323)">
            <path
              d="M22.766 4.56588C22.4006 4.41367 21.9981 4.37366 21.6099 4.45094C21.2217 4.52823 20.8653 4.71932 20.586 4.99988L18 7.58588L13.414 2.99988C13.0389 2.62494 12.5303 2.41431 12 2.41431C11.4697 2.41431 10.9611 2.62494 10.586 2.99988L6 7.58588L3.414 4.99988C3.1343 4.72026 2.77797 4.52985 2.39006 4.45271C2.00216 4.37558 1.60009 4.41518 1.23469 4.56652C0.869291 4.71786 0.556965 4.97414 0.337197 5.30296C0.117428 5.63178 8.44486e-05 6.01838 0 6.41388L0 16.9999C0.00158786 18.3255 0.528882 19.5963 1.46622 20.5337C2.40356 21.471 3.67441 21.9983 5 21.9999H19C20.3256 21.9983 21.5964 21.471 22.5338 20.5337C23.4711 19.5963 23.9984 18.3255 24 16.9999V6.41388C24.0001 6.01835 23.8829 5.63167 23.6633 5.30273C23.4436 4.97379 23.1314 4.71737 22.766 4.56588Z"
              fill="#191F30"
              className='bg-black'
            />
          </g>
          <defs>
            <clipPath id="clip0_7_323">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className='text-3xl text-white mt-3'>For <span className='border-b-2 border-blue-600 text-blue-600 font-semibold'>Holders</span></p>
        <div className='h-auto'>
          <p className='text-sm text-slate-400 mt-3'>Holding social tokens allows the individual to gain access to benefits including unreleased
            content, private communities, direct access to celebrity, early- access to tickets and more as well as the ability to trade with other communities in order to gain access to more creator content with early token buyers being the
            biggest winners as the value of the token increases with more buyers. </p>
        </div>
        <button className='mt-6 border-b-2 text-md text-blue-600 border-blue-600 flex text-center gap-1 items-center justify-center'>Learn more
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70727 2.62615C8.31675 2.23562 7.68358 2.23562 7.29306 2.62615C6.90253 3.01667 6.90253 3.64983 7.29306 4.04036L10.2526 6.99992H3.3335C2.78121 6.99992 2.3335 7.44763 2.3335 7.99992C2.3335 8.5522 2.78121 8.99992 3.3335 8.99992H10.2526L7.29306 11.9595C6.90253 12.35 6.90253 12.9832 7.29306 13.3737C7.68358 13.7642 8.31675 13.7642 8.70727 13.3737L13.3739 8.70703C13.4698 8.61115 13.5422 8.50065 13.591 8.3827C13.6398 8.2648 13.6668 8.13551 13.6668 7.99992C13.6668 7.86433 13.6398 7.73504 13.591 7.61714C13.5422 7.49919 13.4698 7.38869 13.3739 7.29281L8.70727 2.62615Z" fill="#2278D4" />
          </svg></button>

      </div>
    </div>
  )
}

export default Card