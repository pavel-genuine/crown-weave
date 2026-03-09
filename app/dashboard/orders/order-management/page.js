import StepLayout from '../../../../components/dashboard/StepLayout';

export default function Page({ params }) {

    return (
        <StepLayout
            orderId={params.id}
            title="Order Management System"
            description="OMS verifies payment and inventory."
            nextStep="warehouse-picking"
        />
    );

}