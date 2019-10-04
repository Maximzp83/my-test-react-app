import React from 'react';
// import { connect } from "react-redux";
import { VISIBILITY_FILTERS } from '../../redux/constants'
import FilterButton from "./FilterButton";

/*const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  // console.log(todos)
  return { todos };
};*/

const FilterBar = () => (
  <div>
  	<FilterButton filter={VISIBILITY_FILTERS.ALL}>All</FilterButton>
  	<FilterButton filter={VISIBILITY_FILTERS.COMPLETED}>COMPLETED</FilterButton>
  	<FilterButton filter={VISIBILITY_FILTERS.INCOMPLETE}>INCOMPLETE</FilterButton>
  </div>
);


export default FilterBar;
