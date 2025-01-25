/*
5

December 10, 2025:

It has nearly been a full year. Trashy still hasnt let us out. We are starting to enjoy the frozen milk, and sometimes she gives us ice cream.

Maybe it isnt so bad here, theres tons of miku plushies here too.
*/

class Icons {
    constructor() {
        this.icons = new Map([
            ["vanilla/iron_sword", "textures/items/iron_sword"]
        ]);
        this.iconData = new Map();
    }
    install(pack, ignoreNamespace = false) {
        let data = pack.get("pack_data");
        let namespace = pack.get("pack_namespace");
        for(const key of data.keys()) {
            let path = typeof data.get(key) === "object" ? data.get(key).icon ? data.get(key).icon : data.get(key).path : data.get(key);
            if(typeof data.get(key) === "object") {
                this.iconData.set(`${!ignoreNamespace ? `${namespace}/` : ``}${key}`, data.get(key))
            }
            this.icons.set(`${!ignoreNamespace ? `${namespace}/` : ``}${key}`, path);
        }
    }
    getIconData(key) {
        return this.iconData.has(key) ? this.iconData.get(key) : null;
    }
    resolve(iconID) {
        if(iconID.startsWith('^')) {
            return iconID.substring(1)
        }
        if(this.icons.has(iconID)) return this.icons.get(iconID);
        return null;
    }
}
export default new Icons();