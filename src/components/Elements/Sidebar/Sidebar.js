    import React, { Component } from 'react';
    import Channels from './Channels/channels';
    import DirectMessages from './DirectMessages/directMessages';
    class Sidebar extends Component {
        render() {
            return (
                
            
                <div class="sidenav bg-dark">
                    <div class="nav nav-bordered nav-stacked flex-column">

                        <div class="profile-title">
                            <span class="profile-title-avatar">N</span>
                            <a class="profile-title-link profile-name-margin" href="#">Nigga_plzz</a>
                        </div>

                        <div class="nav-divider"></div>

                        <Channels/>
                        
                        <div class="nav-divider"></div>
                        
                    <DirectMessages/>
                        
                    </div>
                </div>
        
        
            );
        }
    }

    export default Sidebar;