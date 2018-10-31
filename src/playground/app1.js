//JSX -JavaScript XML
// const user = {
//     name: 'Paul',
//     age: 26,
//     location: 'Nigeria'
// };

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>; 
//     }
// }

// let template = (
// <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>} 
//     {getLocation(user.location)}
// </div>
// ); 

//COUNTER

// var appRoot = document.getElementById('app');
// let count = 0;

// let render = () => {
//     const template = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick = {addOne}>+1</button>
//             <button onClick = {removeOne}>-1</button>
//             <button onClick = {reset}>Reset</button>
//         </div>
//     );
    
//     ReactDOM.render(template, appRoot)
// }

// const addOne = () => {
//     count++;
//     render()
// }
// const removeOne = () => {
//     count--;
//     render()
// }
// const reset = () => {
//     count = 0;
//     render()
// }

// render();


// // // FINISHED BACK BONE FOR CHOICE APP WITHOUT CLASSES

// console.log('App.js is ready!');

// const appRoot = document.getElementById('app');

// let app = {
//    title: 'Choice App',
//    subtitle: 'Let a machine dictate how you live!',
//    options: ['One', 'Two']
// };

// const render = () => {
//    const template2 = (
//       <div>
//          <h1>{app.title}</h1>
    
//          {app.subtitle && <p>{app.title}</p>}
         
//          <p>{app.options.length > 0 ?'Here are you options' : 'No options'}</p>

//          <button disabled = {app.options.length === 0} onClick = {makeDecision}>What should I do</button>

//          <button onClick = {removeAll}>Remove All</button>

//          <ol>
//             {app.options.map(curr => <li key ={app.options.indexOf(curr)}>{curr}</li>)}
//          </ol> 

//          <form onSubmit = {onFormSubmit}>
//                <input type="text" name="option"/>
//                <button>Add Option</button>
//          </form>
//       </div>
//    );
    
//    ReactDOM.render(template2, appRoot)
    
// }

// const makeDecision = () => {
//    const randomChoice = Math.floor(Math.random() * app.options.length);
//    alert(app.options[randomChoice]);
// }

// const removeAll = () => {
//    app.options = [];
//    // app.options.splice(0, app.options.length);   
//    render();
// }
// const onFormSubmit = (e) => {
//    e.preventDefault();

//    const option = e.target.elements.option.value;

//    if (option) {
//       app.options.push(option );
//       e.target.elements.option.value = '';
//       console.log(app.options);
//       render();
//    }
// }

// render();