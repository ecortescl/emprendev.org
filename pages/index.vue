<template>
  <div>
    <ComingSoon />
  </div>
</template>

<script setup>
import ComingSoon from '~/components/ComingSoon.vue'


useHead({
  title: 'Emprendev - Comunidad de programadores emprendedores',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Emprendev es una iniciativa que busca crear una comunidad de programadores y desarrolladores que desean emprender y crear soluciones digitales innovadoras.',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'emprendev, emprendimiento, programadores, desarrolladores, comunidad, cursos, networking, CTO, startups',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Emprendev - Comunidad de programadores emprendedores',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: 'Emprendev es una iniciativa que busca crear una comunidad de programadores y desarrolladores que desean emprender y crear soluciones digitales innovadoras.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: '/social.png',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://emprendev',
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Emprendev - Comunidad de programadores emprendedores',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: 'Emprendev es una iniciativa que busca crear una comunidad de programadores y desarrolladores que desean emprender y crear soluciones digitales innovadoras.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: '/social.png',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://emprendev.org',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicons.png',
    },
  ],
})
</script>