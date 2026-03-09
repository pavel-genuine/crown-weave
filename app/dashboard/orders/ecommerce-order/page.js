import StepLayout from '../../../../components/dashboard/StepLayout';

export default function Page({ params }) {

    return (
        <StepLayout
            orderId={params.id}
            title="E-commerce Order"
            description="Customer placed an order from website."
            nextStep="order-management"
        />
    );

}