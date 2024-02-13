<template>
    <div>
        <h2>Family Member Details</h2>
        <div v-if="formData">
            <strong>First Name:</strong> {{ formData.firstName }}
        </div>
        <div v-if="formData">
            <strong>Last Name:</strong> {{ formData.lastName }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        formData: {
            type: Object,
            required: true,
        },
    },
};
</script>
