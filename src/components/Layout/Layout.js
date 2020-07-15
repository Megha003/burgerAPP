import React from 'react';
import Aux from '../../hoc/Aux'

const layout = ( props ) =>(
    <Aux>
    <div>
    <div>toolbar,sidedrawer</div>
    <main>
        {props.children}
    </main>
    </div>
    </Aux>
);

export default layout;