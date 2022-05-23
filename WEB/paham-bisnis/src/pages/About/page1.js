import react, {Component} from 'react';
import { Button } from '../../component/Button';
import '../About/about.css'

class AboutPage1 extends Component{
  render(){
    return(
      
        <div className='bg-about1'>
            <div className='logo2'></div>
                <div className='detail-about'>
                    <p className='textabout-detail'>Paham Bisnis adalah suatu website dan aplikasi online course  untuk membantu para pebisnis dan pemula dari berbagai umur dan kalangan  yang terkena masalah tidak mengetahui cara membuat atau mengembangkan usaha  dengan sistem course dengan berbagai fitur unggulan, seperti learning path untuk mengarahkan pembisnis atau calon pembisnis yang bingung mau belajar dari mana tentang bisnis.</p>
                </div>
            <div className='btn-about'>
                <a href='/about2'><Button>Next</Button></a>
            </div>
        </div>
    );
  }
}


export default AboutPage1