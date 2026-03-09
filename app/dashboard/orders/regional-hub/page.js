import StepLayout from '../../../../components/dashboard/StepLayout';

export default function Page({ params }) {

    return (
        <StepLayout
            orderId={params.id}
            nextStep="local-delivery-station"
            title="Regional Hub"
            description="Courier collected the package."
        />
    );

}