import StepLayout from '../../../../components/dashboard/StepLayout';

export default function Page({ params }) {

    return (
        <StepLayout
            orderId={params.id}
            nextStep="delivery-confirmation"
            title="Customer Door / Pickup Point"
            description="Courier collected the package."
        />
    );

}