<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useApplicationStore } from '@/stores/application.js';

const route = useRoute();

const citizenIdRef = ref(null);
const { userData } = useApplicationStore();

onMounted(() => {
    citizenIdRef.value = route.params.id;
});
</script>

<template>
    <div class="bg-body-tertiary">
        <div class="container">
            <div class="row py-4 px-3">
                <div class="col-12">
                    <div class="mb-4">
                        <h1 class="fs-3">Citizen {{ citizenIdRef }}</h1>

                    </div>
                    <ul>

                        <li>
                            <RouterLink :to="{ name: 'citizenDetails',params: { id: userData.id } }">View Personal Info</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'familyDetails' }">View Family Member Info</RouterLink>
                        </li>
                     <li>
                        <RouterLink  :to="{ name: 'registerFamilyDoctor' ,params: { id: userData.id }}">Register Family Doctor</RouterLink>
                     </li>
                        <li>
                    <RouterLink :to="{ name: 'createFamilyMember' ,params: { id: userData.id } }">Create Family Member</RouterLink>
                        </li>

                    </ul>
                    <div>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>