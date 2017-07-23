var init=function(){
	//描画レンダラーを作る
	var renderer = new THREE.WebGLRenderer();

	renderer.setSize(800,600);

	//canvasをbodyに追加
	document.body.appendChild(renderer.domElement);

	//シーンを作成
	var scene=new THREE.Scene();

	//カメラを置く
	var camera=new THREE.PerspectiveCamera(45,800/600,1,1000);
	camera.position.set(0,0,0);

	var geometry = new THREE.BoxGeometry(1, 1, 1);
	var material = new THREE.MeshPhongMaterial({ color: 0x0000ff });
	var box = new THREE.Mesh(geometry,material);
	box.position.z=-5;

	scene.add(box);


	//ライトを作成
	var light = new THREE.DirectionalLight(0xffffff);

	//シーンに追加
	scene.add(light);

	//ライトの位置を変更
	light.position.set(1,1,1);


	( function renderLoop(){
		window.requestAnimationFrame(renderLoop);
		box.rotation.set(
			0,
			box.rotation.y +0.01,
			box.rotation.z +0.01
		)

		//描画
		renderer.render(scene,camera);
	})();
};
window.addEventListener("DOMContentLoaded",init);

