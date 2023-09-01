const cardsData = [
    {
        bgColor: 'bg-[#22A75D]',
        textColor: 'text-[#22A75D]',
        shadowColor: 'DropshadowGreen',
        quarter: 'Q1',
        year: '2021',
        milestones: [
            "Team set-up",
            "Launch of informational website"
        ]
    },
    {
        bgColor: 'bg-[#2278D4]',
        textColor: 'text-[#2278D4]',
        shadowColor: 'DropshadowBlue',
        quarter: 'Q2',
        year: '2021',
        milestones: [
            "Presale and exchange listings",
            "Blockchain development and launch",
            "Launch of our MVP",
            "Influencer agency partnerships",
            "Marketing and promotion",
        ]
    }, {
        bgColor: 'bg-[#FFD100]',
        textColor: 'text-[#FFD100]',
        shadowColor: 'DropshadowYellow',
        quarter: 'Q3',
        year: '2021',
        milestones: [
            "Celebrity, Creator and Influencer partnerships",
            "Expansion of creator communities on our platform",
            "More Marketing and promotion",
        ]
    },
    {
        bgColor: 'bg-[#E20613]',
        textColor: 'text-[#E20613]',
        shadowColor: 'DropshadowRed',
        quarter: 'Q4',
        year: '2021',
        milestones: [
            "Mainstream partnerships",
            "500 active creator communities",
            "2Million active community members",
            "More Marketing and promotion",
        ]
    },

];

const InstructionCard = () => {
    return (
        <div className=' 2xl:mt-0 md:mt-6 sm:mt-6 xs:mt-6 grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 space-y-2 gap-1 2xl:mx-[90px] xl:mx-10 lg:mx-12 '>
            {cardsData.map((card, index) => (
                <div key={index} className="w-[100%] h-auto">
                    <div className="flex gap-2">
                        <div className={`${card.bgColor} ${card.shadowColor} shadow-md rounded-r-full rounded-tl-full w-[82px] h-[82px] justify-center items-center flex rounded-bl-3xl`}>
                            <p className="text-slate-950 font-bold text-[26px] leading-[36px]">{card.quarter}</p>
                        </div>
                        <div className="flex flex-col">
                            <div className={`${card.bgColor} rounded-full h-[12px] w-[12px] mt-auto`}></div>
                            <p className=" font-bold leading-[36px] text-[18px] text-white">{card.year}</p>
                        </div>
                    </div>
                    <div className="space-y-2 2xl:mt-12 md:mt-4 sm:mt-4 xs:mt-4">
                        {card.milestones.map((milestone, index) => (
                            <div key={index} className="flex">
                                <p className={`${card.textColor} font-bold text-[12px] leading-[34px] mr-3`}>0{index + 1}</p>
                                <p className="text-[18px] leading-[34px] text-white font-[400] opacity-[0.7]">{milestone}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default InstructionCard;
