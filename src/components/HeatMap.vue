<template>
    <div class="card">
        <GmapMap ref="mymap" :center="startLocation" :zoom="14" style="width: 100%; height: 420px">
            <gmap-info-window :options="infoOptions" :position="infoPosition" :opened="infoOpened" @closeclick="infoOpened=false">
                <p>{{names}}</p>
                <p>Orders: {{tatalOrdersMade}}</p>
                <p>Spend: Kshs {{totalIndividualAmount}}</p>
            </gmap-info-window>
            <GmapMarker v-for="(item, key) in coordinates" :key="key" :position="getPosition(item)" :clickable="true" @click="toggleInfo(item, key)" />
        </GmapMap>
    </div>
</template>

<script>

    export default {
        name: "HeatMap",
        data(){
            return{
                startLocation: {
                    lat: -1.255388,
                    lng: 36.814326
                },
                coordinates: [],
                infoPosition: null,
                names: null,
                tatalOrdersMade:0,
                totalIndividualAmount:0,
                infoOpened: false,
                infoCurrentKey: null,
                infoOptions: {
                    pixelOffset: {
                        width: 0,
                        height: -35
                    }
                },
            }
        },
        methods: {
            getPosition: function(marker) {
                return {
                    lat: parseFloat(marker.latitude),
                    lng: parseFloat(marker.longitude)
                }
            },
            toggleInfo: function(marker, key) {
                this.infoPosition = this.getPosition(marker);
                this.names = marker.names;
                this.tatalOrdersMade = marker.tatalOrdersMade;
                this.totalIndividualAmount = marker.totalIndividualAmount;
                if (this.infoCurrentKey === key) {
                    this.infoOpened = !this.infoOpened
                } else {
                    this.infoOpened = true;
                    this.infoCurrentKey = key
                }
            },
            fetchMapdata() {
                axios('https://beep2.cellulant.com:9001/assessment/retail/dataCompiledMapData.php', {
                    method: 'GET'
                }).then(resp => {
                    this.coordinates = resp.data;
                    this.startLocation  = this.getPosition(this.coordinates[0])
                });
            }
        },
        mounted() {
            this.fetchMapdata();
        },
    }
</script>

<style scoped>

</style>