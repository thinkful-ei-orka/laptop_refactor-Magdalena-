import React from 'react';

import USCurrencyFormat from './helpers';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';


function Feature(props) {
const itemHash = slugify(JSON.stringify(props.item));
  return (
    <div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(props.feature)}
        checked={props.item.name === props.selected[props.feature].name}
        onChange={e => props.updateFeature(props.feature, props.item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
      </label>
    </div>
  );
}

export default Feature;
