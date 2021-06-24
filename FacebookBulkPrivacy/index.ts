/// <reference types="greasemonkey"/>
/// <reference lib="dom"/>

import {PrivacyMode} from "./PrivacyMode"
import {Tab,IMutationSummaryOptions,Summary} from "../common/Tab"
import {uuidv4} from "../common/UUID"
import * as GUI from "./activitylogGUI"
console.log(PrivacyMode.Friends.PostIcon)
// let a : IMutationSummaryOptions = {
    // callback: (summaries:Summary[])=>{summaries.forEach((summary: Summary) => console.log(summary))},
    // queries: [{attribute: "style"},{attribute: "display"}]
// }
console.log("Init TamperMonkey")
// let eventEmitter : CustomEvent = new CustomEvent(uuidv4(),{detail:{summaries:undefined}});
// document.dispatchEvent(eventEmitter)

let t = Tab.instance

t.selectorVisibleHiddenPromise(GUI.scrolling_container_selector,true).then(x=>{alert(x)})
t.selectorVisibleHiddenPromise(GUI.scrolling_container_selector,false).then(x=>{alert(x)})

// GM.openInTab("https://www.google.com/",false)