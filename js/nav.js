const navInit = function(){
    // Variables
    let breakpoint = 768; // css breakpoint
    const navIcon = document.getElementById("navIcon");
    const navMenu = document.getElementsByClassName("navMenu")[0];
    
    // Functions
    function openCloseNav() {
        // openCloseNav function will fire from multiple events.
        navIcon.classList.toggle("navIconOpen");
        navMenu.classList.toggle("show");
    }
    function smoothScroll(event){
        // smoothScroll function can be called on any hyperlink(a) element as it looks for the href attribute.  
        event.preventDefault();
        const href = this.getAttribute("href");
        document.querySelector(href).scrollIntoView({behavior: "smooth"});
    }

    // Nav Button click event.
    const navButton = document.getElementsByClassName("navButton")[0];
    navButton.onclick = openCloseNav;
    
    // Nav Pages click event.
    const navItems = document.getElementsByClassName("navItem");
    for(let i=0; i<navItems.length; i++){
        navItems[i].onclick = () => {
            if(window.innerWidth < breakpoint){
                openCloseNav();
            }
        }
        navItems[i].querySelector('a').onclick = smoothScroll;
    }

    // Activate Nav Pages on scroll 
    const sections = document.getElementsByClassName("pages");
    window.onscroll = () => {
        let current = "";
        for(let i=0; i<sections.length; i++){
            const sectionTop = sections[i].offsetTop;
            const sectionHeight = sections[i].clientHeight;
            if( scrollY >= (sectionTop - sectionHeight / 3) ){
                current = sections[i].getAttribute('id');
            }
        }
        for(let i=0; i<navItems.length; i++){
            navItems[i].firstChild.classList.remove("active");
            if(navItems[i].firstChild.classList.contains(current)){
                navItems[i].firstChild.classList.add("active");
            }
        }
    }
    
} // end of navInit
