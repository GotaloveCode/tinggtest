<template>
    <div class="card" :class="gradient">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <hr class="bg-hr"/>
            <h4>Ksh {{amount}}</h4>
            <span>{{type}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AmountCard",
        props: {
            title: {
                type: String,
                default: ""
            },
            amount: {
                type: String,
                default: "0"
            },
            type: {
                type: String,
                default: ""
            },
            gradient: {
                type: String,
                default:'grad',
                description: "Background gradient type"
            },
        },
    }
</script>

<style scoped>
.bg-hr{
    background-color: #fff;
    margin: 1px -20px;
}
.card-body {
    padding: 1.2rem;
}
</style>