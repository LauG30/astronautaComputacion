function loadObject1() {
    const gltfLoader = new THREE.GLTFLoader();
    gltfLoader.load("objetos/object.glb", (miObjeto) => {
        mesh = miObjeto.scene;
        mesh.children[0].material = new THREE.MeshNormalMaterial();
        scene.add(mesh);
        mesh.position.set(-3, 1, 1);
        mesh.name = "objetoGLTF";
        controls.update();
    });
}