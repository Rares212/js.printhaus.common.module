import { BufferGeometry, Vector3 } from "three";

export class CommonMeshService {

    public fitsInPrintBed(geometry: BufferGeometry, bedX: number, bedY: number, bedZ: number): boolean {
        for (let angle of [0, Math.PI / 2, Math.PI, 3 * Math.PI / 2]) {
            geometry.rotateZ(angle);

            geometry.computeBoundingBox();
            const dimensions: Vector3 = new Vector3();
            geometry.boundingBox!.getSize(dimensions);

            if (dimensions.x <= bedX && dimensions.y <= bedY && dimensions.z <= bedZ) {
                return true;
            }
        }

        return false;
    }
}
