import React from 'react';


function TestCard({ client, event, testimonial}) {
    return (
        <>
        <div className="card bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-900  ml-10 text-primary-content w-[50em]">
            <div className="card-body">
                <h2 className="card-title font-Title text-3xl">{client}</h2>
                <h3 className='font-Title italic text-lg'>{event}</h3>
                <p>
                    {testimonial}
                </p>
            </div>
        </div>
        </>
    );
}

export default TestCard;