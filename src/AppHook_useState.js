import { useState } from 'react'

// --------------- Ex1 (variable)
// init state = 1 and assign into counter
// function App() {
  
//   const [ counter, setCounter ] = useState(1);

//   const handleIncrement = () => {
//     setCounter(counter + 1);
//   }

//   return (
//     <div className="App" style={ { padding: '20px' } }>
//       <h1> { counter } </h1>
//       <button onClick={ handleIncrement }> Increment </button> 
//     </div>
//   );
// }

// --------------- Ex2 (Array)
// const prices = [100, 200, 300, 400, 500];
// function App() {
  
//   const [ counter, setCounter ] = useState(() => {
//     const total = prices.reduce((total, cur) => {return total + cur} )
//     return total;
//   } );

//   const handleIncrement = () => {
//     setCounter(counter + 1);
//   }

//   return (
//     <div className="App" style={ { padding: '20px' } }>
//       <h1> { counter } </h1>
//       <button onClick={ handleIncrement }> Increment </button> 
//     </div>
//   );
// }

// --------------- Ex3 (Object)
// const student = {
//   name: 'Zidane',
//   age: 18,
//   website: 'https://learn-tech-tips.blogspot.com'
// }
// function App() {
  
//   const [ info, setInfo ] = useState(student)

//   console.log('Run');
//   const handleUpdate = () => (
//     setInfo( {
//       ...student,
//       bio: 'I love code'
//     })
//    )

//   return (
//     <div className="App" style={ { padding: '20px' } }>
//       <h1> { JSON.stringify(info) } </h1>
//       <button onClick={ handleUpdate }> Update Name </button> 
//     </div>
//   );
// }

// --------------- Ex4 (Random Gift)
function App() {

  const [ gift, setGift ] = useState(); 

  const gifts = [
      'Iphone 5s',
      'Xiaomi',
      'Samsung'
  ]

  const randomGift = () => {
      console.log(setGift( gifts[Math.floor(Math.random() * gifts.length)] ));
  }

  return (
      <div className="App" style={ { padding: '20px' } }>
      <h1> { gift || "Nothing" } </h1>
      <button onClick={ randomGift }> Random gift </button> 
      </div>
  );
}


export default App;
