import React from 'react';

const AboutCard = ({icon, heading, text}) => {
    return (
        <div className="flex flex-col text-start border rounded-2xl py-12 px-8 hover:scale-105 duration-300 ease-in">
            <div>
                <div className="bg-[#00d8ff] inline-flex p-2 rounded-full">{icon}</div>
                <h3 className="text-xl font-bold py-4">{heading}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default AboutCard;