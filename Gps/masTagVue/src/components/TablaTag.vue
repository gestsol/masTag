<template>
  <div
    class="border-secondary border-2 rounded-lg p-5 flex flex-row justify-between"
  >
    <div class="flex-row flex gap-4">
      <label for="buscar" class="text-xl text-secondary pt-1">Buscar:</label>
      <input
        type="text"
        name="buscar"
        id="buscar"
        v-model="buscar"
        class="input input-bordered input-secondary w-full max-w-xs h-10"
        @keypress="numeroPagina = 1"
      />
      <select
        v-model="tipoFiltro"
        class="select select-secondary select-sm h-10 w-fit max-w-xs"
      >
        <option value="patente" selected>Patente</option>
        <option value="autopista">Autopista</option>
        <option value="portico">Portico</option>
      </select>
    </div>

    <div class="flex flex-row gap-4">
      <input
        type="date"
        name="fechaInicio"
        v-model="fechaInicio"
        id="fechaInicio"
        class="input input-bordered input-secondary w-full max-w-xs h-10"
      />
      <input
        type="date"
        name="fechaFin"
        v-model="fechaFinal"
        id="fechaFin"
        class="input input-bordered input-secondary w-full max-w-xs h-10"
      />
    </div>
  </div>

  <div class="w-full bg-white p-3 rounded-md">
    <table
      class="table table-compact table-auto bg-white w-full p-10 border border-black"
    >
      <thead class="text-blue-900">
        <tr class="border-b border-black">
          <th class="py-1">Patente</th>
          <th class="py-1">Historial</th>
          <th class="py-1">Autopista</th>
          <th class="py-1">Portico</th>
          <th class="py-1">Monto Total</th>
        </tr>
      </thead>
      <tbody class="divide-black divide-y">
        <tr v-for="fila in datosPaginados" :key="fila.id">
          <td>{{ fila.patente }}</td>
          <td>{{ fila.historial }}</td>
          <td>{{ fila.autopista }}</td>
          <td>{{ fila.portico }}</td>
          <td>${{ fila.montoTotal }}</td>
        </tr>
      </tbody>
      <tfoot>
        <td colspan="3"></td>
        <td class="text-end">Total:</td>
        <td>${{ montoTotal }}</td>
      </tfoot>
    </table>

    <div v-show="totalPaginas > 1" class="flex flex-row justify-end pt-1">
      <div class="btn-group">
        <button
          class="btn btn-sm btn-primary"
          :class="{ 'btn-disabled': numeroPagina < 2 }"
          @click="numeroPagina = 1"
        >
          «
        </button>
        <button
          class="btn btn-sm btn-primary"
          :class="{ 'btn-disabled': numeroPagina < 2 }"
          @click="numeroPagina--"
        >
          ‹
        </button>
        <button
          class="btn btn-sm btn-ghost"
          :class="{ 'btn-active': numeroPagina == pagina }"
          v-for="pagina in totalPaginas"
          :key="pagina.id"
          @click="numeroPagina = pagina"
          v-show="
            pagina == numeroPagina ||
            pagina == numeroPagina + 1 ||
            pagina == numeroPagina - 1
          "
        >
          {{ pagina }}
        </button>
        <button
          class="btn btn-sm btn-primary"
          :class="{ 'btn-disabled': numeroPagina == totalPaginas }"
          @click="numeroPagina++"
        >
          ›
        </button>
        <button
          class="btn btn-sm btn-primary"
          :class="{ 'btn-disabled': numeroPagina == totalPaginas }"
          @click="numeroPagina = totalPaginas"
        >
          »
        </button>
      </div>
    </div>
  </div>

  <div></div>
</template>

