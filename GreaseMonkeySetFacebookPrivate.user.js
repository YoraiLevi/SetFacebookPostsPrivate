// ==UserScript==
// @name        facebook set posts to private
// @description Automation tool that sets posts in facebooks activity log to private for the new 2020 design
// @author      Yorai Levi
// @namespace   https://github.com/YoraiLevi
// @update      https://raw.githubusercontent.com/YoraiLevi/SetFacebookPostsPrivate/master/GreaseMonkeySetFacebookPrivate.user.js
// @supportURL  https://github.com/YoraiLevi/SetFacebookPostsPrivate/issues
// @include     https://www.facebook.com/*
// @version     0.1
// @grant       GM_setValue
// @grant       GM_getValue


// ==/UserScript==

//3 user scripts merged into a single file:
(function () {
    //set privacy action
    if (document.URL.match("https://www.facebook.com/.+/posts/.+")) {
        (function () {
            'use strict';
            let GLOBAL_TIMEOUT = Infinity
            function delayPromise(delay) {
                return new Promise(resolve => setTimeout(() => { resolve() }, delay))
            }
            async function get_selector_visible(selector, period, timeout = GLOBAL_TIMEOUT) {
                let s_time = performance.now()
                while (performance.now() - s_time < timeout) {
                    let obj = document.querySelector(selector)
                    if (obj && !(window.getComputedStyle(obj).display === "none" || window.getComputedStyle(obj).visibility === "hidden"))
                        // checks if exists in dom? and supposedly? visible
                        return obj
                    await delayPromise(period)
                }
                throw "Waiting timed out: " + selector;
            }
            async function get_selector_not_visible(selector, period, timeout = GLOBAL_TIMEOUT) {
                let s_time = performance.now()
                while (performance.now() - s_time < timeout) {
                    let obj = document.querySelector(selector)
                    if (!obj || (window.getComputedStyle(obj).display === "none" || window.getComputedStyle(obj).visibility === "hidden"))
                        // checks if exists in dom? and supposedly? visible
                        return obj
                    await delayPromise(period)
                }
                throw "Waiting timed out: " + selector;
            }
            let three_dot_menu_selector = "div > div.nqmvxvec.j83agx80.jnigpg78.cxgpxx05.dflh9lhu.sj5x9vvc.scb9dxdr.odw8uiq3 > div > div"
            let menu_buttons_selector = "div.cwj9ozl2.ue3kfks5.pw54ja7n.uo3d90p7.l82x9zwi.nwpbqux9.rq0escxv.jgsskzai.ni8dbmo4.stjgntxs > div > div.j83agx80.cbu4d94t.buofh1pr > div.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div"
            let only_me_choice_selector = "div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div.cbu4d94t.j83agx80 > div > div > div > div > div > div > div:nth-child(5) > div"
            window.addEventListener('load', async () => {
                await delayPromise(1000)
                setPrivate()
            })
            async function setPrivate() {
                //The actual action to set a post to private
                let three_dot_menu = await get_selector_visible(three_dot_menu_selector)
                three_dot_menu.click()


                let edit_audience_menu_button = null
                await get_selector_visible(menu_buttons_selector)
                let buttons = document.querySelectorAll(menu_buttons_selector)
                for (const b of buttons) {
                    if (b.innerText === "Edit audience")
                        edit_audience_menu_button = b
                }
                if (edit_audience_menu_button) {
                    edit_audience_menu_button.click()
                }
                else {
                    close()
                }
                let only_me_choice = await get_selector_visible(only_me_choice_selector)

                await delayPromise(1000)
                //dummy(presses the x to close window)
                //let a = document.querySelector("#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(5) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div.cypi58rs.pmk7jnqg.fcg2cn6m.tkr6xdv7 > div")
                //a.click()
                only_me_choice.click()
                await get_selector_not_visible(only_me_choice_selector)
                close()
                await delayPromise(1000)
            }


        })();
    }
    //inject activity manager
    else if (document.URL.match("https://www.facebook.com/.+/allactivity.+")) {
        (function () {
            'use strict'
            function delayPromise(delay) {
                return new Promise(resolve => setTimeout(() => { resolve() }, delay))
            }

            function get_items() {
                let activity_selector = "#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.gs1a9yip.owycx6da.btwxx1t3.buofh1pr.dp1hu0rb.ka73uehy > div.rq0escxv.l9j0dhe7.tkr6xdv7.j83agx80.cbu4d94t.pfnyh3mw.d2edcug0.hpfvmrgz.dp1hu0rb.rek2kq2y.o36gj0jk > div > div.q5bimw55.rpm2j7zs.k7i0oixp.gvuykj2m.j83agx80.cbu4d94t.ni8dbmo4.eg9m0zos.l9j0dhe7.du4w35lb.ofs802cu.pohlnb88.dkue75c7.mb9wzai9.d8ncny3e.buofh1pr.g5gj957u.tgvbjcpo.l56l04vs.r57mb794.kh7kg01d.c3g1iek1.k4xni2cv > div.j83agx80.cbu4d94t.buofh1pr > div.aov4n071 > div *> div> a"
                return document.querySelectorAll(activity_selector)
            }
            window.addEventListener('load', async () => {
                await delayPromise(1000)

                let parent_selector = "#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.gs1a9yip.owycx6da.btwxx1t3.buofh1pr.dp1hu0rb.ka73uehy > div.rq0escxv.l9j0dhe7.tkr6xdv7.j83agx80.cbu4d94t.pfnyh3mw.d2edcug0.hpfvmrgz.dp1hu0rb.rek2kq2y.o36gj0jk > div > div.q5bimw55.rpm2j7zs.k7i0oixp.gvuykj2m.j83agx80.cbu4d94t.ni8dbmo4.eg9m0zos.l9j0dhe7.du4w35lb.ofs802cu.pohlnb88.dkue75c7.mb9wzai9.d8ncny3e.buofh1pr.g5gj957u.tgvbjcpo.l56l04vs.r57mb794.kh7kg01d.c3g1iek1.k4xni2cv > div.j83agx80.cbu4d94t.buofh1pr > div.aov4n071 > div.n1l5q3vz.tvfksri0.oygrvhab.gu00c43d.rz7trki1.l9j0dhe7.tkr6xdv7 > div > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.pfnyh3mw.d2edcug0.hpfvmrgz.p8fzw8mz.a8nywdso.iuny7tx3.discj3wi > div > span"
                parent_selector = "#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.gs1a9yip.owycx6da.btwxx1t3.buofh1pr.dp1hu0rb.ka73uehy > div.rq0escxv.l9j0dhe7.tkr6xdv7.j83agx80.cbu4d94t.pfnyh3mw.d2edcug0.hpfvmrgz.dp1hu0rb.rek2kq2y.o36gj0jk > div > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.i1fnvgqd.bp9cbjyn.owycx6da.btwxx1t3.jei6r52m.wkznzc2l.n851cfcs.dhix69tm > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.d2edcug0.hpfvmrgz.kud993qy.buofh1pr.g5gj957u > div > div > span > h1"
                let parent = document.querySelector(parent_selector)
                function insertAfter(referenceNode, newNode) {
                    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
                }
                let divInputs = document.createElement('div')
                let spanMin = document.createElement('div'); spanMin.innerText = "From:(Blank=First)", divInputs.appendChild(spanMin)
                let min = addInput(divInputs)
                min.value = GM_getValue("from", null)
                let spanMax = document.createElement('div'); spanMax.innerText = "To:(Blank=No Limit)", divInputs.appendChild(spanMax)
                let max = addInput(divInputs)
                parent.appendChild(divInputs)

                function openRangeButtonActionClosure(min_input_element, max_input_element) {
                    return function openRangeButtonAction() {
                        //The gui is 1 indexed and the functions are 0 indexed
                        let from = min_input_element.value ? min_input_element.value - 1 : 0
                        let to = max_input_element.value ? max_input_element.value - 1 : Infinity
                        openRange(from, to)
                    }
                }
                async function openButtonAction() {
                    openRange(0, Infinity)
                }
                let divButtons = document.createElement('div')
                addButton('Open Range', openRangeButtonActionClosure(min, max), divButtons)
                addButton('Open All', openButtonAction, divButtons)
                parent.appendChild(divButtons)

            })
            function addInput(parentElement = document.body, cssObj) {
                cssObj = cssObj || { position: 'relative', 'z-index': 3 }
                let input = document.createElement('input'), btnStyle = input.style
                parentElement.appendChild(input)
                input.type = "number"
                Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
                return input
            }
            function addButton(text, onclick, parentElement = document.body, cssObj) {
                cssObj = cssObj || { position: 'relative', 'z-index': 3 }
                let button = document.createElement('button'), btnStyle = button.style
                parentElement.appendChild(button)
                button.innerHTML = text
                button.onclick = onclick
                Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
                return button
            }
            async function openRange(from, to) {
                //zero indexed [0from,to)
                async function openURLRange(from, to, frequency = 5000) {
                    console.log("openurlrange", from, to)
                    async function handleURL(url) {
                        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
                                width=600,height=300,left=100,top=100`;
                        let popup = open(url, url, params);
                    }
                    let items = get_items()
                    let urls = Array.from(items).slice(from, to).map(x => x.href)
                    let i = 1;
                    for (const url of urls) {
                        handleURL(url)
                        i++
                        GM_setValue("from", from + i)
                        await delayPromise(frequency)
                    }
                    console.log(items.length)
                    return items.length
                }
                async function scrollRange(from) {
                    console.log("scrollrange", from)
                    //zero indexed [0from,to)
                    while (from > get_items().length - 1) {
                        //from is both an index and is inclusive!
                        let scrolling_container_selector = "#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.gs1a9yip.owycx6da.btwxx1t3.buofh1pr.dp1hu0rb.ka73uehy > div.rq0escxv.l9j0dhe7.tkr6xdv7.j83agx80.cbu4d94t.pfnyh3mw.d2edcug0.hpfvmrgz.dp1hu0rb.rek2kq2y.o36gj0jk > div > div.q5bimw55.rpm2j7zs.k7i0oixp.gvuykj2m.j83agx80.cbu4d94t.ni8dbmo4.eg9m0zos.l9j0dhe7.du4w35lb.ofs802cu.pohlnb88.dkue75c7.mb9wzai9.d8ncny3e.buofh1pr.g5gj957u.tgvbjcpo.l56l04vs.r57mb794.kh7kg01d.c3g1iek1.k4xni2cv"
                        let scrolling_container = document.querySelector(scrolling_container_selector)
                        scrolling_container.scrollTop = scrolling_container.scrollHeight
                        await delayPromise(1000)
                    }
                }
                while (from < to) {
                    console.log("newfrom", from)
                    await scrollRange(from)
                    from = await openURLRange(from, to)
                }
            }


        }())
    }
    //ignore
    else if (document.URL.match("https://www.facebook.com/permalink.php.*|https://www.facebook.com/groups/.*")) {
        close()
    }
})();