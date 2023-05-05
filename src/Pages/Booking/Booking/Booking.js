import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRef } from 'react';
import useAuth from '../../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { id } = useParams();
    console.log(id);
    const [serviceList, setServiceList] = useState([]);
    const [selectService, setSelectService] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [])
    useEffect(() => {
        const getService = serviceList.find
            (service => service._id === id)
        setSelectService(getService);
    }, [serviceList])

    const history = useHistory();


    const { user } = useAuth();
    const userNameRef = useRef();
    const nameRef = useRef();
    const imgRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const priceRef = useRef();

    const addressRef = useRef();
    const handleAddUser = e => {
        const userName = userNameRef.current.value;
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const mobileNumber = numberRef.current.value;
        const price = priceRef.current.value;

        const address = addressRef.current.value;

        const newUser = { name, email, userName, img, price, address, mobileNumber };

        fetch('http://localhost:5000/myOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    e.target.reset();
                    history.push(`/myOrders`);

                }
            })
        e.preventDefault();

    }
    return (
        <div onSubmit={handleAddUser}>
            <div className="card bg-dark text-white  mx-auto">
                <img src="https://www.bradenonline.com/wp-content/uploads/2020/07/businessman-3213659_1920.jpg" className="card-img" alt="..." />
                <div className="card-img-overlay text-center">
                    <h1>Makang<span className="span-style">Ikang<i class="fas fa-shield-alt"></i></span></h1>
                </div>
            </div>
            <div className="card mb-3 appointment-style w-75 mx-auto my-3">
                <div className="row g-0">
                    <div className="col-md-6 order-style ">
                        <img src={selectService?.img} className="img-fluid rounded-start w-100" alt="..." />
                    </div>
                    <div className="col-md-6 body-style">
                        <div className="card-body my-5 text-center ">

                            <h5 className="card-title name-style"> {selectService?.name}</h5>
                            <p className="card-text title-style">{selectService?.price}</p>


                        </div>
                    </div>

                </div>

            </div >
            <h2 className="text-center text-primary">Please Add Details</h2>
            <form className="appointment-form w-50 mx-auto my-auto text-center" >
                <input className="mx-auto" type="text" defaultValue={user.displayName} ref={userNameRef} />
                <input className="mx-auto" type="email" defaultValue={user.email} name="" id="" ref={emailRef} />
                <input className="mx-auto" type="text" defaultValue={selectService?.name} name="" id="" ref={nameRef} />
                <input className="mx-auto" type="url" defaultValue={selectService?.img} name="" id="" ref={imgRef} />
                <input className="mx-auto" type="text" defaultValue={selectService?.price} name="" id="" ref={priceRef} />
                <input className="mx-auto" type="text" placeholder="Address" ref={addressRef} />
                <input className="mx-auto" type="number" placeholder="phone number" ref={numberRef} />

                <input className="mx-auto btn-primary" type="submit" value="Submit" />
            </form>



        </div>
    );


};

export default Booking;