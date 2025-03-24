function validateForm() {
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const image = document.getElementById('image').files[0];
    const imageCaption = document.getElementById('imageCaption').value;
    const personalBackground = document.getElementById('personalBackground').value;
    const professionalBackground = document.getElementById('professionalBackground').value;
    const academicBackground = document.getElementById('academicBackground').value;
    const webDevBackground = document.getElementById('webDevBackground').value;
    const computerPlatform = document.getElementById('computerPlatform').value;
    const agreement = document.querySelector('input[name="agreement"]').checked;

    if (!name || !mascot || !image || !imageCaption || !personalBackground || !professionalBackground || !academicBackground || !webDevBackground || !computerPlatform || !agreement) {
        return false;
    }

    const imageType = image.type;
    if (imageType !== 'image/png' && imageType !== 'image/jpeg') {
        return false;
    }

    return true;
}

document.getElementById('introForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!validateForm()) {
        alert("Please fill in all required fields and ensure the image is a PNG or JPG.");
        return;
    }

    const formData = new FormData(this);
    const resultDiv = document.getElementById('resultContent');
    resultDiv.innerHTML = '';

    resultDiv.innerHTML += `
    <p><strong>Name:</strong> ${formData.get('name')}</p>
    <p><strong>Mascot:</strong> ${formData.get('mascot')}</p>
    <p><strong>Image:</strong> <img src="${URL.createObjectURL(formData.get('image'))}" alt="${formData.get('imageCaption')}"></p>
    <p><strong>Image Caption:</strong> ${formData.get('imageCaption')}</p>
    <p><strong>Personal Background:</strong> ${formData.get('personalBackground')}</p>
    <p><strong>Professional Background:</strong> ${formData.get('professionalBackground')}</p>
    <p><strong>Academic Background:</strong> ${formData.get('academicBackground')}</p>
    <p><strong>Web Development Background:</strong> ${formData.get('webDevBackground')}</p>
    <p><strong>Computer Platform:</strong> ${formData.get('computerPlatform')}</p>
    <p><strong>Courses:</strong> <ul>${Array.from(formData.getAll('course[]')).filter((course) => course).map((course) => `<li>${course}</li>`).join('')}</ul></p>
    <p><strong>Funny Thing:</strong> ${formData.get('funnyThing')}</p>
    <p><strong>Anything Else:</strong> ${formData.get('anythingElse')}</p>
    `;

    document.getElementById('introForm').style.display = 'none';
    document.getElementById('introResult').style.display = 'block';
});



function resetPage() {
    document.getElementById('introForm').reset();
    document.getElementById('introForm').style.display = 'block';
    document.getElementById('introResult').style.display = 'none';
    document.getElementById('courses').innerHTML = '<input type="text" name="course[]" placeholder="Course Name"><button type="button" onclick="addCourse()">Add Course</button>';
}

function addCourse() {
    const coursesDiv = document.getElementById('courses');
    const newCourseInput = document.createElement('input');
    newCourseInput.type = 'text';
    newCourseInput.name = 'course[]';
    newCourseInput.placeholder = 'Course Name';

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        coursesDiv.removeChild(newCourseInput);
        coursesDiv.removeChild(deleteButton);
    };

    coursesDiv.appendChild(newCourseInput);
    coursesDiv.appendChild(deleteButton);
}
