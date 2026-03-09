import StepLayout from '../../../../components/dashboard/StepLayout';

export default function Page({ params }) {

    return (
        <StepLayout
            orderId={params.id}
            title="Packing Station"
            description="Product is packed and sealed."
            nextStep="courier-pickup"
        />
    );

}