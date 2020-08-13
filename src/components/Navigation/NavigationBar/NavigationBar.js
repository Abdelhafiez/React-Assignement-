import React from 'react';
import Toolbar from '../../Toolbar/Toolbar';
import ToolbarButton from '../../Toolbar/ToolbarButton/ToolbarButton';

import { FiMessageCircle, FiSettings } from 'react-icons/fi';
import { TiMessages } from 'react-icons/ti';
import { BsFillPersonFill } from 'react-icons/bs';

export default function NavigationBar(props) {

    let navigationList = [
        {
            name:"Home",
            icon:(
                <ToolbarButton key="Home">
                    <FiMessageCircle />
                </ToolbarButton>
            )   
        },
        {
            name:"Conversations",
            icon:""
        },{
            name:"Profile",
            icon:""
        },{
            name:"Settings",
            icon:""
        }
    ];

    const renderElements = () => {
        // ToDo
    }

    return (
        <div className="navigation-bar">
            <div className="navigation-bar-item">
                <Toolbar
                    title="Home"
                    leftItems={[
                        <ToolbarButton key="Home">
                            <FiMessageCircle />
                        </ToolbarButton>
                    ]}
                    rightItems={[]}
                />
            </div>
            <div className="navigation-bar-item">
                <Toolbar
                    title="Conversations"
                    leftItems={[
                        <ToolbarButton key="Conversations">
                            <TiMessages />
                        </ToolbarButton>
                    ]}
                    rightItems={[]}
                />
            </div>
            <Toolbar
                title="Profile"
                leftItems={[
                    <ToolbarButton key="Profile">
                        <BsFillPersonFill />
                    </ToolbarButton>
                ]}
                rightItems={[]}
            />


            <Toolbar
                title="Settings"
                leftItems={[
                    <ToolbarButton key="Settings">
                        <FiSettings />
                    </ToolbarButton>
                ]}
                rightItems={[]}
            />  
            
        </div>
    );
}