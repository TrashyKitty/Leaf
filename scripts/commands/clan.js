import commandManager from '../api/commands/commandManager'
import uiManager from '../uiManager'
import config from '../config.js'
import { system } from '@minecraft/server'

commandManager.addCommand("clan", { description: "Open clan UI", author: "TrashyKitty", category: "Players" }, ({ msg, args }) => {
    msg.sender.success("Close chat and move to open UI");
    let ticks = 0;
    let loc = { x: msg.sender.location.x, y: msg.sender.location.y, z: msg.sender.location.z };
    let interval = system.runInterval(() => {
        ticks++;
        if (ticks >= (20 * 10)) {
            system.clearRun(interval);
            msg.sender.error("Timed out")
            return;
        }
        if (msg.sender.location.x != loc.x || msg.sender.location.y != loc.y || msg.sender.location.z != loc.z) {
            system.clearRun(interval);
            uiManager.open(msg.sender, config.uiNames.Clans.Root)
        }
    });
})