<template>
<AmountCard :title="title" :amount="total" :type="type"/>
</template>

<script>
    import AmountCard from "./AmountCard";
    export default {
        name: "ChamaCard",
        components: {AmountCard},
        Components: {
            AmountCard
        },
        data(){
            return {
                total:"0",
                title: 'Total Value',
                type:'chamas'
            }
        },
        mounted() {
            this.fetchTotalChama();
        },
        methods: {
            fetchTotalChama() {
                axios('https://beep2.cellulant.com:9001/assessment/retail/dataTotalValue.php', {
                    method: 'GET',
                }).then(resp => {
                    this.total = resp.data[0].totalValue;
                });
                // axios.get('https://beep2.cellulant.com:9001/assessment/retail/dataTotalValue.php',headers: {
                //     'Access-Control-Allow-Origin': '*',
                //         'Content-Type': 'application/json',
                // }).then((resp) => {
                //     this.total = resp.data.totalValue;
                // }).catch((err) => {
                //     console.log(err);
                // }).finally(() => {
                //
                // })
            }
        }
    }
</script>

<style scoped>

</style>