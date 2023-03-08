import {Header} from "../site/Header";
import {Body} from "../site/Body";
import {Footer} from "../site/Footer";

function AppSite() {
    return (
        <>
            <Header titleForHeader={'New Header'}/>
            <Body titleForBody={'New Body'}/>
            <Footer titleForFooter={'New Footer'}/>
        </>
    )

}

export default AppSite