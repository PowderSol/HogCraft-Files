
console.info('Insertando lentamente el brigidium al modpack...')

onEvent('recipes', event => {
    event.shaped('kubejs:dark_matter_condensed', [
      'ASA',
      'SBS',
      'ASA'
    ], {
      S: 'projecte:dark_matter_block',
      A: 'kubejs:dark_matter_fluid_bucket',
      B: 'kubejs:nuclear_stabilizer'
    })
  })

  onEvent('recipes', event => {
    event.shaped('kubejs:compressed_xp_crystal', [
      ' A ',
      'AAA',
      ' A '
    ], {
      A: 'thermal:xp_crystal'
    })
  })


  onEvent('recipes', event => {
    event.shaped('kubejs:nuclear_stabilizer', [
      'ASA',
      'SBS',
      'ASA'
    ], {
      S: 'projecte:dm_pedestal',
      A: 'mekanism:steel_casing',
      B: 'mekanism:qio_drive_supermassive'
    })
  })

onEvent('recipes', event => {
    event.recipes.mekanismCombining('kubejs:dark_matter_fluid_bucket', 'projecte:dark_matter_block', 'kubejs:polonium_liquid_bucket')
  })

onEvent('recipes', event => {
    event.recipes.thermal.crucible(Fluid.of('kubejs:polonium_liquid', 100), 'mekanism:pellet_polonium')
  })

  onEvent('recipes', event => {
    event.recipes.extendedcrafting.shaped_table(Item.of('kubejs:brigidium'), [
       "  AAA  ",
       " ABCBA ",
       "ABBABBA",
       "ACADACA",
       "ABBABBA",
       " ABCBA ",
       "  AAA  "
     ],{
       A: {
         item: "kubejs:dark_matter_condensed"
       },
       B: {
         item: "extendedcrafting:the_ultimate_ingot"
       },
       C: {
         item: "kubejs:nuclear_stabilizer"
       },
       D: {
         item: "extendedcrafting:ultimate_singularity"
     }
 })
 })

 onEvent('recipes', event => {
  event.shaped('mysticalagriculture:infusion_crystal', [
    'ASA',
    'SBS',
    'ASA'
  ], {
    S: 'mysticalagriculture:prosperity_shard',
    A: 'extendedcrafting:crystaltine_ingot',
    B: 'iceandfire:lightning_dragon_blood'
  })
})

onEvent('recipes', event => {
	event.shaped('ironfurnaces:rainbow_coal', [
	  'SSS',
	  'SAS',
	  'SSS'
	], {
	  S: 'ironfurnaces:rainbow_plating',
	  A: 'projecte:aeternalis_fuel_block',
	})
})

onEvent('recipes', event => {
  event.shaped('ftb-power-pots:power_pot_mk1', [
    'BAB',  
    'ACA',
    'ADA'
  ], {
    A: 'minecraft:terracotta',
    B: 'minecraft:ender_pearl',
    C: '#botanypots:hopper_botany_pots',
    D: 'minecraft:emerald_block'
  })
})

onEvent('recipes', event => {
  event.shaped('ftb-power-pots:power_pot_mk2', [
    'BAB',  
    'ACA',
    'ADA'
  ], {
    A: 'minecraft:terracotta',
    B: Item.of('gateways:gate_pearl', '{gateway:"gateways:enderman_gate_small"}'),
    C: 'ftb-power-pots:power_pot_mk1',
    D: 'minecraft:gold_block'
  })
})

onEvent('recipes', event => {
  event.shaped('ftb-power-pots:power_pot_mk3', [
    'BAB',  
    'ACA',
    'ADA'
  ], {
    A: 'minecraft:terracotta',
    B: Item.of('gateways:gate_pearl', '{gateway:"gateways:enderman_gate"}'),
    C: 'ftb-power-pots:power_pot_mk2',
    D: 'minecraft:diamond_block'
  })
})

