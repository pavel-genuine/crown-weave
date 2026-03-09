import StepLayout from '../../../../components/dashboard/StepLayout';

export default function Page({ params }) {

    return (
        <StepLayout
            orderId={params.id}
            title="Warehouse Picking"
            description="Warehouse staff picks carpet from rack."
            nextStep="packing-station"
        />
    );

}