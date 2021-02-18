export const urls = {
    Root: '/',
    Videos: '/videos',
    Video: {
        mask: '/video/:id',
        creator: (id:string) => `/video/${id}`,
    },
    Search: '/search/:q',
}

