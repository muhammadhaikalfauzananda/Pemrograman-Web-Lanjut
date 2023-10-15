import { ProfileText, ProfilePicture } from "./beranda-component"
import Header from "./header"
import Footer from "./footer"
export default function ProfileBox() {
    // const profileButtons = [
    //     {
    //         logolink: "www.google.com",
    //         logoSrc: null,
    //         text: "Download CV",
    //         colourbg: "green",
    //         colorText: "black"
    //     },
    //     {
    //         logolink: "www.google.com",
    //         logoSrc: logoWhatsApp,
    //         text: "Contact me",
    //         colourbg: "red",
    //         colorText: "black"
    //     }
    // ];
    // profileButtons.map((button) => {
    //     console.log("ini button", button.logolink)
    //     // console.log("ini index", index)
    // })

    return (
        <body className="container h-screen max-w-full max-h-full flex flex-col gap-y-10 bg-gradient-to-r from-black via-gray-600 to-gray-900">
            <Header />
            <article className="container max-w-full flex flex-col items-center gap-y-10 flex-grow">
                <ProfilePicture />
                <ProfileText />
            </article>
            <Footer />
        </body>
    );
}