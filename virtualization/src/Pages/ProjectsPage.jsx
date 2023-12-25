import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';


const ProjectsPage = () => {
    const projectsData = [
        { title: 'Project 1', description: 'Description of Project 1 goes here.' },
        { title: 'Project 2', description: 'Description of Project 2 goes here.' },
        { title: 'Project 3', description: 'Description of Project 3 goes here.' },
        { title: 'Project 3', description: 'Description of Project 3 goes here.' },
        { title: 'Project 3', description: 'Description of Project 3 goes here.' },
        { title: 'Project 4', description: 'Description of Project 4 goes here.' }
    ];
    const ProjectCard = ({ title, description }) => (
        <Card>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
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
                <div className="projectTittle">
                    Projects portfolio
                </div>
                <div className="category">hai</div>
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
export default ProjectsPage; 