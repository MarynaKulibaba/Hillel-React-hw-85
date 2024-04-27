import React from 'react';
import Card from './Card';

class App extends React.Component {
    render(){
        return (
            <>
                <Card title={'hi'}/>
                <Card text={'how are you?'}/>
                <Card title={'hi'} text={'how are you?'}/>
            </>
        )
    }
}
export default App