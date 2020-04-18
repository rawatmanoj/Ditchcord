    import React, { Component } from 'react';
    import Channels from './Channels/channels';
    import DirectMessages from './DirectMessages/directMessages';
    class Sidebar extends Component {
        render() {
            return (
                
            
                <div className="sidenav bg-dark">
                    <div className="nav nav-bordered nav-stacked flex-column">

                        <div className="profile-title">
                            <span className="profile-title-avatar">N</span>
                            <a className="profile-title-link profile-name-margin" href="/#">Nigga_plzz</a>
                        </div>

                        <div className="nav-divider"></div>

                        <Channels/>
                        
                        <div className="nav-divider"></div>
                        
                    <DirectMessages/>
                        
                    </div>
                </div>
        
        
            );
        }
    }

    export default Sidebar;