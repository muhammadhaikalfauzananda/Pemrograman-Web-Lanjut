import React, { useState } from "react";

export function TentangCard({ props }) {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };
    const [judul, subjudul, isi] = props
    return (
        < div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
            <div className="p-5">
                <h5 id="judulCard" className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{judul}</h5>
                <p id="subJudulCard" className="mb-3 font-normal text-gray-700 dark:text-gray-400">{subjudul}</p>
                <button
                    onClick={toggleDropdown}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                >
                    Deskripsi Lengkap
                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                <div
                    className={`z-10 ${isDropdownVisible ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow max-w-2xl dark:bg-gray-700`}
                >
                    <p id="isiJudulCard" className="text-white">
                        {isi}
                    </p>
                </div>
            </div>
        </div >
    );
}
