import { useApcfContext } from '../../contexts';

export const Bill = ()=> {
    const { apfcItem, setApfcItem } = useApcfContext();
    return (
        <>
            <div>Bill</div>
            <div>
                {apfcItem.map((item, index) => {
                    return (
                        <>
                            <p>{item.type}</p>
                            <p>{item.noOfSteps}</p>
                            <p>{item.quantity}</p>
                        </>
                    )
                })}
            </div>
        </>
    )
}