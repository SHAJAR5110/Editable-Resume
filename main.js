const resumeDisplay = document.getElementsByClassName("resumeDisplay")[0];
const form = document.getElementById("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const edu = document.getElementById('edu').value;
    const skills = document.getElementById('skills').value;
    const exp = document.getElementById('exp').value;
    const pictureInput = document.getElementById('picture');
    const pictureFile = pictureInput.files[0];
    let imageUrl = '';
    const downloadBtn=document.getElementById('downloadBtn').style.display='block';
    const resumeDisplayElement = `
        <h1><b>${fname}'s Resume</b></h1>
        
        <br>
        <h2>Information</h2>
        <p><b>First Name: </b>${fname}</p>
        <p><b>Last Name: </b>${lname}</p>
        <p><b>Email: </b>${email}</p>
        <p><b>Contact Number: </b>${contact}</p>
        <p><b>Gender: </b>${gender}</p>
        <p><b>Education: </b>${edu}</p>
        <p><b>Skills: </b>${skills}</p>
        <p><b>Experience: </b>${exp}</p>
        
    `;

    resumeDisplay.innerHTML = resumeDisplayElement;

    if (pictureFile) {
        const reader = new FileReader();

        reader.onload = function(e) {
            imageUrl = e.target.result;
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.style.maxWidth = "200px";
            imgElement.style.display = "block";

            const imageContainer = document.createElement('div');
            imageContainer.style.textAlign = "right";
            imageContainer.appendChild(imgElement);
            resumeDisplay.appendChild(imageContainer);
        };

        reader.readAsDataURL(pictureFile);
    }

    document.getElementById('downloadBtn').addEventListener('click', function() {
        const pdfContent = `
            <h1>${fname}'s Resume</h1>
            <h2>Information</h2>
            
            <p><b>First Name: </b>${fname}</p>
            <p><b>Last Name: </b>${lname}</p>
            <p><b>Email: </b>${email}</p>
            <p><b>Contact Number: </b>${contact}</p>
            <p><b>Gender: </b>${gender}</p>
            <p><b>Education: </b>${edu}</p>
            <p><b>Skills: </b>${skills}</p>
            <p><b>Experience: </b>${exp}</p>
            <img src="${imageUrl}" style="max-width: 200px;" />
        `;

        const pdfWindow = window.open('', '_blank');
        pdfWindow.document.write('<html><head><title>Resume</title></head><body>');
        pdfWindow.document.write(pdfContent);
        pdfWindow.document.write('</body></html>');
        pdfWindow.document.close();
        pdfWindow.print();
    });
});
