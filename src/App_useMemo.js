import { useState, useMemo, useRef } from 'react'

function App() {

    const [ name, setName ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ products, setProducts ] = useState([])

    const nameRef = useRef();

    const addLists = () => {
        setProducts([...products, {
            name,
            price: parseInt(price)
        }])

        setName('')                     // reset lai textbox  = null
        setPrice('')

        nameRef.current.focus();        // focus lai textbox
    }

    // const total = products.reduce( (total, product) => {
    //         return total + product.price
    //     }, 
    //     0
    // )


    const total = useMemo(() => { 
        const total = products.reduce( (total, product) => {
                console.log('calc')
                return total + product.price
            },   0)

        return total;
    }, [ products ]) // [giong useEffect] dependies [] => tinh toan 1 lan, dependices thay doi se tinh toan lai

    return (
        <>
            <div>
                <label> Name </label>
                <input 
                    ref = { nameRef }
                    value = { name }
                    onChange = { (e) => setName(e.target.value) }
                />
            </div>

            <div>
                <label> Price </label>
                <input 
                    value = { price }
                    onChange = { (e) => setPrice(e.target.value) }
                />
            </div>
            
            <button
                onClick = { addLists }
            >
                Add Lists           
            </button>

            <div>Total Price: { total } </div> 

            <ul>
                {
                    products.map( (product, index) => (
                        <li key={ index }> { product.name } - { product.price } </li>
                    ) )
                }
            </ul>


        </>
    )
}

export default App;
