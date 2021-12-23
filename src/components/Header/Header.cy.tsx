import { useState } from 'react';
import { mount } from '@cypress/react';
//Components
import Header from './Header';
const [isOpen, setIsOpen] = useState(false);

describe('renders header', () => {
  it('Correct Dashboard title', () => {
    mount(<Header setIsOpen={setIsOpen} />);
  });
});
