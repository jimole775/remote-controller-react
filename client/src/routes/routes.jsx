
import Clock from "CLIENT_COMPONENTS/test/Clock";
import TRC from "CLIENT_COMPONENTS/test/testRelativeComponent";
import NotFound from "CLIENT_PAGES/help/notFound";

export default [
    {path:"/clock",name:"clock",component:Clock},
    {path:"/trc",name:"trc",component:TRC},
    {path:"/notFound",name:"notFound",component:NotFound}
]
