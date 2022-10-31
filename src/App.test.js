import { render, screen } from '@testing-library/react';
import App from './App';
import getGreetingText from './feature.js'

test('greets with "Good morning!" at 11:00', () => {
  expect(getGreetingText(11)).toBe('Good morning!');
});

test('greets with "Good afternoon!" at 12:00', () => {
    expect(getGreetingText(12)).toBe('Good afternoon!');
});

test('greets with "Good evening!" at 17:00', () => {
    expect(getGreetingText(17)).toBe('Good evening!');
});