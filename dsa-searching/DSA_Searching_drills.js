const bst = require('./BST');

function main() {
    const ussEnterprise = new bst()

    let officers = [
        { key: 5, name: 'capt. Picard' },
        { key: 3, name: 'Cmdr. Riker' },
        { key: 2, name: 'Lt. Cmdr. Worf' },
        { key: 4, name: 'Lt. Cmdr. LaForge' },
        { key: 1, name: 'Lt. sec-officer' },
        { key: 6, name: 'Cmdr. Data' },
        { key: 8, name: 'Lt. Cmdr. Crusher' },
        { key: 7, name: 'Lt. Selar' },
    ]

    officers.forEach(officer => {
        ussEnterprise.insert(officer.key, officer.name)
    })

    console.log(ussEnterprise.orderOfCommand(ussEnterprise))
}

main();