
console.info('Cagandole la vida al ProjectE...')

onEvent('recipes', event => { 
	event.recipes.extendedcrafting.shaped_table(Item.of('projecte:condenser_mk1'), [
    'ABA',
    'CDE',
    'AFA'
  ], {
    A: 'projecte:dark_matter_block',
    B: 'projecte:life_stone',
    C: 'projecte:red_matter',
    D: 'projecte:alchemical_chest',
    E: 'projecte:collector_mk3',
    F: 'projecte:klein_star_omega'
  })
})

onEvent('recipes', event => { 
  event.recipes.extendedcrafting.shaped_table(Item.of('projecte:transmutation_table'), [
    'CCDCC',
    'CEFGC',
    'DHIJD',
    'CKLMC',
    'CCDCC'
  ], {
    C: 'projecte:red_matter_block',
    D: 'projecte:dark_matter_block',
    E: 'sons_of_sins:wistiver_jaws',
    F: 'iceandfire:ice_dragon_heart',
    G: 'sons_of_sins:peaceful_bed',
    H: 'iceandfire:fire_dragon_heart',
    I: 'projectex:red_collector',
    J: 'iceandfire:lightning_dragon_heart',
    K: 'sons_of_sins:cursed_head',
    L: 'botania:gaia_ingot',
    M: 'sons_of_sins:butcher_carcass',
  })
})

onEvent('recipes', event => {
	event.shaped('projecte:medium_covalence_dust', [
	  'AB ',  
	  '   ',
	  '   '
	], {
	  A: 'projecte:low_covalence_dust',
	  B: 'minecraft:redstone',
	})
})

onEvent('recipes', event => {
	event.shaped('projecte:watch_of_flowing_time', [
	  'ABC',
	  'DEF',
	  'GHI'
	], {
	  A: Item.of('minecraft:splash_potion', '{Potion:"minecraft:swiftness"}'),
	  B: 'projecte:gem_helmet',
	  C: Item.of('minecraft:potion', '{Potion:"minecraft:strong_swiftness"}'),
	  D: 'projecte:gem_chestplate',
	  E: 'kubejs:nuclear_stabilizer',
	  F: 'projecte:gem_leggings',
	  G: Item.of('minecraft:potion', '{Potion:"minecraft:swiftness"}'),
	  H: 'projecte:gem_boots',
	  I: Item.of('minecraft:lingering_potion', '{Potion:"minecraft:swiftness"}')

	})
  })

  onEvent('recipes', event => {
	event.shaped('projecte:gem_helmet', [
	  'SAS',
	  'THT',
	  'SRS'
	], {
	  S: 'projecte:klein_star_omega',
	  A: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'),
	  H: 'projecte:rm_helmet',
	  T: 'minecraft:netherite_block',
	  R: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}')
	})
  })

  onEvent('recipes', event => {
	event.shaped('projecte:gem_chestplate', [
	  'SAS',
	  'THT',
	  'SRS'
	], {
	  S: 'projecte:klein_star_omega',
	  A: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'),
	  H: 'projecte:rm_chestplate',
	  T: 'minecraft:netherite_block',
	  R: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}')
	})
  })

  onEvent('recipes', event => {
	event.shaped('projecte:gem_leggings', [
	  'SAS',
	  'THT',
	  'SRS'
	], {
	  S: 'projecte:klein_star_omega',
	  A: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'),
	  H: 'projecte:rm_leggings',
	  T: 'minecraft:netherite_block',
	  R: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}')
	})
  })

  onEvent('recipes', event => {
	event.shaped( 'projecte:gem_boots', [
	  'SAS',
	  'THT',
	  'SRS'
	], {
	  S: 'projecte:klein_star_omega',
	  A: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'),
	  H: 'projecte:rm_boots',
	  T: 'minecraft:netherite_block',
	  R: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}')
	})
  })

  onEvent('recipes', event => {
    event.shaped('projecte:philosophers_stone', [
      'ASC',
      'SBS',
      'CSA'
    ], {
      S: 'undergarden:forgotten_nugget',
      A: 'twilightforest:fiery_blood',
      B: 'origins:orb_of_origin',
	  C: 'twilightforest:fiery_tears'
    })
  })

  onEvent('recipes', event => {
	event.shaped( 'projecte:red_matter', [
	  'AAA',
	  'BCB',
	  'AAA'
	], {
	  A: 'projecte:aeternalis_fuel',
	  B: 'projecte:dark_matter',
	  C: 'mysticalagradditions:insanium_essence'
	})
  })

  onEvent('recipes', event => { 
	event.shaped('projectex:stone_table', [
	  'AAA',
	  'ABA',
	  'AAA'
	], {
	  A: 'minecraft:cobblestone',
	  B: 'projecte:transmutation_table'
	})
  })

   onEvent('recipes', event => {
	event.shapeless('projecte:transmutation_table', ['projectex:stone_table'])
   })

   onEvent('recipes', event => { 
	event.shaped('projecte:tome', [
	  'ABA',
	  'BCB',
	  'ABA'
	], {
	  A: 'projectex:fading_matter',
	  B: 'projectex:final_star_shard',
	  C: 'projectex:knowledge_sharing_book'
	})
  })
  
  onEvent('recipes', event => { 
	event.shaped('projectex:basic_relay', [
	  'ABA',
	  'ACA',
	  'AAA'
	], {
	  A: 'compressium:obsidian_6',
	  B: 'botania:elf_glass',
	  C: 'ironfurnaces:rainbow_coal'
	})
  })

onEvent('recipes', event => { 
	event.shaped('projectex:basic_collector', [
	  'ABA',
	  'ACA',
	  'ADA'
	], {
	  A: 'mekanism:block_refined_glowstone',
	  B: 'botania:elf_glass',
	  C: 'compressium:diamond_2',
	  D: 'ironfurnaces:million_furnace'
	})
  })

onEvent('recipes', event => {
	event.shapeless('projecte:collector_mk1', ['projectex:basic_collector'])
   })

onEvent('recipes', event => {
	event.shapeless('projectex:basic_collector', ['projecte:collector_mk1'])
   })

onEvent('recipes', event => {
	event.shapeless('projecte:relay_mk1', ['projectex:basic_relay'])
   })

onEvent('recipes', event => {
	event.shapeless('projectex:basic_relay', ['projecte:relay_mk1'])
   })

onEvent('recipes', event => { 
	event.recipes.extendedcrafting.shaped_table(Item.of('projecte:swiftwolf_rending_gale'), [
	  'ABA',
	  'BCB',
	  'ABA'
	], {
	  A: 'compressium:obsidian_7',
	  B: 'iceandfire:hippogryph_talon',
	  C: 'projecte:iron_band',
	})
  })