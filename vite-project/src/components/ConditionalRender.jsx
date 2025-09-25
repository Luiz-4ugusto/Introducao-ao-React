import React from 'react'

const ConditionalRender = () => {
    const x= 4;
  return (
    <div>
        <h2>será exibido?</h2>
        {x >=4 && <p>se x true sim</p>}

        {x === 4 ?(
            <div>
                <p>valor de x igual a 4</p>
            </div>
        ) : (
            <div>
                <p>valor de x diferente de 4</p>
            </div>
        )}

    </div>
    
  )
}

export default ConditionalRender