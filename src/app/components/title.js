'use client'
import { useRouter } from 'next/navigation';

const TitleComponent = ({title}) => {
    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    };

    return (
        <div className={`pagetitle`}>
            <h2 onClick={handleBackClick}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    fill="currentColor" 
                    className="bi bi-arrow-left-square-fill" 
                    viewBox="0 0 16 16"
                    style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate it's clickable
                >
                    <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
                </svg> 
                {title}
            </h2>
        </div>
    );
};

export default TitleComponent;
