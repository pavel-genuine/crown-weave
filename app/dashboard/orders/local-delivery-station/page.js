import StepLayout from '../../../../components/dashboard/StepLayout';

export default function Page({ params }) {

    return (
        <StepLayout
            orderId={params.id}
            nextStep="customer-delivery"
            title="Local Delivery Station"
            description="Courier collected the package."
        />
    );

}