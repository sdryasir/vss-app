import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function CategorySlider(props) {
    let categories = props.categories
    console.log(categories)
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {
                categories.map(cat => <div className="category-slider-item">
                    <img src={cat.image} alt="" />
                    <p>{cat.category}</p>
                </div>)
            }
        </Slider>
    )
}
export default CategorySlider;