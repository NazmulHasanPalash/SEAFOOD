import React from 'react';

import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg'
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: "https://www.hitsa.com.au/wp-content/uploads/types-of-chefs.jpg",
        name: 'Andrew Smith',

    },
    {
        img: "https://wallpapercave.com/wp/wp1882340.jpg",
        name: 'John Anderson',

    },
    {
        img: "https://media.licdn.com/dms/image/D4D03AQEJ-t1_z3L7cw/profile-displayphoto-shrink_800_800/0/1680508099769?e=2147483647&v=beta&t=crHfNGjW0uuLF66SWUL8ueapMho9ZOTdWdS9BW93x48",
        name: 'Zakaria Smith',

    },
    {


    },
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Our Chef</h2>
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