<script>
export default {
  data() {
    return {
      buscar: "",
      tipoFiltro: "patente",
      fechaInicio: new Date(),
      fechaFinal: new Date(),
      elementosPorPagina: 5,
      numeroPagina: 1,
      fechita: new Date(2052, 0, 24).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      arrayReporte: [
        {
          patente: "RT-LL-90",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Central",
          portico: "C.Valdovinos-A.Vespucio, Eje G. Velásquez (N-S)",
          montoTotal: 120,
        },
        {
          patente: "GE-GZ-06",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Vespucio Norte",
          portico: "El salto - Recoleta, P15",
          montoTotal: 10,
        },
        {
          patente: "RT-LL-90",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Central",
          portico: "C.Valdovinos-A.Vespucio, Eje G. Velásquez (N-S)",
          montoTotal: 10,
        },
        {
          patente: "JI-RC-10",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Vespucio Norte",
          portico: "Ruta 68 - Los Mares, P2",
          montoTotal: 10,
        },
        {
          patente: "NA-MA-16",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Vespucio Sur",
          portico: "P3.1 Santa Rosa - Gran Avenida",
          montoTotal: 90,
        },
        {
          patente: "RT-LL-90",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Central",
          portico: "C.Valdovinos-A.Vespucio, Eje G. Velásquez (N-S)",
          montoTotal: 120,
        },
        {
          patente: "RT-LL-90",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Central",
          portico: "C.Valdovinos-A.Vespucio, Eje G. Velásquez (N-S)",
          montoTotal: 10,
        },
        {
          patente: "GE-GZ-06",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Vespucio Norte",
          portico: "El salto - Recoleta, P15",
          montoTotal: 10,
        },
        {
          patente: "JI-RC-10",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Vespucio Norte",
          portico: "Ruta 68 - Los Mares, P2",
          montoTotal: 10,
        },
        {
          patente: "RT-LL-90",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Central",
          portico: "C.Valdovinos-A.Vespucio, Eje G. Velásquez (N-S)",
          montoTotal: 120,
        },
        {
          patente: "NA-MA-16",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Vespucio Sur",
          portico: "P3.1 Santa Rosa - Gran Avenida",
          montoTotal: 90,
        },
        {
          patente: "RT-LL-90",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Central",
          portico: "C.Valdovinos-A.Vespucio, Eje G. Velásquez (N-S)",
          montoTotal: 10,
        },
        {
          patente: "GE-GZ-06",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Vespucio Norte",
          portico: "El salto - Recoleta, P15",
          montoTotal: 10,
        },
        {
          patente: "JI-RC-10",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Vespucio Norte",
          portico: "Ruta 68 - Los Mares, P2",
          montoTotal: 10,
        },
        {
          patente: "NA-MA-16",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Vespucio Sur",
          portico: "P3.1 Santa Rosa - Gran Avenida",
          montoTotal: 90,
        },
        {
          patente: "RT-LL-90",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Central",
          portico: "C.Valdovinos-A.Vespucio, Eje G. Velásquez (N-S)",
          montoTotal: 120,
        },
        {
          patente: "RT-LL-90",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Central",
          portico: "C.Valdovinos-A.Vespucio, Eje G. Velásquez (N-S)",
          montoTotal: 120,
        },
        {
          patente: "RT-LL-90",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Central",
          portico: "C.Valdovinos-A.Vespucio, Eje G. Velásquez (N-S)",
          montoTotal: 10,
        },
        {
          patente: "GE-GZ-06",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Vespucio Norte",
          portico: "El salto - Recoleta, P15",
          montoTotal: 10,
        },
        {
          patente: "JI-RC-10",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Vespucio Norte",
          portico: "Ruta 68 - Los Mares, P2",
          montoTotal: 10,
        },
        {
          patente: "NA-MA-16",
          historial: "Martes, 07-02-2023 12:50:20",
          autopista: "Autopista Vespucio Sur",
          portico: "P3.1 Santa Rosa - Gran Avenida",
          montoTotal: 90,
        },
      ],
    };
  },
  computed: {
    montoTotal() {
      let monto = 0;
      this.arrayReporte.forEach((reporte) => {
        monto = monto + reporte.montoTotal;
      });
      return monto;
    },
    listaFiltrada() {
      return this.arrayReporte.filter((item) => {
        switch (this.tipoFiltro) {
          case "patente":
            return (
              item.patente.toLowerCase().indexOf(this.buscar.toLowerCase()) > -1
            );
          case "portico":
            return (
              item.portico.toLowerCase().indexOf(this.buscar.toLowerCase()) > -1
            );
          case "autopista":
            return (
              item.autopista.toLowerCase().indexOf(this.buscar.toLowerCase()) >
              -1
            );
        }
      });
    },
    totalPaginas() {
      return Math.ceil(this.listaFiltrada.length / this.elementosPorPagina);
    },
    datosPaginados() {
      let primeraFila =
        this.numeroPagina * this.elementosPorPagina - this.elementosPorPagina;
      let ultimaFila = this.numeroPagina * this.elementosPorPagina;
      return this.listaFiltrada.slice(primeraFila, ultimaFila);
    },
  },
  mounted() {
    const fechaHoy = new Date('1997', '0', '4')
    const nDiasMes = new Date(fechaHoy.getFullYear(), fechaHoy.getMonth()+1, 0).getDate()
    console.log(nDiasMes)
    console.log(fechaHoy)

    const anioActual = fechaHoy.getFullYear();
    const mesActual = fechaHoy.getMonth()+1;
    const stringMesActual = mesActual>9
                            ? mesActual
                            : '0'+mesActual
    console.log(anioActual)
    console.log(mesActual)

      
    this.fechaInicio =
      anioActual +
      '-'+stringMesActual +
      "-01";

    this.fechaFinal =
      anioActual +
      '-'+ stringMesActual +
      '-' + nDiasMes;

      console.log(this.fechaInicio)
      console.log(this.fechaFinal)


  },
  watch: {
    buscar() {
      if (this.buscar != "") {
        this.numeroPagina = 1;
      }
    },
  },

  props: {
    //data: { type: JSON, required: true },
  },
};
</script>

<style>
</style>