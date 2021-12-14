import React, { Component } from "react"
import Profile from "./Profile"
import profiles from '../data/profile-data'

class ProfileDisp extends Component {
    render() {
        return (
            <div>
                {profiles.map(profile => {
                    return <Profile key={profile.name} 
                    name={profile.name} 
                    title={profile.title} 
                    selfintro={profile.selfintro} 
                    motivate={profile.motivate} 
                    imageUrl={profile.imageUrl} />
                })}
            </div>
        )
    }
}

export default ProfileDisp;