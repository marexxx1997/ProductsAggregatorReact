import React, { Children, ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const CandidateCardContainer = ({children} : Props) => {
  return (
    <div className="col-md-3 margin-2 candidate-card-container">
        {children}
    </div>
  )
}

export default CandidateCardContainer