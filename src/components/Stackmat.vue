<script setup lang="ts">
import { ref } from 'vue'
import { Stackmat } from 'stackmat'
import type { Packet } from 'stackmat'

let stackmat = new Stackmat()

let started = ref(false)
let connected = ref(false)
let lastPacket = ref<Packet | undefined>(undefined)

stackmat.on('packetReceived', (packet: any) => {
    lastPacket.value = packet
})

stackmat.on('timerConnected', () => {
    connected.value = true
})

stackmat.on('timerDisconnected', () => {
    connected.value = false
})

const toggle = () => {
    if (connected.value) {
        stackmat.stop()
        started.value = false
    } else {
        stackmat.start()
        started.value = true
    }
}
</script>

<template>
    <div>
        <h1>Timer {{ connected ? 'Connected' : 'Disconnected' }}</h1>
        <h2 v-if="lastPacket">Last packet: {{ lastPacket.status }}</h2>
        <h2 v-if="lastPacket">Time: {{ lastPacket.timeAsString }}</h2>

        <button @click="toggle">{{ started ? 'Stop' : 'Start' }}</button>
    </div>
</template>
