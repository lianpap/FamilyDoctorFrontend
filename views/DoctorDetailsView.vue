<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useRemoteData } from '@/composables/useRemoteData.js';

// eslint-disable-next-line no-unused-vars
const router = useRouter();
const route = useRoute();

const doctorIdRef = ref(null);
const urlRef = computed(() => {
    return 'http://localhost:9090/doctors/' + doctorIdRef.value;
});
const authRef = ref(true);
const { data, loading, performRequest } = useRemoteData(urlRef, authRef);

onMounted(() => {
    doctorIdRef.value = route.params.id;
    performRequest();
});
</script>

<template>
    <div>
        <table class="table">

            <tbody v-if="loading">
            <tr>
                <td colspan="2">Loading...</td>
            </tr>
            </tbody>
            <tbody v-if="data">

            <tr>
                <th>First Name</th>
                <td>{{ data.firstName }}</td>
            </tr>
            <tr>
                <th>Last Name</th>
                <td>{{ data.lastName }}</td>
            </tr>
            <tr>
                <th>Location</th>
                <td>{{ data.location }}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{{ data.email }}</td>
            </tr>
            <tr>
                <th>Max Patients</th>
                <td>{{ data.maxPatients }}</td>
            </tr>
            </tbody>
        </table>
    </div>

</template>