<template >
    <span v-if="alert" class="alert-inline" :class="'alert-inline--' + alert">
        {{title}}
    </span>
</template>

<script>
export default {
    props: ["alert", "title"],
};
</script>

<style lang="css">
</style>
