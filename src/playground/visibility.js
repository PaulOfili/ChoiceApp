const appRoot = document.getElementById('app');
let detailsVisibilty = false;

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
            {detailsVisibilty ? 'Hide Details' : 'Show Details'}</button>
            {detailsVisibilty && <p>Hey. These are some details you can now see!</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

const toggleVisibility = (e) => {
    detailsVisibilty = !detailsVisibilty;
    // e.target.innerText =  (e.target.innerText === 'Show Details') ? 'Hide Details'  : 'Show Details';
    render();
}
render();