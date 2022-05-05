import { useState } from 'react';

function SmartCounter() {
    // retorna um vetor
    // 1. variavel stateful (que guarda o estado do elemento)
    // 2. função amarrada a essa variavel que atualiza esse valor
    const [quantity, upQuantity] = useState(1);

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={() => upQuantity(quantity + 1)}>Aumentar</button>
        </>
    )
}

export default SmartCounter;