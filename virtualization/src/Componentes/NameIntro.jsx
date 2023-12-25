
import developerImage from '../Assets/images/developer.png';
const NameIntro = () => {
    return (
        <>
            <div className="parrentdiv md:mt-2 flex flex-col md:flex-row" >
                <div className="divleft md:w-2/5 flex items-center justify-center gap-4">
                    Nitheshwaran
                    <br />
                    <span>Software Developer</span>
                </div>
                <div className="divright md:w-3/5 flex items-center justify-center">
                    <img src={developerImage} alt="" className="h-full object-cover" />
                </div>
            </div>

        </>

    )
}
export default NameIntro;