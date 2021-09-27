<script lang="ts">
   let coordinates: number;
</script>

<svelte:window bind:scrollY={coordinates} />

<div class="h-full">
    <div class="hero h-full bg-base-200">
      <div class="text-center hero-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Vue stuff</h1>
          <p class="mb-5">idk kinda works? {coordinates}</p>
        </div>
      </div>
    </div>
  </div>