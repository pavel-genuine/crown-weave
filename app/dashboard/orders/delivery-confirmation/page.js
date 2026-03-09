import StepLayout from '../../../../components/dashboard/StepLayout';

export default function Page({ params }) {

    return (
        <StepLayout
            orderId={params.id}
            nextStep="reverse"
            title="Delivery Confirmation"
            description="Courier collected the package."
        />
    );

}