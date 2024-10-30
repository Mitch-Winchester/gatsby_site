const { graphql, useStaticQuery } = require("gatsby")
const React = require("react")
const gatsby = jest.requireActual("gatsby")

module.exports = {
    ...gatsby,
    graphql: jest.fn(() => {return{"allDrupalNodeArtRec": {
        "nodeArticles": {
            "nodes": {
                "title": "temp",
                "author": {
                    "displayName": "temp"
                },
                "created": "temp",
                "mediaImage": {
                    "mediaImage": {
                        "url": "temp"
                    }
                },
                "body": {
                    "processed": "article body content"
                }
            }
        }
    }}}),
    mockPageContext: {
        article: {
            title: "temp",
            author: { displayName: "temp" },
            created: "temp",
            mediaImage: { mediaImage: { url: "temp" } },
            body: { processed: "the article body content" }
        }
    },
    Link: jest.fn().mockImplementation(
        // these props are invalid for an `a` tag
        ({
            activeClassName,
            activeStyle,
            getProps,
            innerRef,
            partiallyActive,
            ref,
            replace,
            to,
            ...rest
        }) =>
            React.createElement("a", {
                ...rest,
                href: to,
            })
    ),
    Slice: jest.fn().mockImplementation(
        ({ alias, ...rest }) =>
            React.createElement("div", {
                ...rest,
                "data-test-slice-alias": alias
            })
    ),
    useStaticQuery: (jest.fn()).mockReturnValueOnce({"site": {
        "siteMetadata": {
            "title": "Mitch's Gatsby Site"
        }
    }}),
}