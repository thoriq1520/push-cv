import react, {Component} from 'react';
import '../LandingPage/LandingPage.css'
import { Button } from '../../component/Button';
import Navbar from '../../component/Navbar/Navbar';

class LandingPage extends Component{
  render(){
    return(
      
      <div className='bg-color'>
        <Navbar/>
             <div >
               <p className='font-atas'> Make  Your Business  Grow!</p>
               <p className='font-bawah'> Ayo bergabung bersama kami dan kembangkan bisnismu!</p>
              
             </div>
             <div className='button-belajar'>
                <Button>Mulai Belajar</Button>
             </div>
             
              </div>
    );
  }
}


export default LandingPage