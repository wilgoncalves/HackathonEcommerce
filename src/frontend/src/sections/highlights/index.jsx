const Hightlights = () => {
    return (
        <div className="flex flex-col w-full md:w-full mt-6 md:mt-10 lg:mt-20 items-center bg-darkerRed">
            <div className="bg-gradient-to-r from-redNormal via-redNormal to-darkRed w-full font-outfit font-semibold px-4 md:px-8 py-4 text-whiteNormal text-center">
                QUALIDADE - PEDIDO ONLINE - ENTREGA RÁPIDA - PRODUTOS FRESCOS
            </div>
            <div className="flex flex-col w-full md:w-[95%] mt-6 md:mt-10 lg:mt-20">
                <div className="font-caveat white-normal text-[30px] md:text-[50px] lg:text-[50px] text-left text-whiteNormal">
                    <h2>Destaques</h2>
                </div>
            </div>
        </div>
    )
}

export default Hightlights