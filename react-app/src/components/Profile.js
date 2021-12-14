import React, { Component } from "react"

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowTitle: false
        }
    }

    render() {
        return (
            <div className="profile-container" key={this.props.name}>
                <img alt={`${this.props.name}'s photo`} width={125} src={this.props.imageUrl} />
                <div>
                    <h1>{this.props.name}</h1>
                    {this.state.isShowTitle ? <p>{this.props.title}</p> : undefined}
                </div>
                <div>
                    <h4>{this.props.selfintro}</h4>
                    <h4>{this.props.motivate}</h4>
                </div>

                <button
                    onClick={() => this.setState({ isShowTitle: !this.state.isShowTitle })}
                    className={this.state.isShowTitle ? "btn-title-hide" : "btn-title-show"}
                >
                    {this.state.isShowTitle ? "Hide Title" : "Show Title"}
                </button>
            </div>
        )
    }
}

export default Profile;
