import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from './App';
import appReducer from './reducer';

const store = createStore(appReducer);

describe('App', () => {
  test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
