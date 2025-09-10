
console.info('Insertando brigidium lentamente en el orificio...')

onEvent('recipes', event => {
    event.recipes.extendedcrafting.shaped_table(Item.of('create:creative_motor'), [
          " AAAAAAA ",
          "AEBBBBBEA",
          "ABBBFBBBA",
          "ABBCCCBBA",
          "ABFCDCFBA",
          "ABBCCCBBA",
          "ABBBFBBBA",
          "AEBBBBBEA",
          " AAAAAAA "
      ], {
          A: {
              item: "projectex:white_relay"
            },
            B: {
              item: "refinedstorage:magenta_controller"
            },
            C: {
              item: "kubejs:dark_matter_condensed"
            },
            D: {
              item: "create:shaft"
            },
            E: {
              item: "kubejs:brigidium"
            },
            F: {
              item:"avaritia:infinity_catalyst"
            }
      })
    })
    
    onEvent('recipes', event => {
      event.recipes.extendedcrafting.shaped_table(Item.of('botania:creative_pool'), [
            "         ",
            "         ",
            " AAE EAA ",
            "ABBADABBA",
            "ABBCCCBBA",
            "ABBBFBBBA",
            " AAAAAAA ",
            "         ",
            "         "
        ], {
            A: {
                item: "botania:livingrock"
              },
              B: {
                item: "kubejs:dark_matter_condensed"
              },
              C: {
                item: "extendedcrafting:ultimate_singularity"
              },
              D: {
                item: "industrialforegoing:supreme_black_hole_tank"
              },
              E: {
                item: "botania:fabulous_pool"
              },
              F: {
                item:"kubejs:brigidium"
              }
        })
      })

    onEvent('recipes', event => {
        event.recipes.extendedcrafting.shaped_table(Item.of('create:creative_blaze_cake'), [
              "AAAC     ",
              "ADDAC    ",
              "BADDACE  ",
              " BADDAC  ",
              "  BADDAC ",
              "   BADDAC",
              "    BADDA",
              "     BAAA",
              "         "
          ], {
              A: {
                  item: "create:cinder_flour"
                },
                B: {
                  item: "minecraft:magma_block"
                },
                C: {
                  item: "extendedcrafting:the_ultimate_ingot"
                },
                D: {
                  item: "kubejs:dark_matter_condensed"
                },
                E: {
                  item: "kubejs:brigidium"
                }
          })
        })

    onEvent('recipes', event => {
          event.recipes.extendedcrafting.shaped_table(Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'), [
                "AAAACAAAA",
                "ABBBBBBBA",
                "ABBBDBBBA",
                "ABBDEDBBA",
                "CBDEFEDBC",
                "ABBDEDBBA",
                "ABBBDBBBA",
                "ABBBBBBBA",
                "AAAACAAAA"
            ], {
                  A:'mekanism:ultimate_energy_cube',
                  B:'kubejs:dark_matter_condensed',
                  C:'avaritia:infinity_catalyst',
                  D:Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'),
                  E:'extendedcrafting:ultimate_singularity',
                  F:'kubejs:brigidium'
            })
          })

    onEvent('recipes', event => {
           event.recipes.extendedcrafting.shaped_table(Item.of('mekanism:creative_fluid_tank'), [
                "  AAAAA  ",
                "  ADDDA  ",
                "  ADDCA  ",
                "  ADCCA  ",
                "  ACECA  ",
                "  ACCBA  ",
                "  ACBBA  ",
                "  ABBBA  ",
                "  AAAAA  "
  ], {
  A: 'mekanism:block_steel',
  B: 'avaritia:crystal_matrix_ingot',
  C: 'extendedcrafting:the_ultimate_ingot',
  D: 'avaritia:neutronium_ingot',
  E: 'kubejs:brigidium'
  })
})

