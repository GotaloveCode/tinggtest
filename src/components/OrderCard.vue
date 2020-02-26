<template>
<AmountCard :title="title" :amount="total" :type="type" gradient="redyellow"/>
</template>

<script>
    import AmountCard from "./AmountCard";
    export default {
        name: "OrderCard",
        components: {AmountCard},
        Components: {
            AmountCard
        },
        data(){
            return {
                total:"0",
                title: 'No of Orders',
                type:'New Requests'
            }
        },
        mounted() {
            this.fetchOrders();
        },
        methods: {
            fetchOrders() {
                axios('https://beep2.cellulant.com:9001/assessment/retail/dataTotalOrders.php', {
                    method: 'GET'
                }).then(resp => {
                    this.total = resp.data[0].totalOrders;
                });
            }
        }
    }
</script>

<style scoped>

</style>