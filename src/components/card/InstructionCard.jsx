const cardsData = [
    {
        bgColor: 'bg-green-500',
        textColor: 'text-green-500',
        shadowColor: 'shadow-green-500',
        quarter: 'Q1',
        year: '2021',
        milestones: [
            "Team set-up",
            "Launch of informational website"
        ]
    },
    {
        bgColor: 'bg-blue-500',
        textColor: 'text-blue-500',
        shadowColor: 'shadow-blue-500',
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
        bgColor: 'bg-yellow-500',
        textColor: 'text-yellow-500',
        shadowColor: 'shadow-yellow-500',
        quarter: 'Q3',
        year: '2021',
        milestones: [
            "Celebrity, Creator and Influencer partnerships",
            "Expansion of creator communities on our platform",
            "More Marketing and promotion",
        ]
    },
    {
        bgColor: 'bg-red-600',
        textColor: 'text-red-600',
        shadowColor: 'shadow-red-600',
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
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 space-y-2'>
            {cardsData.map((card, index) => (
                <div key={index} className="w-[100%] h-auto">
                    <div className="flex gap-2">
                        <div className={`${card.bgColor} ${card.shadowColor} shadow-md rounded-r-full rounded-tl-full w-16 h-16 justify-center items-center flex rounded-bl-3xl`}>
                            <p className="text-slate-950 font-semibold text-2xl">{card.quarter}</p>
                        </div>
                        <div className="flex flex-col">
                            <div className={`${card.bgColor} rounded-full h-4 w-4 mt-auto`}></div>
                            <p className="font-semibold text-sm text-white">{card.year}</p>
                        </div>
                    </div>
                    <div className="space-y-2 mt-12">
                        {card.milestones.map((milestone, index) => (
                            <div key={index} className="flex">
                                <p className={`${card.textColor}
                                 font-bold mr-3`}>0{index + 1}</p>
                                <p className="text-md text-slate-300 font-light">{milestone}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default InstructionCard;
