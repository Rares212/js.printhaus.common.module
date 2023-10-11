import { MeshParser } from "./mesh.parser.interface";
import { BufferGeometry, Group} from "three";
import { BufferUtil } from "../util/buffer.util";
import { MeshUtil } from "../util/mesh.util";
import { OBJLoader } from "../loaders/obj-loader";


export class ObjParser implements MeshParser {
    private objLoader= new OBJLoader();

    parseFile(buffer: ArrayBuffer): BufferGeometry {
        const group: Group = this.objLoader.parse(BufferUtil.arrayBufferToString(buffer));
        return MeshUtil.combineMeshes(group);
    }
}
