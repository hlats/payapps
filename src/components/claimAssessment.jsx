import { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'

import ClaimTable from './claimTable'
import { iconSquareCheck, iconFilter } from '../icons/icons'
const claimData = require('../data/claimDetails.json')

const ClaimAssessment = () => {
    const [claimAssessmentData, setClaimAssessmentData] = useState({})
    const [isDescriptionDescending, setIsDescriptionDescending] = useState(true)
    const [isValueDescending, setIsValueDescending] = useState(true)

    const setInitClaimAssessmentData = () => {
        claimData && setClaimAssessmentData(claimData)
    }

    const handleSort = (param) => {
        ////TODO: finish sorting function , ran out of time
        param === 'description' && (
            claimAssessmentData.claimContents.sort(function (a, b) {
                let x = a.description.toLowerCase()
                let y = b.description.toLowerCase()
                if (x < y) { return -1 }
                if (x > y) { return 1 }
                return 0
            })
        )
        param === 'description' && isDescriptionDescending ? setIsDescriptionDescending(false) : setIsDescriptionDescending(true)

        param === 'value' && (
            claimAssessmentData.claimContents.sort(function (a, b) {
                let x = a.value
                let y = b.value
                if (x < y) { return -1 }
                if (x > y) { return 1 }
                return 0
            })
        )
        param === 'value' && isValueDescending ? setIsValueDescending(false) : setIsValueDescending(true)

    }

useEffect(() => {
    !isEmpty(claimData) && setInitClaimAssessmentData()
}, [])

return (
    <>
        {!isEmpty(claimAssessmentData) && (
            <div className='claim-assessment'>
                <header>
                    <div className='claim-identifier'>
                        <span className='claim-number'>Claim {claimAssessmentData.claimNumber}</span>
                        <span className='divider'></span>
                        <span className='assess-mode'>
                            <span className='icon'>{iconSquareCheck}</span>Assess Mode
                    </span>
                    </div>

                    <button className='filter-toggle'>
                        <span className='icon'>{iconFilter}</span>
                    </button>
                </header>

                <ClaimTable
                    claimData={claimAssessmentData}
                    handleSort={handleSort}
                    isDescriptionDescending={isDescriptionDescending}
                    isValueDescending={isValueDescending}
                />
            </div>
        )}
    </>
)
}

export default ClaimAssessment
