import React, {
    Component,
    Fragment,
    useEffect,
    useRef
} from 'react';
// import './index.scss'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const T = THREE;


var scene, renderer, camera, stats, control;
var model, skeleton, mixer, clock, clips;
var temp = new THREE.Vector3;

var crossFadeControls = [];

var idleAction, walkAction, runAction;
var idleWeight, walkWeight, runWeight;
var actions, settings;

var singleStepMode = false;
var sizeOfNextStep = 0;



export default props => {

    const divEl = useRef(null)

    useEffect(() => {

        // var renderer = new T.WebGLRenderer({ alpha: true });
        // renderer.setSize(window.innerWidth, window.innerHeight);

        var container = divEl.current;

        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(1, 2, -3);
        camera.lookAt(0, 1, 0);

        camera.name = "MainCamera";
        // console.log(camera);
        var helper = new THREE.CameraHelper(camera);

        clock = new THREE.Clock();

        scene = new THREE.Scene();

        scene.add(helper);

        scene.background = new THREE.Color(0xa0a0a0);
        scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);

        var hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
        hemiLight.position.set(0, 20, 0);
        scene.add(hemiLight);

        var dirLight = new THREE.DirectionalLight(0xffffff);
        dirLight.position.set(- 3, 10, - 10);
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 2;
        dirLight.shadow.camera.bottom = - 2;
        dirLight.shadow.camera.left = - 2;
        dirLight.shadow.camera.right = 2;
        dirLight.shadow.camera.near = 0.1;
        dirLight.shadow.camera.far = 40;
        scene.add(dirLight);

        // scene.add( new CameraHelper( light.shadow.camera ) );

        // ground

        var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(100, 100), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add(mesh);

        var loader = new GLTFLoader();


        // camera.lookAt( scene.position );

        window.scene = scene;
        window.THREE = THREE;


        loader.load('/soldier.glb', (gltf) => {
            model = gltf.scene;
            model.rotation.y = 2.9;
            scene.add(model);
            model.traverse((object) => {

                if (object.isMesh) object.castShadow = true;

            });

            
            skeleton = new THREE.SkeletonHelper(model);
            skeleton.visible = false;
            scene.add(skeleton);

            clips = gltf.animations;

            mixer = new THREE.AnimationMixer(model);
            // var animations = model.animations;
            console.log(clips);


            // [left, right, elbow, jump]
            mixer.clipAction(THREE.AnimationClip.findByName(clips, 'Idle')).play();
            // idleAction = mixer.clipAction(animations[0]);
            // walkAction = mixer.clipAction(animations[3]);
            // runAction = mixer.clipAction(animations[1]);

            // actions = [idleAction, walkAction, runAction];


            keyBinder();
            updateFixed();

        });
        // loader.load( 'models/gltf/Soldier.glb', function ( gltf ) {

        // model = gltf.scene;
        // scene.add( model );

        // model.traverse( function ( object ) {

        // 	if ( object.isMesh ) object.castShadow = true;

        // } );

        // //

        // skeleton = new THREE.SkeletonHelper( model );
        // skeleton.visible = false;
        // scene.add( skeleton );

        // //

        // createPanel();


        //

        // var animations = gltf.animations;

        // mixer = new THREE.AnimationMixer( model );

        // idleAction = mixer.clipAction( animations[ 0 ] );
        // walkAction = mixer.clipAction( animations[ 3 ] );
        // runAction = mixer.clipAction( animations[ 1 ] );

        // actions = [ idleAction, walkAction, runAction ];

        // activateAllActions();

        // animate();

        // });
        renderer = new THREE.WebGLRenderer({ antialias: true });

        control = new OrbitControls(camera, renderer.domElement)
        // scene.add(control);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);
        renderer.render(scene, camera);
        // control.position0.z = 80
    }, [])

    const updateFixed = () => {
        requestAnimationFrame(updateFixed);
        // console.log('hi');

        temp.setFromMatrixPosition(model.matrixWorld);
        mixer.update(clock.getDelta());

        // camera.position.lerp(temp, 0.2);
        control.update();
        // console.log(model.position);
        camera.lookAt( new THREE.Vector3(model.position.x, model.position.y + 1, model.position.z));
        renderer.render(scene, camera);

        
    }

    const keyBinder = () => {
        window.addEventListener('keyup', (evt) => {
            // clips.forEach((clip) => {
            //     // clip.stop();
            //     mixer.clipAction(clip).stop();
            // })
            mixer.stopAllAction();

            // console.log(evt.keyCode);


            switch(evt.keyCode) {
                case 74:
                    mixActive('right');
                    // mixer.clipAction(THREE.AnimationClip.findByName(clips, 'right')).play();
                    break;
                case 75:
                    mixActive('left');
                    break;
                case 32:
                    mixActive('jump');
                    break;
                default:
                    mixActive('Idle');

                    return;
            }
        }, false)
    }

    const mixActive = (name) => {
        let action = mixer.clipAction(THREE.AnimationClip.findByName(clips, name));
        
        action.setLoop( name !== "Idle" ? THREE.LoopOnce : THREE.LoopRepeat ); 
        action.clampWhenFinished = true; 
        // action.setLoop(THREE.LoopOnce, 1);
        action.fadeIn(0.5);
        action.play();

    }
    return (
        <div style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }} ref={ divEl }></div>
    )
}