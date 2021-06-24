/*
Tab Executor
    Run ( Instructions- NonMaskable Inturrupts, Maskable Inturrupts)

Intructions / Instruction Tree
    tab action: page interaction

Inturrupt
    event to listen to
    condition
    Instructions
*/
import {Tab,TabAction} from "./Tab"
interface Instruction{
    action : TabAction
    params : any
}
class TabExecutor{
    private _tab : Tab
    constructor(tab:Tab){
        this._tab = tab
    }
    public Execute(){

    }
}