import {ErrorMapper} from "./util/ErrorMapper";

export const loop = ErrorMapper.wrapLoop(() => {
    console.log("test");
})