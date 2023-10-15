import luffygear5 from "../image/luffygear5.webp"

export function ProfileText() {
    // let headerText = "Hello, this is haikal!"
    // let subHeaderText = "undergraduate student"
    // let bodyHeaderText = `
    // I am Muhammad Haikal Fauzananda, an undergraduate student in informatic engineering 
    // at Institut Teknologi Sumatera. I am interested in software engineering, 
    // especially in back-end development. I can also work on some machine learning projects, 
    // which was the topic of my undergraduate thesis.
    // `
    return (
        <div href="#" class="block p-6 bg-opacity-20 bg-gray-500 border-gray-700 rounded-lg shadow w-1/2 text-center">
            <h1 className="greeting font-mavenpro font-bold text-5xl text-gray-400">Hello, this is <span className="span-element text-yellow-100">Haikal!</span></h1>
            <h2 className="sub-greeting font-mavenpro font-semibold text-2xl text-gray-400  ">undergraduate student</h2>
            <p className="sub-greeting font-mavenpro font-medium text-1xl text-gray-400  ">I am Muhammad Haikal Fauzananda, an undergraduate student in informatic engineering
                at Institut Teknologi Sumatera. I am interested in software engineering,
                especially in back-end development. I can also work on some machine learning projects,
                which was the topic of my undergraduate thesis.</p>
        </div>
    )
}

export function ProfilePicture() {
    return (

        <img src={luffygear5} alt="foto-profile" className="profileImage h-40 w-40 rounded-full" />
    )
}

export function ProfileButtonLink(data) {
    const { colorText, colourbg, logoSrc, logolink, text } = data.props
    return (
        <>
            <a href={logolink} className="linkButton">
                <div className=" bg-indigo-300 flex flex-row p-1 w-25">
                    {logoSrc !== null ?
                        < img className="gambar object-fill  " src={logoSrc} alt={"logo " + text} /> : null}
                    <p className={`linkButtonText text-${colorText}-500 font-semibold pt-1 `}>{text}</p>
                </div>
            </a>
        </>
    )
}
