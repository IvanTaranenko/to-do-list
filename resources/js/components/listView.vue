<template>
<div>
    <div v-for="(item,index) in items" :key="index">
        <list-item :item="item" class="item"/>
    </div>
</div>
</template>

<script>
import listItem from "../vue/listItem";
export default {
    name: "listView",
    props:['items'],
    components :{
        listItem
    }

}
</script>

<style scoped>
.item{
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
}
</style>
