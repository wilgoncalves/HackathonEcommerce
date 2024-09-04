import BackgroundImage from "../../assets/bg-secao-whatsapp.png";

const Contact = () => {
    return (
        <div 
        className="w-full min-h-[80vh] bg-cover bg-center flex flex-col items-center justify-center text-white text-center p-6"
        style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <h1 className="font-caveat white-normal text-[64px] mb-4">Faça seu pedido no Whatsapp</h1>
            <p className="text-[22px] mb-6">Clique no botão abaixo e fale com um atendente</p>
            <a href="https://wa.me/11999999999" 
            className="text-[20px] bg-transparent border-2 border-whatsappColor text-whatsappColor px-12 py-3 rounded-full hover:bg-whatsappColor hover:text-white transition-all"            
            rel="noopener noreferrer">Fale agora no Whatsapp</a>
        </div>
    )
}

export default Contact;