<template>
    <div>
        <div class="title">
            <h3>New Quote</h3>
            <button @click="counter++">Increase!</button>
            <p>{{ counter }}</p>
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            counter: 0
        };
    },
    destroyed() {
        console.log('Destroyed!');
    },
    deactivated() {
        console.log('Deactivated!');
    },
    activated() {
        console.log('Activated!')
    }
}
</script>

<style scoped>

</style>