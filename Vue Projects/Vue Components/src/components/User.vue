<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name!</button>
        <p>Name is {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <appUserDetail
                    :myName="name"
                    @nameWasReset="name = $event"
                    :resetFn="resetName"
                    :userAge="age"></appUserDetail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <appUserEdit
                    :userAge="age"
                    @ageWasEdited="age = $event"></appUserEdit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Kyle',
                age: 27
            };
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeName() {
                this.name = 'Lauren';
            },
            resetName() {
               this.name = 'Kyle'; 
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
