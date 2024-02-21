import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import tempoIot from '../Assets/images/Projects/tempoIot.png'
import TerionUi from '../Assets/images/Projects/TerionUi.png'
import SandJRec from '../Assets/images/Projects/SandJRec.png'
// import Mamcet from '../Assets/images/Events/Mamcet.jpg'
// import alagappa from '../Assets/images/Events/alagappa.jpg'
import PersonalProfile from '../Assets/images/Projects/PersonalProfile.png'
import Roomrental from '../Assets/images/Projects/Roomrental.jpg'
import MediRemainder from '../Assets/images/Projects/MediRemainder.png'
import alagappaclass from '../Assets/images/Events/alagappaclass.jpg'

const ProductsPage = () => {
    const projectsData = [
        { title: 'TempoIot', description: 'Stream live data through a socket to plot real-time graphs..',pic:tempoIot , programAbb:"TempoIot"},
        { title: 'Terion', description: 'A distributor management system automating inventory, orders, customer management, and generating invoices.',pic:TerionUi , programAbb:"Terion" },
        { title: 'Job Portal', description: 'A job portal is an online platform that connects job seekers with employers, facilitating the process of job searching.',pic:SandJRec , programAbb:"Alagappa College" },
        { title: 'Personal Profile', description: 'A personal website is a digital platform for individuals to display their portfolio, achievements, and interests online.',pic:PersonalProfile , programAbb:"Personal Profile" },
        { title: 'Room Rental Managemanet', description: 'Room rental management system: bookings, tenants, payments, maintenance tracking simplified.',pic:Roomrental , programAbb:"Room Rental Managemanet" },
        { title: 'Medical Remainder App', description: 'Medical reminder: software to schedule and remind about medical appointments/tasks.',pic:MediRemainder , programAbb:"Medical Remainder App" },
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
                    PROJECTS
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
export default ProductsPage; 