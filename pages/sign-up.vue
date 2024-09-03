<script setup>
definePageMeta({
    middleware: 'guest'
})

const supabase = useSupabaseClient()

const state = reactive({
    email: '',
    password: ''
})

const signUp = async () => {
  const { error } = await supabase.auth.signUp({
    email: state.email,
    password: state.password,
  })
  if (error) alert(error)
}
</script>

<template>
    <form @submit.prevent="signUp">
        <input v-model="state.email" type="email" />
        <input v-model="state.password" type="password" />
        <button type="submit">Sign Up</button>
        <NuxtLink  to="/sign-in">Sign In</NuxtLink>
    </form>
</template>