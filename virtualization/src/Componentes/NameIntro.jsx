
import { useEffect, useState } from 'react';
import developerImage from '../Assets/images/developer.png';
const NameIntro = () => {
    const [text, setText] = useState('');
    const fullText = 'Software Developer';
    useEffect(() => {
        let index = 0;

        const intervalId = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                index = 0;
            }
        }, 300); // Adjust the interval time as needed

        return () => {
            clearInterval(intervalId); // Cleanup on component unmount
        };
    }, []);
    return (
        <>
            <div className="parrentdiv md:mt-2 flex flex-col md:flex-row" >
                <div className="divleft md:w-2/5 flex flex-col items-center justify-center gap-4">
                    Hi, I am Nitheshwaran
                    <br />
                <div className='text-2xl font-bold'>Software Developer</div>
                </div>
                <div className="divright md:w-3/5 flex items-center justify-center">
                    <img src={developerImage} alt="" className="h-full object-cover" />
                </div>
            </div>

        </>

    )
}
export default NameIntro;