onEvent('recipes', event => {
  event.recipes.extendedcrafting.shaped_table(Item.of('mekanism:creative_chemical_tank'), [
       "   AAA   ",
       "  ABBBA  ",
       " ABBBBCA ",
       " ABBBCCA ",
       " ABBDCCA ",
       " ABBCCCA ",
       " ABCCCCA ",
       " ABCCCCA ",
       "  AAAAA  "
], {
A: 'mekanism:block_steel',
B: 'extendedcrafting:the_ultimate_ingot',
C: 'avaritia:neutronium_ingot',
D: 'kubejs:brigidium'
})
})

onEvent('recipes', event => {
  event.recipes.extendedcrafting.shaped_table(Item.of('buildinggadgets:construction_paste_container_creative'), [
       "  AAAAA  ",
       " ACCCCCA ",
       " ACBBBCA ",
       " ACBDBCA ",
       " ACBEBCA ",
       " ACBDBCA ",
       " ACBBBCA ",
       " ACCCCCA ",
       " AAAAAAA "
], {
A: 'avaritia:neutronium_block',
B: 'botania:elf_glass',
C: 'mysticalagradditions:insanium_ingot_block',
D: 'projectex:white_matter',
E: 'kubejs:brigidium'
})
})

onEvent('recipes', event => {
  event.recipes.extendedcrafting.shaped_table(Item.of('thermal:rf_coil_creative_augment'), [
       "         ",
       " AAAAAAA ",
       " ABBBBBA ",
       " AECDCEA ",
       " ABBBBBA ",
       " AAAAAAA ",
       "         ",
       "         ",
       "         "
], {
A: 'mysticalagradditions:insanium_ingot_block',
B: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'),
C: 'avaritia:infinity_catalyst',
D: 'kubejs:brigidium',
E: 'extendedcrafting:the_ultimate_ingot'
})
})

onEvent('recipes', event => {
  event.recipes.extendedcrafting.shaped_table(Item.of('thermal:machine_efficiency_creative_augment'), [
       "         ",
       " AAAAAAA ",
       " ACCBBEA ",
       " ACBDBCA ",
       " AEBBCCA ",
       " AAAAAAA ",
       "         ",
       "         ",
       "         "
], {
A: 'mysticalagradditions:insanium_ingot_block',
B: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'),
C: 'avaritia:infinity_catalyst',
D: 'kubejs:brigidium',
E: 'extendedcrafting:the_ultimate_ingot'
})
})

onEvent('recipes', event => {
  event.recipes.extendedcrafting.shaped_table(Item.of('storagedrawers:creative_storage_upgrade'), [
       "   BB BB ",
       "  B  B  B",
       "AAABBABBA",
       "ACCCECCCA",
       "ACCCCCCCA",
       "ADDDDDDDA",
       "ACCCECCCA",
       "ACCCCCCCA",
       "AAAAAAAAA"
], {
A: 'minecraft:oak_log',
B: 'projectex:fading_matter',
C: 'minecraft:oak_planks',
D: 'avaritia:neutronium_block',
E: 'kubejs:brigidium'
})
})


onEvent('recipes', event => {
  event.recipes.extendedcrafting.shaped_table(Item.of('storagedrawers:creative_vending_upgrade'), [
       "   BB BB ",
       "  B  B  B",
       "AAABBABBA",
       "ACCEEECCA",
       "ACCCCCCCA",
       "ADDDDDDDA",
       "ACCEEECCA",
       "ACCCCCCCA",
       "AAAAAAAAA"
], {
A: 'avaritia:neutronium_block',
B: 'projectex:compressed_refined_link',
C: 'avaritia:compressed_crafting_table',
D: 'avaritia:infinity_ingot',
E: 'kubejs:brigidium'
})
})

onEvent('recipes', event => {
  event.recipes.extendedcrafting.shaped_table(Item.of('refinedstorage:creative_storage_disk'), [
       "DDDCCCDDD",
       "DDDCCCDDD",
       "CCBBBBBCC",
       "CCBBEBBCC",
       "CCBBBBBCC",
       "CCCCCCCCC",
       "AAAAAAAAA",
       "AAAAAAAAA",
       "         "
], {
A: 'refinedstorage:quartz_enriched_iron_block',
B: 'extrastorage:storagepart_16384k',
C: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'),
D: 'botania:elf_glass',
E: 'kubejs:brigidium'
})
})