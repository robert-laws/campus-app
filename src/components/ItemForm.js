import { useState } from 'react';
import { Card } from './shared/Card';
import { Button } from './shared/Button';

export const ItemForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate the item?</h2>
        {/* @todo - ratings select */}
        <div className='input-group'>
          <select value={rating} onChange={handleRatingChange}>
            {[...Array(11)].map((x, i) => (
              <option value={i} key={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className='input-group'>
          <input
            type='text'
            value={text}
            placeholder='Write a review'
            onChange={handleTextChange}
          />
          <Button type='submit'>Send</Button>
        </div>
      </form>
    </Card>
  );
};
