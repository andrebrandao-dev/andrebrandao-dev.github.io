<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    <div class="w-full max-w-lg bg-white rounded-lg shadow-md px-8 py-12 mx-auto bg-opacity-90 group">
      <h1>
        <Logo />
      </h1>
  
      <div class="flex justify-center items-center gap-x-2 mt-8">
        <a class="cursor-pointer" href="https://github.com/andrebrandao-dev" target="_blank" title="Github">
          <Icon name="ri:github-fill" class="text-2xl text-cyan-500 transition-al hover:text-cyan-800" />
        </a>

        <a class="cursor-pointer" href="https://www.linkedin.com/in/andrebrandaoo/" target="_blank" title="LinkedIn">
          <Icon name="ri:linkedin-box-fill" class="text-2xl text-cyan-500 transition-al hover:text-cyan-800" />
        </a>

        <a class="cursor-pointer" href="https://drive.google.com/file/d/1sJibWUi7s1HtnRS7ChXE3XkQ3WPI68WG/view?usp=sharing" target="_blank" title="Currículo">
          <Icon name="ri:file-download-fill" class="text-2xl text-cyan-500 transition-all hover:text-cyan-800" />
        </a>
      </div>
    </div>
  </div>
</template>