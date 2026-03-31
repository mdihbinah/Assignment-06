import React, { use } from 'react';
import Card from './Card';

const Pricing = ({pricingData}) => {
    const pricingCards = use(pricingData).plans
    console.log(pricingCards);
    return (
        <div className="mt-5 space-y-8">
            <div>
                <div className=" text-center">
                    <h1 className='text-3xl font-bold'>Simple, Transparent Pricing</h1>
                    <p className='text-xs opacity-70'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
                {
                    pricingCards.map((card, index) => <Card key={index} card={card} />)
                }
            </div>
        </div>
    );
};

export default Pricing;