import { FaTimes } from 'react-icons/fa';
import { Card } from './shared/Card';

export const Item = ({ id, rating, text, handleDelete }) => {
  return (
    <Card reverse={false}>
      <div className='num-display'>{rating}</div>
      <button onClick={() => handleDelete(id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
};
