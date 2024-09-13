import React from 'react'

import { Panel } from 'primereact/panel';
import { Avatar } from 'primereact/Avatar';
import { Button } from 'primereact/button';

const ShareThoughtsPanel = () => {
    const headerTemplate = (options: string) => {
        const className = `${options?.className} flex justify-content-space-between`;

        return (
            <div className={className}>
                <div className="flex align-items-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="large" shape="circle" />
                    <span className="flex items-center font-semibold">Amy Elsner</span>
                </div>
            </div>
        );
    };

    const footerTemplate = (options: string) => {
        const className = `${options?.className} flex flex-wrap align-items-center justify-content-between gap-3`;

        return (
            <div className={className}>
                <div className="flex align-items-center gap-2">
                    <Button 
                        className='flex gap-4 py-2 px-4 items-center text-start ring-0 border-none bg-gray-lightest'
                        rounded
                    >
                        <p className='font-semibold max-lg:hidden'>Work</p>
                    </Button>
                </div>
            </div>
        );
    };

    return (
        <Panel headerTemplate={headerTemplate} footerTemplate={footerTemplate}>
            <p className="m-0">
                Share your thoughts...
            </p>
        </Panel>
    )
}

export default ShareThoughtsPanel