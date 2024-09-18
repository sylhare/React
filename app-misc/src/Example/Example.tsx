import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Example = ({ onSubmit }): JSX.Element => {
  const [value, setValue] = useState('value-1');
  const [isVisible, setIsVisible] = useState(false);
  const asyncSubmit = () => {
    setTimeout(onSubmit, 1000);
    setIsVisible(true);
  }

  return (
    <div>
      <span title='ExampleTitle'></span>
      <h1 aria-label='heading-label'>Example</h1>
      <div data-testid='example-test-id'> hello </div>
      <div aria-label='example-label'> world </div>
      <img alt='nothing' />
      <div aria-label='custom' role='button'> Click Me! </div>
      <button aria-label='genuine'>No Me!</button>
      <input type='text' onChange={(e) => setValue(e.target.value)} id='input' value={value}/>
      <select defaultValue='O2'>
        <option value='O1'>Option 1</option>
        <option value='O2'>Option 2</option>
        <option value='O3'>Option 3</option>
      </select>
      <button aria-label='reactive' onClick={onSubmit}>Submit</button>
      <button aria-label='async' onClick={asyncSubmit}>Send</button>
      { isVisible && <div>Now you see me</div> }
    </div>
  );
}

const Component = (): JSX.Element => {
  return (
    <div>
      <span title='ExampleTitle'></span>
    </div>
  );
}

export default Example;

Example.propTypes = {
  onSubmit: PropTypes.func
};
