// priority: 0

console.info('ITEMS')

onEvent('item.registry', event => {
	event.create('brigidium').displayName('\u00A74Brig\u00A7ri\u00A78dium').tooltip('\u00A78BRIIIGIDOOOO (casi rompes el espacio tiempo)')
})

onEvent('item.registry', event => {
	event.create('dark_matter_condensed').displayName('\u00A75Materia Oscura condensada').tooltip('\u00A78Se acerca el fín de los tiempos.')
})	

onEvent('item.registry', event => {
	event.create('nuclear_stabilizer').displayName('\u00A76Estabilizador Nuclear')
})

onEvent('item.registry', event => {
	event.create('compressed_xp_crystal').displayName('\u00A7aCristal de Experiencia comprimido.').tooltip('\u00A76Es tan grande que no puede guardar tu experiencia...')
})

onEvent('item.registry', event => {
	event.create('anticucho').displayName('Anticucho').food(food => {
		food
    		.hunger(7)
    		.saturation(1)
			.fastToEat(true)
	})
})

onEvent('item.registry', event => {
	event.create('Completo').displayName('Completo').food(food => {
		food
    		.hunger(12)
    		.saturation(1)
	})
})

onEvent('item.registry', event => {
	event.create('empanada_cruda_queso').displayName('Empanada cruda de queso')
})

onEvent('item.registry', event => {
	event.create('empanada_queso').displayName('Empanada de queso').food(food => {
		food
    		.hunger(4)
    		.saturation(0.5)
			.fastToEat(true)
	})
})

onEvent('item.registry', event => {
	event.create('empanada_pino').displayName('Empanada de pino').food(food => {
		food
    		.hunger(5)
    		.saturation(1)
	})
})

onEvent('item.registry', event => {
	event.create('empanada_pino_cruda').displayName('Empanada de pino cruda')
})

onEvent('item.registry', event => {
	event.create('pebre').displayName('Pebre').food(food => {
		food
    		.hunger(1)
    		.saturation(2)
	})
})

onEvent('item.registry', event => {
	event.create('pino').displayName('Pino')
})

onEvent('item.registry', event => {
	event.create('longaniza').displayName('Longaniza').food(food => {
		food
    		.hunger(1)
    		.saturation(2)
	})
})