import React from 'react'
import { render } from '@testing-library/react'

const title = require('../src/pages/index');

test('Displays correct title', () => {
    const { getByTestId } = render(<title.Head />)

    expect(getByTestId('test-title')).toHaveTextContent("Home Page | Mitch's Gatsby Site");
})