<template>
  
    <div class="h-full p-10 flex flex-row justify-center">
      <div class="g-6 flex h-full flex-wrap items-center justify-center">
        <div class="w-full">
          <div class="block rounded-sm bg-stone-100 shadow-lg outline-2 outline-secondary outline-offset-2 outline">
            <div class="px-4">
              <div class="md:mx-6 md:p-12">
                <div class="text-center">
                  <img
                    class="mx-auto w-48 mb-4"
                    src="./../assets/img/masgps.svg"
                    alt="logo"
                  />
                </div>

                <form>
                  <div class="relative mb-4">
                    <input
                      type="text"
                      name="rut"
                      id="rut"
                      class="input input-bordered input-primary w-full max-w-xs"
                      placeholder="Rut"
                      @keyup="formatearRut()"
                      v-model="rut"
                      maxlength="12"
                    />
                  </div>

                  <!--Password input-->
                  <div class="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="password"
                      name="clave"
                      id="clave"
                      class="input input-bordered input-primary w-full max-w-xs"
                      placeholder="Clave"
                    />
                  </div>

                  <div class="mb-4 pb-1 pt-1 text-center">
                    <router-link :to="{name : 'reporte'}">
                        <button
                          class="mb-3 text-white inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal btn btn-primary"
                          type="button"
                        >
                          INGRESAR
                        </button>
                    </router-link>
                  </div>
                </form>

                <div class="text-center">
                  <img
                    class="mx-auto w-48"
                    src="./../assets/img/logo-wit-azul.svg"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
</template>

<script>
import {  validate, clean, format, getCheckDigit } from 'rut.js'
export default {
    data(){
        return{
            rut : '',
        }
    },

    methods: {
        formatearRut(){
            if(this.rut.length > 1)
            {
                this.rut = format(this.rut)
            }
        }
    }

    
};
</script>

<style>
</style>