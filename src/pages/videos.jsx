import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const videoItems = [
    {
        title: "Video of African cup",
        duration: "02:28",
        thumbnail: "/src/assets/images/groups.mp4",
        videoLink: "/src/assets/images/groups.mp4",
        link: "/src/assets/images/groups.mp4"
    },
    {
        title: "Video of African cup",
        duration: "02:28",
        thumbnail: "/src/assets/images/groups.mp4",
        videoLink: "/src/assets/images/groups.mp4",
        link: "/src/assets/images/groups.mp4"
    },
    {
        title: "Video of African cup",
        duration: "02:28",
        thumbnail: "/src/assets/images/groups.mp4",
        videoLink: "/src/assets/images/groups.mp4",
        link: "/src/assets/images/groups.mp4"
    },
    {
        title: "Video of African cup",
        duration: "02:28",
        thumbnail: "/src/assets/images/groups.mp4",
        videoLink: "/src/assets/images/groups.mp4",
        link: "/src/assets/images/groups.mp4"
    },
];

const VideoSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            }
        ]
    };

    return (
        <div className="bg-[#234F1E] py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white text-gray-800 mb-8"> Videos</h2>
                <Slider {...settings}>
                    {videoItems.map((item, index) => (
                        <div key={index} className="p-4">
                            <a href={item.link} className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                            <video controls className="w-full mt-4">
                                <source src={item.videoLink} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                                    <span className="block text-gray-600 mt-2">{item.duration}</span>
                                </div>
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default VideoSection;
