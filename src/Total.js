import React from 'react';
import USCurrencyFormat from './helpers';

function Total(props) {
        const total = Object.keys(props.selected).reduce(
            (acc, curr) => acc + props.selected[curr].cost,
            0
          );
          return (<>{USCurrencyFormat.format(total)}</>)
    }


export default Total;