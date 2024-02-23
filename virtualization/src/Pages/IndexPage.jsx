import React from 'react';
import TopNav from '../Componentes/TopNav';
import NameIntro from '../Componentes/NameIntro';
import ProjectsPage from './EventsPage';

const IndexPage = () => {

    return (
        <>
            <div className="containterpage md:mx-8">
                <br /><br /><br /><br />
                <NameIntro />
                <br />
                <br />
                <ProjectsPage />
                <br />
            </div>
        </>
    );
};

export default IndexPage;
{/* <br /> */ }
{/* <div className="hai relative mt-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illo vero quos! Quae atque alias, provident voluptate deserunt est, fugiat numquam unde iste cupiditate vel harum dolores commodi error soluta!
                </div> */}