import React from 'react';
import Aux from '../../hoc/Aux'
import './Layout.css'

const layout = ( props ) =>(
    <Aux>
    <div>
    <div>toolbar,sidedrawer</div>
    <main className="content">
        {props.children}
    </main>
    </div>
    </Aux>
);

export default layout;