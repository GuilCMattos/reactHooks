import React, {useState} from 'react'
import { useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(num) { 
    const n = parseInt(num)
    if(n < 0) return -1

    if(n === 0) return 1

    return calcFatorial(n -1 ) * n


}

const UseEffect = (props) => {

    const [num, setNum] = useState(1)
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [parImpar, setParImpar] = useState('')

    useEffect(function() { 
        setFatorial(calcFatorial(num))
    }, [num])

    useEffect(function() {
        if(fatorial > 100000) { 
            document.title = 'Eita!!! '
        }
    }, [fatorial])

    useEffect(function() { 
        if(number % 2 === 0) { 
            return setParImpar('Par')
        } else { 
            return setParImpar('Impar')
        }
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">
                    {fatorial === -1 ? 'Não existe' : fatorial}
                    </span>
                </div>
                <input type="number" value={num} className="input" onChange={e => setNum(+e.target.value)} />
                </div>

                <SectionTitle title="Exercício #02"/>
                <div className="center">

                <div>
                    <span className="text">Status: </span>
                    <span className="text red">
                    {parImpar}
                    </span>
                </div>
                <input type="number" value={number} className="input" onChange={e => setNumber(+e.target.value)} />

                </div>

                
        </div>
    )
}

export default UseEffect
