import React from 'react';

const BestCard = ({text, img}) => {
    return (
        <div className={"w-[164px]"}>
            <div className={"bg-[#F2F5F9] flex items-center justify-center  rounded-[12px] overflow-hidden "}>
                <img className={"w-[124px] h-[124px]"} src={img} alt=""/>
            </div>

            <p className={"text-center"}>{text}</p>

        </div>
    );
};

export default BestCard;