import { ObjParser } from './obj.parser';
import { StlParser } from './stl.parser';
import { BufferGeometry } from 'three';
import { SupportedMeshFileTypes } from '../util/supported-file-types.enum';
import { ThreeMFParser } from "./3mf.parser";

export class MeshParserService {
    private objParser: ObjParser = new ObjParser();
    private stlParser: StlParser = new StlParser();
    private threeMFParser: ThreeMFParser = new ThreeMFParser();

    parseFile(buffer: ArrayBuffer, fileType: SupportedMeshFileTypes): BufferGeometry {
        switch (fileType) {
            case SupportedMeshFileTypes.STL: {
                return this.stlParser.parseFile(buffer);
            }
            case SupportedMeshFileTypes.OBJ: {
                return this.objParser.parseFile(buffer);
            }
            case SupportedMeshFileTypes.ThreeMF: {
                return this.threeMFParser.parseFile(buffer);
            }
            default: {
                throw new Error('Error parsing mesh file');
            }
        }
    }
}
