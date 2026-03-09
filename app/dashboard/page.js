"use client";

import { useState } from "react";
import OrderCard from "../../components/dashboard/OrderCard";

export default function Dashboard() {

    const [orders, setOrders] = useState([
        {
            id: "ORD-10231",
            customer: "John Smith",
            product: "Royal Persian Carpet",
            step: 3
        },
        {
            id: "ORD-10232",
            customer: "Emma Watson",
            product: "Modern Grey Carpet",
            step: 9
        }
    ]);

    const updateStep = (orderId, step) => {
        setOrders(prev =>
            prev.map(order =>
                order.id === orderId ? { ...order, step } : order
            )
        );
    };

    return (
        <div className="p-10 bg-gray-50 min-h-screen">

            <h1 className="text-3xl font-semibold mb-8">
                Logistics Flow Dashboard
            </h1>

            <div className="grid gap-6">

                {orders.map(order => (
                    <OrderCard
                        key={order.id}
                        order={order}
                        updateStep={updateStep}
                    />
                ))}

            </div>

        </div>
    );
}