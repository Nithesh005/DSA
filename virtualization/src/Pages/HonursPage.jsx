import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import tempoIot from '../Assets/images/Projects/tempoIot.png'
import TerionUi from '../Assets/images/Projects/TerionUi.png'
import SandJRec from '../Assets/images/Projects/SandJRec.png'
// import Mamcet from '../Assets/images/Events/Mamcet.jpg'
import MamcetJava from '../Assets/images/Events/MamcetJava.jpg'
// import alagappa from '../Assets/images/Events/alagappa.jpg'
import PersonalProfile from '../Assets/images/Projects/PersonalProfile.png'
import mamcet2ndyr from '../Assets/images/Events/mamcet2ndyr.jpg'
import alagappaclass from '../Assets/images/Events/alagappaclass.jpg'

const HonursPage = () => {
    const projectsData = [
        { title: 'Vellamal Intern Program', description: 'Successfully organized and executed the 14-day Vellamal Intern Program.',pic:tempoIot , programAbb:"Vellamal InternShip Program"},
        { title: 'Mamcet Java Trainer', description: 'Guided MAMCET final year students as a Java Trainer, fostering their programming expertise.',pic:TerionUi , programAbb:"Mamcet Java" },
        { title: 'Mamcet Java Trainer', description: 'Provided real-world Object-Oriented Programming (OOPs) training for MAMCET second-year students.',pic:MamcetJava , programAbb:"Mamcet" },
        { title: 'Alagappa Inauguration', description: 'Attended the inauguration function at Alagappa College.',pic:SandJRec , programAbb:"Alagappa College" },
        { title: 'Alagappa College', description: 'Imparted industry guidelines to students for professional development.',pic:PersonalProfile , programAbb:"Alagappa College" },
        { title: 'Alagappa Python', description: 'Instructed Alagappa pre-final year students in Python, refining logical and programming skills.',pic:alagappaclass , programAbb:"Alagappa College" }
    ];
    const ProjectCard = ({ title, description , pic , programAbb}) => (
        <Card sx={{ height: '100%' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={pic}
                title={programAbb}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ height: '70px', overflowY: 'auto',scrollbarWidth: 'thin' }}>
                    {description}
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo magni reiciendis cupiditate sed? Fugit voluptate, omnis aperiam tempora praesentium eaque esse, dolorum accusamus libero neque perferendis nobis optio cum? */}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
    return (
        <>
        <br /><br /><br /><br />
            <div className="projects">
                <div className="projectTittle text-center font-bold text-2xl">
                Honurs
                </div>
                <br />
                {/* <div className="category">hai</div> */}
                <div className="projectCards flex flex-wrap gap-4 justify-center">
                    {projectsData.map((project, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                            <ProjectCard key={index} {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default HonursPage; 