import React, { Component } from 'react';
import { AR, Asset } from 'expo';
import ExpoTHREE, { AR as ThreeAR, THREE } from 'expo-three';
import { View as GraphicsView } from 'expo-graphics';

export default class ARView extends Component {
    constructor(props) {
        super(props);
        this.currentAsset = null;
    }    

    componentDidMount() {
        // Turn off extra warnings
        THREE.suppressExpoWarnings(true)
        ThreeAR.suppressWarnings()
    }

    onContextCreate = async ({ gl, scale: pixelRatio, width, height }) => {
        AR.setPlaneDetection('horizontal');
    
        this.renderer = new ExpoTHREE.Renderer({
          gl,
          pixelRatio,
          width,
          height,
        });
    
        this.scene = new THREE.Scene();
        this.scene.background = new ThreeAR.BackgroundTexture(this.renderer);
        this.camera = new ThreeAR.Camera(width, height, 0.01, 1000);
            
        this.scene.add(new THREE.AmbientLight(0xffffff));
    
        /// Load MTL Materials
        console.log(this.props.objUrl)
        const materials = await ExpoTHREE.loadMtlAsync({
          asset: this.props.objUrl[1],
          onAssetRequested: name => {
            console.log(name);
            return model[name];
          },
        });
      
        /// Load OBJ Mesh with materials
        const mesh = await ExpoTHREE.loadObjAsync({
          asset: this.props.objUrl[0],
          materials,
        });
        this.currentAsset = mesh
    
        ExpoTHREE.utils.scaleLongestSideToSize(mesh, 0.1);
        // ExpoTHREE.utils.alignMesh(mesh, { x: 1, y: 0 });

        let id = this.props.objUrl[0].split('/')
        id = id[id.length-1]
        if (id == 'MTQ3MDU2ODc.obj'){ // this is the tablet object
            this.currentAsset.rotation.x += 90;
        }

        this.scene.add(mesh)
    };

    // Called every frame.
    onRender = (delta) => {
        // This will make the points get more rawDataPoints from Expo.AR
        // this.points.update()
        // Finally render the scene with the AR Camera
        this.renderer.render(this.scene, this.camera);
        // this.currentAsset.rotation.x += 1 * delta;

        let id = this.props.objUrl[0].split('/')
        id = id[id.length-1]
        if (id == 'MTQ3MDU2ODc.obj'){ // this is the tablet object
            this.currentAsset.rotation.z += 0.5 * delta;
        } else {
            this.currentAsset.rotation.y += 0.5 * delta;
        }

    };

    // When the phone rotates, or the view changes size, this method will be called.
    onResize = ({ x, y, scale, width, height }) => {
        // Let's stop the function if we haven't setup our scene yet
        if (!this.renderer) {
        return;
        }
    };

    render() {
        if (this.props.objUrl) {
            return (
            <GraphicsView
              style={{ flex: 1 }}
              onContextCreate={this.onContextCreate}
              onRender={this.onRender}
              onResize={this.onResize}
              arTrackingConfiguration={AR.TrackingConfiguration.World}
              isArEnabled
              isArRunningStateEnabled
              isArCameraStateEnabled
            />
            )
        }
    }


    
}