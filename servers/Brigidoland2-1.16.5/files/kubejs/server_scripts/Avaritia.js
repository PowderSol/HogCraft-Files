settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Dandole una razón de existir a Powder con Avaritia...')

onEvent('recipes', event => {
  event.recipes.extendedcrafting.shaped_table(Item.of('avaritia:natures_ruin'), [
        "  A      ",
        " ABAAAAAA",
        " ABBCBBA ",
        " ABBEBA  ",
        "  AADA   ",
        "    D    ",
        "    D    ",
        "    D    ",
        "    D    "
    ], {
        A: {
            item: "avaritia:neutronium_ingot"
          },
          B: {
            item: "extendedcrafting:the_ultimate_ingot"
          },
          C: {
            item: "extendedcrafting:ultimate_singularity"
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
  event.recipes.extendedcrafting.shaped_table(Item.of('avaritia:hoeofthe_green_earth'), [
        "     D   ",
        " AAAAAA  ",
        "ABBBCEA  ",
        "AAAAAAA  ",
        "A    D   ",
        "     D   ",
        "     D   ",
        "     D   ",
        "     D   "
    ], {
        A: {
            item: "avaritia:neutronium_ingot"
          },
          B: {
            item: "extendedcrafting:the_ultimate_ingot"
          },
          C: {
            item: "extendedcrafting:ultimate_singularity"
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
  event.recipes.extendedcrafting.shaped_table(Item.of('avaritia:longbowofthe_heavens'), [
        "    ACDF ",
        "   ABD F ",
        "  ABD  F ",
        " ABD   F ",
        " AED   F ",
        " ABD   F ",
        "  ABD  F ",
        "   ABD F ",
        "    ACDF "
    ], {
        A: {
            item: "avaritia:neutronium_ingot"
          },
          B: {
            item: "extendedcrafting:the_ultimate_ingot"
          },
          C: {
            item: "extendedcrafting:ultimate_singularity"
          },
          D: {
            item: "kubejs:dark_matter_condensed"
          },
          E: {
            item: "kubejs:brigidium"
          },
          F: {
            item: "iceandfire:deathworm_tounge"
          }
    })
   })

onEvent('recipes', event => {
  event.recipes.extendedcrafting.shaped_table(Item.of('avaritia:planet_eater'), [
        "  AAAAA  ",
        " ABBBBBA ",
        " ABBEBBA ",
        " ABBDBBA ",
        "    D    ",
        "    D    ",
        "    D    ",
        "    D    ",
        "    D    "
    ], {
        A: {
            item: "avaritia:neutronium_ingot"
          },
          B: {
            item: "extendedcrafting:the_ultimate_ingot"
          },
          C: {
            item: "extendedcrafting:ultimate_singularity"
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
  event.recipes.extendedcrafting.shaped_table(Item.of('avaritia:world_breaker', '{Damage:0,AS_Amulet_Holder:[I;-1589857818,1385778581,-1508201656,-657444428]}'), [
        " AAAAAAA ",
        "ABBBEBBBA",
        "ABCADACBA",
        "AAA D AAA",
        "    D    ",
        "    D    ",
        "    D    ",
        "    D    ",
        "    D    "
    ], {
        A: {
            item: "avaritia:neutronium_ingot"
          },
          B: {
            item: "extendedcrafting:the_ultimate_ingot"
          },
          C: {
            item: "extendedcrafting:ultimate_singularity"
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
	event.shaped('avaritia:infinity_armor_helmet', [
	  'AAA',  
	  'ADA',
	  'CBC'
	], {
	  A: 'avaritia:neutronium_ingot',
	  B: 'avaritia:infinity_ingot',
    C: 'extendedcrafting:ultimate_singularity',
    D: 'projecte:gem_helmet'
	})
})

onEvent('recipes', event => {
    event.shaped('avaritia:infinity_armor_chestplate', [
      'ADA',  
      'ACA',
      'ABA'
    ], {
      A: 'avaritia:neutronium_ingot',
      B: 'avaritia:infinity_ingot',
      C: 'extendedcrafting:ultimate_singularity',
      D: 'projecte:gem_chestplate'
    })
  })

onEvent('recipes', event => {
    event.shaped('avaritia:infinity_armor_leggings', [
      'ACA',  
      'ADA',
      'ABA'
    ], {
      A: 'avaritia:neutronium_ingot',
      B: 'avaritia:infinity_ingot',
      C: 'extendedcrafting:ultimate_singularity',
      D: 'projecte:gem_leggings'
    })
  })

onEvent('recipes', event => {
    event.shaped('avaritia:infinity_armor_boots', [
      '   ',  
      'ABA',
      'ADA'
    ], {
      A: 'avaritia:neutronium_ingot',
      B: 'avaritia:infinity_ingot',
      D: 'projecte:gem_boots'
    })
  })

onEvent('recipes', event => {
  event.recipes.extendedcrafting.shaped_table('avaritia:infinity_ingot', [
     "AAAAAAAAA",
     "ABBCCBBCA",
     "ACCBBCCBA",
     "ABBCCBBCA",
     "ACCBBCCBA",
     "AAAAAAAAA",
     "         ",
     "         ",
     "         "
   ],{
     A: {
       item: "avaritia:neutronium_ingot"
     },
     B: {
       item: "kubejs:brigidium"
     },
     C: {
       item: "avaritia:infinity_catalyst"
     }
})
})

onEvent('recipes', event => {
  event.recipes.extendedcrafting.shaped_table('avaritia:infinity_catalyst', [
       "ABCDEFGHI",
       "JKLMNOPQR",
       "STUVWXYZ1",
       "234      ",
       "         ",
       "         ",
       "         ",
       "         ",
       "         "

     ],{
      A: 'avaritia:diamond_lattice',
      B: 'avaritia:crystal_matrix_ingot',
      C: 'avaritia:pileof_neutrons',
      D: 'avaritia:neutronium_nugget',
      E: 'avaritia:ultimate_stew',
      F: 'avaritia:cosmic_meatballs',
      G: 'avaritia:endest_pearl',
      H: 'avaritia:record_fragment',
      I: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}'),
      J: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'),
      K: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'),
      L: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:aluminum"}'),
      M: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}'),
      N: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}'),
      O: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}'),
      P: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:silver"}'),
      Q: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lead"}'),
      R: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:invar"}'),
      S: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:nickel"}'),
      T: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}'),
      U: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:bronze",}'),
      V: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:steel",}'),
      W: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:electrum",}'),
      X: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:uranium",}'),
      Y: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal",}'),
      Z: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tin",}'),
      1: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:platinum",}'),
      2: 'thermal:enderium_block',
      3: 'mekanism:block_steel',
      4: 'extendedcrafting:black_iron_block'
     }
    )})

onEvent('recipes', event => {
  event.recipes.extendedcrafting.shaped_table('avaritia:ultimate_stew', [
      "ABCDEFGHI",
      "JKLMNOPQR",
      "STUVWXYZ1",
      "23456789 ",
      "         ",
      "         ",
      "         ",
      "         ",
      "         "
    ], {
      A: {
        item: "minecraft:apple"
      },
      B: {
        item: "minecraft:golden_apple"
      },
      C: {
        item: "minecraft:bread"
      },
      D: {
        item: "minecraft:kelp"
      },
      E: {
        item: "minecraft:cocoa_beans"
      },
      F: {
        item: "minecraft:cake"
      },
      G: {
        item: "minecraft:glistering_melon_slice"
      },
      H: {
        item: "minecraft:carrot"
      },
      I: {
        item: "minecraft:poisonous_potato"
      },
      J: {
        item: "minecraft:chorus_fruit"
      },
      K: {
        item: "minecraft:beetroot"
      },
      L: {
        item: "minecraft:honey_bottle"
      },
      M: {
        item: "farmersdelight:sweet_berry_cheesecake"
      },
      N: {
        item: "farmersdelight:chocolate_pie"
      },
      O: {
        item: "farmersdelight:melon_popsicle"
      },
      P: {
        item: "farmersdelight:apple_pie"
      },
      Q: {
        item: "farmersdelight:fruit_salad"
      },
      R: {
        item: "farmersdelight:mixed_salad"
      },
      S: {
        item: "farmersdelight:nether_salad"
      },
      T: {
        item: "farmersdelight:hamburger"
      },
      U: {
        item: "farmersdelight:dumplings"
      },
      V: {
        item: "farmersdelight:ratatouille"
      },
      W: {
        item: "farmersdelight:fried_rice"
      },
      X: {
        item: "pamhc2foodextended:wontonsoupitem"
      },
      Y: {
        item: "pamhc2foodextended:rainbowcurryitem"
      },
      Z: {
        item: "pamhc2foodextended:epicbltitem"
      },
      1: {
        item: "pamhc2foodcore:epicbaconitem"
      },
      2: {
        item: "pamhc2foodextended:baconmushroomburgeritem"
      },
      3: {
        item: "pamhc2foodextended:berryvinaigrettesaladitem"
      },
      4: {
        item: "pamhc2foodcore:friedchickenitem"
      },
      5: {
        item: "pamhc2foodextended:footlongitem"
      },
      6: {
        item: "pamhc2foodextended:colasodaitem"
      },
      7: {
        item: "pamhc2foodextended:friedfeastitem"
      },
      8: {
        item: "pamhc2foodextended:pepperonipizzaitem"
      },
      9: {
        item: "avaritia:pileof_neutrons"
      }
    })
   })

onEvent('recipes', event => {
  event.recipes.extendedcrafting.shaped_table(Item.of('avaritia:swordofthe_cosmos', '{Damage:0,AS_Amulet_Holder:[I;-1589857818,1385778581,-1508201656,-657444428]}'), [
        "      AAA",
        "     ABBA",
        "    ABCBA",
        "   ABBBA ",
        "D ABCBA  ",
        "DDBBBA   ",
        " DDBA    ",
        "DEDD     ",
        "DD DD    "
    ], {
        A: {
            item: "avaritia:neutronium_ingot"
          },
          B: {
            item: "extendedcrafting:the_ultimate_ingot"
          },
          C: {
            item: "extendedcrafting:the_ultimate_block"
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
  event.recipes.extendedcrafting.shaped_table('extendedcrafting:the_ultimate_ingot', [
      "ABCDEFGHI",
      "JKLMNOPQR",
      "STUVWXYZ1",
      "234567890",
      "ÁÉÍÓÚÄËÏÖ",
      "ÜÑ##$%&/ ",
      "         ",
      "         ",
      "         "
    ], {
      A: {
        item: "minecraft:iron_ingot"
      },
      B: {
        item: "minecraft:gold_ingot"
      },
      C: {
        item: "avaritia:crystal_matrix_ingot"
      },
      D: {
        item: "avaritia:neutronium_ingot"
      },
      E: {
        item: "extendedcrafting:black_iron_ingot"
      },
      F: {
        item: "extendedcrafting:redstone_ingot"
      },
      G: {
        item: "extendedcrafting:ender_ingot"
      },
      H: {
        item: "extendedcrafting:enhanced_ender_ingot"
      },
      I: {
        item: "extendedcrafting:crystaltine_ingot"
      },
      J: {
        item: "alltheores:aluminum_ingot"
      },
      K: {
        item: "alltheores:copper_ingot"
      },
      L: {
        item: "alltheores:lead_ingot"
      },
      M: {
        item: "alltheores:nickel_ingot"
      },
      N: {
        item: "alltheores:osmium_ingot"
      },
      O: {
        item: "alltheores:platinum_ingot"
      },
      P: {
        item: "alltheores:silver_ingot"
      },
      Q: {
        item: "alltheores:tin_ingot"
      },
      R: {
        item: "alltheores:uranium_ingot"
      },
      S: {
        item: "alltheores:zinc_ingot"
      },
      T: {
        item: "tconstruct:cobalt_ingot"
      },
      U: {
        item: "minecraft:netherite_ingot"
      },
      V: {
        item: "tconstruct:queens_slime_ingot"
      },
      W: {
        item: "tconstruct:manyullyn_ingot"
      },
      X: {
        item: "mekanism:ingot_bronze"
      },
      Y: {
        item: "mekanism:ingot_steel"
      },
      Z: {
        item: "mysticalagriculture:soulium_ingot"
      },
      1: {
        item: "mysticalagradditions:insanium_ingot"
      },
      2: {
        item: "mysticalagriculture:supremium_ingot"
      },
      3: {
        item: "mysticalagriculture:imperium_ingot"
      },
      4: {
        item: "mysticalagriculture:tertium_ingot"
      },
      5: {
        item: "mysticalagriculture:prudentium_ingot"
      },
      6: {
        item: "mysticalagriculture:inferium_ingot"
      },
      7: {
        item: "thermal:lumium_ingot"
      },
      8: {
        item: "botania:manasteel_ingot"
      },
      9:{
        item: "botania:terrasteel_ingot"
      },
      0:{
        item: "botania:elementium_ingot"
      },
      Á:{
        item: "create:brass_ingot"
      },
      É:{
        item: "thermal:bronze_ingot"
      },
      Í:{
        item: "thermal:electrum_ingot"
      },
      Ó:{
        item: "thermal:invar_ingot"
      },
      Ú:{
        item: "thermal:constantan_ingot"
      },
      Ä:{
        item: "thermal:signalum_ingot"
      },
      Ë:{
        item: "thermal:enderium_ingot"
      },
      Ï:{
        item: "tconstruct:slimesteel_ingot"
      },
      Ö:{
        item: "tconstruct:rose_gold_ingot"
      },
      Ü:{
        item: "tconstruct:pig_iron_ingot"
      },
      Ñ:{
        item: "tconstruct:hepatizon_ingot"
      },
       "#":{
        item: "twilightforest:ironwood_ingot"
      },
       "$":{
        item: "twilightforest:fiery_ingot"
      },
       "%":{
        item: "twilightforest:steeleaf_ingot"
      },
       "&":{
        item: "twilightforest:knightmetal_ingot"
      },
       "/":{
        item: "extendedcrafting:ultimate_singularity"
      },
    })
   })

onEvent('recipes', event => {
    event.shaped('avaritia:neutronium_ingot', [
      ' C ',  
      'ABD',
      ' E '
    ], {
      A: 'mekanism:ingot_osmium',
      B: 'avaritia:diamond_lattice',
      C: 'minecraft:netherite_ingot',
      D: 'mekanism:ingot_refined_glowstone',
      E: 'mekanism:ingot_refined_obsidian'
    })
  })

  onEvent('recipes', event => {
    event.recipes.extendedcrafting.shaped_table('avaritia:endest_pearl', [
       "   AAA   ",
       " AABBBAA ",
       " ABBBBBA ",
       "ABBBCBBBA",
       "ABBCDCBBA",
       "ABBBCBBBA",
       " ABBBBBA ",
       " AABBBAA ",
       "   AAA   "
     ],{
       A: {
         item: "minecraft:end_stone"
       },
       B: {
         item: "minecraft:ender_pearl"
       },
       C: {
         item: "avaritia:neutronium_ingot"
       },
       D: {
         item: "minecraft:nether_star"
       }
  })
  })

  onEvent('recipes', event => {
    event.recipes.extendedcrafting.shaped_table('avaritia:cosmic_meatballs', [
       "ABCDEFGHI",
       "JKLM     ",
       "         ",
       "         ",
       "         ",
       "         ",
       "         ",
       "         ",
       "         "
     ],{
       A: {
         item: "minecraft:porkchop"
       },
       B: {
         item: "minecraft:beef"
       },
       C: {
         item: "minecraft:mutton"
       },
       D: {
         item: "minecraft:cod"
       },
       E: {
         item: "minecraft:salmon"
      },
       F: {
         item: "minecraft:tropical_fish"
      },
       G: {
         item: "minecraft:pufferfish"
      },
       H: {
         item: "minecraft:rabbit"
      },
       I: {
         item: "minecraft:chicken"
      },
       J: {
         item: "minecraft:rotten_flesh"
     },
       K: {
         item: "minecraft:spider_eye"
     },
       L: {
         item: "minecraft:egg"
     },
       M: {
         item: "avaritia:neutronium_ingot"
     }
  })
  })