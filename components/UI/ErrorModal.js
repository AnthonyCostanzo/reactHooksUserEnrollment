import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from '../UI/Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

const Backdrop = (props) => {
    return <div className = {styles.backdrop} onClick = {props.handleError}></div>
}

const ModalOverlay = props => {
    return  (
    <Card className = {styles.modal}>
        <header className = {styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className = {styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className = {styles.actions}>
            <Button onClick= {props.handleError}>Okay</Button>
        </footer>
    </Card>
    )
}

const ErrorModal = props => {
    return (
        <Fragment>
        {ReactDOM.createPortal(<Backdrop handleError = {props.handleError}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} handleError={props.handleError}/>,document.getElementById('overlay-root'))}
        </Fragment>
    )

}


export default ErrorModal;

