"use client";

import { useRouter } from "next/navigation";

export default function StepLayout({
    title,
    description,
    nextStep,

}) {

    const router = useRouter();

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-50">

            <div className="bg-white p-10 rounded-xl shadow w-[500px]">

                <h1 className="text-2xl font-semibold mb-3">
                    {title}
                </h1>

                <p className="text-gray-500 mb-6">
                    {description}
                </p>

                <button
                    onClick={() => router.push(`/dashboard/orders/${nextStep}`)}
                    className="bg-black text-white px-5 py-3 rounded-lg"
                >
                    Move to Next Step
                </button>

            </div>

        </div>

    );
}