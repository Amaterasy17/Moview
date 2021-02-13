export const urls = {
    Root: '/',
    Videos: '/videos',
    Video: {
        mask: '/video/:id',
        creator: () => '/video/${id}',
    },
    Search: '/search/:q',
}

