document.addEventListener("DOMContentLoaded", () => {
    const patients = [];
    const doctors = [
        { name: "Dr. John Doe", specialty: "Cardiologist" },
        { name: "Dr. Jane Smith", specialty: "Dermatologist" },
        { name: "Dr. Alan Brown", specialty: "Neurologist" }
    ];
    const appointments = [];

    const patientForm = document.getElementById('patient-form');
    const appointmentForm = document.getElementById('appointment-form');
    const doctorList = document.getElementById('doctor-list');
    const appointmentList = document.getElementById('appointment-list');
    const appointmentPatientSelect = document.getElementById('appointment-patient');
    const appointmentDoctorSelect = document.getElementById('appointment-doctor');

    // Populate doctor list
    doctors.forEach(doctor => {
        const li = document.createElement('li');
        li.textContent = `${doctor.name} - ${doctor.specialty}`;
        doctorList.appendChild(li);

        const option = document.createElement('option');
        option.value = doctor.name;
        option.textContent = doctor.name;
        appointmentDoctorSelect.appendChild(option);
    });

    // Handle patient registration
    patientForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('patient-name').value;
        const age = document.getElementById('patient-age').value;
        const gender = document.getElementById('patient-gender').value;
        const address = document.getElementById('patient-address').value;
        const phone = document.getElementById('patient-phone').value;

        const patient = { name, age, gender, address, phone };
        patients.push(patient);

        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        appointmentPatientSelect.appendChild(option);

        patientForm.reset();
        alert('Patient registered successfully!');
    });

    // Handle appointment scheduling
    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const patientName = document.getElementById('appointment-patient').value;
        const doctorName = document.getElementById('appointment-doctor').value;
        const date = document.getElementById('appointment-date').value;

        const appointment = { patientName, doctorName, date };
        appointments.push(appointment);

        const li = document.createElement('li');
        li.innerHTML = `Appointment: ${patientName} with ${doctorName} on ${date}
                        <div class="appointment-actions">
                            <button onclick="editAppointment(${appointments.length - 1})">Edit</button>
                            <button onclick="deleteAppointment(${appointments.length - 1})">Delete</button>
                        </div>`;
        appointmentList.appendChild(li);

        appointmentForm.reset();
        alert('Appointment scheduled successfully!');
    });

    window.editAppointment = (index) => {
        const appointment = appointments[index];
        document.getElementById('appointment-patient').value = appointment.patientName;
        document.getElementById('appointment-doctor').value = appointment.doctorName;
        document.getElementById('appointment-date').value = appointment.date;
        deleteAppointment(index);
    };

    window.deleteAppointment = (index) => {
        appointments.splice(index, 1);
        updateAppointmentList();
    };

    const updateAppointmentList = () => {
        appointmentList.innerHTML = '';
        appointments.forEach((appointment, index) => {
            const li = document.createElement('li');
            li.innerHTML = `Appointment: ${appointment.patientName} with ${appointment.doctorName} on ${appointment.date}
                            <div class="appointment-actions">
                                <button onclick="editAppointment(${index})">Edit</button>
                                <button onclick="deleteAppointment(${index})">Delete</button>
                            </div>`;
            appointmentList.appendChild(li);
        });
    };
});










// document.addEventListener("DOMContentLoaded", () => {
//     const patients = [];
//     const doctors = [
//         { name: "Dr. John Doe", specialty: "Cardiologist" },
//         { name: "Dr. Jane Smith", specialty: "Dermatologist" },
//         { name: "Dr. Alan Brown", specialty: "Neurologist" }
//     ];
//     const appointments = [];

//     const patientForm = document.getElementById('patient-form');
//     const appointmentForm = document.getElementById('appointment-form');
//     const doctorList = document.getElementById('doctor-list');
//     const appointmentList = document.getElementById('appointment-list');
//     const appointmentPatientSelect = document.getElementById('appointment-patient');
//     const appointmentDoctorSelect = document.getElementById('appointment-doctor');

//     // Populate doctor list
//     doctors.forEach(doctor => {
//         const li = document.createElement('li');
//         li.textContent = `${doctor.name} - ${doctor.specialty}`;
//         doctorList.appendChild(li);

//         const option = document.createElement('option');
//         option.value = doctor.name;
//         option.textContent = doctor.name;
//         appointmentDoctorSelect.appendChild(option);
//     });

//     // Handle patient registration
//     patientForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const name = document.getElementById('patient-name').value;
//         const age = document.getElementById('patient-age').value;
//         const gender = document.getElementById('patient-gender').value;

//         const patient = { name, age, gender };
//         patients.push(patient);

//         const option = document.createElement('option');
//         option.value = name;
//         option.textContent = name;
//         appointmentPatientSelect.appendChild(option);

//         patientForm.reset();
//         alert('Patient registered successfully!');
//     });

//     // Handle appointment scheduling
//     appointmentForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const patientName = document.getElementById('appointment-patient').value;
//         const doctorName = document.getElementById('appointment-doctor').value;
//         const date = document.getElementById('appointment-date').value;

//         const appointment = { patientName, doctorName, date };
//         appointments.push(appointment);

//         const li = document.createElement('li');
//         li.textContent = `Appointment: ${patientName} with ${doctorName} on ${date}`;
//         appointmentList.appendChild(li);

//         appointmentForm.reset();
//         alert('Appointment scheduled successfully!');
//     });
// });
