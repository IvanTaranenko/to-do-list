<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "my-button"
}
</script>

<style >

.btn {
    background-color: #c69963;
    color: #fff;
    border-radius: 0;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1.8rem 3rem;
    transition: all .2s;
    cursor: pointer;
    margin-top:3rem;


}

</style>
