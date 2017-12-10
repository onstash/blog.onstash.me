import React from 'react';

import Helmet from 'react-helmet';

const Metadata = ({ description, title }) => (
    <Helmet>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://footyfollowr-api.onstash.me/assets/images/blog-og-image.png" />
        <link rel="shortcut icon" href="http://footyfollowr-api.onstash.me/assets/images/blog-favicon.ico" type="image/x-icon" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:site" content="@on_stash" />
        <meta property="twitter:creator" content="@on_stash" />
        <title>{title}</title>
    </Helmet>
);

export default Metadata;