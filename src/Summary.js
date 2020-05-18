import React from 'react';
import SummaryItem from './SummaryItem';




function Summary(props) {
const summary = Object.keys(props.selected).map((feature, idx) => {
  return <SummaryItem feature={feature} idx={idx} selected={props.selected}/>
});
  return (<>{summary}</>)

}

export default Summary;