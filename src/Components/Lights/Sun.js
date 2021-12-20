import { DirectionalLight } from "three";

const color = 0xffffff;
const intensity = 1;
const sun = new DirectionalLight(color, intensity);
sun.position.set(0, 10, 0);
sun.target.position.set(-5, 0, 0);

export default sun;
