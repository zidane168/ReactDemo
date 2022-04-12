import { useState } from 'react'

// Two way binding for textbox
// function App() {

//     const [ name, setName ] = useState('');     // should init '' for remove bug control change from undefine to exist value
//     const [ email, setEmail ] = useState('');

//     const updateName = (event) => {
//         setName(event.target.value);
//     }

//     console.log(name)
//     const updateEmail = (event) => {
//         setEmail(event.target.value);
//     }

//     const handleSubmit = () => {
//         console.log({
//             name, 
//             email
//         })
//     }

//     return (
//         <div className="App" style={ { padding: '20px' } }>
//             <input 
//                 value = { name }    // two way binding
//                 onChange = { (e) => updateName(e) } 
                
//             />

//             <input 
//                 value = { email }   // two way binding
//                 onChange = { (e) => updateEmail(e) } 
                
//             />

//             <button onClick = { handleSubmit } > Submit </button>

//         </div>
//     );
// }

// ----------------------------------------------------------------------------------------------------------------
// Two way binding for radiobox
// function App() {

//     const games = [
//         {id: 1, name: 'Conqueror\'s Blade'}, 
//         {id: 2, name: 'PUBG'},
//         {id: 3, name: 'Warface'},
//     ];
//     const handleSubmit = () => {
//         console.log({
//             id: checked
//         })
//     }

//     const [ checked, setChecked ] = useState(1)
//     const checkChange = (id) => {
//         setChecked(id)
//     }

//     return (
//         <div className="App" style={ { padding: '20px' } }>

//             {  
//                games.map(game => (
//                    <div key={ game.id }>
//                        <input 
//                             type = 'radio' 
//                             checked = { checked === game.id }
//                             onChange = { () => checkChange(game.id)  } 
//                         /> { game.name } 
//                    </div>
//                ))

//             } 
//             <button onClick = { handleSubmit } > Submit </button>

//         </div>
//     );
// }

// ----------------------------------------------------------------------------------------------------------------
// Two way binding for checkbox
function App() {

    const games = [
        {id: 1, name: 'Conqueror\'s Blade'}, 
        {id: 2, name: 'PUBG'},
        {id: 3, name: 'Warface'},
    ];
    const handleSubmit = () => {
        console.log({
            id: checked
        })
    }

    const [ checked, setChecked ] = useState( [] )

    // cach 1
    // const checkChange = (id) => {

    //     const isChecked = checked.includes(id);
    //     if (isChecked) {    // checked
    //         setChecked( checked.filter( g => g != id) ) 

    //     } else {
    //         setChecked( prev => [ ...prev, id] )    // nhet them id vao state truoc do
    //     }
        
    // }

    // cach 2
     const checkChange = (id) => {

        setChecked( prev => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter(g => g != id);
            } else {
                return [...prev, id];
            }
        });
    }
    console.log(checked);

    return (
        <div className="App" style={ { padding: '20px' } }>

            {  
               games.map(game => (
                   <div key={ game.id }>
                       <input 
                            type = 'checkbox' 
                            checked = { checked.includes(game.id) }
                            onChange = { () => checkChange(game.id)  } 
                        /> { game.name } 
                   </div>
               ))

            } 
            <button onClick = { handleSubmit } > Submit </button>

        </div>
    );
}
export default App;

