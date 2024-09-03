<script setup>
const supabase = useSupabaseClient()
const router = useRouter()

const {error} = await supabase.auth.signOut()
console.log(error)
router.push('/sign-in')
</script>

<template>
    <div>
    </div>
</template>