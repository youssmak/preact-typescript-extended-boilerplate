import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/preact';
import { App } from './app';

describe('App tests', () => {
  test('Should show ready', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/ready/i)).toBeDefined();
    });
  });
});
