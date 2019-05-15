
import Click from "CLIENT_COMPONENTS/test/Click";
import TRC from "CLIENT_COMPONENTS/test/testRelativeComponent";
import NotFound from "CLIENT_PAGES/help/notFound";

export default [
    {path:"/clock",name:"clock",component:Click},
    {path:"/trc",name:"trc",component:TRC},
    {path:"/notFound",name:"notFound",component:NotFound}
]
