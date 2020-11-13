import React, { useState } from 'react';

import DIRECTORY_DATA from './directory.data';

import MenuItem from '../menu-item/menu-item';
import './directory.scss';


const Directory = props => {
    const [sections, setSections] = useState(DIRECTORY_DATA);

    return (
        <div className="directory-menu">
            {sections.map(section => {
                return (
                    <MenuItem 
                        key={section.id} 
                        title={section.title}
                        imageUrl={section.imageUrl}
                        size={section.size}
                        linkUrl={section.linkUrl}
                    />
                );
            })}
        </div>
    );
};


export default Directory;