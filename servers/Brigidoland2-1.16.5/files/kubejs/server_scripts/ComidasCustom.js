
console.info('Poniendo comidas chilenas...')


onEvent('recipes', event => {
	event.shapeless('kubejs:pino', ['minecraft:cooked_beef', 'pamhc2crops:onionitem', '#farmersdelight:tools/knives']).damageIngredient(1).keepIngredient('#farmersdelight:tools/knives')
})

onEvent('recipes', event => {
	event.shapeless('kubejs:empanada_pino_cruda', ['kubejs:pino', 'farmersdelight:wheat_dough'])
})

onEvent('recipes', event => {
	event.shapeless('kubejs:empanada_cruda_queso', ['pamhc2foodcore:cheeseitem', 'farmersdelight:wheat_dough'])
})

onEvent('recipes', event => {
	event.shaped('kubejs:longaniza', [
	  ' A ',  
	  'A  ',
	  '   '
	], {
	  A: 'minecraft:cooked_porkchop'
	})
})

onEvent('recipes', event => {
	event.shaped('kubejs:anticucho', [
	  '   ',  
	  'BC ',
	  'AD '
	], {
	  A: 'minecraft:stick',
	  B: 'minecraft:cooked_porkchop',
	  C: 'kubejs:longaniza',
	  D: 'minecraft:cooked_beef'
	})
})


onEvent('recipes', event => {
	event.shaped('kubejs:Completo', [
	  'AD ',  
	  'EBC',
	  '   '
	], {
	  A: '#farmersdelight:tools/knives',
	  B: 'pamhc2foodextended:sausageitem',
	  C: 'pamhc2trees:avocadoitem',
	  D: 'minecraft:bread',
	  E: 'pamhc2foodcore:mayonaiseitem'
	}).damageIngredient(0).keepIngredient('#farmersdelight:tools/knives')
})

onEvent('recipes', event => {
	event.smelting('kubejs:empanada_queso', 'kubejs:empanada_cruda_queso')
})

onEvent('recipes', event => {
	event.smoking('kubejs:empanada_queso', 'kubejs:empanada_cruda_queso')
})

onEvent('recipes', event => {
	event.campfireCooking('kubejs:empanada_queso', 'kubejs:empanada_cruda_queso')
})

onEvent('recipes', event => {
	event.smelting('kubejs:empanada_pino', 'kubejs:empanada_pino_cruda')
})

onEvent('recipes', event => {
	event.smoking('kubejs:empanada_pino', 'kubejs:empanada_pino_cruda')
})

onEvent('recipes', event => {
	event.campfireCooking('kubejs:empanada_pino', 'kubejs:empanada_pino_cruda')
})