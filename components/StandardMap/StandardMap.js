import React from 'react';
import Map from "react-usa-map";
import background from '../../images/back.jpg'
import styles from './standardMap.css'

class StandardMap extends React.Component{

    render(){
        return (<div className={styles.container}>
        <div className={styles.map}>
        <Map/>
        </div>
            <img src={background} style={{"width": "100%"}}/>
                    
                </div>);
    }


}

export default StandardMap;