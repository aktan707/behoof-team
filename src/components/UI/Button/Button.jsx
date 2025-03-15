import React from 'react';

const Button = ({children}) => {
    return (
        <button className={"bg-[#FF4D4D] flex items-center gap-[8px] rounded-[8px] text-white py-[16px] px-[20px]"}>{children}</button>
    );
};

export default Button;