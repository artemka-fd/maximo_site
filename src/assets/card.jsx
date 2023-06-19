export default function card({ bgImg, header }) {
    return(
        <div className="w-48 bg-gray-400 rounded-xl" style={{height: '300px', backgroundImage: `url(${bgImg})`, backgroundSize: 'cover',}}>
            <div className="w-full h-full flex flex-col-reverse p-5 bg-gray-400 rounded-xl" style={{backgroundColor: "#00000044"}}>
                <p className="text-center text-2xl text-white">{header}</p>
            </div>
        </div>
    )
}