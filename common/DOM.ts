/// <reference lib="dom"/>

/* 
https://developer.mozilla.org/en-US/docs/Web/API/Document
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
navigation to page, url, tab title, domain, urls,

Interactions
Click - position, element, selector
type - string to element,(HTMLElement.isContentEditable)
scroll - element(page by default) bottom,top,%from top,always scroll to %,
focus/blur - element
*/

export function elementExistsVisible(selector:string) : Element  | null {
    let obj = document.querySelector(selector)
    if (obj && !(window.getComputedStyle(obj).display === "none" || window.getComputedStyle(obj).visibility === "hidden"))
        return obj
    return null
}