import { flowSteps } from "./FlowSteps";

export default function StatusSelector({ currentStep, update }) {

    return (

        <select
            value={currentStep}
            onChange={(e) => update(Number(e.target.value))}
            className="border rounded-lg px-3 py-2 text-sm"
        >

            {flowSteps.map((step, i) => (

                <option key={i} value={i}>
                    {step}
                </option>

            ))}

        </select>

    );
}