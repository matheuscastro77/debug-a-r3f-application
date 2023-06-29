import { OrbitControls } from '@react-three/drei'
import { useControls, button } from 'leva'
import { Perf } from 'r3f-perf';

export default function Experience()
{

    const {position, color, visible, perfVisible} = useControls('sphere', {
        position:{
            value: {x: -2, y: 0},
            step: 0.01,
            joystick: 'invertY'
        },
        color: '#ff0000',
        visible: true,
        myInterval: {
            min: 0,
            max: 10,
            value: [ 4, 5 ]
        },
        clickMe: button(() => {
            console.log('ok');
        }),
        choice: {
            options: ['a', 'b', 'c']
        },
        perfVisible: false
        
    })

    const {scale} = useControls('cube', {
        scale:{
            value: 1.5,
            min:0,
            max: 5,
            step: 0.01,
        }
        
    })

    return <>

        {perfVisible && <Perf position="top-left"/>}

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh position={ [position.x, position.y, 0] } visible = {visible}>
            <sphereGeometry />
            <meshStandardMaterial color={color} />
        </mesh>

        <mesh position-x={ 2 } scale={ scale }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}