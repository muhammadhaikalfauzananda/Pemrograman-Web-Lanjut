import Header from "./header";
import Footer from "./footer";
import { TentangCard } from "./tentang-component";

export default function TentangBox() {
    const isiCard = [
        ["Sistem Tertanam", "Mengimplementasika beberapa sensor dengan mikrokontroller berbasis Arduino IDE", "Membuat penguncian pintu otomatis dengan menggunakan sensor RF-ID untuk membaca kartu unutk membuka grendel pintu dah hasil pembacaan kartu akan dikirimkan ke notifikasi telegram"],
        ["Pemrograman Aplikasi Mobile", "Mengimplementasikan library react-native untuk membuat aplikasi mobile", "Membuat aplikasi penjualan gadget bekaas dengan layanan database terhubung dengan firebase"],
        ["Pemrogrman Berorientasi Obejek", "Mengimplementasikan objek oriented programming dengan bahasa python", "Membuat aplikasi permainan mamanukan dengan konsep object oriented programming dengan bahasa python"],
        ["Information Retrieval", "Mengimplementasikan bahasa python untuk mencari infromasi yang relevan berdasrkan input pengguna", "Membuat aplikasi pencarian berita paling relevan dengan TF-IDF  berbasis bahasa python "]
    ]
    return (
        <body className="container max-w-full flex flex-col gap-y-10 bg-gradient-to-r from-black via-gray-600 to-gray-900">
            <Header />
            <div className="card flex flex-col justify-center gap-y-2 items-center ">
                {isiCard.map((card) => (
                    <TentangCard props={card} />
                ))}
            </div>
            < Footer />
        </body>

    )
}


// Untuk Testing
// test('Testing card yang muncul', () => {
//     render(<TentangCard />);

//     const JudulCard = getByTestId('judulCard');
//     const SubJudulCard = getByTestId('SubJudulCard');
//     const isiCard = getByTestId('IsiPesan');

//     expect(JudulElement).toBeInTheDocument();
//     expect(JumlahPesan).toBeInTheDocument();
// });