<template>
    <div class="item">
        <input type="checkbox"
               @change="updateCheck()"
               v-model="item.completed"
        />
        <span :class="[item.completed ? 'completed ' : 'itemText']"> {{ item.name }}</span>
    </div>
</template>

<script>

export default {
    name: "listItem",
    props: ['items'],
}
</script>

<style scoped>

</style>
