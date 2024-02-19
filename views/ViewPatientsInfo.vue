<script>
export default {
    data() {
        return {
            doctor: null,
            patients: [],
        };
    },
    mounted() {
        // Fetch doctor information
        this.fetchDoctor();

        // Fetch patients assigned to the doctor
        this.fetchPatients();
    },
    methods: {
        async fetchDoctor() {
            const doctorId = 2; // Set the doctor ID you want to fetch
            try {
                const response = await fetch(`/api/doctors/${doctorId}`);
                const data = await response.json();
                this.doctor = data;
            } catch (error) {
                console.error("Error fetching doctor:", error);
            }
        },
        async fetchPatients() {
            const doctorId = 2; // Set the doctor ID you want to fetch patients for
            try {
                const response = await fetch(`/api/doctors/${doctorId}/patients`);
                const data = await response.json();
                this.patients = data;
            } catch (error) {
                console.error("Error fetching patients:", error);
            }
        },
    },
};
</script>

<template>
    <div>
        <h1>Patients Info</h1>
        <div v-if="doctor">
            <h2>{{ doctor.firstName }} {{ doctor.lastName }}</h2>
            <p>Email: {{ doctor.email }}</p>
            <p>Location: {{ doctor.location }}</p>
            <p>Max Patients: {{ doctor.maxPatients }}</p>
            <h3>Patients:</h3>
            <ul>
                <li v-for="citizen in patients" :key="citizen.id">
                    {{ citizen.firstName }} {{ citizen.lastName }} - {{ citizen.email }}
                </li>
            </ul>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>