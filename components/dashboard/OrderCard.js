import FlowTimeline from "./FlowTimeline";
import StatusSelector from "./StatusSelector";
import { flowSteps } from "./FlowSteps";

export default function OrderCard({ order, updateStep }) {

    return (

        <div className="bg-white p-6 rounded-xl shadow-sm border">

            <div className="flex justify-between mb-4">

                <div>
                    <h2 className="font-semibold text-lg">{order.id}</h2>
                    <p className="text-gray-500">
                        {order.customer} • {order.product}
                    </p>
                </div>

                <StatusSelector
                    currentStep={order.step}
                    update={(step) => updateStep(order.id, step)}
                />

            </div>

            <FlowTimeline currentStep={order.step} />

            <p className="text-sm mt-3 text-gray-500">
                Current Status: {flowSteps[order.step]}
            </p>

        </div>

    );
}