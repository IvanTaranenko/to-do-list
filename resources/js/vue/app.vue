<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">
                Todo List
            </h2>
            <add-item-form/>


        </div>
        <list-view :items="items"/>
    </div>
</template>

<script>
import addItemForm from "../components/addItemForm";
import listView from "../components/listView";


export default {
    name: "app.vue",
    components: {
        addItemForm,
        listView,

    },
    data:function (){
        return {
            items : []
        }
    },
    methods : {
        getList(){
            axios.get('api/items')
            .then(response =>{
                this.item = response.data
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },
    created(){
        this.getList();
    }
}
</script>

<style scoped>
.todoListContainer {
    width: 350px;
    margin: auto;
}

.heading {
    background: #e6e6e6;
    padding: 10px;
}

#title {
    text-align: center;
}
</style>
