import Header from "./header";
import Footer from "./footer";
import { KontakForm, KontakTable } from "./kontak-component";
import React, { useState } from "react";

export const Context = React.createContext()
export default function KontakBox() {
    const [dataPesan, setDataPesan] = useState([])
    return (
        <Context.Provider value={[dataPesan, setDataPesan]}>
            <body className="container h-screen max-w-full max-h-full flex flex-col justify-between bg-gradient-to-r from-black via-gray-600 to-gray-900">
                <div className="flex flex-col gap-10">
                    <Header />
                    <div className="flex justify-center">
                        <KontakForm />
                    </div>
                    <div className="flex justify-center">
                        <KontakTable />
                    </div>
                </div>
                <Footer className="mt-auto" />
            </body>
        </Context.Provider>
    )
}

// Untuk Testing
// test('Testing Jumlah Pesan', () => {
//     render(<KontakTable />);

//     const JudulElement = getByTestId('judulJumlahPesan');
//     const JumlahPesan = getByTestId('jumlahPsean');

//     expect(JudulElement).toBeInTheDocument();
//     expect(JumlahPesan).toBeInTheDocument();
// });