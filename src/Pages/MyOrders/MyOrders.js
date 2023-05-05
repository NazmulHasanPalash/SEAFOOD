import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AddOrders from './AddOrders/AddOrders';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [orderList, setOrderList] = useState([]);
    const [selectOrders, setSelectOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/myOrders")
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])
    useEffect(() => {
        const getOrder = orderList.filter
            (order => order?.email == user?.email)
        setSelectOrders(getOrder);
    }, [orderList])



    // DELETE AN USER
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/myOrders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = selectOrders.filter(order => order._id !== id);
                        setSelectOrders(remainingOrders);
                    }
                });
        }

    }


    return (
        <div id="orderId" className="text-center">
            <h2 className=" mt-5">My <span className="heading-style text-primary"> orders</span> </h2>
            <div className="card mb-3 appointment-style w-75 mx-auto my-3">
                {
                    selectOrders.map(order => <AddOrders

                        key={order._id}
                        order={order}
                        handleDeleteOrder={handleDeleteOrder}


                    ></AddOrders>)
                }


            </div >





        </div>
    );
};

export default MyOrders;