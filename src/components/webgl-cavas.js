import React, {
    Component,
    Fragment,
    useEffect,
    useRef
} from 'react';
// import './index.scss'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const T = THREE;






export default props => {

    const divEl = useRef(null)

    useEffect(() => {

        var scene = new T.Scene();
        var camera = new T.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        // var light = new T.HemisphereLight( 0xffffbb, 0x080820, 1 );
        var light = new T.AmbientLight(0x404040); // soft white light

        var renderer = new T.WebGLRenderer({ alpha: true });
        renderer.setSize(200, 200);
        divEl.current.appendChild(renderer.domElement);

        var geometry = new T.BoxGeometry(3, 3, 3);
        var material = new T.MeshBasicMaterial({ color: 0xff00ff });
        var cube = new T.Mesh(geometry, material);
        scene.add(cube, light);

        camera.position.z = 5;

        var animate = function () {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();
    }, [])
    return (
        <div style={{ position: 'absolute', top: 0, width: '200px', height: '200px' }} ref={divEl}></div>
    )
}