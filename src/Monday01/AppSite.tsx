import {Header} from './Site/Header';
import {Footer} from './Site/Footer';
import {Body} from './Site/Body';


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