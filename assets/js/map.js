document.addEventListener("DOMContentLoaded",(event) =>{

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
           <iframe class="contact__iframe"  frameborder= "0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15765.011620300707!2d-79.72886983022461!3d8.948827600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca220451742fb%3A0xb8614c94c818e9f8!2sVillas%20de%20la%20Alameda!5e0!3m2!1ses-419!2spa!4v1688347954170!5m2!1ses-419!2spa"></iframe>
        `;
    }, 500);


})

