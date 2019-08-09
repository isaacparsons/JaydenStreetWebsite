import React from 'react';

export default React.createContext({
    url: null,
    title: null,
    author: null,
    isVisible: true,
    updateYoutubeFooter : () => {}
});
