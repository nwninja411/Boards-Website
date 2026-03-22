document.addEventListener("DOMContentLoaded", function(){
    const nav = document.querySelector("nav");

    function updateNav(){
        if(!nav){
            return;
        }

        if(window.scrollY > 50){
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    }

    updateNav();
    window.addEventListener("scroll", updateNav);

    const lightbox = document.getElementById("Lightbox");
    const lightboxImg = document.getElementById("LightboxImg");
    const lightboxClose = document.getElementById("LightboxClose");
    const pdfModal = document.getElementById("PdfModal");
    const pdfViewer = document.getElementById("PdfViewer");
    const pdfModalClose = document.getElementById("PdfModalClose");

    function closeImageLightbox(){
        if(!lightbox){
            return;
        }

        lightbox.classList.remove("active", "image-mode");

        if(lightboxImg){
            lightboxImg.removeAttribute("src");
        }
    }

    function closePdfModal(){
        if(!pdfModal){
            return;
        }

        pdfModal.classList.remove("active");

        if(pdfViewer){
            pdfViewer.setAttribute("src", "about:blank");
        }
    }

    if(lightbox && lightboxImg && lightboxClose){
        document.querySelectorAll(".LightboxLink").forEach(function(link){
            link.addEventListener("click", function(event){
                event.preventDefault();
                lightbox.classList.add("active", "image-mode");
                lightboxImg.src = this.href;
            });
        });

        lightboxClose.addEventListener("click", closeImageLightbox);

        lightbox.addEventListener("click", function(event){
            if(event.target === lightbox){
                closeImageLightbox();
            }
        });
    }

    if(pdfModal && pdfViewer && pdfModalClose){
        document.querySelectorAll(".PdfPreviewLink").forEach(function(button){
            button.addEventListener("click", function(){
                const pdfSource = this.dataset.pdf;
                if(!pdfSource){
                    return;
                }

                pdfModal.classList.add("active");
                pdfViewer.setAttribute("src", pdfSource);
            });
        });

        pdfModalClose.addEventListener("click", closePdfModal);

        pdfModal.addEventListener("click", function(event){
            if(event.target === pdfModal){
                closePdfModal();
            }
        });
    }

    const hamburger = document.getElementById("Hamburger");
    const navLinks = document.getElementById("NavLinks");

    if(hamburger && navLinks){
        hamburger.addEventListener("click", function(){
            navLinks.classList.toggle("active");
        });
    }

    const heroVideo = document.getElementById("HeroVideo");

    if(heroVideo && "IntersectionObserver" in window){
        const observer = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if(entry.isIntersecting){
                    heroVideo.play();
                } else {
                    heroVideo.pause();
                }
            });
        }, {
            threshold: 0.25
        });

        observer.observe(heroVideo);
    }
});
