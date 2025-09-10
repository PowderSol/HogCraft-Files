console.info('Poniendo nuevos tutoriales...')

onEvent('jei.information', event => {
  event.add('mmorpg:source_of_strength', ['Obtené este item usando el Salvage Hammer en una Uncommon Essence (Esencia poco común, no confundir con esencia tier 0.)', 'El mayor uso de este item es el de craftear las Magical upgrade Stone que sirven para ponerle mejoras a tus herramientas favoritas (no sube el rango o rareza, sino que le das +1 o +2 a ese item.)'])
})

onEvent('jei.information', event => {
    event.add(Item.of('mmorpg:rarity/essence/base', '{CustomModelData:2,rar:"uncommon"}'), ['Se obtiene cada tanto usando el Salvage Hammer en herramientas/armaduras con un alma en ella, hay algunos items que no se pueden usar para obtener items los cuales tendran en la tooltip en rojo "Unsalvageable"'])
  })

onEvent('jei.information', event => {
    event.add(Item.of('mmorpg:mat/salvage/salvage0'), ['Obtené este item con la Salvage Hammer (todo se realiza en tu inventario), Desde tu inventario agarrá el item con click izquierdo, y después dale click izquierdo devuelta arriba de las almas que quieras romper.'])
  })
  