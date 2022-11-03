
function Banner({ image }) {
    return (
        <section className='banner' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${image})`}} >
                  <h1 className='banner__text'>Chez vous, partout et ailleurs</h1>
        </section>
    )
};

export default Banner;