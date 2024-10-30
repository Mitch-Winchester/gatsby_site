import React from 'react'
import { render } from '@testing-library/react'
import { mockPageContext } from '../__mocks__/gatsby.js'

const component = require('../src/templates/article');

test('Displays article body content', () => {
    const { getByTestId } = render(<component.default pageContext={mockPageContext} />)

    expect(getByTestId('test-body')).toHaveTextContent("the");
})