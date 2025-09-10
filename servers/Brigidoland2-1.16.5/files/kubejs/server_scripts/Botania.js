
console.info('SABES QUE? (unterras your armor)')

onEvent('recipes', event => {
	event.shaped('botania:terrasteel_helmet', [
	  'BCB',  
	  'ADA',
	  ' A '
	], {
	  A: 'botania:terrasteel_ingot',
	  B: 'botania:livingwood_twig',
      C: 'botania:rune_spring',
      D: 'projecte:dm_helmet',
	})
})

onEvent('recipes', event => {
	event.shaped('botania:terrasteel_chestplate', [
	  'BCB',  
	  'ADA',
	  ' A '
	], {
	  A: 'botania:terrasteel_ingot',
	  B: 'botania:livingwood_twig',
      C: 'botania:rune_summer',
      D: 'projecte:dm_chestplate',
	})
})

onEvent('recipes', event => {
	event.shaped('botania:terrasteel_leggings', [
	  'BCB',  
	  'ADA',
	  ' A '
	], {
	  A: 'botania:terrasteel_ingot',
	  B: 'botania:livingwood_twig',
      C: 'botania:rune_autumn',
      D: 'projecte:dm_leggings',
	})
})

onEvent('recipes', event => {
	event.shaped('botania:terrasteel_boots', [
	  'BCB',  
	  'ADA',
	  ' A '
	], {
	  A: 'botania:terrasteel_ingot',
	  B: 'botania:livingwood_twig',
      C: 'botania:rune_winter',
      D: 'projecte:dm_boots',
	})
})