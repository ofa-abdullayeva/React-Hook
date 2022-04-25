import { Component, useState  ,useEffect} from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }


const Slider = (props) => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoPlay] = useState(false)

    const changeSlide = (i) => {
        setSlide(slide => slide + i)

    }

    const toggleAutoplay = () => {
        setAutoPlay(autoplay => !autoplay)
    }
    // const [state, setState] = useState({
    //     slide: 0,
    //     autoplay: false
    // })

    // useEffect(()=>{
    //     console.log('her defe render')
    //     document.title= `autoplay: ${autoplay}`
    // })

    // useEffect(()=>{
    //     console.log('1 defe yuklenir')
    //     document.title= `slide: ${slide}`
    // },[])

    useEffect(()=>{
        console.log('Yalniz slide render olunur')
        document.title= `slide: ${slide}`
    },[slide])

    // const changeSlide = (i) => {
    //     setState({ ...state, slide: state.slide + i })

    // }

    // const toggleAutoplay = () => {
    //     setState({ ...state, autoplay: !state.autoplay })

    // }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide}</div>{autoplay ? 'auto' : null}
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}
                    >-1</button>
                    <button
                        onClick={() => changeSlide(1)}
                        className="btn btn-primary me-2"
                    >+1</button>
                    <button
                        onClick={toggleAutoplay}
                        className="btn btn-primary me-2"
                    >toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


function App() {
    return (
        <Slider />
    );
}

export default App;