onEvent('recipes', event => {
  event.shaped('ftb-power-pots:power_pot_mk4', [
    'BAB',  
    'ACA',
    'ADA'
  ], {
    A: 'minecraft:terracotta',
    B: Item.of('gateways:gate_pearl', '{gateway:"gateways:enderman_gate_large"}'),
    C: 'ftb-power-pots:power_pot_mk3',
    D: 'minecraft:diamond_block'
  })})
  
onEvent('recipes', event => {
      event.shaped('mob_grinding_utils:saw', [
        'ACA',  
        'BDB',
        'CEC'
      ], {
        A: 'minecraft:iron_sword',
        B: 'mob_grinding_utils:spikes',
        C: 'minecraft:diamond',
        D: 'mysticalagriculture:supremium_block',
        E: 'minecraft:iron_block'
      })
    })

    onEvent('recipes', event => {
      event.shaped('mysticalagriculture:supremium_helmet', [
        ' A ',
        'BCB',
        ' A '
      ], {
        A: 'mysticalagriculture:supremium_gemstone',
        B: 'mysticalagriculture:supremium_ingot',
        C: 'projecte:dm_helmet'
      })
    })

onEvent('recipes', event => {
      event.shaped('mysticalagriculture:supremium_chestplate', [
        ' A ',
        'BCB',
        ' A '
      ], {
        A: 'mysticalagriculture:supremium_gemstone',
        B: 'mysticalagriculture:supremium_ingot',
        C: 'projecte:dm_chestplate'
      })
    })

onEvent('recipes', event => {
      event.shaped('mysticalagriculture:supremium_leggings', [
        ' A ',
        'BCB',
        ' A '
      ], {
        A: 'mysticalagriculture:supremium_gemstone',
        B: 'mysticalagriculture:supremium_ingot',
        C: 'projecte:dm_leggings'
      })
    })

onEvent('recipes', event => {
      event.shaped('mysticalagriculture:supremium_boots', [
        ' A ',
        'BCB',
        ' A '
      ], {
        A: 'mysticalagriculture:supremium_gemstone',
        B: 'mysticalagriculture:supremium_ingot',
        C: 'projecte:dm_boots'
      })
    })
onEvent('recipes', event => {
  event.smithing('mysticalagriculture:flight_augment', 'mysticalagriculture:unattuned_augment', 'botania:flight_tiara')
})


onEvent('recipes', event => {
  event.custom({
    type:'extendedcrafting:shaped_ender_crafter',
    craftingTime: 1600,
    pattern:[
      'AAA',
      'BCB',
      'DCD'
    ], 
    key: {
      A: {
        item:'projecte:interdiction_torch'
      },
      B: {
        item:'projecte:red_matter'
      },
      C: {
        item:'minecraft:oak_log'
      },
      D: {
        item:'compressium:gold_3'
      }
    },
    result: {
      item:'torchmaster:megatorch'
    }
})
})

onEvent('recipes', event => {
  event.shaped('tiab:timeinabottle', [
    'AAA',  
    'BCB',
    'DED'
  ], {
    A: 'tconstruct:rose_gold_ingot',
    B: 'projecte:dark_matter',
    C: 'minecraft:clock',
    D: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'),
    E: 'botania:flask'
  })
})

onEvent('recipes', event => {
	event.shapeless('tombstone:dust_of_vanishing', ['tombstone:grave_dust', 'avaritia:cosmic_meatballs'])
   })

onEvent('recipes', event => {
    event.shaped('securitycraft:mine', [
      'ACA',
      'CBC',
      'ACA'
    ], {
      C: 'minecraft:tnt',
      A: 'thermal:gunpowder_block',
      B: 'thermal:redstone_tnt'
    })
  })

  onEvent('recipes', event => {
    event.shaped('sons_of_sins:rotten_apple', [
      'CAC',
      'ABA',
      'CAC'
    ], {
      A: 'evilcraft:ender_tear',
      B: 'mysticalagradditions:inferium_apple',
      C: 'minecraft:ghast_tear'
    })
  })
