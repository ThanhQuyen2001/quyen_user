export default async function ({ route, redirect, store }) {
    let slug = store.state.common.currentWard.slug
    // !slug store && !admin page
    if (!slug && route.path !== '/home' && route.path !== "/") {
        if (route.path.includes('admin')) {
            store.commit('common/UpdateCurrentWard', {
                ward: 0,
                slug: 'admin'
            })
        }
        else if (route.path.indexOf('/', 1) > 0) {
            let slugInPath = route.path.slice(1, route.path.indexOf('/', 1))
            await fetch(process.env.VUE_APP_HOST_API + `/api/web/wards-slug/${slugInPath}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.code === 200) {
                        store.commit('common/UpdateCurrentWard', {
                            ward: data.data.entry.id,
                            slug: data.data.entry.slug
                        })
                    }
                    else {
                        return redirect('/admin/home')
                    }
                });
        }
    }
    if ((route.path === '/home' || route.path === "/") && (slug === 'admin' || !slug)) {
        return redirect('/admin/home')
    }
    else if (route.path.includes(slug)) {
        return null
    }
    else {
        let path = '/' + slug + route.path
        return redirect({ path })
    }
}