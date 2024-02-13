<script setup>
import { useApplicationStore } from '@/stores/application.js';
const { userData } = useApplicationStore();

const isUser = () => userData.roles.includes('ROLE_USER');
const isDoctor = () => userData.roles.includes('ROLE_DOCTOR');
</script>

<template>
    <div class="bg-body-tertiary">
        <div class="container">
            <div class="row py-4 px-3">
                <div class="col-12">
                    <div class="mb-4">
                        <h1 class="fs-3">Family Doctor Application</h1>
                    </div>
                    <div>
                        <p>
                            Logged in as: <strong>{{ userData.username }}</strong>
                        </p>
                        <ul>
                            <li v-if="isUser()">
                                <RouterLink :to="{ name: 'citizenMenu' }">Citizen Menu</RouterLink>
                            </li>
                            <li v-if="isDoctor()">
                                <RouterLink :to="{ name: 'doctorMenu' }">Doctor Menu</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>