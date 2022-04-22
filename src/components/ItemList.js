import PropTypes from 'prop-types';
import { Item } from './Item';

export const ItemList = ({ items, handleDelete }) => {
  if (!items || items.length === 0) {
    return <p>No Items Yet.</p>;
  }

  return (
    <div>
      {items.map((item) => {
        return <Item key={item.id} {...item} handleDelete={handleDelete} />;
      })}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
