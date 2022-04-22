import PropTypes from 'prop-types';

export const ItemStats = ({ items }) => {
  // calculate ratings average
  let average =
    items.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / items.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='item-stats'>
      <h4>{items.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

ItemStats.propTypes = {
  items: PropTypes.array.isRequired,
};
