<template>
  <div class="relative flex flex-col items-center justify-center min-h-screen">
    <div
      class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-200 to-yellow-400 animate-pulse -z-10">
    </div>
    <div class="z-10 text-center">
      <div class="relative">
        <img src="/logo.svg" alt="Coming Soon" class="mx-auto mb-8 animate-move" width="500px" />


      </div>
      <h1 class="mb-4 text-4xl font-bold">Sitio en Construcción</h1>
      <p class="mb-8 text-lg">Estamos trabajando en algo increíble. ¡Mantente al tanto!</p>
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-bold">Contador</h2>
        <div class="flex justify-center space-x-4">
          <div class="p-4 bg-white rounded-lg shadow-md">
            <p class="text-4xl font-bold text-yellow-600">{{ days }}</p>
            <p class="text-lg text-gray-600">Días</p>
          </div>
          <div class="p-4 bg-white rounded-lg shadow-md">
            <p class="text-4xl font-bold text-yellow-600">{{ hours }}</p>
            <p class="text-lg text-gray-600">Horas</p>
          </div>
          <div class="p-4 bg-white rounded-lg shadow-md">
            <p class="text-4xl font-bold text-yellow-600">{{ minutes }}</p>
            <p class="text-lg text-gray-600">Minutos</p>
          </div>
          <div class="p-4 bg-white rounded-lg shadow-md">
            <p class="text-4xl font-bold text-yellow-600">{{ seconds }}</p>
            <p class="text-lg text-gray-600">Segundos</p>
          </div>
        </div>
      </div>


      <form @submit.prevent="submitForm">
        <input type="email" v-model="email" placeholder="Ingresa tu correo electrónico"
          class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600">
        <button type="submit"
          class="px-6 py-2 ml-4 text-white bg-yellow-600 rounded-lg hover:bg-yellow-700">Suscribirse</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
const runtimeConfig = useRuntimeConfig();
const apiBrevo = runtimeConfig.public.apiBrevo;

const email = ref('')
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const submitForm = async () => {
  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': apiBrevo,
      },
      body: JSON.stringify({
        email: email.value,
        listIds: [3],
      }),
      mode: 'cors',
    })

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      Swal.fire({
        icon: 'success',
        title: '¡Suscripción exitosa!',
        text: 'Gracias por suscribirte. Te mantendremos informado.',
      })
      email.value = ''
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error al suscribirse',
        text: 'Ha ocurrido un error al suscribirte. Por favor, inténtalo nuevamente.',
      })
    }
  } catch (error) {
    console.error('Error al suscribirse:', error)
    Swal.fire({
      icon: 'error',
      title: 'Error al suscribirse',
      text: 'Ha ocurrido un error al suscribirte. Por favor, inténtalo nuevamente.',
    })
  }
}




const updateCountdown = () => {
  const targetDate = new Date('2024-05-30')
  const diff = targetDate - new Date()
  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((diff % (1000 * 60)) / 1000)
}

onMounted(() => {
  updateCountdown()
  setInterval(updateCountdown, 1000)
})
</script>

<style scoped>
@keyframes move {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-move {
  animation: move 5s ease-in-out infinite;
}
</style>