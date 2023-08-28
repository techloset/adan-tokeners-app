const cardData = [
  {
    bgColor: 'bg-green-500',
    mt:'lg:mt-5 xl:mt-5 mt-2',
    mt2:'mt-16',
    borderColor: 'border-green-600',
    shadowColor: 'shadow-green-600',
    textColor: 'text-green-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_7_323)">
          <path d="M22.766 4.56588C22.4006 4.41367 21.9981 4.37366 21.6099 4.45094C21.2217 4.52823 20.8653 4.71932 20.586 4.99988L18 7.58588L13.414 2.99988C13.0389 2.62494 12.5303 2.41431 12 2.41431C11.4697 2.41431 10.9611 2.62494 10.586 2.99988L6 7.58588L3.414 4.99988C3.1343 4.72026 2.77797 4.52985 2.39006 4.45271C2.00216 4.37558 1.60009 4.41518 1.23469 4.56652C0.869291 4.71786 0.556965 4.97414 0.337197 5.30296C0.117428 5.63178 8.44486e-05 6.01838 0 6.41388L0 16.9999C0.00158786 18.3255 0.528882 19.5963 1.46622 20.5337C2.40356 21.471 3.67441 21.9983 5 21.9999H19C20.3256 21.9983 21.5964 21.471 22.5338 20.5337C23.4711 19.5963 23.9984 18.3255 24 16.9999V6.41388C24.0001 6.01835 23.8829 5.63167 23.6633 5.30273C23.4436 4.97379 23.1314 4.71737 22.766 4.56588Z" fill="#191F30" />
        </g>
        <defs>
          <clipPath id="clip0_7_323">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    arrowicon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70727 2.62615C8.31675 2.23562 7.68358 2.23562 7.29306 2.62615C6.90253 3.01667 6.90253 3.64983 7.29306 4.04036L10.2526 6.99992H3.3335C2.78121 6.99992 2.3335 7.44763 2.3335 7.99992C2.3335 8.5522 2.78121 8.99992 3.3335 8.99992H10.2526L7.29306 11.9595C6.90253 12.35 6.90253 12.9832 7.29306 13.3737C7.68358 13.7642 8.31675 13.7642 8.70727 13.3737L13.3739 8.70703C13.4698 8.61115 13.5422 8.50065 13.591 8.3827C13.6398 8.2648 13.6668 8.13551 13.6668 7.99992C13.6668 7.86433 13.6398 7.73504 13.591 7.61714C13.5422 7.49919 13.4698 7.38869 13.3739 7.29281L8.70727 2.62615Z" fill="#22A75D" />
      </svg>
    ),
    title: 'Creators',
    subTitle: `Creators can gain independence through a decentralised digital currency system that is dependent on 
    growing and engaging with the community and also their star power. They own 10-15% of the total value of the 
    tokens minted.`,
  },
  {
    bgColor: 'bg-blue-500',
    mt:'lg:mt-40 xl:mt-40 mt-2',
    mt2:'mt-5',
    borderColor: 'border-blue-600',
    shadowColor: 'shadow-blue-600',
    textColor: 'text-blue-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_7_332)">
          <path d="M1.3267 12.4L4.8867 15L3.53471 19.187C3.31622 19.8363 3.31345 20.539 3.52681 21.19C3.74018 21.8411 4.15825 22.4058 4.7187 22.8C5.26956 23.2067 5.9371 23.4247 6.62186 23.4212C7.30662 23.4178 7.97195 23.1932 8.51871 22.781L11.9997 20.219L15.4817 22.778C16.0316 23.1824 16.6955 23.4021 17.3781 23.4054C18.0607 23.4087 18.7267 23.1955 19.2805 22.7965C19.8342 22.3974 20.2472 21.833 20.46 21.1844C20.6728 20.5359 20.6744 19.8365 20.4647 19.187L19.1127 15L22.6727 12.4C23.2218 11.9985 23.6301 11.4337 23.8391 10.7863C24.048 10.139 24.0471 9.44214 23.8364 8.79534C23.6257 8.14854 23.2159 7.58488 22.6657 7.18486C22.1155 6.78484 21.453 6.56892 20.7727 6.56796H16.3997L15.0727 2.43195C14.864 1.78091 14.454 1.21297 13.9017 0.81002C13.3494 0.407071 12.6834 0.189941 11.9997 0.189941C11.316 0.189941 10.65 0.407071 10.0977 0.81002C9.54544 1.21297 9.13538 1.78091 8.92671 2.43195L7.59971 6.56796H3.23071C2.55045 6.56892 1.8879 6.78484 1.33768 7.18486C0.787473 7.58488 0.377745 8.14854 0.167026 8.79534C-0.0436933 9.44214 -0.044626 10.139 0.164361 10.7863C0.373348 11.4337 0.781566 11.9985 1.3307 12.4H1.3267Z" fill="#191F30" />
        </g>
        <defs>
          <clipPath id="clip0_7_332">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    arrowicon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70727 2.62615C8.31675 2.23562 7.68358 2.23562 7.29306 2.62615C6.90253 3.01667 6.90253 3.64983 7.29306 4.04036L10.2526 6.99992H3.3335C2.78121 6.99992 2.3335 7.44763 2.3335 7.99992C2.3335 8.5522 2.78121 8.99992 3.3335 8.99992H10.2526L7.29306 11.9595C6.90253 12.35 6.90253 12.9832 7.29306 13.3737C7.68358 13.7642 8.31675 13.7642 8.70727 13.3737L13.3739 8.70703C13.4698 8.61115 13.5422 8.50065 13.591 8.3827C13.6398 8.2648 13.6668 8.13551 13.6668 7.99992C13.6668 7.86433 13.6398 7.73504 13.591 7.61714C13.5422 7.49919 13.4698 7.38869 13.3739 7.29281L8.70727 2.62615Z" fill="#2278D4" />
      </svg>
    ),
    title: 'Holders',
    subTitle: `Holding social tokens allows the individual to gain access to benefits including unreleased
    content, private communities, direct access to celebrity, early- access to tickets and more as well as 
    the ability to trade with other communities in order to gain access to more creator content with early token 
    buyers being the biggest winners as the value of the token increases with more buyers.`,
  },
];

const Card = () => {
  return (
    <div className='flex flex-col gap-3 items-center lg:flex-row lg:justify-center lg:space-x-2 xl:flex-row xl:justify-center xl:space-x-2 '>
      {cardData.map((card, index) => (
        <div key={index} className={`bg-slate-900 shadow-md shadow-slate-800 text-white w-full lg:w-[40%]  lg:h-[auto] xl:w-[40%] xl:h-[auto]  p-9 rounded-xl ${card.borderColor} lg:mb-20 xl:mb-20 mb-2  ${card.mt}`}>
          <div className={`h-16 w-16 rounded-full ${card.bgColor} justify-center items-center flex shadow-md ${card.shadowColor}`}>
            {card.icon}
          </div>
          <p className='text-3xl text-white mt-3'>For <span className={`border-b-2 ${card.borderColor} ${card.textColor} font-semibold`}>{card.title}</span></p>
          <div className='h-auto'>
            <p className='text-sm text-slate-400 mt-3'>{card.subTitle}</p>
          </div >
          <button className={` border-b-2 text-md ${card.borderColor} ${card.textColor} flex text-center gap-1 items-center justify-center ${card.mt2}`}>Learn more
            {card.arrowicon}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
