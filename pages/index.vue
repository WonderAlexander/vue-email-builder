<script setup>
  import { useBodyStore } from '~/stores/body';
  const emailBody = useBodyStore();
</script>

<template>
  <div class="email__builder">
    <EmailComponents/>
    <EmailBody/>
  </div>
</template>

<style scoped lang="scss">
  .email__builder {
    width: 100%;
    height: auto;
    min-height: 100vh;

    display: flex;
    justify-content: space-between;

    background-color: #f7f7f7;

    padding: 15px 15px;
  }
</style>
