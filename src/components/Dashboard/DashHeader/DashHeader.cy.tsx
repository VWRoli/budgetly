import { mount } from '@cypress/react';
import DashHeader from './DashHeader';

describe('renders Dashheader', () => {
  it('Correct Dashboard title', () => {
    cy.visit('/');
    cy.contains('Dashboard');
  });
});
