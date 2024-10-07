import React from 'react';

function NoPage({ error }) {
    return (
        <div className="flex justify-center items-center h-96 text-center text-primary-text px-3">
            <div className="py-4 px-16 md:px-24 bg-primary-bg rounded-lg shadow-lg flex flex-col gap-3">
                <h1 className="text-3xl md:text-4xl font-semibold">Oops...</h1>
                <p className="text-2xl md:text-3xl font-medium mb-10">{ error }</p>
                <a href="/" className="bg-gradient-to-r from-blue-900 to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform duration-500 hover:scale-110 hover:shadow-2xl text-lg md:text-xl">Go Back Home</a>
            </div>
        </div>
    );
}

export default NoPage;
