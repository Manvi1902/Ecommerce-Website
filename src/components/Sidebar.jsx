import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Sidebar= ()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Toggle static offcanvas
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <h4 class="H4">CATEGORIES</h4>
                    <input class="input" alt="check"  type="checkbox"  /><label>Bedsheets(1780)</label><br/>
                    <input class="input" alt="check"  type="checkbox"  /><label>Cushion Covers(1288)</label><br/>
                    <input class="input"  alt="check"  type="checkbox"  /><label>Curtains and Sheers(10009)</label><br/>
                    <input class="input" alt="check"  type="checkbox"  /><label>Wall Art(7171)</label><br/>
                    <input class="input" alt="check"  type="checkbox"  /><label>Blankets Quilts(4324)</label><br/>
                    <input class="input" alt="check"  type="checkbox"  /><label>Clocks(3771)</label><br/>
                    <input class="input" alt="check"  type="checkbox"  /><label>Bath Towels(3563)</label><br/>
                    <input class="input" alt="check"  type="checkbox"  /><label>Organisers(3437)</label><br/>
                    
                    <h3 class="H5">+113</h3><br/>
                    <hr width="100%" /><br/>

                    <h4 class="H4">BRAND</h4>
                    <input class="input" alt="check"  type="checkbox" /><label>999Store(1119)</label><br/>
                    <input class="input" alt="check"  type="checkbox" /><label>eCraftIndia(1095)</label><br/>
                    <input class="input" alt="check"  type="checkbox" /><label>The Art House(799)</label><br/>
                    <input class="input" alt="check"  type="checkbox" /><label>THE ARTMENT(688)</label><br/>
                    <input class="input" alt="check"  type="checkbox" /><label>nest ART(595)</label><br/>
                    <input class="input" alt="check"  type="checkbox" /><label>Art Street(579)</label><br/>
                    <input class="input" alt="check"  type="checkbox" /><label>ARTSPACE(522)</label><br/>

                    
                    <h3 class="H5"> + 28 more</h3><br/>
                    <hr width="100%" /><br/>

                   
                    <h4 class="H4">PRICE</h4>
                    <input class="input" alt="check"  type="checkbox" /><label>999Store(1119)</label><br/>
                    <input class="input" alt="check"  type="checkbox" /><label>eCraftIndia(1095)</label><br/>
                    <input class="input" alt="check"  type="checkbox" /><label>The Art House(799)</label><br/>
                    <input class="input"alt="check"   type="checkbox" /><label>THE ARTMENT(688)</label><br/>
                    <input class="input" alt="check"  type="checkbox" /><label>nest ART(595)</label><br/>
                    <input class="input" alt="check"  type="checkbox" /><label>Art Street(579)</label><br/>
                    <input class="input" alt="check"  type="checkbox" /><label>ARTSPACE(522)</label><br/>

                    <h4 class="H4">COLOR</h4>
                    <input class="input" alt="check"  type="checkbox"  /><label>Multi (1780)</label><br/>
                    <input class="input" alt="check"  type="checkbox"  /><label>Blue (1288)</label><br/>
                    <input class="input" alt="check"  type="checkbox"  /><label>Black (755)</label><br/>
                    <input class="input" alt="check"  type="checkbox"  /><label>White (615)</label><br/>
                    <input class="input" alt="check"  type="checkbox"  /><label>Brown (502)</label><br/>
                    <input class="input" alt="check"  type="checkbox"  /><label>Green (448)</label><br/>
                    <input class="input" alt="check"  type="checkbox"  /><label>Yellow (368)</label><br/>
                 
                    <h3 class="H5"> + 33 more</h3><br/>
                    <hr width="100%" /><br/>
                   
                    <h4 class="H4">DISCOUNT RANGE</h4>
                    <input class="input" type="radio"  /><label>  10% and above</label><br/>
                    <input class="input" type="radio"  /><label>  20% and above</label><br/>
                    <input class="input" type="radio"  /><label>  30% and above</label><br/>
                    <input class="input" type="radio"  /><label>  40% and above</label><br/>
                    <input class="input" type="radio"  /><label>  50% and above</label><br/>
                    <input class="input" type="radio"  /><label>  60% and above</label><br/>
                    <input class="input" type="radio"  /><label>  70% and above</label><br/>
                    <input class="input" type="radio"  /><label>  80% and above</label><br/><br/><br/>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;