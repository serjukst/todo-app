import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    onLabelChange = (e) => {
        console.log(e.target.value)
    }

    render() {
        return (
            <form className='item-add-form d-flex'>
                <input type="text" 
                        className="form-control"
                        onChange={this.onLabelChange}
                        placeholder="What need to be done?">
                        </input>
                <button className='btn btn-outline-secondary'
                        onClick={() => this.props.onItemAdded('Hello World!')}>
                Add item</button>
            </form>
        )
    }
}
