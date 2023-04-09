<template>
  <main v-motion-pop>
    <h1 class="text-center text-9xl font-bold dark:text-white">Hello</h1>
    <div class="text-center space-x-40 mt-8">
      <button
        class="text-center rounded-xl bg-blue-500 border-none mt-4 w-[170px] h-[75px] text-2xl font-bold text-white dark:bg-blue-100"
        @click="$router.push('/Content')"
      >
        My Skills
      </button>
      <button
        class="text-center rounded-xl bg-blue-500 border-none mt-4 w-[170px] h-[75px] text-2xl font-bold text-white dark:bg-blue-100"
        @click="$router.push('/education')"
      >
        My Education
      </button>
    </div>
  </main>
</template>
