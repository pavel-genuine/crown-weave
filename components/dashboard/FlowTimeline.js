import { flowSteps } from "./FlowSteps";

export default function FlowTimeline({ currentStep }) {

    return (

        <div className="flex overflow-x-auto gap-6 py-3">

            {flowSteps.map((step, index) => {

                const completed = index <= currentStep;

                return (

                    <div key={index} className="flex flex-col items-center min-w-[160px]">

                        <div
                            className={`h-4 w-4 rounded-full ${completed ? "bg-green-500" : "bg-gray-300"
                                }`}
                        />

                        <p className="text-xs text-center mt-2">
                            {step}
                        </p>

                    </div>

                );

            })}

        </div>

    );
}