<template>
    <div class="container mb-4">
        <h1>View Family Members</h1>
    </div>
    <div>
        <pre>{{ familyMembersData }}</pre>
    </div>
    <div class="container mb-4">
        <div v-if="familyMembersData && familyMembersData.length > 0">
            <h2>Your Family Members</h2>
            <ul>
                <li v-for="familyMember in familyMembersData" :key="familyMember.id">
                    {{ familyMember.firstName }} {{ familyMember.lastName }}
                </li>
            </ul>
        </div>
        <div v-if="familyMembersData && familyMembersData.length === 0">
            <p>No family members added yet.</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRemoteData } from "@/composables/useRemoteData.js";

const urlRef = ref("http://localhost:9090/family_details");
const authRef = ref(true);
const methodRef = ref("GET");

const { data: familyMembersData, performRequest } = useRemoteData(
    urlRef,
    authRef,
    methodRef
);

// Fetch family members on component mount
import { onMounted } from "vue";
onMounted(() => {
    performRequest();
});
</script>
