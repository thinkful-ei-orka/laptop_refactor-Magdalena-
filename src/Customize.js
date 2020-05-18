import React from 'react';
import Features from './Features';


function Customize(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        return <Features features={props.features} feature={feature} idx={idx} selected={props.selected} updateFeature={props.updateFeature}/>
      });

    return (<>{features}</>)
}

export default Customize;