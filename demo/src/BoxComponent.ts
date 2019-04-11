
import { ThreeComponent, Mesh, AxesHelper, BoxGeometry, MeshBasicMaterial } from 'three-component-ts';

export class BoxComponent extends ThreeComponent {
  
  private cube: Mesh;

  constructor() {
    super();
  }

  protected createCamera() {
      super.createCamera();
      this.camera.position.y= 10;
  }
 
  protected populateScene() {
    this.scene.add(new AxesHelper(200));

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new Mesh(geometry, material);
    this.scene.add(this.cube);
  }

   createControls() {
    super.createControls();

    this.controls.minDistance = 5;
    this.controls.maxDistance = 20;
    this.controls.maxPolarAngle = Math.PI / 1.25;
    this.controls.autoRotate = true;
  }


  protected animate(): void {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.controls.update();
  }


}
