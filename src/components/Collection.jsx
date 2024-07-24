import React from 'react';
import Imgs from './Imgs';

const Collection = () => {
    return (
        <>
                <div className="flex flex-wrap justify-right">
                    {Imgs.map((imagem, index) => (
                        <div key={index} className="max-w-sm mx-4 mb-8 bg-white rounded-lg overflow-hidden">
                            <div className="text-center">
                                <img src={imagem.imagem} className="rounded" alt="Imagem do produto"  />
                            </div>
                            
                            <div className="px-6 pt-4 pb-2">
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded absolute top-1/2 rigtht-1/2 transform-translate-x-1/2-translate-y-1/2">
                                    Comprar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
        </>
    );
}

export default Collection;