import homes from '../../api/homes.js'
import { ActionForm } from '../../lib/prismarinedb'
import uiManager from '../../uiManager.js'
import config from '../../config.js'
import icons from '../../api/icons.js'
import './view.js'

uiManager.addUI(config.uiNames.Homes.View, 'View homes', (player, id) => {
    let h = homes.get(id)
    if(!h) return uiManager.open(player, config.uiNames.Homes.Root);
    let form = new ActionForm()
    form.title('§aView home: ' + h.data.name)
    form.body(`Name: ${h.data.name}`) 
    form.button('§cDelete\n§7Delete this home', 'textures/azalea_icons/Delete', (player) => {
        homes.delete(id)
        uiManager.open(player, config.uiNames.Homes.Root)
    })
    form.button('§aTeleport\n§7TP to this home', icons.resolve('leaf/image-045'), (player) => {
        homes.teleport(id, player)
    })
    form.show(player)
})