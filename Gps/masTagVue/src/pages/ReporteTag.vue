<template>
  <div class="w-full">
    <div class="w-10/12 mx-auto flex-col flex gap-4">
      <!-- Header -->
      <header class="flex flex-row justify-between pt-10">
        <img src="./../assets/img/masgps.svg" />

        <router-link :to="{ name: 'login' }">
          <button class="btn btn-primary btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 stroke-secondary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </button>
        </router-link>
      </header>

      <!-- Título -->
      <h1 class="text-white text-center text-5xl">
        <span class="text-secondary">Reporte</span> de Tag
      </h1>
      
      <!-- Tabla -->
      <tabla-tag/>

      <div class="flex flex-row justify-between">
        <div>
          <h3 class="text-lg text-white mb-1">
            <span class="text-secondary">Ingrese algún Correo</span> electrónico
          </h3>
          <input
            type="text"
            placeholder="Correo"
            class="input input-bordered input-secondary w-full max-w-xs"
          />
          <button class="btn btn-primary text-secondary mt-1"> Enviar </button>
        </div>

        <div class="pt-5">
          <h3 class="text-lg text-white">
            <span class="text-secondary">Pórticos</span> totales : 
          </h3>
          <h3 class="text-lg text-white">
            <span class="text-secondary">Tags</span> usados : 
          </h3>
        </div>

        <div class="pt-6">
          <button class="btn btn-primary text-secondary">Imprimir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TablaTag from '../components/TablaTag.vue';
export default {
  components: {TablaTag},
};
</script>

<style>
</style>