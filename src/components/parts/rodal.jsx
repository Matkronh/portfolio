import React from 'react';
import Rodal from 'rodal';
import styles from '../styles/styles.module.css'
import MediaQuery from 'react-responsive'

// include styles
import 'rodal/lib/rodal.css';

class Modal extends React.Component{

  
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <button className={styles.contact} onClick={this.show.bind(this)}>Contact Me</button>
        <MediaQuery maxWidth={600}>
          <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} animation="rotate" width="240" height="120" showMask={false} closeOnEsc={true} >
              <div>
                <h2 className={styles.modaltext}>Mats Kronheim</h2>
                <h2 className={styles.modaltext}>Junior Developer</h2>
                <h2 className={styles.modaltext}>+47 48 45 82 08</h2>
                <h2 className={styles.modaltext}>mats.kodehode@gmail.com</h2>
              </div>
          </Rodal>
        </MediaQuery>

        <MediaQuery minWidth={600}>
          <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} animation="rotate" width="580" height="180" showMask={true} closeOnEsc={true} >
              <div>
                <h2 className={styles.modaltext}>Mats Kronheim</h2>
                <h2 className={styles.modaltext}>Junior Developer</h2>
                <h2 className={styles.modaltext}>+47 48 45 82 08</h2>
                <h2 className={styles.modaltext}>mats.kodehode@gmail.com</h2>
              </div>
          </Rodal>
        </MediaQuery>
      </div>
    );
  }
}

export default Modal