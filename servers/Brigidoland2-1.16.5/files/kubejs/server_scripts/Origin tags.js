
console.info('Dandole comida al dragón uwu')

onEvent('item.tags', event => {
    event.add('origins:ignore_diet', 'sons_of_sins:rotten_apple')
    event.add('origins:ignore_diet', 'avaritia:cosmic_meatballs')
    event.add('origins:ignore_diet', 'avaritia:ultimate_stew')
    event.add('origins:ignore_diet', 'pamhc2foodcore:epicbaconitem')
    event.add('origins:ignore_diet', 'pamhc2foodextended:epicbltitem')
})