# three-component-ts

Simplifies creation of a three.js scene and its rendering logic when using TypeScript. 
If you like developing with TypeScript and three.js this class will create and 
configuration a scene with camera, lighting, renderer and control. Customize 
scene component creation by overriding and extending any of the following 
ThreeComponent methods:
```
createScene()
createCamera()
createLight()
createRenderer()
createControls()
```

**Note: you must provide a populateScene() method that customizes the scene to your purposes.**


## Install

Install three-component-ts and it's dependencies
```
npm install three-component-ts
```

## Create Your Own Three component
Creating your own ThreeComponent involves:
1. creating a TypeScript subclass of ThreeComponent
2. implement the abstract method populateScene()
3. call initThree(canvasElementOrDomContainer) to create the three.js scene and renderer
4. call startRenderer() to start the rendering loop
5. optionally override the animate() method with your own custom scene animation details

Following is an example rotating box implementation:

```
mport { ThreeComponent, AxesHelper, BoxGeometry, Mesh, MeshBasicMaterial } from 'three-component-ts';

export class RotatingBox extends ThreeComponent {

    cube: Mesh;

    constructor() {
      initThree();   // when no canvas or html parent element is provided
                     // a canvas element is created and appended to <body> 
      startRenderer();
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

## Angular
three-component-ts can be used as the super class of an Angular component as follows:

```

```



