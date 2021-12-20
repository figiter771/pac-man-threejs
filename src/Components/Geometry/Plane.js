import { Mesh } from "three";
import { MeshPhongMaterial } from "three";
import { PlaneGeometry } from "three";

const planeGeo = new PlaneGeometry(10, 10);
const planeMat = new MeshPhongMaterial({ color: "#8AC" });
const plane = new Mesh(planeGeo, planeMat);
plane.rotation.x = Math.PI * -0.5;

export default plane;
