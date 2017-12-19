import Itemmodel = require("./item.model");
import Iitem = Itemmodel.Iitem;

export interface Ilost {
    reportNumber: number,
    lastSeenDate: string,
    reportDate: string,
    lastSeenLocation: string,
    lostItem: Iitem
}
