<script setup>
import { ref } from "vue";
import { useRemoteData } from "@/composables/useRemoteData.js";

const formDataRef = ref({
    firstName: "",
    lastName: ""
});

const urlRef = ref("http://localhost:9090/family_details");
const authRef = ref(true);
const methodRef = ref("POST");

const { data, performRequest } = useRemoteData(
    urlRef,
    authRef,
    methodRef,
    formDataRef
);

const onSubmit = () => {
    performRequest();
    // Clear form after submission (optional)
    formDataRef.value = {
        firstName: "",
        lastName: ""
    };
};
</script>

<template>
    <div class="container mb-4">
        <h1>Add Family Member</h1>
    </div>
    <div>
        <pre>{{ data }}</pre>
    </div>
    <div class="container mb-4">
        <div class="mb-2">
            <label for="firstName">First Name</label>
            <input
                class="form-control"
                id="firstName"
                v-model="formDataRef.firstName"
                type="text"
            />
        </div>
        <div class="mb-2">
            <label for="lastName">Last Name</label>
            <input
                class="form-control"
                id="lastName"
                v-model="formDataRef.lastName"
                type="text"
            />
        </div>
        <div class="">
            <button
                class="btn btn-primary"
                @click="onSubmit"
                type="button"
            >
                Add Family Member
            </button>
        </div>
    </div>
</template>
