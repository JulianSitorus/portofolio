// ================================= Particle ======================================

particlesJS("particles", {
    particles: {
        number: {
            value: 280,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#5e3bee",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// ================================= menu ======================================
window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});


function openMenu(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

// ================================= Email ======================================
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e){
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
        .then(() => {
            // url ty
            window.location.href='/thankyou.html'
        })
        .catch((e) => alert("Error occused"));
});


        // $(document).ready(function(){
        //     $('.carousel').slick({
        //         slidesToShow: 3, // Menampilkan 3 item per slide
        //         slidesToScroll: 1,
        //         infinite: true,
        //         arrows: true, // Menampilkan tombol navigasi ke kiri dan kanan
        //         dots: false,  // Menonaktifkan indikator dot di bawah
        //         responsive: [
        //             {
        //                 breakpoint: 1024,
        //                 settings: {
        //                     slidesToShow: 2
        //                 }
        //             },
        //             {
        //                 breakpoint: 600,
        //                 settings: {
        //                     slidesToShow: 1
        //                 }
        //             }
        //         ]
        //     });
        // });

