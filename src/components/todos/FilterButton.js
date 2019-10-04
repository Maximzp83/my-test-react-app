import React from 'react';
import { connect } from "react-redux";
import { setVisibilityFilter } from '../../redux/actions/todosActions'


// import { getTodosByVisibilityFilter } from "../../redux/selectors";

/*const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  // console.log(todos)
  return { todos };
};*/

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
  // active: ownProps.filter 
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => dispatch(setVisibilityFilter(ownProps.filter))
})

const FilterButton = ({ active, children, setFilter }) => (
  	<button
  	  onClick={setFilter}
  	  disabled={active}
  	  style={{marginLeft: '4px'}}
  	>
  	    {children}
  	</button>
);


export default connect(
	  mapStateToProps,
	  mapDispatchToProps
	)(FilterButton)
// export default FilterButton
