// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'


// ReactDOM.createRoot(document.getElementById('root')).render(

//     <App />
 
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './store'; // импортируйте ваш store

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <Provider store={store}>
                    <App />
            </Provider>
    </React.StrictMode>

)
