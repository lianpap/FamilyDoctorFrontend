<template>
    <div>
        <h1>Register Family Doctor</h1>
        <label for="city">Enter City:</label>
        <input v-model="selectedCity" id="city" type="text" />
        <button @click="registerFamilyDoctor">Register</button>

        <div v-if="registrationResult">
            {{ registrationResult }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useApplicationStore } from '@/stores/application.js';
import axios from 'axios';

const { userData } = useApplicationStore();
const selectedCity = ref(userData.homeLocation);
const registrationResult = ref(null);

const registerFamilyDoctor = async () => {
    try {
        const response = await axios.post(`/api/citizens/registerFamilyDoctor`, {
            citizenEmail: userData.email,
            homeLocation: selectedCity.value,
        });

        // Check the response status and update registrationResult accordingly
        if (response.status === 200) {
            registrationResult.value = "Family doctor registered successfully";
        } else {
            registrationResult.value = "Error registering family doctor: " + response.data;
        }
    } catch (error) {
        console.error('Error registering family doctor', error);
        registrationResult.value = "Error registering family doctor: " + error.message;
    }
};
</script>
