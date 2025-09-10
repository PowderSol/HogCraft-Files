
console.info('Balanceando la armadura de Mekanism...')

onEvent('recipes', event => {
	event.shaped('mekanism:mekasuit_helmet', [
	  'ABA',  
	  'AEA',
	  'CDC'
	], {
	  A: 'mekanism:hdpe_sheet',
	  B: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:pellet_polonium',
    D: 'mekanism:ultimate_induction_cell',
    E: 'projecte:gem_helmet'
	})
})

onEvent('recipes', event => {
	event.shaped('mekanism:mekasuit_bodyarmor', [
	  'ABA',  
	  'AEA',
	  'CDC'
	], {
	  A: 'mekanism:hdpe_sheet',
	  B: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:pellet_polonium',
    D: 'mekanism:ultimate_induction_cell',
    E: 'projecte:gem_chestplate'
	})
})

onEvent('recipes', event => {
	event.shaped('mekanism:mekasuit_pants', [
	  'ABA',  
	  'AEA',
	  'CDC'
	], {
	  A: 'mekanism:hdpe_sheet',
	  B: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:pellet_polonium',
    D: 'mekanism:ultimate_induction_cell',
    E: 'projecte:gem_leggings'
	})
})

onEvent('recipes', event => {
	event.shaped('mekanism:mekasuit_boots', [
	  'ABA',  
	  'AEA',
	  'CDC'
	], {
	  A: 'mekanism:hdpe_sheet',
	  B: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:pellet_polonium',
    D: 'mekanism:ultimate_induction_cell',
    E: 'projecte:gem_boots'
	})
})

onEvent('recipes', event => {
	event.shaped('mekanism:mekasuit_boots', [
	  'ABA',  
	  'AEA',
	  'CDC'
	], {
	  A: 'mekanism:hdpe_sheet',
	  B: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:pellet_polonium',
    D: 'mekanism:ultimate_induction_cell',
    E: 'projecte:gem_boots'
	})
})

onEvent('recipes', event => {
	event.shaped('mekanism:digital_miner', [
	  'AFA',  
	  'BEB',
	  'CDC'
	], {
	  A: 'mekanism:alloy_atomic',
	  B: 'mekanism:logistical_sorter',
      C: 'mekanism:teleportation_core',
      D: 'mysticalagradditions:dragon_egg_crux',
      E: 'mekanism:robit',
	  F: 'mekanism:basic_control_circuit'
	})
})