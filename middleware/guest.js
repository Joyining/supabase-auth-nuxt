export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser();
    const router = useRouter();
    
    if (user.value) {
        return router.push('/');
    }
    return null; // pass
})