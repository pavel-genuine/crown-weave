import StepLayout from '../../../../components/dashboard/StepLayout';

export default function Page({ params }) {

    return (
        <StepLayout
            orderId={params.id}
            title="Courier Pickup"
            description="Courier collected the package."
            nextStep="regional-hub"
        />
    );

}