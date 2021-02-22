export const urls = {
    Root: '/',
    Videos: '/',
    Video: {
        mask: '/video/:id',
        creator: (id:string) => `/video/${id}`,
    },
    Searching: {
        search: '/search/:q',
        create: (q:string) => `/search/${q}`,
    }
}

