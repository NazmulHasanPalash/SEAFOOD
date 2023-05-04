import React from 'react';

import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg'
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',

    },
    {
        img: mechanic2,
        name: 'John Anderson',

    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',

    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',

    },
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Our Delivery Men</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;