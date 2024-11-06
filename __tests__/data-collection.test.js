import React from 'react'
import { render } from '@testing-library/react'
import { graphql } from '../__mocks__/gatsby.js'

const ArticlePage = require('../src/pages/articles');

test('Displays collection of articles', () => {
    const mockData = graphql();
    const { getByTestId } = render(<ArticlePage.default data={mockData}/>)

    expect(getByTestId('article-link')).toHaveTextContent("temp");
})