<template>
  <v-app-bar :elevation="24" flat>
    <v-app-bar-title>
      <v-btn icon="mdi-menu"></v-btn>
      <span class="ml-3">TOPIC</span>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup></script>
