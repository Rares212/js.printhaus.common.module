import { MeshParser } from "./mesh.parser.interface";
import { BufferGeometry } from "three";
import { STLLoader } from "../loaders/stl-loader";

export class StlParser implements MeshParser {
    private stlLoader: STLLoader = new STLLoader();

    parseFile(buffer: ArrayBuffer): BufferGeometry {
        return this.stlLoader.parse(buffer);
    }
}
