import { iconChevronDown, iconProgressIndicator1, iconProgressIndicator2, iconProgressIndicator3, iconProgressIndicator4 } from '../icons/icons'

const ClaimTable = (props) => {
    const { claimData, handleSort, isDescriptionDescending, isValueDescending } = props

    return (
        <div className='claim-table'>
            <div className='table-header'>
                <div className='table-column progress'><span className='text'>Prog</span></div>

                <div className='table-column ref'><span className='text'>Ref</span></div>

                <button className='table-column description toggle-sort' onClick={()=>handleSort('description')}>
                    <span className='text'>Description</span>
                    <span className={`icon ${!isDescriptionDescending ? 'invert-icon' : ''}`}>{iconChevronDown}</span>
                </button>

                <div className='table-column quantity'><span className='text'>Qty</span></div>

                <div className='table-column rate'><span className='text'>Rate</span></div>

                <button className='table-column contract-value toggle-sort' onClick={()=>handleSort('value')}>
                    <span className='text'>Contract value</span>
                    <span className={`icon ${!isValueDescending ? 'invert-icon' : ''}`}>{iconChevronDown}</span>
                </button>
            </div>

            <ul className='table-content'>
                {claimData && claimData.claimContents.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className='table-column progress'>
                                <span className='icon'>
                                    {item.progress === '1' && iconProgressIndicator1}
                                    {item.progress === '2' && iconProgressIndicator2}
                                    {item.progress === '3' && iconProgressIndicator3}
                                    {item.progress === '4' && iconProgressIndicator4}
                                </span>
                            </div>

                            <div className='table-column ref'><span className='text'>{item.reference}</span></div>

                            <div className='table-column description'>
                                <span className='text'>{item.description}</span>
                            </div>

                            <div className='table-column quantity'><span className='text'>{item.quantity} <i>{item.unit}</i></span></div>

                            <div className='table-column rate'><span className='text'>{`${item.rate === '' ? '' : '$'}`}{item.rate}</span></div>

                            <div className='table-column contract-value'>
                                <span className='text value'>${item.value}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>

            <div className='table-footer'>
                <span className='label'><span className='text'>Total</span></span>
                <span className='total'><span className=''>{claimData.total}</span></span>
            </div>
        </div>
    )
}

export default ClaimTable
