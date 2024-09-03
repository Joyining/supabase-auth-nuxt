<script setup>
const user = useSupabaseUser();
console.log(user.value);
</script>

<template>
    <div>Home</div>
    <NuxtLink to="/sign-out">
        Sign Out
    </NuxtLink>
</template>