window.onload = function() {
    var isMobile = window.matchMedia("only screen and (max-width: 768px)");

    function handleMobileChange(e) {
        if (e.matches) {
            // User is on a mobile device
            var mobileBox = document.getElementById("mobileBox");
            if (mobileBox) {
                mobileBox.style.display = "block";
            }
        } else {
            // User is not on a mobile device
            var mobileBox = document.getElementById("mobileBox");
            if (mobileBox) {
                mobileBox.style.display = "none";
            }
        }
    }

    handleMobileChange(isMobile);

    isMobile.addListener(handleMobileChange);
};