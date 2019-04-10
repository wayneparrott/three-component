# three-component-ts

Simplifies creation of a three.js scene and rendering logic using TypeScript. 
Useful in web projects using webpack or similar browser-side packaging tool, 
simple node projects and Angular projects.

## Install

Install three-component-ts and it's dependencies
```
npm install wayneparrott/three-component-ts
```

## Create Your Own Three component
Creating your own ThreeComponent involves:
1. creating a TypeScript subclass of ThreeComponent
2. implement the abstract method populateScene()
3. optionally override the animate() method with your own custom scene animation details
3. call ThreeComponent#initThree(canvasElementOrDomContainer) to create the three.js scene and renderer
4. call ThreeComponent#render() to start the rendering loop


Following is an example rotating box implementation:

```
import { ThreeComponent } from 'three-component-ts';

export RotatingBox extends ThreeComponent {

    cube: Mesh;

    constructor() {
      initThree(); // when no canvas or html parent element is provided
                     // create a canvas element and append to <body> 
    }

    populateScene() {
      this.scene.add(new THREE.AxesHelper(200));

      const geometry = new BoxGeometry(1, 1, 1);
      const material = new MeshBasicMaterial({ color: 0x00ff00 });
      this.cube = new Mesh(geometry, material);
      this.scene.add(this.cube);
    }

    animate(): void {
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
    }
}
```



