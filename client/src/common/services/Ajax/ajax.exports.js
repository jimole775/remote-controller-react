/**
 * Created by Andy on 2018/1/10.
 */
import angular from "angular";
import Request from "./Ajax.request/AjaxRequest.js.js";
import Receiver from "./Ajax.receiver/AjaxReceiver.js.js";

export default angular.module("ajax", [])
    .service("ajax", function (userStorage, $rootScope, wsService) {
        return new Request(userStorage, new Receiver(), $rootScope, wsService);
    });