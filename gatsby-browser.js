const React = require('react');
const { GlobalStyles, MDXStyles } = require('./src/utils');
const { Footer, Navbar } = require('./src/components');
const { ScrollToTop } = require('./src/elements')

// eslint-disable-next-line react/prop-types
exports.wrapRootElement = ({element}) => (
  <>
    <GlobalStyles />
    <Navbar />
    <MDXStyles>
      {element}
    </MDXStyles>
    <ScrollToTop />
    <Footer />
  </>
)
