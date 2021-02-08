import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import changeFilter from '../redux/actions/selectFilter';

const SelectFilter = ({ changeFilter }) => {
  const values = ['All', 'Painting', 'Metalwork', 'Sculpture', 'Ceramic', 'Textile', 'Miscellaneous'];

  const handleChange = e => {
    changeFilter(e.target.value);
  };

  return (
    <select data-testid="select" className="form-select" onChange={handleChange}>
      {values.map(val => <option key={val} value={val}>{val}</option>)}
    </select>
  );
};

SelectFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  changeFilter,
};

export default connect(null, mapDispatchToProps)(SelectFilter);
