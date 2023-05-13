 const CardPort = (props)=>{
    return (
        <div className="w-full px-4 lg:w-1/2 xl:1/3">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
              <img
                src={props.img}
                alt="programing"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3
                  className="mb-3 font-semibold text-dark hover:text-pages truncate text-xl"
                >
                    {props.title}
                  
                </h3>
                <p className="font-medium text-base font-serif text-dark mb-4">
                    {props.parag}
                 
                </p>
                <a
                  href={props.url} rel="noreferrer" target="_blank"
                  className="font-medium text-sm text-white bg-sky-500 py-2 px-4 rounded-md hover:opacity-80"
                  >Kunjungi</a
                >
              </div>
            </div>
          </div>
    )
}
export default CardPort