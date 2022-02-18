import Stackmat from 'stackmat'

let stackmat = new Stackmat()

stackmat.on('packetReceived', (packet) => {
    console.log(packet)
})

stackmat.on('timerConnected', () => {
    console.log('connected')
})

stackmat.on('timerDisconnected', () => {
    console.log('disconnected')
})

stackmat.start()