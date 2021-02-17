import { sliderdata } from "../../data/sliderdata";
function HomeSlider() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                {
                    sliderdata.map(s => <div className={`carousel-item ${s.id === 1 ? 'active' : ''}`}>
                        <img src={s.image} class="d-block w-100" alt="..." />
                    </div>)
                }
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default HomeSlider;