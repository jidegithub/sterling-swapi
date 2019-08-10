import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="form-group">
                <select value={this.props.option} onChange={this.props.onChange} name={this.props.name}>
                    <option>..</option>
                    {this.props.options.map((option, index) => (
                        <option key={index} value={option.textContent}>
                            {option}
                        </option>
                    ))}
                </select>
        </div>
        )
    }
}

