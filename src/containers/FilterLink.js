import {connect} from 'react-redux';
import Link from '../components/link'
import {setVisibilityFilter} from "../actions/tasks";


const mapStateToProps = (state, ownProps) => {
    return {
        active: state.visibilityFilter === ownProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick : id => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink;