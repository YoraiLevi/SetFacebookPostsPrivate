/// <reference lib="dom"/>

//Javascript and Events
// https://stackoverflow.com/a/7575649/12603110

// Mutation Summary
// https://github.com/rafaelw/mutation-summary
// https://github.com/mmacfadden/mutation-summary - fork
// https://stackoverflow.com/a/32263816/12603110

// waitForKeyElements()
// https://stackoverflow.com/a/32338471/12603110

import {uuidv4} from "./UUID"
import {MutationSummary,IMutationSummaryOptions,IQuery,Summary,Selector} from "mutation-summary"
export {IMutationSummaryOptions,Summary}
import {elementExistsVisible} from "./DOM"


export type TabAction = "click" | "scroll" 
interface IMutationEventData{
    summaries?: Summary[]
}
export class Tab{
    // private observer: MutationObserver
    private ms : MutationSummary;
    private msEvent : CustomEvent;
    private msEventtypeArg : string;
    public constructor(options?: IMutationSummaryOptions){
        this.msEventtypeArg  = uuidv4();
            if (options === undefined){
            options = {
                callback: this.callback.bind(this),
                queries : [{all:true}]
            }
        }
        this.msEvent=new CustomEvent(this.msEventtypeArg,{detail:{summaries:undefined}});
        this.ms = new MutationSummary(options)
    }
    private callback(summaries: Summary[]){
        this.msEvent.detail.summaries = summaries
        document.dispatchEvent(this.msEvent)
    }
    private static _subscribeUntilPromise(type: string,isUnsubscribe:Function){
        return new Promise((resolve,reject)=>{
            let callback = ()=>{
                let obj = isUnsubscribe()
                if(obj){
                    document.removeEventListener(type,callback)
                    resolve(obj)
                }
            }
            document.addEventListener(type,callback)
        });
    }
    public selectorVisibleHiddenPromise(selector:string,visible=true) {
        const callback = elementExistsVisible.bind(null,selector)
        return Tab._subscribeUntilPromise(this.msEventtypeArg, visible ? callback : ()=>{return !callback()})
    }
    private static _instance: Tab
    public static get instance() : Tab{
        return this._instance || (this._instance = new this());
    }
    
}