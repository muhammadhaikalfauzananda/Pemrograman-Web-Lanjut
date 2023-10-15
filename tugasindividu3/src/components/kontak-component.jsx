import React, { useState, useContext } from "react"
import { Context } from "./kontak-box";
import { render, screen } from '@testing-library/react';


export function KontakForm() {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const openForm = () => {
        setIsFormOpen(!isFormOpen)
    }
    const [dataPesan, setDataPesan] = useContext(Context)
    const [email, setEmail] = useState('')
    const [pesan, setPesan] = useState('')
    const submit = () => {
        setDataPesan([...dataPesan, [email, pesan]]);
    }
    // console.log('isi data pesan', dataPesan)
    return (
        <>
            <button onClick={openForm} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Kontak Saya
            </button>

            <div className={`fixed top-0 left-0 right-0 z-50 ${isFormOpen ? '' : 'hidden'}`} id="authentication-modal" tabIndex="-1" aria-hidden="true">
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="relative max-w-md w-full bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={openForm} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Hubungi Saya</h3>
                            <form className="space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Anda </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="nama@email.com"
                                        required />

                                </div>
                                <div>
                                    <label htmlFor="text" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Silahkan Isi Pesan Anda</label>

                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        value={pesan}
                                        onChange={(e) => setPesan(e.target.value)}
                                        placeholder="Silahkan Isi Pesan Anda"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-20 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    />
                                </div>
                                <button onClick={() => {
                                    if (email !== '' && pesan !== '') {
                                        openForm();
                                        submit();
                                        setEmail('');
                                        setPesan('');
                                    }
                                }} type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Kirim Pesan
                                </button>

                            </form>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export function KontakTable() {
    const [dataPesan, setDataPesan] = useContext(Context)
    return (

        <div class="relative overflow-x-auto">
            <div className="flex flex-col text-center">
                <p id="judulJumlahPesan" className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Jumlah Pesan Masuk</p>
                <p id="jumlahPesan" className="font-medium text-gray-900 whitespace-nowrap dark:text-white">{dataPesan.length}</p>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Pesan
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dataPesan.map((data) => (
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {data[0]}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {data[1]}
                            </th>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}
