
function Banner({ image, alt, text }) {
    return (
        <section className='banner'>
            <img src={image} alt={alt} />        
            <h1 className='banner__text'>{text}</h1>
        </section>
    )
};

export default Banner;