import React,{Component} from 'react';
import Classes from './Cases.module.css';
import Veneers from './Veneers/Veneers';
import Operative from './Operative/Operative';
import Pedo from './Pedo/Pedo';
import Implants from './Implants/Implants';
import Whitening from './Whitening/Whitening';
import Endo from './Endo/Endo';
import Crowns from'./Crowns/Crowns';
import AnteriorComposite from './AnteriorComposite/AnteriorComposite';

class cases extends Component {
    constructor() {
      super();
      this.state = {
        name: "React",
        showHideCROWNS: false,
        showHideA: false,
        showHideEndo: false,
        showHideImplants: false,
        showHideOperative: false,
        showHidePedo: false,
        showHideVeneers: false,
        showHideWhitening: false
      };
      this.hideComponent = this.hideComponent.bind(this);
    }
    hideComponent(name) {
        if(this.state.showHideCROWNS===true||this.state.showHideA ===true||this.state.showHideEndo ===true||this.state.showHideImplants ===true||this.state.showHideOperative ===true||this.state.showHidePedo ===true||this.state.showHideVeneers ===true||this.state.showHideWhitening ===true)
        {
            this.state.showHideCROWNS=false;
            this.state.showHideA =false;
          this.state.showHideEndo=false;
          this.state.showHideImplants= false;
          this.state.showHideOperative= false;
          this.state.showHidePedo= false;
          this.state.showHideVeneers= false;
          this.state.showHideWhitening= false;

        }
        switch (name) 
        {
          case "showHideCROWNS":
            this.setState({ showHideCROWNS: !this.state.showHideCROWNS });
            break;
          case "showHideA":
            this.setState({ showHideA: !this.state.showHideA });
            break;
            case "showHideEndo":
            this.setState({ showHideEndo: !this.state.showHideEndo });
            break;
            case "showHideImplants":
            this.setState({ showHideImplants: !this.state.showHideImplants });
            break;
            case "showHideOperative":
            this.setState({ showHideOperative: !this.state.showHideOperative });
            break;
            case "showHidePedo":
            this.setState({ showHidePedo: !this.state.showHidePedo });
            break;
            case "showHideVeneers":
            this.setState({ showHideVeneers: !this.state.showHideVeneers });
            break;
            case "showHideWhitening":
            this.setState({ showHideWhitening: !this.state.showHideWhitening });
            break;
          default:
            return null;
        }
      }
    
      render() {
        const { showHideCROWNS, showHideA,showHideEndo,showHideImplants,showHideOperative,showHidePedo,showHideVeneers,showHideWhitening } = this.state;
        return (
          <div>
                <div className={Classes.Cases}>
              <button  active onClick={() => this.hideComponent("showHideCROWNS")}>
                Crowns
              </button>
              <button active onClick={() => this.hideComponent("showHideA")}>
                AnteriorComposite
              </button>
              
              <button active onClick={() => this.hideComponent("showHideEndo")}>
                Endo
              </button>
              <button onClick={() => this.hideComponent("showHideImplants")}>
                Implants
              </button>
              <button onClick={() => this.hideComponent("showHideOperative")}>
            Operative
              </button>
              <button onClick={() => this.hideComponent("showHidePedo")}>
                Pedo
              </button>
              <button onClick={() => this.hideComponent("showHideVeneers")}>
                Veneers
              </button>
              <button onClick={() => this.hideComponent("showHideWhitening")}>
                Whitening
              </button>
            </div>
            {showHideCROWNS && <Crowns/>}
           
            {showHideA && <AnteriorComposite />}
            
            {showHideEndo && <Endo />}
            
            {showHideImplants && <Implants />}
            
            {showHideOperative && <Operative />}
            
            {showHidePedo && <Pedo />}
            
            {showHideVeneers && <Veneers />}
            
            {showHideWhitening && <Whitening />}
            
           
          
          </div>
        )
      }
    }
    
export default cases;