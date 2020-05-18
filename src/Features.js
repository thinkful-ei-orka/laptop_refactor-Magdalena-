import React from 'react';
import Feature from './Feature';





function Features(props) {
const featureHash = props.feature + '-' + props.idx;
const options = props.features[props.feature].map(item => {
    return <Feature item={item} selected={props.selected} feature={props.feature} updateFeature={props.updateFeature}/>
});

return (
  <fieldset className="feature" key={featureHash}>
    <legend className="feature__name">
      <h3>{props.feature}</h3>
    </legend>
    {options}
  </fieldset>
);
}

export default Features;