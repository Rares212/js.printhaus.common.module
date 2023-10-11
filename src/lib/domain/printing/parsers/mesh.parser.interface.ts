import { BufferGeometry } from "three";

export interface MeshParser {
    parseFile(buffer: ArrayBuffer): BufferGeometry;
}
