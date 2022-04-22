import { useState } from 'react';
import { Card } from './shared/Card';

export const ItemForm = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate the item?</h2>
        {/* @todo - ratings select */}
        <div className='input-group'>
          <input
            type='text'
            value={text}
            placeholder='Write a review'
            onChange={handleTextChange}
          />
          <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  );
};
