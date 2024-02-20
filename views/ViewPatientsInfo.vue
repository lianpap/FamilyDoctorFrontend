<template>
    <div>
        <h1>Doctor's Patients</h1>

        <!-- Display doctor's information -->
        <div>
            <h2>Doctor Information</h2>
            <p>Doctor ID: {{ doctor.id }}</p>
            <p>Doctor Name: {{ doctor.firstName }} {{ doctor.lastName }}</p>
            <p>Doctor Location: {{ doctor.location }}</p>
        </div>

        <!-- Display patients' information -->
        <div>
            <h2>Patients</h2>
            <ul v-if="patients.length > 0">
                <li v-for="patient in patients" :key="patient.id">
                    {{ patient.firstName }} {{ patient.lastName }} - {{ patient.homeLocation }}
                </li>
            </ul>
            <p v-else>No patients registered yet.</p>
        </div>

        <!-- Display error message if there is an error -->
        <div v-if="error">
            <p>Error fetching data: {{ error }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            doctor: {},      // Doctor information
            patients: [],    // List of patients
            error: null       // Error message
        };
    },
    created() {
        // Fetch doctor information and patients data when the component is created
        this.fetchDoctorInfo();
        this.fetchPatients();
    },
    methods: {
        async fetchDoctorInfo() {
            const doctorId = 2;

            try {
                // Make an API call to get the doctor's information by ID using Fetch API
                const response = await fetch(`/api/doctors/${doctorId}`);
                const data = await response.json();
                this.doctor = data;
            } catch (error) {
                console.error('Error fetching doctor information', error);
                this.error = 'Error fetching doctor information: ' + error.message;
            }
        },
        async fetchPatients() {
            const doctorId = 2;

            try {
                // Make an API call to get the list of patients registered with the doctor using Fetch API
                const response = await fetch(`/api/doctors/${doctorId}/patients`);
                const data = await response.json();
                this.patients = data;
            } catch (error) {
                console.error('Error fetching patients', error);
                this.error = 'Error fetching patients: ' + error.message;
            }
        }
    }
};
</script>
