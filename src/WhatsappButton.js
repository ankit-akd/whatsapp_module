import React from 'react';


const WhatsappButton = ({phoneNumber,message}) =>{
    const handleWhatsappClick = () =>{
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl,'_blank');
    };

    return(
        <div onClick={handleWhatsappClick} 
        style={{
            cursor:'pointer',
            position:'fixed',
            bottom:'20px',
            left:'20px',
            zIndex:'1000'
            }}>
        <img 
            src={require('./wa.jpeg')}
            alt="WhatsApp"
            style={{width: '100px', height: '100px'}}
        />
        </div>
    );
};
export default WhatsappButton;