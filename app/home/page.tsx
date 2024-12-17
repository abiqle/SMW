import Image from "next/image";

const HomePage = () => {
    return (
        <div id="home" className=" h-screen flex justify-center items-center">
            <div className=" w-60">
                <Image
                    src="/homepc.jpeg"
                    alt="Home Pic"
                    height={1000}
                    width={1000}
                    className=" bg-cover"
                />
            </div>
            <div className="w-60">
                <h1>
                    SMW Films and Production
                </h1>
                <p>
                    SMW Films and Production, part of SMW Media, specializes in music, short films, web series, and event management. We create captivating stories, impactful music, and memorable experiences. Our mission is to inspire and entertain with high-quality production and innovative storytelling.
                </p>
            </div>
        </div>
    );
}

export default HomePage;