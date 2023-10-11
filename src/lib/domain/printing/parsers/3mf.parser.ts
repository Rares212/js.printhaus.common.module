import { MeshParser } from "./mesh.parser.interface";
import { BufferGeometry } from "three";
import { MeshUtil } from "../util/mesh.util";
import { ThreeMFLoader } from "../loaders/3mf.loader";

export class ThreeMFParser implements MeshParser {
    private loader: ThreeMFLoader = new ThreeMFLoader();

    parseFile(buffer: ArrayBuffer): BufferGeometry {
        const group = this.loader.parse(buffer);
        return MeshUtil.combineMeshes(group);
    }
}
