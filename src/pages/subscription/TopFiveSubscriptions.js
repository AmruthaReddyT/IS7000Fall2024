import React from 'react'

function TopFiveSubscriptions() {
    const topSubscriptions = [
        {
            id: 'premium',
            name: 'Premium Plan',
            price: '$15/month',
            description: 'Access to all premium features including exclusive content, priority support, and more.',
        },
        {
            id: 'standard',
            name: 'Standard Plan',
            price: '$10/month',
            description: 'Access to standard features with regular updates and support.',
        },
        {
            id: 'basic',
            name: 'Basic Plan',
            price: '$5/month',
            description: 'Get access to basic features with limited support.',
        },
        {
            id: 'family',
            name: 'Family Plan',
            price: '$25/month',
            description: 'Ideal for families with up to 5 accounts. Access to all premium features.',
        },
        {
            id: 'student',
            name: 'Student Plan',
            price: '$3/month',
            description: 'Discounted plan for students. Access to standard features.',
        },
    ];

    return (
        <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">

            <div className="flex overflow-x-auto space-x-6 px-4 py-8 w-full max-w-5xl">
                {topSubscriptions.map((subscription) => (
                    <div
                        key={subscription.id}
                        className="min-w-[250px] bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                    >
                        <h2 className="text-xl font-semibold mb-2">{subscription.name}</h2>
                        <p className="text-lg font-bold text-blue-600">{subscription.price}</p>
                        <p className="mt-2 text-gray-700">{subscription.description}</p>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md font-semibold">
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopFiveSubscriptions
