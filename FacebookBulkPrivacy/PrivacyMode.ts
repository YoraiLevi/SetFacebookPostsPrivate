module PrivacyMode{ export type PrivacyModes = "public" | "friends" | "private" | "friends_except" | "specific_friends"}
export class PrivacyMode{
    public static get Public() {return new PrivacyMode("public")}
    public static get Private() {return new PrivacyMode("private")}
    public static get Friends() {return new PrivacyMode("friends")}
    public static get Friends_Except() {return new PrivacyMode("friends_except")}
    public static get Specific_Friends() {return new PrivacyMode("specific_friends")}
    private static post_privacy_mode_icons = {
    "public": "https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/YSM7OHnZVHv.png",
    "friends" : "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/9EJBw2oYDPv.png",
    "friends_except" : "https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/cV1LK8Ks1o7.png",
    "specific_friends" : "https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/NmyxV_4nmDz.png",
    "private": "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/JSmL99pVrUz.png"
    }
    private static privacy_choice_selector =  {
        "public": "div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div.cbu4d94t.j83agx80 > div > div > div > div > div > div > div:nth-child(1) > div",
        "friends" : "div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div.cbu4d94t.j83agx80 > div > div > div > div > div > div > div:nth-child(2) > div",
        "friends_except" : "div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div.cbu4d94t.j83agx80 > div > div > div > div > div > div > div:nth-child(3) > div",
        "specific_friends" : "div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div.cbu4d94t.j83agx80 > div > div > div > div > div > div > div:nth-child(4) > div",
        "private": "div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div.cbu4d94t.j83agx80 > div > div > div > div > div > div > div:nth-child(5) > div"
    }
    private static privacy_selector_icons = {
        "public": "https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/k1K2sJ70emI.png",
        "friends" : "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/hHt2U1bRtLs.png",
        "friends_except" : "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/hHt2U1bRtLs.png",
        "specific_friends" : "https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/cD5R2-Z_DDa.png",
        "private": "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/cfUGV2EoMCu.png"
    }
    private mode: PrivacyMode.PrivacyModes
    private constructor(mode: PrivacyMode.PrivacyModes){
        this.mode = mode;
    }
    public get PostIcon(){
        return PrivacyMode.post_privacy_mode_icons[this.mode]
    }
    public get ChoiceSelector(){
        return PrivacyMode.privacy_choice_selector[this.mode]
    }
    public get SelectorIcon(){
        return PrivacyMode.privacy_selector_icons[this.mode]
    }
}