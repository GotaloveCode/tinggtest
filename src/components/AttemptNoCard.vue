<template>
<AmountCard :title="title" :amount="total" :type="type"/>
</template>

<script>
    import AmountCard from "./AmountCard";
    export default {
        name: "AttemptNoCard",
        components: {AmountCard},
        Components: {
            AmountCard
        },
        data(){
            return {
                total:"0",
                title: 'Total Orders Last 30 Dys',
                type:'Active Orders'
            }
        },
        mounted() {
            this.fetchAttempts();
        },
        methods: {
            fetchAttempts() {
                axios('https://beep2.cellulant.com:9001/assessment/retail/dataTotalOrdersLast30Days.php', {
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